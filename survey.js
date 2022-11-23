const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  `What's your name? Nicknames are also acceptable :) `,
  `What's an activity you like doing? `,
  `What do you listen to while doing that? `,
  `Which meal is your favourite (eg: dinner, brunch, etc.) `,
  `What's your favourite thing to eat for that meal? ` ,
  `Which sport is your absolute favourite? `,
  `What is your superpower? In a few words, tell us what you are amazing at! `
];

let input = [];
let i = 0;
const generator = () => {
  rl.question(questions[i], (answer) => {
    input.push(answer); i++;
    if (i < questions.length) {
      generator();
    } else {
      output();
      rl.close();
    }
  });

};


const output = () => {
  //converts name inputs to capitalize first letter and lower case rest
  let name = input[0].charAt(0).toUpperCase() + input[0].slice(1).toLowerCase();
  console.log(`\n${name} enjoys ${input[1]} while listening to ${input[2]}.
${name} loves to eat ${input[4]} during ${input[3]}.
Their all time favourite sport is ${input[5]}
Their super power is ${input[6]}.\n`);
};


generator();