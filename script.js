function calculateArea(radius){
    const PI = 3.14
    const area = PI * radius * radius
}

function compareNumbers(a,b){
    if(a > b){
        console.log(`${a} is greater than ${b}`);
    }
    else if(a < b){
        console.log(`${b} is greater than ${a}`);
    }
    else{
        console.log(`${a} and ${b} are equal`);
    }
}


calculateArea(3);

compareNumbers(1,2);
compareNumbers(2,1);
compareNumbers(1,1);


