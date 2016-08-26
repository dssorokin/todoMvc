<?php
/**
 * Created by PhpStorm.
 * User: projs
 * Date: 25.08.16
 * Time: 15:57
 */
define('ROOT', dirname(__FILE__));

require_once('TodoModel.php');




class apiREST
{
    private $method;
    private $id;

    public function __construct($method, $uri)
    {
        $this->method = $method;
        $arr_path = explode('/', $uri);
        if(!is_null($arr_path[1])) {
            $this->id = intval($arr_path[1]);
        }
    }

    public function init() {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Headers: Content-Type');
        header('Access-Control-Allow-Methods: DELETE, PUT');
        switch ($this->method) {
            case 'GET':
                header("Content-Type: application/json");
                echo $this->getRestApi();
                break;
            case 'POST':
                $arr = array();
                $arr['text'] = $_POST['text'];


                TodoModel::insertTodo($arr);
                break;
            case 'DELETE':
                TodoModel::deleteTodo($this->id);
        }
    }

    private function getRestApi() {
        $todos = TodoModel::getTodos();

        return json_encode($todos);
    }

}


$method = $_SERVER['REQUEST_METHOD'];
$uri = trim($_SERVER['REQUEST_URI'], '/');
$api = new apiREST($method, $uri);
$api->init();

?>

