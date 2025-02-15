import React from 'react';

type CardProps = {
    content?: number
}

const Card: React.FC<CardProps> = ({ content }) => {
    return (
        <article className='card'>
            <p className='content'>{content}</p>
        </article>
    )
};


export default Card;