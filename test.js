const assert = require('assert');
const { add, multiply } = require('./math');

console.log('🧪 Running tests...');

assert.strictEqual(add(2, 3), 5, 'add(2, 3) should return 5');
assert.strictEqual(multiply(4, 5), 20, 'multiply(4, 5) should return 20');

console.log('✅ All tests passed!');