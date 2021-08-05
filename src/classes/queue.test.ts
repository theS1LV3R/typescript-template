import { Queue } from './queue';

describe('Queue unit tests', () => {
  let queue: Queue<string>;

  beforeEach(() => {
    queue = new Queue<string>();

    queue.enqueue('first');
    queue.enqueue('second');
    queue.enqueue('third');
    queue.enqueue('fourth');
  });

  it('Should have size 4', () => {
    expect(queue).toBeDefined();
    expect(queue.size).toBe(4);
  });

  it('Should have queue.isEmpty be false', () => {
    expect(queue).toBeDefined();
    expect(queue.isEmpty).toBe(false);
  });

  it('Should add one item to the queue', () => {
    expect(queue).toBeDefined();
    queue.enqueue('fifth');
    expect(queue.size).toBe(5);
  });

  it('Should remove item at head from queue', () => {
    expect(queue).toBeDefined();

    const item = queue.dequeue();

    expect(item).toBe('first');
    expect(queue.size).toBe(3);
  });

  it('Should have the first item be "first"', () => {
    expect(queue).toBeDefined();
    expect(queue.peek()).toBe('first');
  });

  it('Should be able to clear the queue', () => {
    expect(queue).toBeDefined();

    queue.clear();

    expect(queue.size).toBe(0);
    expect(queue.isEmpty).toBe(true);
    expect(queue.peek()).toBe(undefined);
  });

  it('Should be able to return values as string', () => {
    expect(queue).toBeDefined();

    expect(queue.print()).toBe('fourth -> third -> second -> first');
  });

  it('Should return undefined and 0 for empty queues', () => {
    expect(queue).toBeDefined();

    queue.clear();

    expect(queue.dequeue()).toBe(undefined);
    expect(queue.peek()).toBe(undefined);
    expect(queue.size).toBe(0);
    expect(queue.print()).toBe('');
  });
});
