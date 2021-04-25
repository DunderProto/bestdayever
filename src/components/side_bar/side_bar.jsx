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
                    <div className="side_bar_logo"></div>
                    <div className="side_bar_welcome"></div>
                    <div className="bottom_image"></div>
                </div>
            </>
        )
    }
}

export default SideBar;