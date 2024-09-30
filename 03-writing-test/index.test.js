import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js'

test('should add correctly', () => {
  const a = 1;
  const b = 2;

  const cal = sum(a, b);

  const expect = 3;
  assert.equal(cal, expect);
})