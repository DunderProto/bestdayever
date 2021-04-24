import React from 'react';
import BingoContainer from '../bingo_container/bingo_container.jsx';

class MainSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div>
                    <div></div>
                    <div></div>
                    <BingoContainer />
                </div>
            </>
        )
    }
}

export default MainSection;