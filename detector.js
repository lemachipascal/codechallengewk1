
// Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

//    > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

    /*Base value, x - 70km/hr
    Vehicle's Speed, y- determine or reading  
    Demerit =
    Difference in speed/ 5 
    (z < 12)- License is Suspended */

    function calculateDemeritPoints() {
        const speedLimit = 70;
        let demeritPoints = 0;
    
        // Prompt user to input speed
        const speed = prompt('Enter your speed (in km/h):');
    
        // Convert input to a number
        const speedNumber = parseFloat(speed);
    
        // Check if the input is a valid number
        if (!isNaN(speedNumber)) {
            // Compare speed with speed limit
            if (speedNumber < speedLimit) {
                console.log("OK");
            } else {
                // Calculate demerit points
                demeritPoints = Math.floor((speedNumber - speedLimit) / 5);
    
                // Check if license should be suspended
                if (demeritPoints > 12) {
                    console.log("License suspended");
                } else {
                    console.log(`Points: ${demeritPoints}`);
                }
            }
        } else {
            console.log("Invalid input. Please enter a valid number for speed.");
        }
    }
    
    // Call the function to execute
    calculateDemeritPoints();
    