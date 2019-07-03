import React from 'react';
import '../assets/style/Footer.scss';
import { Alert } from 'reactstrap';

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <Alert  color="light">intern2021_Summer_Naridukakazuki Web react App</Alert>
            </footer>
        );
    }
}

export default Footer;