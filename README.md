# Review: Code challenge

## Learning Goals

* Practice writing `if...else if...else` statements.
* Practice working with the ternary operator.
* Nesting a if 
* Prompting a Javascript 


## Introduction 

The code challenge includes three unslove problems whereby chalenge;

1. Write a function that prompts the user to input student marks. The input should be between  0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

2. Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

3. Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 



## Week 1 Toy problems Prerequisites
   ## Prerequisites: 
         
   1. Create a repository on your GitHub account. 

   NB: One folder, with 3-4 files for each solution. Please note that a single file should only hold one solution. (i.e `grading.j, salary.js, detector.js and README.md `)

   2. Use JavaScript to wire down the solution.

   3. Push the solution to the above repository once done.


## Configuration
Each of the code challenge contain well written comments whereby helps you to know the arrangment of parts or elements in this challenge i.e the Outiline/ Guideline 


## Instruction 

In the code challenge both the Comparison and Logical Operators are used;
        
   * Comparison Opertors are `if`, `else` and the `else if` 
   * Logial Opeartors are `&&` and `|| `
   
      ### COMPARISON OPERATOR 
      Several statement have been declared in this challenges. (`grading.js , detector.js and  salary.js`) 

      `if statement` is used to specify a block of code to be executed, if a specified condition is true.
      `else`is used to specify a block of code to be executed, if the same condition is false.
      `else if` is used to specify a new condition to test, if the first condition is false

      ### LOGICAL OPERATORS 
      Logical operators are used to determine the logic between variables or values.

      * The `console.log`is simply used to call the function and know if the stated code of the conditions are accurate.

## Student Grade Calculator

This JavaScript function prompts the user to input student marks and then outputs the corresponding grade based on predefined criteria.

## Usage

   **Prompt for Input:** The function will prompt the user to enter their marks (a number between 0 and 100).
   **Grade Calculation:** Based on the input mark, the function will determine and display the corresponding grade:
   - A: 80-100
   - B: 60-79
   - C: 50-59
   - D: 40-49
   - E: 0-39
   **Invalid Input:** If the input is outside the valid range (0-100), the function will display an error message indicating the input is invalid.

## Function Explanation

The function `studentGrade()` performs the following steps:
- Prompts the user to input their marks using `prompt()`.
- Evaluates the input mark against a series of conditions to determine the appropriate grade.
- Outputs the grade to the console using `console.log()`.

# Speeding Demerit Points Detector
This program calculates demerit points based on the speed of a car compared to a speed limit of 70 km/h.

## Overview
The program prompts the user to input the speed of their car in kilometers per hour (km/h). Based on the input:

If the speed is less than 70 km/h, it prints "OK".
If the speed is 70 km/h or more, it calculates demerit points:
Each 5 km/h above the speed limit (70 km/h) results in one demerit point.
It then prints the total number of demerit points accumulated.
If the total demerit points exceed 12, it prints "License suspended".

## Usage
Ensure detector.js is in your project directory.
Run the script using Node.js or any JavaScript environment that supports prompt() for user input.
Example usage:

# Net Salary Calculator
This program calculates an individual’s net salary based on their basic salary and benefits. It computes various deductions such as PAYE (Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary.

## Functionality
The calculateEarnings function performs the following calculations:

* Total Salary Calculation: Adds the basic salary and benefits to get the total monthly salary.
*Annual Total Salary: Multiplies the total monthly salary by 12 to get the annual total salary.
*PAYE (Tax) Calculation: Determines the income tax (PAYE) based on annual income using progressive tax brackets.
*Monthly PAYE: Divides the annual PAYE by 12 to get the monthly tax deduction.
* NHIF Deduction: Computes the NHIF deduction based on predefined salary caps and rates.
* NSSF Deduction: Calculates NSSF deductions based on two tiers with respective caps and rates.
* Housing Levy Deduction: Applies a fixed rate (0.015) to the total monthly salary for housing levy.
* Total Deductions: Sum of PAYE, NHIF, NSSF, and housing levy deductions.
* Net Earnings: Total salary minus total deductions.

## Usage
To use this program:

1. Input: Run the runCalculator() function in a JavaScript environment that supports prompt() for user input.

- Enter your basic monthly salary when prompted.
- Enter your benefits when prompted.
- Output: The program will then display a breakdown of the salary calculations, including:

## Basic Salary
* Benefits
* Total Salary (Basic Salary + Benefits)
* Monthly PAYE (Tax)
* NHIF Deduction
* NSSF Deduction
* Net Earnings (Total Salary - Total Deductions)