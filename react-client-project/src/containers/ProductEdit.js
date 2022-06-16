import React, { Component , useEffect, useState } from "react";
import {BrowserRouter as Router, Link, NavLink, Redirect, Route } from "react-router-dom";
import axios from "axios";

class ProductEdit extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
            id: "default",
            title: "default",
            price: "default",
            qty: "default",
            PCategory:"default",
            PType:"default",
            CompanyBrand: "default",
            available:"default",
            img:"default",
            isaunthenticated:"flase",
            resdata:""  ,
            Nstatus: "0",
            product: {}
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
            const details = {
                id: this.state.id,  
             };
    }
    
    //console.log("details:", details);
    //console.log("State details:",details );
    
    handleSubmit = (event) => {
        event.preventDefault();
            const details = {
                id: this.state.id,
                title: this.state.title,
                price: this.state.price,
                qty: this.state.qty,
                PCategory: this.state.PCategory,
                PType: this.state.PType,
                CompanyBrand: this.state.CompanyBrand,
                available: this.state.available,
                img: this.state.img,

             };
    
    console.log("details:", details);
    
    
    //axios.put('http://localhost:5573/api/products'+this.state.id,details)         

    axios.put("http://localhost:8002/product/"+this.state.id,details)
        .then((response) => {
            console.log("Event Added Successfully..!!" + response);
            console.log("response.data",response.data);
            console.log("response.status",response.status);
            console.log("response.statusText",response.statusText);
            console.log("response.headers",response.headers);
            console.log("response.config",response.config);
            //this.setState({ isaunthenticated:  })

            console.log("Nstatus",this.state.Nstatus);
            this.setState({ Nstatus: response.status });
            this.setState({ isaunthenticated:"true" });
            console.log("Nstatus",this.state.Nstatus);
            console.log("isaunthenticated",this.state.isaunthenticated);

            })
               
        .catch((error) => {
        console.log("Custome Error",error);
        this.setState({ isaunthenticated:"false" });
        console.log("Custome Error - isaunthenticated",this.state.isaunthenticated);

         });
    };


    handleChange = (event) => {
        event.preventDefault();
            const { name, value } = event.target;
            this.setState({ [name]: value });
            console.log(this.state);
    };

    render() {


        if (this.state.isaunthenticated =="true"){
            return (<Redirect to={'/AdminList'}/>)
            }
        if (this.state.isaunthenticated =="false"){
            return (<Redirect to={'/home'}/>)
            }
            

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
                            <h2 className="display-5 fw-bold">Product_Update</h2>
                            <br />
                         
                         
                         <div className="container">
                            <form onSubmit={this.handleSubmit}>
                               
                                <div className="form-group">
                                    <label>Product_id</label>
                                    <input type="text" className="form-control" name="id" required onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label>Product_title</label>
                                    <input type="text" className="form-control" name="title" required onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label>Product_price</label>
                                    <input type="text" className="form-control" name="price" required onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label>Product_qty</label>
                                    <input type="text" className="form-control" name="qty" required onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label>Product_PCategory</label>
                                    <input type="text" className="form-control" name="PCategory" required onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label>Product_PType</label>
                                    <input type="text" className="form-control" name="PType" required onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label>Product_CompanyBrand</label>
                                    <input type="text" className="form-control" name="CompanyBrand" required onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label>Product_available"</label>
                                    <input type="text" className="form-control" name="available" required onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label>Product_img</label>
                                    <input type="text" className="form-control" name="img" required onChange={this.handleChange} />
                                </div>
                             
                        <br />
                        <br />
                        <input type="submit" className="btn btn-warning" value="Edit Event"  />                        
                        </form>                    
                       </div>


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
    
   
    
export default ProductEdit;