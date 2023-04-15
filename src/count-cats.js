const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
	let arr = expandArray(matrix);
	let cats = 0;
	arr.forEach(e => {
		if (e === '^^') cats++;
	});
		return cats
}

function expandArray(arr) {
	let ans = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) { ans.push(...expandArray(arr[i])) }
		else { ans.push(arr[i]) }
	}
	return ans
}
module.exports = {
  countCats
};


// countCats([
// 	[0, 1, '^^'],
// 	[0, '^^', 2],
// 	['^^', 1, 2]
// ])