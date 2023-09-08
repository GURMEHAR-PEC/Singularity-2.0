import React from 'react';
import './Societies.css';

export default function Card(props) {
    return (
        <>
            <div className='societiesCard'>
                <img src={props.logo} alt={"Loading..."}/>
                <h1> {props.title} </h1>
                <p> {props.desc} </p>
                <a href={props.link} target="_blank" rel='noreferrer'>
                    <h3> Read more </h3>
                </a>
            </div>
        </>
    )
}