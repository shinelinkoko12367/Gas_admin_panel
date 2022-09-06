import React,{ Component } from 'react';

class LogoutPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        localStorage.removeItem('ACCESS_TOKEN');
        window.location.replace('/login');
    }

    render(){
        return(
            <>
            </>
        )
    }
}

export default LogoutPage;