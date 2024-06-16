<?php

namespace App\Models;

use \PDO;
use stdClass;

class ListCvModel extends SqlConnect {

  public function get($id) {
    $req = $this->db->prepare("SELECT * FROM cvs WHERE cat_cv_id=$id");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
  }

  public function getLast() {
    $req = $this->db->prepare("SELECT * FROM cvs ORDER BY id DESC LIMIT 1");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
  }
}