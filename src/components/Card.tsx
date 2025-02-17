import React from 'react';

type CardProps = {
    value: number;
    handleClick: (content: number) => void
}

const Card: React.FC<CardProps> = ({ value, handleClick }) => {

    return (
        <article onClick={() => handleClick(value)} className='card'>
            <p className='content'>{value}</p>
        </article>
    )
};


export default Card;