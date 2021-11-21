import axios from 'axios';
import React, { Component } from 'react';

class MenuForm extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            price:'',
            description:''
        }
    }
    handleUsernameChange=(event)=>{
    this.setState({name:event.target.value})
    }
    handlePriceChange=(event)=>{
        this.setState({price:event.target.value})
        }
    handleDescriptionChange=(event)=>{
        this.setState({description:event.target.value})
        }
        handleSubmit=e=>{
                e.preventDefault()
                console.log(this.state)
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'JWT fefege...'
                  }
                  
                axios.post('https://justolearnapp.herokuapp.com/api/addproduct/',this.state,{headers:headers}).then(response=>{
                    console.log("response",response)
                }).catch(error=>{

                    console.log("error",error)
                })
            }
    render() {
        return (
            <div>
                <h1>Enter Menu Details</h1>
            <form onSubmit={this.handleSubmit}> 
                <div>

                    <label>
                        name
                    </label>
                    {/* <input type='text'  /> */}
                    <input value={this.state.name} className="form-control" name="name" id="exampleFormControlInput1" placeholder="Enter your name" onChange={this.handleUsernameChange}/>
                    <label>
                        price
                    </label>
                    {/* <input type='text' value={this.state.price} onChange={this.handlePriceChange}/> */}
                    <input value={this.state.price} className="form-control" name="price" id="exampleFormControlInput1" placeholder="Enter Price" onChange={this.handlePriceChange}/>
   
                    <label>
                        description
                    </label>
                    {/* <input type='text' value={this.state.description} onChange={this.handleDescriptionChange}/> */}
                    <input value={this.state.description} name="description"  className="form-control" id="exampleFormControlInput1" placeholder="Enter Description" onChange={this.handleDescriptionChange}/>
                   <br/>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
              
            </form>
            </div>
            
  
        );
    }
}

export default MenuForm;   