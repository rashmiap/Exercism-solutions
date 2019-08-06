export const validate = digit => {
	let digitArr = String(digit).split("");
	let result = digitArr.reduce((total, currentValue) => {
		return total + Math.pow(currentValue, digitArr.length)
	}, 0)
	return result === digit;
}