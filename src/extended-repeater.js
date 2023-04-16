const { NotImplementedError } = require('../extensions/index.js');
/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	str = str ? str : (typeof str === 'boolean') ? 'false' : 'null';
	options.addition = options.addition ? `${options.addition}`
		: (typeof options.addition === 'boolean') ? 'false' : null;
	str = `${str}`
	let ans = [];
	let addition = [];
	let repeat = options.repeatTimes;
	let repeatAdd = options.additionRepeatTimes;

	while (repeatAdd) {
		repeatAdd--;
		addition.push(options.addition ? options.addition : 'null');
	}

	addition = (addition.length) ? (addition.join(options.additionSeparator ? options.additionSeparator : '|')) : options.addition;

	while (repeat) {
		repeat--;
		if (typeof addition === 'string') {
			ans.push(str + addition)
		} else {
			ans.push(str)
		}
	}
	if (!options.repeatTimes) return str + addition
	return ans.join(options.separator ? options.separator : '+')
}

module.exports = {
	repeater
};

// const objWithSpecificCoercion = {
// 	[Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
// };

// console.log(repeater(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion }), 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT');


// console.log(repeater('STRING', {
// 	repeatTimes: 3, separator: '**',
// 	addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00'
// }))

// console.log('STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS')

// console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }), 'TESTstrADD!')