//1. Subject:
// A basic Subject is a simple way to create an observable that you can both emit and subscribe to.

import { Subject } from 'rxjs';

const subject = new Subject<number>();

// Subscribe to the subject
const subscription = subject.subscribe(value => {
  console.log(`Received value: ${value}`);
});

// Emit values to the subject
subject.next(1);
subject.next(2);

// Unsubscribe when done
subscription.unsubscribe();
// ============================================

//2. BehaviorSubject:
// A BehaviorSubject is a type of Subject that always emits its current value to new subscribers.
import { BehaviorSubject } from 'rxjs';

const behaviorSubject = new BehaviorSubject<string>('Initial Value');

// Subscribe to the behavior subject
const subscription = behaviorSubject.subscribe(value => {
  console.log(`Received value: ${value}`);
});

// Emit values to the behavior subject
behaviorSubject.next('New Value');

// Unsubscribe when done
subscription.unsubscribe();

// ============================================
//4. ReplaySubject:
// A ReplaySubject is a type of Subject that replays a specified number of previous emissions to new subscribers.
import { ReplaySubject } from 'rxjs';

const replaySubject = new ReplaySubject<number>(3); // Replay last 3 emissions

// Emit values to the replay subject
replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);
replaySubject.next(4);

// Subscribe to the replay subject
const subscription = replaySubject.subscribe(value => {
  console.log(`Received value: ${value}`);
});

// Unsubscribe when done
subscription.unsubscribe();

// ============================================
// 4. AsyncSubject:
// An AsyncSubject only emits the last value it received when it's completed.
import { AsyncSubject } from 'rxjs';

const asyncSubject = new AsyncSubject<number>();

// Emit values to the async subject
asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);

// Subscribe to the async subject
asyncSubject.subscribe(value => {
  console.log(`Received value: ${value}`);
});

// Complete the async subject
asyncSubject.complete();


// ============================================