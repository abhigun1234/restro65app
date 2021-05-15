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
    axios.get('http://192.168.1.109:8080/getMenuDetails').then(response => {
      console.log("response", response.data)
      this.setState({ restaurentData: response.data.menuDetails })
      //    this.data=response.data.menuDetails
    })
  }
  render() {
    const { restaurentData } = this.state
    return (
      <div class="menu-item">

        {/* { Menu.map(menu=>{return(<h2>{menu.name}</h2>)})} */}
        <div className="card-name">
          {Menu.map(menu => {
            return (<Card style={{ width: '18rem' }}>
              <Card.Img className="img-menu" variant="top" src={menu.img} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  {menu.name}
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
