import React from 'react';

const NumericInput = props => {
    return (
        <div className="col-md-3">
            <label>{props.title}</label>
            <input
                type="text"
                className="form-control"
                value={props.value}
                onChange={props.onChange} />
        </div>
    );
};

class MortgageForm extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <form>
                <div className="row panel-body">
                    <NumericInput title="Loan Amount"
                        onChange={this.props.updateAmount}
                        value={this.props.amount} />
                    <NumericInput title="Loan Term (Years)"
                        onChange={this.props.updateTerm}
                        value={this.props.term} />
                    <NumericInput title="Interest Rate"
                        onChange={this.props.updateRate}
                        value={this.props.rate} />
                    <NumericInput title="Extra Principal"
                        onChange={this.props.updateExtra}
                        value={this.props.extra} />
                </div>
            </form>
        );
    }
}

export default MortgageForm;