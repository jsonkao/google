
const decompress = input => {
  const letters = [];
  const numbers = [];

  for (i in input) {
    const c = input[i];
    const num = Number(c);
    if (!isNaN(c)) {
      numbers.push(num);
    } else {
      // popped off in reverse order
      if (c == ']') {
        let str = '';
        let letter = '';
        while (letter != '[') {
          str += letter;
          letter = letters.pop();
        }
        letters.push(str.split('').reverse().join('').repeat(numbers.pop()));
      } else {
        letters.push(c);
      }
    }
  }
  return letters.join('');
};

const main = () => {
  const inputStr = '3[2[a]bc]4[ab]c';
  // const inputStr = 'a2[2[a]ab]';
  // numbers: 2 2
  // letters: [ aa
  // output:
  console.log(decompress(inputStr));
};

main();

