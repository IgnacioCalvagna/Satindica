import React from 'react'
import '../assets/css/producto.css'
const Product = ( {p,id,img} ) => {
  return (
    <div >
     
     
        <>
          <div>
            <div key={id}>
              <div className="columna">

                <div className="laInfo">
                  <h1>{p.name}</h1>
                  <p>{p.description}</p>
                </div>

                <div className="info2">
                  <img src={img} width="100%" alt="" />
                </div>


              </div>
            </div>
          </div>
        </>
     
    
    </div>
  )
}

export default Product