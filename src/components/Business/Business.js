import React from 'react';



  
  export const Business = props => {
     return <div className='col-12 col-md-4 col-lg-3 mb-4 mx-auto'>
       <div className='card p-0'>
        <h5 className='card-title text-center'>
             {props.business.name}
         </h5>
         <img src={props.business.image_url} className='card-img' alt='logo' height='200px'/>
         <div className="card-body d-flex justify-content-between p-0">
             <div>
                <div>{props.business.name}</div>
                <div>{props.business.categories[0].title}</div>
                <div>{props.business.location.city}</div>
             </div>
             <div>
                <div><span className="badge badge-info">{props.business.rating}</span> stars</div>
                <div>{props.business.review_count} reviews</div>
                <div>{props.business.location.adress1 ? props.business.location.adress1 : props.business.location.zip_code}</div>
             </div>
         </div>
         </div>
     </div>
  }