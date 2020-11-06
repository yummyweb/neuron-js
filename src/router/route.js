const Layer = require('./layer');

class Route {
	constructor(path) {
		this.path = path;
		this.stack = [];
		this.methods = {};
	}

	requestHandler(method) {
		const name = method.toLowerCase();
		return Boolean(this.methods[name]);
	}

	get(handler) {
		const layer = new Layer('/', handler);
		layer.method = 'get';

		this.methods['get'] = true;
		this.stack.push(layer);
		return this;
	}

	post(handler) {
		const layer = new Layer('/', handler);
		layer.method = 'post';

		this.methods['post'] = true;
		this.stack.push(layer);
		return this;
    }
    
    delete(handler) {
		const layer = new Layer('/', handler);
		layer.method = 'delete';

		this.methods['delete'] = true;
		this.stack.push(layer);
		return this;
	}

	put(handler) {
		const layer = new Layer('/', handler);
		layer.method = 'put';

		this.methods['put'] = true;
		this.stack.push(layer);
		return this;
	}

	dispatch(req, res) {
		const method = req.method.toLowerCase();

		this.stack.forEach(item => {
			if (method === item.method) {
				item.requestHandler(req, res);
			}
		});
	}
}

module.exports = Route;