function add(numbers) {
    // For an empty string
    if (numbers === "") {
      return 0;
    }
    // For a single number
    if(numbers.length == 1) {
        return parseInt(numbers);
    } 
    // Split the input string by commas, convert and sum them
    const splitedNumbers = numbers.split(',').map(Number);
    return splitedNumbers.reduce((sum, num) => sum + num, 0);
    
}
  
module.exports = {
    add
}