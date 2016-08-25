import {expect} from 'chai';

describe('Collection', () => {
	let Collection = require('../src/collection.js');

	let collection;

	context('#create', () => {
		beforeEach(() => {
			collection = new Collection();
		});

		it('should create a new object', () => {
			collection.create({});
			expect(collection.items).to.have.length(1);
		});
	});

	context('#read', () => {
		beforeEach(() => {
			collection = new Collection();
		});

		it('should initialize empty', () => {
			expect(collection.read()).to.have.length(0);
		});

		it('should return all items', () => {
			collection.items = [{test: 'item'}];
			expect(collection.read()).to.have.length(1);
		});

		it('should return items matching descriptor', () => {
			collection.items = [{age: 5}, {age: 50}];
			expect(collection.read({predicate: 'age>10'})).to.have.length(1);
		});
	});

	context('#update', () => {
		beforeEach(() => {
			collection = new Collection();
		});

		it('should throw error for missing item');

		it('should update an existing object', () => {
			let item = {objectId: 'abc123'};
			collection.items = [item];

			collection.update({objectId: 'abc123'}, {title: 'updated'});

			expect(item.title).to.equal('updated');
		});
	});

	context('#destroy', () => {
		beforeEach(() => {
			collection = new Collection();
		});

		it('should destroy an existing', () => {
			let item = {objectId: 'abc123'};
			collection.items = [item];

			collection.destroy(item);

			expect(collection.items).to.have.length(0);
		});
	});

	context('#upsert', () => {
		beforeEach(() => {
			collection = new Collection();
		});

		it('should create an item', () => {
			let item = {objectId: 'abc123'};

			collection.upsert(item, {title: 'upserted'});

			expect(collection.items).to.have.length(1);
			expect(collection.items[0].title).to.equal('upserted');
		});

		it('should update an existing object', () => {
			let item = {objectId: 'abc123'};
			collection.items = [item];

			collection.update({objectId: 'abc123'}, {title: 'upserted'});

			expect(item.title).to.equal('upserted');
			expect(collection.items).to.have.length(1);
		});
	});
});
