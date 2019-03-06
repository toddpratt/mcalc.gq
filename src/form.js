import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';

const ParameterInput = props => (
    <td className="col-md-3">
        <FormGroup>
            <Label for={props.name}>{props.title}</Label>
            <Input id={props.name} 
                    defaultValue={props.default}
                    onChange={props.changed} />
        </FormGroup>
    </td>
);

const MortgageForm = (props) => (
    <Form>
    <Table>
        <tbody>
        <tr>
            <ParameterInput name="loan-amount"
                    changed={props.amountChanged}
                    default={props.amount}
                    title="Loan Amount" />
            <ParameterInput name="interest-rate"
                    changed={props.rateChanged}
                    default={props.rate}
                    title="Interest Rate (Percent)" />
            <ParameterInput name="loan-term"
                    changed={props.termChanged}
                    default={props.term}
                    title="Loan Term (Years)" />
            <ParameterInput name="extra-principal"
                    changed={props.extraChanged}
                    default={props.extra}
                    title="Extra Principal" />
        </tr>
        </tbody>
    </Table>
</Form>
);

export default MortgageForm;