const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
    let arr = expr.toString().split('');
        for (i = 0; i < arr.length; i++) {
             arr[i] += arr[i + 1]
             arr.splice(i + 1, 1)
        }
    let slicedArr = [];
    let result = [];
    let word = [];
        for (i = 0; i < arr.length; i += 5) {
            slicedArr.push(arr.slice(i, i + 5)) 
        }
        for (i = 0; i < slicedArr.length; i++) {
        for (n = 0; n < 5; n++) {
            if (slicedArr[i][n] === '00') {
                slicedArr[i].splice(n, 1)
                n--
            }
            if (slicedArr[i][n] === '10') {
             slicedArr[i][n] = '.'
            }
            if (slicedArr[i][n] === '11') {
                slicedArr[i][n] = '-'
            }
            if (slicedArr[i][n] === '**') {
                slicedArr[i][n] = 's'
            }
        }
    result.push(slicedArr[i].join(''))
    }
    result.forEach((element) => {
      if (element === 'sssss') {
        element = ' '
      } else {
        element = MORSE_TABLE[element]
      }
        word.push(element)
      })
    
    return word.join('')
}

module.exports = {
    decode
}