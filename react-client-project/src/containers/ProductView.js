import React, { Component, useState } from "react";
import axios from "axios";
import {BrowserRouter as Router, Link, NavLink, Redirect, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class ProductView extends Component {
        constructor(props) {
            super(props);
            this.state = {
                events: [],
            }
        };

        componentDidMount() {

            
            //axios.get('http://localhost:5573/api/products')

            axios.get('http://localhost:8002/product')
                .then(result => {
                    this.setState({ events: result.data })
                    console.log(this.state.events);
                })
                .catch(error => {
                    console.log("Error Caught : " + error)
                })
            }

    render(){
      return( 
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


        <div className="container-xl">
                <div className="image-container justify-content-start" >
                    <div className='overlay align-items-center justify-content-center'>  
                        <section className="py-5 text-center container"> 
                            <div className="">
                            <div className="col-lg-6 col-md-8 mx-auto">
                                <h2 className="fw-light" style={{color: "black"}}>Product View</h2>
                                <p className="lead text-muted" style={{color: "black"}}>Please Scroll down to find the Medicine</p>
                                <p className="lead text-muted" style={{color: "black"}}></p>
                            </div>
                            </div>
                        </section>
                
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {this.state.events.map((event,index) =>{
                                        return(
                                                <div className="col">
                                                <div className="card shadow-sm">
                                                <img className="d-block w-100 " src={event.img} alt="First slide" width="300px" height="300px" />
                        
                                <div className="card-body w-100">
                                    <p className="card-text" >{event.title}</p>
                                    <p className="card-text" >Id - {event.id}  ,   Price - {event.price} , Qty - {event.qty}</p>  
                                    <p className="card-text" ></p>       
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group"></div>
                                        <small className="text-muted">{event.available}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                </div>
                </div>
                </div>
        </div>
        </div>    

</div>
</>   
    )
  }
}

export default ProductView;