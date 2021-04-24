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
                    {/* <div>
                        <img src={this.props.icon} alt="Sports"/>
                    </div>
                    <div>{this.props.title}</div> */}
                </div>
                
            </>
        )
    }
}

export default BingoCard;