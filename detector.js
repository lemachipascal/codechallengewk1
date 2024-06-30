
// Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

//    > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

    /*Base value, x - 70km/hr
    Vehicle's Speed, y- determine or reading  
    Demerit =
    Difference in speed/ 5 
    (z < 12)- License is Suspended */

function calculateDemeritPoints(){
      // prompt the user to input speed 
    var dermeritpoints = prompt('ENTER YOUR SPEED')

const speedlimit = 70;
let dermeritpoints = 0;

//conditions
if (speed < speedlimit){
    console.log("OK")
}else{ 
//calculate the demerit points 
demeritPoints=Math.floor ((speed - speedLimit)/5) 

//nested if
if (demeritPoints > 12){
    console.log ("License suspended")
}else {
    console.log(`Point: ${dermeritpoints}`)
}

}

}

//call the function 
calcaluteDemeritPoints()