<?php

namespace App\Models;

use \PDO;
use stdClass;

class CatModel extends SqlConnect {

  public function get($id) {
    $req = $this->db->prepare("SELECT * FROM cat_cv WHERE users_id=$id");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
  }

  public function getLast() {
    $req = $this->db->prepare("SELECT * FROM cat_cv ORDER BY id DESC LIMIT 1");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
  }
}