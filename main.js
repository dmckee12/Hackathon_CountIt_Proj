'use strict';
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const countIt = (str) => {
    let punctRE = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
    let spaceRE = /\s+/g;
    let numRE = /[0-9]/g;
    str = str.toLowerCase().replace(spaceRE, '').replace(punctRE, "").replace(numRE, '');

    const result = [...str].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a}, {});
    console.log(result);
}

const getPrompt = () => {
  rl.question("Enter Sentence ", (str) => {
    countIt(str);
    getPrompt();
  });
};

getPrompt();
   