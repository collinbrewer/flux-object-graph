import assign from 'object-assign';

import ObjectGraphDescriptor from './object-graph-descriptor.js';

class Collection {

	constructor () {
		this.reset();
	}

	reset () {
		this.items = [];
	}

	indexForItem (item) {
		let objectId = item.objectId;
		let items = this.items;
		let temp;

		for (var i = 0, l = items.length; i < l; i++) {
			temp = items[i];
			if ((temp === item) || (temp.objectId === objectId)) {
				return i;
			}
		}
		return -1;
	}

	create (item) {
		this.items.push(item);
	}

	read (descriptor) {
		let results = this.items;

		if (descriptor) {
			!('evaluate' in descriptor) && (descriptor = new ObjectGraphDescriptor(descriptor));

			results = descriptor.evaluate(this.items);
		}

		return results;
	}

	update (item, values) {
		values || (values = item);
		let index = this.indexForItem(item);
		if (index !== -1) {
			assign(this.items[index], values);
		}
	}

	destroy (item) {
		let index = this.indexForItem(item);
		if (index !== -1) {
			this.items.splice(index, 1);
		}
	}

	upsert (item, values) {
		let index = item ? this.indexForItem(item) : -1;
		let node;

		if (index === -1) {
			node = {};
			this.items.push(node);
		}
		else {
			node = this.items[index];
		}

		assign(node, values);
	}
}

module.exports = Collection;
