import $ from "jquery";
import TodoController from "./controller";
import 'materialize-css/sass/materialize.scss';
import '../scss/main.scss';

var controller = new TodoController();

controller.init();