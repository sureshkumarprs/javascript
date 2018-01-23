// Set Timeout

function sayHellow(){
    console.log("Time out workig");
};

var timeout = setTimeout( sayHellow , 5 * 1000 );
// Clear Timeout
clearTimeout(timeout);

//Set intervel

var second = 0;
function printTime(){
    second++;
    console.log("Second elapsed " + second);

    if (second === 10){
        clearInterval(intervel);// Clear intervel
        console.log("10 seconds has elapsed!");
    }
}
var intervel = setInterval(printTime, 1000);