export const solve = (x,y) => {
	const result = (x * x) + (y * y);
	if(result <= 1){
		return 10;
	} else if(result <= 25){
		return 5;
	} else if(result <= 100){
		return 1;
	} else {
		return 0;
	}
}