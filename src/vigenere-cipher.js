// const { NotImplementedError } = require('../extensions/index.js');

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
	constructor(e) {
		this.type = e;
	}
	encrypt(str, key) {
		const alphavite = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		let ans = '';
		let nStr = 0;
		let lKey = key.length - 1;
		if (!str || !key) return Error('Incorrect arguments!');
		str = str.toUpperCase();
		str = str.split('');
		key = key.toUpperCase();
		str.forEach(e => {
			nStr = alphavite.indexOf(e);
			if (nStr === -1) {
				ans += e
				return null
			}
			ans += key[(nStr) % lKey];
		})

		return ans
	}

	decrypt() {

	}
}

// module.exports = {
//   VigenereCipheringMachine
// };


const directMachine = new VigenereCipheringMachine();
console.log(directMachine.encrypt('attack at dawn!', 'alphonse'), 'AEIHQX SX DLLU!')