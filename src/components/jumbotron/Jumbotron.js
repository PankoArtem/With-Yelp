import React from 'react'

export const Jumbotron = () => {
    return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Hii, this app uses Yelp public API</h1>
            <p className="lead">For a valid result please fill search prompts strings using English. 
            For this API version you will recieve valid results only for locations from Europe and USA</p>
        </div>
    </div>
    )
}