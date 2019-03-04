import mcalc from './mcalc';
import assert from 'assert';

it('calculates payment', () => {
    const payment = mcalc.calcLoanPayment(5, 30, 250000);
    assert(Math.abs(payment - 1342) < 1);
});

it('calculates loan stats,', () => {
   const stats = mcalc.calcLoanStats(5, 30, 250000, 200);
   assert(Math.abs(stats.payment - 1542) < 1);
   assert(Math.abs(stats.cost - 556681) < 1);
   assert(Math.abs(stats.interest - 376041) < 1);
   assert(stats.count === 361);
});