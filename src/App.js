import './App.css';
import Welcome from './mywork/welcome';
import Menu from './mywork/menu';
import Add from './mywork/add';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">PubHub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
      <Route path='/' element={<Welcome />}> exact </Route>
      <Route exact path='/add' element={<Add />}> </Route>
      <Route path='/menu' element={<Menu />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
