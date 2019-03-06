import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

import Banner from './banner';
import MortgageForm from './form';
import ResultsTable from './result';

import './App.css';
import mcalc from './mcalc'


class App extends Component {
    constructor(props) {
        super(props);

        const INITIAL = {
            AMOUNT: 250000,
            TERM: 30,
            RATE: 5.0,
            EXTRA: 200
        }
        
        const r1Stats = mcalc.calcLoanStats(
            INITIAL.RATE, INITIAL.TERM, INITIAL.AMOUNT, 0);
        const r2Stats = mcalc.calcLoanStats(
            INITIAL.RATE, INITIAL.TERM, INITIAL.AMOUNT, INITIAL.EXTRA);

        this.state = {
            amount: 200000,
            rate: 5.0,
            term: 30,
            extra: 200,

            r1payment: r1Stats.payment,
            r1payments: r1Stats.count,
            r1cost: r1Stats.cost,
            r1interest: r1Stats.interest,

            r2payment: r2Stats.payment,
            r2payments: r2Stats.count,
            r2cost: r2Stats.cost,
            r2interest: r2Stats.interest
        };


        this.updateAmount = this.updateAmount.bind(this)
        this.updateTerm = this.updateTerm.bind(this)
        this.updateRate = this.updateRate.bind(this)
        this.updateExtra = this.updateExtra.bind(this)
    }

    updateTerm(ev) {
        const term = parseInt(ev.target.value);
        this.setState((state, props) => {
            const r1Stats = mcalc.calcLoanStats(
                state.rate, term, state.amount, 0);
            const r2Stats = mcalc.calcLoanStats(
                state.rate, term, state.amount, state.extra);
            return {
                term: term,

                r1payment: r1Stats.payment,
                r1payments: r1Stats.count,
                r1cost: r1Stats.cost,
                r1interest: r1Stats.interest,

                r2payment: r2Stats.payment,
                r2payments: r2Stats.count,
                r2cost: r2Stats.cost,
                r2interest: r2Stats.interest
            };
        });
    }

    updateRate(ev) {
        const rate = parseInt(ev.target.value);
        this.setState((state, props) => {
            const r1Stats = mcalc.calcLoanStats(
                rate, state.term, state.amount, 0);
            const r2Stats = mcalc.calcLoanStats(
                rate, state.term, state.amount, state.extra);
            return {
                rate: rate,

                r1payment: r1Stats.payment,
                r1payments: r1Stats.count,
                r1cost: r1Stats.cost,
                r1interest: r1Stats.interest,

                r2payment: r2Stats.payment,
                r2payments: r2Stats.count,
                r2cost: r2Stats.cost,
                r2interest: r2Stats.interest
            };
        });
    }

    updateAmount(ev) {
        const amount = parseInt(ev.target.value);
        this.setState((state, props) => {
            const r1Stats = mcalc.calcLoanStats(
                state.rate, state.term, amount, 0);
            const r2Stats = mcalc.calcLoanStats(
                state.rate, state.term, amount, state.extra);
            return {
                amount: amount,

                r1payment: r1Stats.payment,
                r1payments: r1Stats.count,
                r1cost: r1Stats.cost,
                r1interest: r1Stats.interest,

                r2payment: r2Stats.payment,
                r2payments: r2Stats.count,
                r2cost: r2Stats.cost,
                r2interest: r2Stats.interest
            };
        });
    }

    updateExtra(ev) {
        const extra = parseInt(ev.target.value);
        this.setState((state, props) => {
            const r1Stats = mcalc.calcLoanStats(
                state.rate, state.term, state.amount, 0);
            const r2Stats = mcalc.calcLoanStats(
                state.rate, state.term, state.amount, extra);
            return {
                extra: extra,

                r1payment: r1Stats.payment,
                r1payments: r1Stats.count,
                r1cost: r1Stats.cost,
                r1interest: r1Stats.interest,

                r2payment: r2Stats.payment,
                r2payments: r2Stats.count,
                r2cost: r2Stats.cost,
                r2interest: r2Stats.interest
            };
        });
    }

    render() {
        return (
            <Container>
                <Banner />
                <MortgageForm 
                        amountChanged={this.updateAmount}
                        amount={this.state.amount}

                        rateChanged={this.updateRate}
                        rate={this.state.rate}

                        termChanged={this.updateTerm}
                        term={this.state.term}

                        extraChanged={this.updateExtra}
                        extra={this.state.extra} />

                <ResultsTable
                        payment={this.state.r1payment}
                        payments={this.state.r1payments}
                        interest={this.state.r1interest}
                        cost={this.state.r1cost} />

                <ResultsTable
                        payment={this.state.r2payment}
                        payments={this.state.r2payments}
                        interest={this.state.r2interest}
                        cost={this.state.r2cost} />
            </Container>
        );
    }
}

export default App;
