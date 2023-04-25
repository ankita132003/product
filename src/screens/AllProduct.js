import React, { useEffect, useState } from "react";
import axios from "axios";
function AllProduct() {
  const [products, setProducts] = useState([]);

  async function productData() {
    // e.preventDefault();
    await axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((res) => {
        console.log(res.message);
      });
  }

  useEffect(() => {
    productData();
  }, []);

  const openPage = () => {
    console.log("opened");
  };

  return (
    <div>
      <div className="container">
      <i class="fa fa-align-center" aria-hidden="true">
                        <strong><h1 style={{textAlign : 'center'}}> Product</h1></strong>
                      </i>
        <div className="row m-4">
              {products.map((product) => (
                  <div  key={product.id} className="col-8 col-md-3 ">
                  <div 
                    className="card mb-3"
                    onClick={openPage}
                    style={{ width: 18 + "rem" }}
                  >
                    <h5>
                      <i class="fa fa-align-center" aria-hidden="true">
                        <strong>{product.title}</strong>
                      </i>{" "}
                    </h5>
                    <img
                      src={product.category.image}
                      className="card-img-top"
                      alt="product avatar"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        <h5>{product.category.name}</h5>
                        <p> <strong>Rs</strong> {product.price}</p>
                      </p>
                    </div>
                  </div>
                  </div>
              ))}
         
        </div>
      </div>
    </div>
  );
}

export default AllProduct;
