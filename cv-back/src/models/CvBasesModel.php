<?php

namespace App\Models;

use \PDO;
use stdClass;

class CvBasesModel extends SqlConnect {

  public function get() {
    $req = $this->db->prepare("SELECT * FROM models");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
    
  }

  public function add($data) {
    $query = "
      INSERT INTO models (name, description, name_fichier, picture_name, data)
      VALUES (?, ?, ?, ?, ?)
    ";

    $data['data'] = json_encode($data['data']);

    $req = $this->db->prepare($query);

    $req->execute([
      $data['name'],
      $data['description'],
      $data['name_fichier'],
      $data['picture_name'],
      $data['data']
    ]);
  }

  public function getLast() {
    $req = $this->db->prepare("SELECT * FROM models ORDER BY id DESC LIMIT 1");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
  }
}