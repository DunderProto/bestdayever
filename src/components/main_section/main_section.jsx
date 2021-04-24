import React from 'react';
import './main_section.css';
import BingoContainer from '../bingo_container/bingo_container.jsx';
import '../../index.css';

class MainSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="main_section">
                    <div className="main_section_header">
                        <h1>Welcome,</h1>
                        <h1>Isaac Nam</h1>
                    </div>
                    <div className="main_section_description">
                        <p>Below is your bingo board. As actions occur during the event,
                            you will see the related boxes marked off. When you get "X" in
                            a row, you can call BINGO!
                        </p>
                    </div>
                    <BingoContainer />
                </div>
            </>
        )
    }
}

export default MainSection;