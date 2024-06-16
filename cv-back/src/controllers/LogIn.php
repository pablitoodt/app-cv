<?php

namespace App\Controllers;

use App\Models\LogInModel;

class LogIn {
    protected array $params;
    protected string $reqMethod;
    protected object $model;
    protected object $login;

    public function __construct($params) {
        $this->params = $params;
        $this->reqMethod = strtolower($_SERVER['REQUEST_METHOD']);

        $this->login = new LogInModel();
        $this->run();
    }

    protected function getLogIn() {
        return $this->login->get();
    }

    protected function postLogIn() {
        $body = (array) json_decode(file_get_contents('php://input'));
        $email = $body['email'] ?? '';
        $password = $body['password'] ?? '';
    
        if (empty($email) || empty($password)) {
            header('HTTP/1.1 400 Bad Request');
            echo json_encode(['error' => 'Les champs email et mot de passe sont obligatoires.']);
            exit;
        }
    
        $data = $this->login->getByEmail($email);
    
        if ($data && password_verify($password, $data['password'])) {
            session_start();
            $session_id = session_id();
            $this->login->updateSessionId($session_id, $email);
            $final = [
                'session_id' => $session_id,
                'user_id' => $data['id'],
                'first_name' => $data['first_name']
            ];
            header('HTTP/1.1 200 OK');
            return json_encode($final);
        } else {
            header('HTTP/1.1 401 Unauthorized');
            echo json_encode(['error' => 'Échec de la connexion. Veuillez vérifier vos informations.']);
        }
    }
    

    protected function header() {
        header('Access-Control-Allow-Origin: *');
        header('Content-type: application/json; charset=utf-8');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
    }

    protected function ifMethodExist() {
        $method = $this->reqMethod.'LogIn';

        if (method_exists($this, $method)) {
        echo json_encode($this->$method());

        return;
        }

        header('HTTP/1.0 404 Not Found');
        echo json_encode([
        'code' => '404',
        'message' => 'Not Found'
        ]);

        return;
    }

    protected function run() {
        $this->header();
        if ($this->reqMethod === 'options') {
            header('HTTP/1.1 204 No Content');
            exit;
        }
        $this->ifMethodExist();
    }
}