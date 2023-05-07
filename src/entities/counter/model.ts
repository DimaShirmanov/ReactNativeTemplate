import {createEvent, createStore, sample} from 'effector';

const counterUpdate = createEvent<void>();
const $counter = createStore(0);

sample({
  source: $counter,
  clock: counterUpdate,
  fn: (value: number) => value + 1,
  target: $counter,
});

export {$counter, counterUpdate};
