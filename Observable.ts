// Observables in Angular are directly related to your profile as an Angular developer, as they are a fundamental concept in Angular and are widely used for handling asynchronous operations, such as working with HTTP requests, user interactions, and more. Observables are part of the RxJS (Reactive Extensions for JavaScript) library, which is commonly used in Angular applications.

// Observables represent a stream of data or events over time. They can emit multiple values asynchronously and are used for handling asynchronous data flows. Observables can be in various states throughout their lifecycle. Here are the primary states of an observable:

// 1. **Creation**: This is the initial state of an observable. It represents the moment when an observable is created but has not started emitting any values yet. You can create observables using operators like `of`, `from`, or by creating custom observables.

// 2. **Subscribed**: When you subscribe to an observable using the `subscribe` method, it enters the "Subscribed" state. Subscribing to an observable means you are expressing interest in receiving and handling the values it emits. Once an observable is subscribed, it starts emitting values to the subscriber(s).

// 3. **Next**: In the "Next" state, an observable emits a value. This state represents the emission of data from the observable to its subscribers. Multiple "Next" states can occur, emitting different values over time.
// 
// 4. **Error**: If an error occurs during the execution of the observable, it enters the "Error" state. In this state, the observable emits an error notification to its subscribers, and no further values will be emitted.

// 5. **Complete**: After an observable has emitted all its values (or encountered an error), it enters the "Complete" state. In this state, the observable sends a completion notification to its subscribers. Subscribers are then automatically unsubscribed, and no more values will be emitted.

// Here's a basic example of how you might work with an observable in Angular:

// ```typescript
import { Observable } from 'rxjs';

const myObservable = new Observable(observer => {
  observer.next('First value');
  observer.next('Second value');
  observer.complete();
});

myObservable.subscribe(
  data => console.log(data),        // Next state: handles emitted values
  error => console.error(error),    // Error state: handles errors
  () => console.log('Completed')    // Complete state: handles completion
);
// ```

// In Angular, you often use observables when dealing with HTTP requests, form interactions, and other asynchronous operations. Angular's HTTP client, for instance, returns observables for handling HTTP responses, making it a crucial part of your toolkit as an Angular developer.


//All the ways to create an observable

// 1.Creating Observables from Scratch:
// You can create Observables from scratch using the Observable.create method. This allows you to manually emit values, errors, and completion signals.
import { Observable } from 'rxjs';

const customObservable = new Observable(observer => {
  observer.next('Hello');
  observer.next('World');
  observer.complete();
});

customObservable.subscribe(value => console.log(value));
// ==============

// 2. Using of and from Operators:
// The of operator creates an Observable that emits a sequence of values, and the from operator converts an array, promise, or iterable into an Observable.

import { of, from } from 'rxjs';

const numbersObservable = of(1, 2, 3, 4, 5);
numbersObservable.subscribe(value => console.log(value));

const arrayObservable = from([6, 7, 8, 9, 10]);
arrayObservable.subscribe(value => console.log(value));
// ================

// 3. Using Timer and Interval:
// The timer and interval operators create Observables that emit values based on time intervals.

import { timer, interval } from 'rxjs';

const timerObservable = timer(1000); // Emit after 1 second
timerObservable.subscribe(value => console.log(value));

const intervalObservable = interval(1000); // Emit every 1 second
intervalObservable.subscribe(value => console.log(value));
// ===================

// 4. Using fromEvent Operator:
// The fromEvent operator creates an Observable that emits events from a DOM element or other event sources.

import { fromEvent } from 'rxjs';

const button = document.getElementById('myButton');
const clickObservable = fromEvent(button, 'click');
clickObservable.subscribe(event => console.log(event));
// ===================

// Using ajax Operator:
// The ajax operator creates an Observable from an HTTP request.

import { ajax } from 'rxjs/ajax';

const url = 'https://api.example.com/data';
const dataObservable = ajax.getJSON(url);
dataObservable.subscribe(data => console.log(data));
