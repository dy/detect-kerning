'use strict'

module.exports = kerning


let pairs = [
	'A”', 'W.', 'P,', 'L”', 'VA', 'F.', 'YA', 'Te', 'AV', 'Vr', 'PA', 'm”', 'a”', 'FA', 'UA', 'w.', 'Yt', 'LT', 'r,', 'Xv', 'Ku', 'D,', 'D”', 'OA', 'Hv', 'T:', 'DY', 'c”', 'my', 'Ru', 'aj', 'bv', 'Sp', 'ro', 'SR', 'lp', 'ot', 'tt', 'am', 'fe', 'vo', 'xc', 'yo', 'Ix', 'e,', 'st', 'he', 'Fw', 'us', 'Ak', 'la', 'Oj', 'il', 'CO', 'bc', 'Xf', 'fr', 'F”', 'wb', 'YW', 'So', 'Co', 'VT', 'cv', 'Dv', 'OC', 'Bc', 'RX', 'T”', 'gy', 'r:', 'XA', 'ry', 'w;', 'f?', 'f”'
]

let ctx = document.createElement('canvas').getContext('2d')


function kerning (family) {
	if (arguments.length > 1) family = [].slice.apply(arguments)

	if (typeof family !== 'string') family = family.join(', ')

	ctx.font = '16px ' + family

	let table = {}

	for (var i = 0; i < pairs.length; i++) {
		let pair = pairs[i]

		let width = ctx.measureText(pair[0]).width + ctx.measureText(pair[1]).width

		let kerningWidth = ctx.measureText(pair).width

		if (width !== kerningWidth) {
			let emWidth = (kerningWidth - width) / 16
			table[pair] = emWidth * 1000
		}
	}

	return table
}
