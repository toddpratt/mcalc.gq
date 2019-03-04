import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

import Banner from './banner';
import MortgageForm from './form';
import ResultsTable from './result';

import './App.css';
import mcalc from './mcalc'


class App extends Component {
    constructor() {
        super();
        this.state = {
            amount: 200000,
            rate: 5.0,
            term: 30,
            extra: 200
        };
    }

    updateTerm(newTerm) {
        console.log(newTerm);
        this.setState({
            term: parseInt(newTerm)
        })
    }

    updateRate(newRate) {
        this.setState({
            rate: parseInt(newRate)
        });
    }

    updateAmount(newAmount) {
        this.setState({
            amount: parseInt(newAmount)
        })
    }

    updateExtra(newExtra) {
        this.setState({
            extra: parseInt(newExtra)
        })
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

                <ResultsTable payment={this.state.amount}
                        payments={this.state.term}
                        interest={this.state.rate} cost="88888" />

                <ResultsTable payment="43434" payments="30"
                        interest="3333" cost="88888" />
            </Container>
        );
    }
}

export default App;
