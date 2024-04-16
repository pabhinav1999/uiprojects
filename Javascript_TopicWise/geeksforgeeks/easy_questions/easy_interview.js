/* https://www.geeksforgeeks.org/javascript-interview-questions-and-answers/?ref=shm */

/* Q11) Write a JavaScript code for adding new elements dynamically. */

let p1 = document.createElement('p1');
p1.textContent = 'Hello this is an interview module';
p1.setAttribute('class','note');
document.body.appendChild(p1);
