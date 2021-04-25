import React from 'react';
import './side_bar.css';
import '../../index.css';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="side_bar">
                    <div className="side_bar_logo_container">
                        <img className="side_bar_logo" src="https://image-test-ssk.s3.amazonaws.com/BDE.png" alt=""/>
                    </div>
                    <div className="side_bar_welcome flex">
                        <p className="welcome_text">Welcome to</p>
                        <h1 className="welcome_event">Football Masters</h1>
                    </div>
                    <div className="bottom_image flex">
                        <img className="side_bar_logo_bottom" src="https://image-test-ssk.s3.amazonaws.com/BDE.png" alt=""/>
                    </div>
                </div>
            </>
        )
    }
}

export default SideBar;