import { Fragment } from "react";
import PropTypes from 'prop-types';

// Functional components
const PrimeraApp = ({greeting, subtitle}) => {
    // const greeting = 'Hola mundo cost';

    return (
        <Fragment>
            <h1>{ greeting }</h1>
            <p>{ subtitle }</p>
        </Fragment>
    );
};

PrimeraApp.propTypes = {
    greeting: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitle: 'Its a subtitle'
}

export default PrimeraApp;