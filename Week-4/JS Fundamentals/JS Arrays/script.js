function divideArray(arr){
    evenNums = []
    oddNums = []

    arr.sort()

    arr.forEach(element => {
        if(element % 2 == 0) evenNums.push(element)
        else oddNums.push(element)
    });

   let evenlength = evenNums.length
   let oddlength = oddNums.length
   
    if( evenlength >= 1){
        console.log("Even numbers",evenlength);
        console.log(evenNums);
    }
    else{
        console.log("Even numbers: None");
    }

    if( oddlength >= 1){
        console.log("Even numbers",oddlength);
        console.log(oddNums);
    }
    else{
        console.log("Odd numbers: None");
    }

}



let nums = [4,2,8];

divideArray(nums)