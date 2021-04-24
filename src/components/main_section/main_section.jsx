import React from 'react';
import BingoContainer from '../bingo_container/bingo_container.jsx';
import '../../index.css';

class MainSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="main_section flex">
                    <BingoContainer />
                </div>
            </>
        )
    }
}

export default MainSection;