import React from 'react';

type CardProps = {
    content?: string
}

const Card: React.FC<CardProps> = ({ content }) => {
    return (
        <article className='card'>
            <p>{content}</p>
        </article>
    )
};


export default Card;