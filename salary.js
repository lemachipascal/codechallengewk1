/*Write a program whose major task is to calculate an individual’s 
Net Salary by getting the inputs of basic salary and benefits. 
Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. */// Function to calculate salary deductions and net salary*/


//overall function for calculating earnings
function calculateEarnings(basicSalary, benefits) {
    const nssfTier1Cap = 7000;
    const nssfTier2Cap = 36000;
    const nssfRate = 0.06;
    const housingLevyRate = 0.015;

//how to calculate totalSalary
const totalSalary = basicSalary + benefits;

//How to calculate annualTotalSalary
const annualTotalSalary = totalSalary * 12;

//how  to calculate paye
function calculatePAYE(annualTotalSalary) {
    const taxBrackets = [
        { cap: 288000, rate: 0.1 },
        { cap: 388000, rate: 0.25 },
        { cap: 6000000, rate: 0.3 },
        { cap: 9600000, rate: 0.325 },
        { cap: Infinity, rate: 0.35 }
    ];

    let taxableIncome = annualTotalSalary;
    let totalTax = 0;

    for (let i = 0; i < taxBrackets.length; i++) {
        const bracket = taxBrackets[i];
        const previousCap = i > 0 ? taxBrackets[i - 1].cap : 0;
        const taxableAmountInBracket = Math.min(taxableIncome, bracket.cap - previousCap);

        totalTax += taxableAmountInBracket * bracket.rate;
        taxableIncome -= taxableAmountInBracket;

        if (taxableIncome <= 0) break;
    }

    return totalTax;
}

//how to calculate annual PAYE
const annualPAYE = calculatePAYE(annualTotalSalary);

//calc monthly PAYE
const monthlyPAYE = annualPAYE / 12;

//How to calculate nhif
function calculateNHIF(totalSalary) {
    const nhifRates = [
        { cap: 5999, deduction: 150 },
        { cap: 7999, deduction: 300 },
        { cap: 11999, deduction: 400 },
        { cap: 14999, deduction: 500 },
        { cap: 19999, deduction: 600 },
        { cap: 24999, deduction: 750 },
        { cap: 29999, deduction: 850 },
        { cap: 34999, deduction: 900 },
        { cap: 39999, deduction: 950 },
        { cap: 44999, deduction: 1000 },
        { cap: 49999, deduction: 1100 },
        { cap: 59999, deduction: 1200 },
        { cap: 69999, deduction: 1300 },
        { cap: 79999, deduction: 1400 },
        { cap: 89999, deduction: 1500 },
        { cap: 99999, deduction: 1600 },
        { cap: Infinity, deduction: 1700 }
    ];

    for (let i = 0; i < nhifRates.length; i++) {
        if (totalSalary <= nhifRates[i].cap) {
            return nhifRates[i].deduction;
        }
    }
}

const nhifDeduction = calculateNHIF(totalSalary);

const nssfTierI = Math.min(nssfTier1Cap, totalSalary) * nssfRate; //math.min ensures NssfTierI does not exceed the nssfTierLimit
const nssfTierII = Math.max(0, Math.min(nssfTier2Cap, totalSalary) - nssfTier1Cap) * nssfRate;
const nssfDeduction = nssfTierI + nssfTierII;

//housing  levy const  is 0.015
const housingLevy = totalSalary * housingLevyRate;

//total deductions
const totalDeductions = monthlyPAYE + nhifDeduction + nssfDeduction + housingLevy;

//total earnings
const earnings = totalSalary - totalDeductions;

return {
    basicSalary: basicSalary,
    benefits: benefits,
    totalSalary: totalSalary,
    paye: monthlyPAYE,
    nhifDeduction: nhifDeduction,
    nssfDeduction: nssfDeduction,
    housingLevy: housingLevy,
    earnings: earnings
};
}

function runCalculator() {
    const basicSalary = parseFloat(prompt("Enter your basic monthly salary:"));
    const benefits = parseFloat(prompt("Enter your benefits:"));

if (isNaN(basicSalary) || isNaN(benefits)) {
    alert("Please enter valid numbers for your basic salary and benefits!");
    return;
}

const result = calculateEarnings(basicSalary, benefits);



const resultMessage = `
    Basic Salary: Ksh ${result.basicSalary.toFixed(2)} 
    Benefits: Ksh ${result.benefits.toFixed(2)}
    Total Salary: Ksh ${result.totalSalary.toFixed(2)}
    PAYE (Tax): Ksh ${result.paye.toFixed(2)}
    NHIF Deduction: Ksh ${result.nhifDeduction.toFixed(2)}
    NSSF Deduction: Ksh ${result.nssfDeduction.toFixed(2)}
    `
    console.log(resultMessage)
}