// Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

//     // A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

function studentGrade() {
    let mark = prompt('ENTER YOUR MARKS')

                if (mark > 79 && mark <=100){
                    console.log("You scored an 'A'")
                }else if (mark >= 60 && mark <= 79){
                    console.log("You scored a 'B'")
                }else if ( mark >= 50 && mark <=59 ){
                    console.log("You scored a 'C'")
                }else if(mark >=40 && mark <= 49){
                    console.log("You scored a 'D'")
                }else if(mark >= 0 &&  mark < 40){
                    console.log("You scored an 'E'")
                }else {
                    console.log("INVALID (Between 0 and 100)")
                }
}
studentGrade()


































