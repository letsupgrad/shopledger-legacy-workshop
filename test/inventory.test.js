'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const inventory = require('../lib/inventory');
const orders = require('../lib/orders');

test('buying the exact sellable stock is allowed', function () {
  const products = [{ id: 1, name: 'A2 Gir Cow Ghee 500ml', stock: 1, reserved: 0 }];
  const result = inventory.check(products, [{ id: 1, qty: 1 }]);

  assert.equal(result.ok, true);
});

test('cancelling an order restores stock by the item id and keeps reservations intact', function () {
  const db = {
    products: [{ id: 1, name: 'A2 Gir Cow Ghee 500ml', stock: 0, reserved: 0 }],
    orders: [{
      id: 1007,
      status: 'pending',
      paymentMode: 'cash',
      total: 450,
      items: [{ id: 1, qty: 1 }]
    }]
  };

  const result = orders.cancel(db, 1007, 'Workshop characterization');

  assert.equal(result.ok, true);
  assert.equal(result.order.status, 'cancelled');
  assert.equal(db.products[0].stock, 1);
  assert.equal(db.products[0].reserved, 0);
});
