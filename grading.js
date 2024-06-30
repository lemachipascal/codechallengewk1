// Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

//     // A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
//A = 100-79
//B = 79-60
//C = 59-49
//D = 49-40
//E = less 40


//FUNCTION
function studentGrade() {
    // prompt the user to input speed 
    
    let mark = prompt('ENTER YOUR MARKS')

    //conditions
                if (marks > 79 && marks <=100){
                    console.log("You scored an 'A'")
                }else if (marks >= 60 && marks <= 79){
                    console.log("You scored a 'B'")
                }else if ( marks >= 50 && marks <=59 ){
                    console.log("You scored a 'C'")
                }else if(marks >=40 && marks <= 49){
                    console.log("You scored a 'D'")
                }else if(marks >= 0 &&  marks < 40){
                    console.log("You scored an 'E'")
                }else {
                    console.log("INVALID (Between 0 and 100)")
                }
}

//call function
studentGrade()


































