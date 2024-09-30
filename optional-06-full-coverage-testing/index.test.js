import { describe, it } from 'node:test'
import assert from 'node:assert'
import sum from './index.js'

describe('Test sum', () => {
  it('should add correctly', () => {
    const a = 1;
    const b = 2;

    const actual = sum(a, b);
    const exp = 3;

    assert.equal(actual, exp);
  });

  it('should add A not correctly!', () => {
    const potentialErrorToBeThrew = () => {
      const a = '1';
      const b = 2;
  
      sum(a, b);
    }

    assert.throws(potentialErrorToBeThrew, Error);
  })

  it('should add B not correctly!', () => {
    const potentialErrorToBeThrew = () => {
      const a = 1;
      const b = '2';
  
      sum(a, b);
    }

    assert.throws(potentialErrorToBeThrew, Error);
  })
})