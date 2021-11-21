import React, { Component } from 'react';
import axios from 'axios'
import { Table, Card, Button } from "react-bootstrap"
import Menu from '..//menu.json'
class RestaurentList extends Component {
  data
  constructor(props) {
    super(props)
    this.state = {
      restaurentData: []
    }
  }
  componentDidMount() {
    axios.get('https://justolearnapp.herokuapp.com/api/addproduct').then(response => {
      // console.log("response", response)
      this.setState({ restaurentData: response.data.result })
      //    this.data=response.data.menuDetails
      console.log("data",this.state.restaurentData)
    })
  }
  render() {
    const { restaurentData } = this.state
    return (
      <div class="menu-item">

        {/* { Menu.map(menu=>{return(<h2>{menu.name}</h2>)})} */}
        <div className="card-name">
          {this.state.restaurentData.map(product => {
            return (<Card style={{ width: '18rem' }}>
              {/* <Card.Img className="img-menu" variant="top" src={menu.img} /> */}
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  {product.name}
                </Card.Text>
                <Card.Text>
                  {product.price}
                </Card.Text>
                <Button variant="primary">Add To Cart</Button>
              </Card.Body>
            </Card>)
          })}
        </div>
        {/* MenuItems
        {
          restaurentData.length ? restaurentData.map(data => <div >

<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Item Name</th>
      <th>Price</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{data.name}</td>
      <td>{data.price}</td>
 
    </tr>
 
  
  </tbody>
</Table>
          </div>) : null
          // {restaurentData.length}
        } */}
      </div>
    );
  }
}

export default RestaurentList;
