import React from 'react';

export const Searchbar = props => {

    const handleLocationChange = event => {
        props.onLocationChange(event.target.value)
    }

    const handleTermChange = event => {
        props.onTermChange(event.target.value)
    }

    return(
        <form className="mb-3">
            <div className="row">
                <div className="col-12 col-md-6 mb-2">
                    <input type="text" className="form-control" placeholder="Business" onChange={handleTermChange}/>
                </div>
                <div className="col-12 col-md-6">
                    <input type="text" className="form-control" placeholder="Where" onChange={handleLocationChange} required />
                </div>
                <input type="submit"  className="btn btn-outline-primary mt-3 mx-auto px-5" value="send" onClick={props.onClick}/>
            </div>    
        </form>
    )
}