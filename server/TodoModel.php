<?php

/**
 * Created by PhpStorm.
 * User: projs
 * Date: 25.08.16
 * Time: 16:47
 */
require_once('Db.php');

class TodoModel
{
    public static function getTodos() {
        $pdo = Db::getConnection();

        $sql = "SELECT * FROM todo;";
        
        $todos = $pdo->query($sql, PDO::FETCH_ASSOC)->fetchAll();
        return $todos;
    }

    public static function insertTodo($todo) {
        $pdo = Db::getConnection();

        $sql = "INSERT INTO todo (text)".
            "VALUES (:text)";
        
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(":text", $todo['text']);
        
        
        $stmt->execute();
    }

    public static function deleteTodo($id) {
        $pdo = Db::getConnection();

        $sql = "DELETE FROM todo ".
            "WHERE id=:id";
        
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(":id", $id);
        
        $stmt->execute();
    }
}