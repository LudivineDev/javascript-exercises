const sumAll = function(leftnum, rightnum) {
let total = 0;
if (
    leftnum<0 || 
    rightnum<0 || 
    !Number.isInteger(leftnum) ||
    !Number.isInteger(rightnum)
){
    return `ERROR`;
}
for  (i=Math.min(leftnum, rightnum) ; i<=Math.max(leftnum, rightnum) ; i++ )
    {
    total +=i;
}
return total;
}

// Do not edit below this line
module.exports = sumAll;
