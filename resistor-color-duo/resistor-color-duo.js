export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

export const value = colors => {
	let result = colors.reduce((total, currentValue) => {
  		return total + (COLORS.indexOf(currentValue))
	}, '')
	return parseInt(result)
}
