function mindGame(number){
    // if(typeof number !== 'number' ){
    //     return 'Plase provide a number'
    // }
    // else if(number <= 0){
    //     return 'Please provide a positive number'
    // }
    // else{
    //     const result = ((((number*3)+10)/2)-5)
    //     return result;
    // }

    if (typeof number !== 'number' || number <= 0) {
        return 'Please give me a provide number'
    } else {
        const result = ((((number*3)+10)/2)-5)
        return result;
    }

}
const number = 5;
const result = mindGame(number);
console.log(result);