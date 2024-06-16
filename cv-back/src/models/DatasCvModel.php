<?php

namespace App\Models;

use \PDO;
use stdClass;

class DatasCvModel extends SqlConnect {

  public function get($data) {
    $id = intval($data["id"]);
    if ($data['type'] == 'new') {
      $req = $this->db->prepare("SELECT data FROM models WHERE id=1");
    } else {
      $req = $this->db->prepare("SELECT data FROM cvs WHERE id=$id");
    }
    $req->execute();

    $result = $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
    return json_encode($result);
    // return $id;
  }

  public function getLast() {
    $req = $this->db->prepare("SELECT * FROM models ORDER BY id DESC LIMIT 1");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
  }
}