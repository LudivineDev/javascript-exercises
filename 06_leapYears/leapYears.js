const leapYears = function(year) {

const divisibleby4 = (year % 4 === 0);
const century = (year % 100 === 0);
const divisibleby400 = (year % 400 === 0);

if (divisibleby4 && (!century || divisibleby400))
    {return true;
    }
    
    else return false;

}

// Do not edit below this line
module.exports = leapYears;
