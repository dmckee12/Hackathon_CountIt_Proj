let s = 'hElLo world! 2023';

function countIt(str) {
  //let str = '';
  let punctRE = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
  let spaceRE = /\s+/g;
  let numRE = /[0-9]/g;
  str = s.toLowerCase().replace(punctRE, "").replace(spaceRE, '').replace(numRE, '');
 // let output = '';

  const result = [...str].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {});
  return result;
}

console.log('Hi :', countIt(s))
