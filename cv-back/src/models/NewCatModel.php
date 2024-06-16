<?php

namespace App\Models;

use \PDO;
use stdClass;

class NewCatModel extends SqlConnect {

  public function add_cat($data) {
    $query = "
      INSERT INTO cat_cv (name, models_id, users_id)
      VALUES (?, ?, ?)
    ";

    $req = $this->db->prepare($query);

    $req->execute([
      $data['name'],
      $data['models_id'],
      $data['users_id']
    ]);

    $catCvId = $this->db->lastInsertId();

    if ($catCvId) {
      $data['cat_cv_id'] = $catCvId;
      $this->add_cv($data);
      header('HTTP/1.1 201 Created');
    } else {
      throw new \Exception('Failed to retrieve last insert ID.');
    }
  }




  public function add_cv($data) {
    $query = "
      INSERT INTO cvs (name, data, models_id, cat_cv_id)
      VALUES (?, ?, ?, ?)
    ";

    $req = $this->db->prepare($query);

    $req->execute([
      $data['name'],
      json_encode($data['data']),
      $data['models_id'],
      intval($data['cat_cv_id'])
    ]);
    header('HTTP/1.1 201 Created');
    return $data;
  }
}