import React, {useState} from 'react'
import { Link } from "react-router-dom";
function SingleScreen(props) {



const  handelDelete=(id)=>{
  console.log('id from child single screeen' , id)
  // emiting the data from child component 
  props.deleteProduct(id)
 }
  return (
    <div>
      <Link to={`/products/${props.product.id}`} style={{textDecoration: 'none'}}>
                <div 
                    className="card mb-3"
                    style={{ width: 18 + "rem" }}
                  >
      <h5>
          <i class="fa fa-align-center" aria-hidden="true">
                <strong>{props.product.title}</strong>
            </i>{" "}
                    </h5>
                    <img
                      src={props.product.category.image}
                      className="card-img-top"
                      alt="product avatar"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        <h5>{props.product.category.name}</h5>
                        <p> <strong>Rs</strong> {props.product.price}</p>
                      </p>
                      
            {/* make sure delete should work without reloading -- id can help you  */}
           {/* lifting up the state   --- passing data from child to parants  -- as props passed from paren tto child */}
           {/* delete from state  -- filter function may b you here  */}
          </div>
          </div>
                </Link>
          <button onClick={()=>handelDelete(props.product.id)}>  delete  </button>

    </div>
  )
}

export default SingleScreen
