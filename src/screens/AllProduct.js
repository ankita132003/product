import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleScreen from "../Components/SingleScreen";
import { useNavigate } from "react-router-dom";

function AllProduct() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({
    id: null,
    email: "",
    name: "",
    password: "",
    role: "",
    avatar: "",
  });

  const navigateAllProduct = () => {
    navigate("/login");
  };

  async function getUser() {
    await axios
      .get("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((res) => {
        navigateAllProduct();
      });
  }
  async function productData() {
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
    getUser();
  }, []);
  async function deleteProduct(id) {
    console.log("delete from parent ", id);
    await axios
      .delete(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data === true) {
          setProducts(products.filter((product) => product.id !== id));
        }
      });
  }
  return (
    <div>
      <div className="container">
        <div className="row">
        <div className="col-4">
            <i class="fa fa-align-center" aria-hidden="true">
              <strong>
                <h1 style={{ textAlign: "center" }}> Products </h1>
              </strong>
            </i>
          </div>
          <hr/>
        </div>
        
        <div className="row">
          {/* <div className="col-1"></div> */}
        <div className="col-md-1 col-sm-2 ">
                  <img src={user.avatar} className="img-thumbnail rounded-circle" alt="User Avatar" height='75' width='75' />
                </div>
          <div className="col-md-2 col-sm-4">
            <div>
              <i class="fa fa-align-center" aria-hidden="true">
                <strong>
                  <h2>{user.name}</h2>
                </strong>
              </i>
            </div>
            <div>
              <h5>{user.email}</h5>
            </div>
          </div>
       <div className="col-md-7 col-sm-2"></div>
          <div className="col-md-2 col-sm-4" >
            <button >Logout</button>
          </div>
        </div>

        <div className="row m-4">
          {products.map((product) => (
            <div key={product.id} className="col-8 col-md-3 ">
              <SingleScreen product={product} deleteProduct={deleteProduct} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProduct;
