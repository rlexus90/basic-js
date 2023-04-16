const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	let ans = [];
	if (!Array.isArray(arr)) throw Error(`'arr' parameter must be an instance of the Array!`)
	for (let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case '--discard-next': i++;
				break;
			case '--discard-prev': (arr[i - 2] == '--discard-next') ? null : ans.pop()
				break;
			case '--double-next': (i == arr.length - 1) ? null : ans.push(arr[i + 1])
				break;
			case '--double-prev': (arr[i - 2] == '--discard-next') ? null : (i == 0) ? null : ans.push(arr[i - 1])
				break;
			default: ans.push(arr[i]);
				break;
		}
	}
	return ans
}

module.exports = {
  transform
};


// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]), [1, 2, 3, 4, 5])
// console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]), [1, 2, 3, 1337, 1337, 1337, 4, 5])
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]), [1, 2, 3, 4, 5])
// console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]), [1, 2, 3, 1337, 4, 5])