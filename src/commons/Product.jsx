import React from 'react'
import '../assets/css/producto.css'
const Product = (  {p,img} ) => {
  return (
    <div >
     
     
        <>
          <div>
            <div key={p.id}>
              <div className="columna">

                <div className="laInfo">
                  <h1>{p.name}</h1>
                  <img src={img} width="100%" alt="" />
                  
                </div>

                <div className="info2">
                <p>{p.description}</p>
                </div>


              </div>
            </div>
          </div>
        </>
     
    
    </div>
  )
}

export default Product