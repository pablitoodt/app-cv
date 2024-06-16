<?php

namespace App\Controllers;

use App\Models\UsersModel;

class Users {
    protected array $params;
    protected string $reqMethod;
    protected object $model;

    public function __construct($params) {
        $this->params = $params;
        $this->reqMethod = strtolower($_SERVER['REQUEST_METHOD']);

        $this->model = new UsersModel();
        $this->run();
    }

    protected function getUsers() {
        return $this->model->get();
    }

    public function postUsers() {
        $body = (array) json_decode(file_get_contents('php://input'));
        $email = $body['email'];

        $existingUser = $this->model->findByEmail($email);
        if ($existingUser) {
            header('HTTP/1.1 409 Conflict');
            echo json_encode([
                'code' => '409',
                'message' => 'Email already exists'
            ]);
            exit;
        }

        $this->model->add($body);

        header('HTTP/1.1 201 Created');
        echo json_encode($this->model->getLast());
    }


    protected function header() {
        header('Access-Control-Allow-Origin: *');
        header('Content-type: application/json; charset=utf-8');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
    }

    protected function ifMethodExist() {
        $method = $this->reqMethod.'Users';

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
