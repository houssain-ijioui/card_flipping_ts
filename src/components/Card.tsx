import React from 'react';

type CardProps = {
    value: number;
    handleClick: (content: number) => void,
    rotate: boolean
}

const Card: React.FC<CardProps> = ({ value, handleClick, rotate }) => {

    return (
        <article className={`card ${rotate ? "card-rotated": "card-not-rotated"} `} onClick={() => handleClick(value)} >
            <p className={`value ${rotate ? "value-rotated": "value-not-rotated"}`}>{value}</p>
        </article>
    )
};


export default Card;