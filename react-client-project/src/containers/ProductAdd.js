import React, { Component } from "react";
import {BrowserRouter as Router, Link, NavLink, Redirect, Route } from "react-router-dom";
import axios from "axios";

class ProductAdd extends Component {
  
  
    constructor(props) {
        super(props);
            this.state = {
                title: "default",
                price: "default",
                qty: "default",
                PCategory: "default",
                PType: "default",
                CompanyBrand: "default",
                available: "default",
                img: "default",
                        };
            }
  
   handleSubmit = (event) => {
        event.preventDefault();
            const details = {
                title: this.state.title,
                price: this.state.price,
                qty: this.state.qty,
                PCategory: this.state.PCategory,
                PType: this.state.PType,
                CompanyBrand: this.state.CompanyBrand,
                available: this.state.available,
                img: this.state.img,
             };
    
    console.log(details);
    
    //http://localhost:5573/api/products
    //axios.post('http://localhost:5573/api/products'+details)

    axios.post("http://localhost:8001/product", details)
      .then((result) => {
            console.log("Event Added Successfully..!!" + result.data);
            })
      .catch((error) => {
        console.log(error);
         });
    };

    handleChange = (event) => {
        event.preventDefault();
            const { name, value } = event.target;
            this.setState({ [name]: value });
            console.log(this.state);
    };

  render() {
    return (
        
        <>
        <div className="container-xl" >

        <div className="sidebar">
            <a className="active" href="#Admin">Admin-HomePage</a>
                <Link to="/ProductView"><button className="btn btn-link">View Product</button></Link>
                <Link to="/ProductAdd"><button className="btn btn-link">Add Product</button></Link>
                <Link to="/ProductDelete"><button className="btn btn-link">Delete Product</button></Link>
                <Link to="/ProductEdit"><button className="btn btn-link">Edit Product</button></Link> 
                <Link to="/ProductSearch"><button className="btn btn-link">ProductSearch</button></Link>   
                <Link to="/UserView"><button className="btn btn-link">UserView</button></Link>        
        </div>

        <div className="content">
            <h2></h2>
            <div className="container">
                <div className="row">
                        <div className="col-sm"></div>
                           
                <div className="col-sm">    
                <br /><br />
                        <h2 className="display-5 fw-bold">Product_Add</h2>
                        <br />
                        
                        <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Product_Name</label>
                                    <input type="text" className="form-control" name="title" required onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Product_Price</label>
                                    <input type="text" className="form-control" name="price" required onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Product_qty</label>
                                    <input type="text" className="form-control" name="qty" required onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Product_category</label>
                                    <input type="text" className="form-control" name="PCategory" required onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Product_type</label>
                                    <input type="text" className="form-control" name="PType" required onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>CompanyBrand</label>
                                    <input type="text" className="form-control" name="CompanyBrand" required onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Avialability</label>
                                    <input type="text" className="form-control" name="available" required onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Product Image</label>
                                    <input type="text" className="form-control" name="img" required onChange={this.handleChange} />
                                </div>
                        <br />
                        <br />
                        <input type="submit" className="btn btn-warning" value="Add Event"  />
                        <NavLink className="btn btn-info" to="/AdminList"> Back to AdminList </NavLink>
                        </form>

                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>    
        </div>    

        </div>
        </>                 
    );
  }
}
export default ProductAdd;