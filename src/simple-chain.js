const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	chain: [],
	getLength() {
		return this.chain.length
	},
	addLink(value) {
		(value === null) ? value = 'null' : null;
		this.chain.push(value)
		return chainMaker
	},
	removeLink(position) {
		if (!Number.isFinite(position)) {
			this.chain = [];
			throw Error('You can\'t remove incorrect link!');
		}
		if (position <= 0 || position > this.chain.length) {
			this.chain = [];
			throw Error('You can\'t remove incorrect link!');
		}
		this.chain.splice(position - 1, 1)
		return chainMaker
	},
	reverseChain() {
		this.chain.reverse()
		return chainMaker
	},
	finishChain() {
		let ans = this.chain;
		this.chain = [];
		ans = ans.join(' )~~( ');
		ans = `( ${ans} )`
		return ans
	}
};

module.exports = {
	chainMaker
};


// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(), '/b( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )')

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).finishChain())

// console.log( chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2))
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4))
