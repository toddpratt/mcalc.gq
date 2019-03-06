import React from 'react';
import { Table } from 'reactstrap';

const ResultRow = props => (
    <tr>
        <th className="col-md-6">{props.name}</th>
        <td className="col-md-6 text-right">{props.value}</td>
    </tr>
);

const ResultsTable = props => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "USD"
    });
    return (
        <Table className="results-table col-md-6">
            <tbody>
                <ResultRow name="Monthly Payment" value={formatter.format(props.payment)} />
                <ResultRow name="Total Loan Cost" value={formatter.format(props.cost)} />
                <ResultRow name="Total Interest" value={formatter.format(props.interest)} />
                <ResultRow name="Number of Payments" value={formatter.format(props.payments)} />
            </tbody>
        </Table>
    );
};

export default ResultsTable;