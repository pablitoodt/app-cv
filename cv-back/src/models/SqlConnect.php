<?php

namespace App\Models;

use \PDO;

class SqlConnect {
  public object $db;
  private string $host;
  private string $port;
  private string $dbname;
  private string $password;
  private string $user;
  protected string $system_info;

  public function __construct() {
    $system_info = php_uname();
    if (strpos($system_info, 'Windows') !== false) {
      $this->host = '127.0.0.1';
      $this->port = '3306';
      $this->dbname = 'coda_projet_final_cv';
      $this->user = 'root';
      $this->password = '';
    } elseif (strpos($system_info, 'Darwin') !== false) {
      $this->host = '127.0.0.1';
      $this->port = '8889';
      $this->dbname = 'coda_projet_final_cv';
      $this->user = 'root';
      $this->password = 'root';
    } else {
      $this->host = '127.0.0.1';
      $this->port = '3306';
      $this->dbname = 'coda_projet_final_cv';
      $this->user = 'root';
      $this->password = '';
    }

    try {
      $this->db = new PDO(
        'mysql:host='.$this->host.';port='.$this->port.';dbname='.$this->dbname,
        $this->user,
        $this->password
      );

      $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $this->db->setAttribute(PDO::ATTR_PERSISTENT, false);
    } catch (\PDOException $e) {
      echo "Erreur de connexion : " . $e->getMessage();
    }
  }

  public function transformDataInDot($data) {
    $dataFormated = [];

    foreach ($data as $key => $value) {
      $dataFormated[':' . $key] = $value;
    }

    return $dataFormated;
  }
}