import { User } from './class/user.js';

let Jacob = new User('Jacob', 'male', 24, 'This is Jacob');
let Sally = new User('Sally', 'female', 25, 'Please welcome Sally');

console.log(Jacob.text);
console.log(Sally.text);

Sally.text('Hi this is Sally, please to meet you'); 

console.log(Jacob.text);
console.log(Sally.text);
