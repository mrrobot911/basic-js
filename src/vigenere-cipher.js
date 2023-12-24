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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    return this.process(message, key, 'encript');
  }

  decrypt(encryptedMessage, key) {
    return this.process(encryptedMessage, key, 'decrypt');
  }
  process (message, key, crypt) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let processMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/)) {
        const messageCharCode = message.charCodeAt(i) - 65;
        const keyCharCode = key.charCodeAt(keyIndex % key.length) - 65;
        const encryptedCharCode = (messageCharCode + ((crypt !== 'encript') ? 26 - keyCharCode : keyCharCode)) % 26;
        processMessage += String.fromCharCode(encryptedCharCode + 65);
        keyIndex++;
      } else {
        processMessage += message[i];
      }
    }

    return this.isDirect ? processMessage : processMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
