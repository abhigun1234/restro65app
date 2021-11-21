import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RestaurentDetails from './component/RestaurentDetails'
import RestaurentList from './component/RestaurentList'
import { Navbar, Nav } from "react-bootstrap"
import RestaurentHome from './component/RestaurentHome'
import MenuForm from './component/MenuForm';
import Login from './component/Login';
import AddToCart from './component/AddToCart';
import Register from './component/Register';
function App() {
  return (
    <div className="App">
      <MenuForm></MenuForm>
      {/* <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">My Restro</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/list">RestaurentList</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/details">RestaurentDetails</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/login">Login</Link></Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>

        <Route path='/list'>
          <RestaurentList />
        </Route>
        <Route path='/details'>
          <RestaurentDetails />
        </Route>
        <Route exact path='/'>
          <RestaurentHome />
        </Route>
        <Route  path='/login'>
          <Login />
        </Route>
        <Route  path='/register'>
          <Register />
        </Route>
      </Router> */}
      
    </div>
  );
}

export default App;
