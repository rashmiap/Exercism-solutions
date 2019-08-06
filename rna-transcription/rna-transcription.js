const matchedRule = {
	'C': 'G',
	'G': 'C',
	'T': 'A',
	'A': 'U'
}
export const toRna = (dnaString) => {
	if(dnaString.length === 0){
		return ''
	}
	return dnaString.split('').reduce((prev, cur) => {
			return prev + (matchedRule.hasOwnProperty(cur) ? matchedRule[cur] : '')
	}, '')
}