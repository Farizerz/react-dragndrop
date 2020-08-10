import React from 'react'

const Board = (props) => {
    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card);
    }
    return (
        <div>
            { props.children }
        </div>
    )
}

export default Board
