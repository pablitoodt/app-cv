<?php

namespace App\Models;

use \PDO;
use stdClass;

class LogInModel extends SqlConnect {

  public function getByEmail($email) {
    $stmt = $this->db->prepare('SELECT * FROM users WHERE email = :email');
    $stmt->execute(['email' => $email]);
    return $stmt->rowCount() > 0 ? $stmt->fetch(PDO::FETCH_ASSOC) : false;
  }

  public function updateSessionId(string $session_id, $email) {
    $query = "
    UPDATE users SET session_id = :session_id WHERE email = :email
    ";
    $req = $this->db->prepare($query);
    $req->execute([
      'session_id' => $session_id,
      'email' => $email
    ]);
  } 

  public function get() {
    $req = $this->db->prepare("SELECT * FROM models");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
  }

  public function getLast() {
    $req = $this->db->prepare("SELECT * FROM models ORDER BY id DESC LIMIT 1");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
  }
}