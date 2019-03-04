
function calcLoanPayment(rate, term, principal) {
    var j = rate / 1200;
    var n = term * 12;
    var p = principal;
    var s = Math.pow(1 + j, n);
    return p * (j * s) / (s - 1);
}

function calcLoanStats(rate, term, principal, extra) {
    const normalPayment = calcLoanPayment(rate, term, principal);
    const paymentAmount = normalPayment + extra;
    term = term * 12;

    let totalInterest = 0;
    let totalCost = 0;
    let paymentCount = 0;
    let remainingPrincipal = principal;

    while(remainingPrincipal > 0 && paymentCount <= term) {
        const interestPayment = rate / 1200 * remainingPrincipal;
        const principalPayment = normalPayment - interestPayment;

        totalInterest += interestPayment;
        totalCost += paymentAmount;
        paymentCount++;

        principal -= (principalPayment + extra);
    }

    return {
        payment: paymentAmount,
        cost: totalCost,
        interest: totalInterest,
        count: paymentCount
    };
}

export default {
    calcLoanPayment: calcLoanPayment,
    calcLoanStats: calcLoanStats
};