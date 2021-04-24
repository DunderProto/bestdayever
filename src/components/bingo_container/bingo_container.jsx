import React from 'react';
import './bingo_container.css';
import BingoCard from '../bingo_card/bingo_card.jsx';

const bingo = require('../../bingo.json');

class BingoContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {bingo.map(card => {
                    return (
                        <BingoCard title={card['title']} icon={card['icon']} />
                    )
                })}
            </>
        )
    }
}

export default BingoContainer;