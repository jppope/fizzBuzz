function recursiveFizzBuzz(input){
    if(input < 100){        
     var str = '';
    if(!(input % 3)) str += 'Fizz';
    if(!(input % 5)) str += 'Buzz';
    console.log(str || input);
        input+=1;
        recursiveFizzBuzz(input);
    }
}
recursiveFizzBuzz(0);