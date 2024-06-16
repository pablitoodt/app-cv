<?php

require 'vendor/autoload.php';


use App\Router;
use App\Controllers\Users;
use App\Controllers\CvBases;
use App\Controllers\DatasCv;
use App\Controllers\LogIn;
use App\Controllers\Cat;
use App\Controllers\ListCv;
use App\Controllers\NewCat;

new Router([
  'users' => Users::class,
  'cvModels' => CvBases::class,
  'LogIn' => LogIn::class,
  'DatasCv' => DatasCv::class,
  'cat' => Cat::class,
  'listCv' => ListCv::class,
  'newCat' => NewCat::class,
]);

