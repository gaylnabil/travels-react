import React from 'react'
import moment from 'moment';
const Card = ({ item }) =>{
    const url = process.env.PUBLIC_URL;
    return (
        <div className="card">
            <img className="card--img" src={`${url}/images/${item.image}`} alt="Mount Fuji" />
            <div className="card--body">
                <ul className="card--location">
                    <li>Japan</li>
                    <li>View on Google</li>
                </ul>
                <h2 className="card--title">{item.title}</h2>
                <p className="card--date">{ moment(item.startDate).format("D MMM YYYY") } - { moment(item.endDate).format("D MMM YYYY") }</p>
                <p className="card--description">{item.description}</p>
            </div>
        </div>
    )
}

export default Card;
