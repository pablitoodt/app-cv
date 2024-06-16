<?php

namespace App\Models;

use \PDO;
use stdClass;

class UsersModel extends SqlConnect {
  
  public function findByEmail($email) {
    $stmt = $this->db->prepare('SELECT * FROM users WHERE email = :email');
    $stmt->execute(['email' => $email]);
    return $stmt->fetch(PDO::FETCH_ASSOC);
  }

  public function add($data) {
    $hashedPassword = password_hash($data['password'], PASSWORD_BCRYPT);

    $query = "
      INSERT INTO users (first_name, last_name, email, password)
      VALUES (?, ?, ?, ?)
    ";

    $req = $this->db->prepare($query);

    $req->execute([
      $data['first_name'],
      $data['last_name'],
      $data['email'],
      $hashedPassword
    ]);
  }

  public function get() {
    $req = $this->db->prepare("SELECT * FROM users");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
  }

  public function getLast() {
    $req = $this->db->prepare("SELECT * FROM users ORDER BY id DESC LIMIT 1");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
  }
}