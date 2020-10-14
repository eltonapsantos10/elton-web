import React, { Fragment } from 'react'
import {Nav, Navbar,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'


export const NavigationBar = () => {
    return (
        <React.Fragment>
    
    <Navbar bg="dark" expand="lg" fixed="top">
    <img src="https://img.icons8.com/color/48/000000/film-soundtracks.png"/>
  <Navbar.Brand href="#home"><h5 id="teste">Elton Santos ® <p id="oi"> Web Developer </p> </h5></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"><h5>Em Cartaz</h5></Nav.Link>
      <Nav.Link href="#home"><h5 id="teste2">Lançamentos</h5></Nav.Link>
      <Nav.Link href="#home"><h5>Blockbuster</h5></Nav.Link>
      <Nav.Link href="#"><h5 id="teste3">Novidades</h5></Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Filmes,Séries e Kids " className="mr-sm-2" />
      <Button variant="outline-primary">Procurar...</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>


        </React.Fragment>

    )

}