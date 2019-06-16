import foods from './foods';
import { choice, remove } from './helpers';


//Randomly draw a fruit from the array
let fruit = choice(foods);
//Log the message "I'd like one RANDOMFRUIT, please!"
console.log(`I'd like one ${fruit}, please!`);
//LOg the message "Here you  go: RANDOMFRUIT"
console.log(`Here you go: ${fruit}`);
//Log message "Delicous can I have another?"
console.log("Delicous! May I have another")
//Remove the fruit from the array pf fruits
let remaining = remove(foods, fruit);
//Log the message "I'm sorry, we're all out, We have FRUITSLEFT left."
console.log(`I'm sorry, we're all out, We have ${remaining.length} left.`)