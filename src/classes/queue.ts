export interface ObjectType<T> extends Object {
  [key: number]: T;
}

/**
 *a simple queue class with can recieve and return items
 *
 * @export
 * @class Queue
 * @template T the type of item that will be added to the queue
 */
export class Queue<T> {
  private _queue: ObjectType<T> = {};
  private _head = 0;
  private _tail = 0;

  /**
   *if the queue length === 0
   *
   * @readonly
   * @type {boolean}
   * @memberof Queue
   */
  get isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   *queue length
   *
   * @readonly
   * @type {number}
   * @memberof Queue
   */
  get size(): number {
    return this._tail - this._head;
  }

  /**
   *add item to queue
   *
   * @param {T} item item to add to queue
   * @memberof Queue
   */
  enqueue(item: T): void {
    this._queue[this._tail] = item;
    this._tail++;
  }

  /**
   *remove and return element at head of queue
   *
   * @return {(T | undefined)}
   * @memberof Queue
   */
  dequeue(): T | undefined {
    if (this.isEmpty) {
      return undefined;
    }
    const value = this._queue[this._head];
    delete this._queue[this._head];
    this._head++;
    return value;
  }

  /**
   *return head of queue without removing
   *
   * @return {(T | undefined)}
   * @memberof Queue
   */
  peek(): T | undefined {
    if (this.isEmpty) {
      return undefined;
    }
    return this._queue[this._head];
  }

  /**
   *clears the entire queue
   *
   * @memberof Queue
   */
  clear(): void {
    this._queue = {};
    this._head = 0;
    this._tail = 0;
  }

  /**
   *returns a string representation of the queue separated by `separator`
   *
   * @param {string} [separator=' -> '] the separator between the items
   * @return {string}
   * @memberof Queue
   */
  print(separator = ' -> '): string {
    if (this.isEmpty) {
      return '';
    }

    const values = [];

    for (let i = this._head; i < this._tail; i++) {
      values.unshift((this._queue[i] as any).toString());
    }

    return values.join(separator);
  }
}
