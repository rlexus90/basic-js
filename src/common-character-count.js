const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	let count = 0;
	if (!s1 || !s2) return 0;
	let s = (s1.length > s2.length) ? s2 : s1;
	let arr = (s1.length > s2.length) ? s1 : s2;
	let i = 0;
	s = s.split('');
	arr = arr.split('');
	s.forEach(e => {
		if (arr.includes(e)) {
			count++;
			i = arr.indexOf(e);
			arr[i] = null;
		}
	});
	return count
}

module.exports = {
  getCommonCharacterCount
};


// const s1 = "aabcc", s2 = "adcaa";

// console.log(getCommonCharacterCount(s1, s2))