import React from 'react'

const Product = ( {p,id,img} ) => {
  return (
    <div >
     <div >
      {p.id % 2 === 0 ? (
        <>
          <div>
            <div key={id}>
              <div className="columna">
                <div className="laInfo">
                  <h1>{p.name}</h1>
                  <p>{p.description}</p>
                </div>
                <div className="info2">
                  <img src={img} width="75%" alt="" />
                  <div className="precio">
                    <p>
                      Precio <br />${p.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div >
            <div key={id}>
              <div className="columna">
                <div className="info2">
                  <img src={img} width="75%" alt="" />
                  <p>
                    Precio <br />${p.price}
                  </p>
                </div>
                <div className="claInfo">
                  <h1>{p.name}</h1>
                  <p>{p.description}</p>
                </div>
              </div>
            </div>
          </div>
          
        </>
      )}
    </div>
    </div>
  )
}

export default Product