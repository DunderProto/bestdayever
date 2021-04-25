import React from 'react';
import './bingo_container.css';
import BingoCard from '../bingo_card/bingo_card.jsx';
import '../../index.css';

const bingo = require('../../bingo.json');

class BingoContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="bingo_container flex">
                    {bingo.map(card => {
                        if (card['title'] == "Free") {
                            return (
                                <BingoCard className="free_card" title={card['title']} icon={card['icon']} />
                            )
                        } else {
                            return (
                                <BingoCard title={card['title']} icon={card['icon']} />
                            )
                        }
                    })}
                </div>
            </>
        )
    }
}

export default BingoContainer;