function add(numbers) {
    // For an empty string
    if (numbers === "") {
      return 0;
    }
   
    let delimiter = /,|\n/; 
    // Handle custom delimiter
    if (numbers.startsWith("//")) {
      const parts = numbers.split('\n', 2);
      delimiter = new RegExp(parts[0].substring(2)); 
      numbers = parts[1];
    }
  
    const splitedNumbers = numbers.split(delimiter).map(Number);

    const negativeNumbers = splitedNumbers .filter(num => num < 0);
    if(negativeNumbers.length > 0){
        throw new Error(`Negative numbers not allowed: ${negativeNumbers}`); 
    }

    return splitedNumbers.reduce((sum, num) => sum + num, 0);
    
}
  
module.exports = {
    add
}