const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

	calculateDepth(arr) {
		let count = 1;
		let ans = arr.map(el => {
			count = 1;
			if (Array.isArray(el)) { depthCount(el) }
			return count
		})


		function depthCount(arr) {
			count++;
			for (let el of arr) {
				if (Array.isArray(el)) return depthCount(el);
			}
			return count
		}

		return Math.max(...ans)
	}
}

module.exports = {
	DepthCalculator
};

// const depthCalc = new DepthCalculator();
// console.log(depthCalc.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]), 10)
// console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]), 2)
// console.log(depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), 31)


// const f = () => {
// 	const spy1 = sinon.spy(instance, 'calculateDepth');
// 	const depthCalc = new DepthCalculator();
// 	console.log(depthCalc.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]), 8)

// }
// f()