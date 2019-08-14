/**
 * Prints the table of log2 from 1 to a number given
 * @param upTo {number} 
 * @returns 
 */
const LogTable = (base, upTo) => {
	let arr = [];
	for(let s=1;s<=upTo;s++){
		arr.push(`Log${base}(${s})= ${logN(base,s)}`);
	}
	return arr;
}

const logN = (base, number) =>{
	return Math.log(number) / Math.log(base);
}

console.table(LogTable(2, 10));