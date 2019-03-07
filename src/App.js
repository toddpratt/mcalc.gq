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
            amount: 200000,
            rate: 5.0,
            term: 30,
            extra: 200
        }
        
        const stats = this.getStats(
            INITIAL.rate, INITIAL.term, INITIAL.amount, INITIAL.extra);

        this.state = Object.assign(INITIAL, stats);

        this.updateAmount = this.updateAmount.bind(this)
        this.updateTerm = this.updateTerm.bind(this)
        this.updateRate = this.updateRate.bind(this)
        this.updateExtra = this.updateExtra.bind(this)
        this.getStats = this.getStats.bind(this)
    }

    getStats(rate, term, amount, extra) {
        const r1 = mcalc.calcLoanStats(rate, term, amount, 0)
        const r2 = mcalc.calcLoanStats(rate, term, amount, extra);
        return {
            r1payment: r1.payment,
            r1payments: r1.count,
            r1cost: r1.cost,
            r1interest: r1.interest,

            r2payment: r2.payment,
            r2payments: r2.count,
            r2cost: r2.cost,
            r2interest: r2.interest
        };
    }

    updateTerm(ev) {
        const self = this;
        const term = parseInt(ev.target.value);
        this.setState((state, props) => {
            const stats = self.getStats(
                    state.rate, term, state.amount, state.extra);
            stats.term = term;
            return stats;
        });
    }

    updateRate(ev) {
        const self = this;
        const rate = parseInt(ev.target.value);
        this.setState((state, props) => {
            const stats = self.getStats(
                rate, state.term, state.amount, state.extra);
            stats.rate = rate;
            return stats;
        });
    }

    updateAmount(ev) {
        const self = this;
        const amount = parseInt(ev.target.value);
        this.setState((state, props) => {
            const stats = self.getStats(
                    state.rate, state.term, amount, state.extra);
            stats.amount = amount;
            return stats;
        });
    }

    updateExtra(ev) {
        const self = this;
        const extra = parseInt(ev.target.value);
        this.setState((state, props) => {
            const stats = self.getStats(
                    state.rate, state.term, state.amount, extra);
            stats.extra = extra;
            return stats;
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
