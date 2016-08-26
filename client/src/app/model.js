import $ from "jquery";
import constants from './constants';

export default class TodoModel
{
	constructor() {
		
	}
	static getAll() {
		var api = constants.API_URL;
		return $.get({
			url: api + '/todos',
			dataType: 'json'
		});
	}
	
	static createTodo(text) {
		var api = constants.API_URL;
		return $.post({
			url: api + '/todos',
			data: 'text=' + text
		});
	}

	static deleteTodo(id) {
		var api = constants.API_URL;
		return $.ajax({
			method: "DELETE",
			url: api + '/todos/' + id
		});
	}
}