import TodoModel from './model';
import $ from 'jquery';
import _ from 'underscore';

export default class TodoController
{
	constructor() {
		
	}

	init() {
		this.renderTodos();
	}

	renderTodos() {
		var todos = [];
		TodoModel.getAll()
		.done((data) => {
			todos = data;
			todos.forEach((todo) => {
				todo.isChecked = parseInt(todo.isChecked);
			});
			var view;
			view = new ViewTodos(todos);
			view.render();
			console.log(data);
		})
	}

	createTodo(text) {
		TodoModel.createTodo(text)
			.done(() => this.renderTodos());
	}

	deleteTodo(id) {
		 TodoModel.deleteTodo(id)
			 .done(() => this.renderTodos());
	}
}
var controller = new TodoController();

class ViewTodos
{
	constructor(todos) {
		this.todos = todos;
	}

	init() {
		this.render();
	}

	render() {
		var template = $('#todo-item').html(),
			compiled = _.template(template);
		$('.todos__items').html('');

		$('#task-create').submit((event) => {
			var text = $('#text-task').val();
			console.log(text);
			controller.createTodo(text);

			event.preventDefault();
		});

		this.todos.forEach((todo) => {
			$('.todos__items').append(compiled(todo));
		})
		
		$('.todo-item__delete a').click(function (event) {
			var idTodo = $(this).data('id-todo');
			console.log(idTodo);
			controller.deleteTodo(idTodo);

			event.preventDefault();
		});

	}
}