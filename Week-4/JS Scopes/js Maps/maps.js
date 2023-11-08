function calcWordFrequencies(){
    const map = new Map()

    // input = prompt("Enter the input")
    input = "hey hi Mark hi mark"

    words = input.split(" ")
    
    words.forEach((word)=>{
        if(map.has(word)){
            map.set(word,map.get(word)+1)
        }
        else{
            map.set(word,1)
        }
    })
  
    return map


}

console.log(calcWordFrequencies())