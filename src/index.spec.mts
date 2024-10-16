import { it } from 'node:test';
import assert from 'node:assert/strict';

import uuid from './index.mts';

const isUuid = uuid => {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    uuid,
  );
};

it('smoke', () => {
  assert.equal(typeof uuid, 'function');
});

it('length', () => {
  const test1 = uuid();
  assert.equal(test1.length, 36);
});

it('is valid uuid', () => {
  const test1 = uuid();

  assert.ok(isUuid(test1));
});
