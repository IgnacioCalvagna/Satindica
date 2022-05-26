import React from "react";

const Card = ( {p } ) => {
  return (
    <>
    <div className="col-4 miCard" >
         <div className="card" key={p.id}>
           <div className="card-header">
             <h2>
               {p.titulo} 
             </h2>
           </div>
           <div>
             <img src={p.img} className="card-img-top" alt="..."></img>
           </div>
           <div className="card-body">
             <h2 className="card-title">{p.name}</h2>
             <p >
              {p.description}
             </p>
             <p className="card-text">
              Precio ${p.price}
             </p>
             <button
               type="button"
               className="btn btn-info"
             >
               Ver mas ...
             </button>
           </div>
           
         </div>
       </div>

</>
  );
};

export default Card;
