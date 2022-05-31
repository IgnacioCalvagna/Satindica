import React from 'react'

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
                  <div className="precio">
                  <img src={img} width="100%" alt="" />
                    <p>
                      Precio <br />${p.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
     
    
    </div>
  )
}

export default Product