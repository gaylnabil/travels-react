import React from 'react'
import Card from './Card';
import data from '../data/Data';

const Cards = () =>{
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    return (
        <section className="cards">
            {
                data.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            item = {item}
                        />
                    )
                })
            }

        </section>
    )
}

export default Cards;
