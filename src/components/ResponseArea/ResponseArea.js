import React from 'react'
import { Business } from '../Business/Business'


export const ResponseArea = props =>{

   return (
    <div className='container'>
        <div className="row">
            {props.businesses.map(business => {
                return <Business key={business.id} business={business}/>
            })}    
        </div>
    </div>
   )
}
