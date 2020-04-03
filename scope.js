function helpMe(){
    let msg = "im on fire";
}
msg    //msg here outside the function has no value because it is outside the scope of the helpMe function


//example 2 

let bird = "eagle";

function birdVariable(){
    let bird = "hawk";
}

//outside the function the bird variable's value is eagle but within the function it is a hawk
