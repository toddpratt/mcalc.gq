import React from 'react';
import { Table } from 'reactstrap';

const ResultRow = props => (
    <tr>
        <th className="col-md-6">{props.name}</th>
        <td className="col-md-6 text-right">{props.value}</td>
    </tr>
);

const ResultsTable = props => (
    <Table className="results-table col-md-6">
    <tbody>
        <ResultRow name="Monthly Payment" value={props.payment} />
        <ResultRow name="Total Loan Cost" value={props.cost} />
        <ResultRow name="Total Interest" value={props.interest} />
        <ResultRow name="Number of Payments" value={props.payments} />
    </tbody>
    </Table>
);

export default ResultsTable;