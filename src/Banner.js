import React from 'react';

const Banner = props => {
    return (
        <div className="page-header panel panel-default jumbotron">
            <h3 className="panel-header text-center">Mortgage Calculator</h3>

            <div className="panel-body">
                <p>Want to know how much money you'll
                save and how much faster you'll
                pay off your loan if you make principal
                payments?  This is where you want to
        be.</p>

                <p>None of the data you enter on this
                page will be transmitted anywhere else,
        not even back to this site.</p>
            </div>

        </div>
    );
};

export default Banner;