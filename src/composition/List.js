import React from 'react';
import Card from './Card.js';
import './List.css';

function List(props) {
    
    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
                <button type="button" onClick={() => {props.onAddRandomCard(props.id)}}>Add random card</button>
            </header>
            <div className="List-cards">
                {props.cards.map(card => 
                    <Card 
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    content={card.content}
                    onDeleteItem={props.onDeleteItem}
                    />
                )}
            </div>
        </section>
    );
}

export default List;