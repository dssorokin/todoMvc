<?php

/**
 * Created by PhpStorm.
 * User: projs
 * Date: 25.08.16
 * Time: 16:58
 */
class Db
{
    public static function getConnection()
    {
        $arr = include(ROOT . "/dbConf.php");
        $host = $arr['host'];
        $dbname = $arr['dbname'];
        $user = $arr['user'];
        $pass = $arr['password'];
//        "mysql:host=$host;dbname=$dbname"
        $dsn = "mysql:host=$host;dbname=$dbname;charset=UTF8";
        $opt = array(
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        );
        $pdo = new PDO($dsn, $user, $pass, $opt);
        return $pdo;
    }
}