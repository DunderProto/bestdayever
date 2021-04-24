import React from 'react';
import './bingo_card.css';
import '../../index.css';

class BingoCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>  
                <div className="bingo_card flex">
                    <div className="bingo_card_icon_container">
                        <img className="bingo_card_icon" src={this.props.icon} alt="Sports"/>
                    </div>
                    <div className="bingo_card_title">{this.props.title}</div>
                </div>
                
            </>
        )
    }
}

export default BingoCard;