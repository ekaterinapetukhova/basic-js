const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (value) {
    this.value = value;
  }

  encrypt(message, key) {
    if (arguments.length < 2 || [...arguments].some(item => !item)) {
      throw new Error('Incorrect arguments!');
    }

    const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let result = '';

    for (let i = 0, j = 0; i < message.length; i += 1) {
        const char  = message[i].toUpperCase();
        const keyChar = key[j].toUpperCase();
        let index;

        if (isLatin(char)) {
          if (alph.indexOf(char) + alph.indexOf(keyChar) < 26) {
            index = alph.indexOf(char) + alph.indexOf(keyChar)
          } else {
            index = (alph.indexOf(char) + alph.indexOf(keyChar)) % 26;
          }
            result += alph[index];
            j = ++j % key.length;
        } else {
          result += char;
        }
      }

      if (this.value === undefined || this.value === true) {
        return result;
      } else if (this.value === false) {
        return result.split('').reverse().join('');
      }
  }

  decrypt(message, key) {
    if (arguments.length < 2 || [...arguments].some(item => !item)) {
      throw new Error('Incorrect arguments!');
    }

    const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = '';

      for (let i = 0, j = 0; i < message.length; i += 1) {
        const char = message[i].toUpperCase();
        const keyChar = key[j].toUpperCase();
        let index;

        if (isLatin(char)) {
          if (alph.indexOf(char) - alph.indexOf(keyChar) < 0) {
            index = alph.indexOf(char) - alph.indexOf(keyChar) + 26;
          } else {
            index = alph.indexOf(char) - alph.indexOf(keyChar);
          }
          result += alph[index];
          j = ++j % key.length;
        } else {
          result += char;
        }
      }

      if (this.value === undefined || this.value === true) {
        return result;
      } else if (this.value === false) {
        return result.split("").reverse().join("");
      }
  }
}

function isLatin(str) {
  return /[a-zA-Z]/gi.test(str);
}

module.exports = {
  VigenereCipheringMachine
};
