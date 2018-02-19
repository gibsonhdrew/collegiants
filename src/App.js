import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink as Link } from 'react-router-dom';
import logo from './logo.svg';
import Home from './modules/Home'
import About from './modules/About'
import Services from './modules/Services'
import Terms from './modules/Terms'
import Testimonials from './modules/Testimonials'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <AppBody>
          <Nav>
            <NavItems>
              <Link to={'/'}>
                <div style={{position: 'relative', display: 'inline'}}>
                  <Title>Collegiants</Title>
                </div>
              </Link>
              <Link to={'/about'}>
                <NavItem>About</NavItem>
              </Link>
              <Link to={'/services'}>
                <NavItem>Services</NavItem>
              </Link>
              <Link to={'/terms'}>
              <NavItem>Terms</NavItem>
              </Link>
              <Link to={'/testimonials'}>
                <NavItem>Testimonials</NavItem>
              </Link>
            </NavItems>
          </Nav>
          <Content>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/services' component={Services}/>
            <Route exact path='/terms' component={Terms}/>
            <Route exact path='/testimonials' component={Testimonials}/>
          </Content>
        </AppBody>
      </Router>
    );
  }
}

const AppBody = (props) => (
  <div style={{
    textAlign: 'left'
  }} {...props} />
)

const Nav = (props) => (
  <div style={{
    display: 'inline-block',
    position: 'fixed',
    width: '100vw',
    textAlign: 'left',
    backgroundColor: '#d34747',
    boxShadow: '0px 2px 4px #999',
    paddingTop: '15px',
    height: '47px',
    color: 'white'
  }} {...props} />
)

const NavItems = (props) => (
  <div style={{
    width: '1100px',
    fontWeight: 'bold',
    maxWidth: '100vw',
    margin: '0 auto',
  }} {...props} />
)

const Content = (props) => (
  <p style={{
    paddingTop: '100px',
    width: '1100px',
    maxWidth: '100vw',
    margin: '0 auto',
    fontSize: '1.0em'
  }} {...props} />
)

const NavItem = (props) => (
  <span className='navItem' style={{
    display: 'inline-block',
    fontSize: '1.0em',
    marginRight: '25px'
  }} {...props} />
)

const Title = (props) => (
  <div style={{display: 'inline-block'}}>
    <img src={logo} style={{
      height: '32px',
      position: 'absolute',
      bottom: '-3px',
      left: '-8px',
      filter: 'grayscale(100%)'
    }} alt='app-logo'/>
    <span style={{
      fontSize: '1.3em',
      fontWeight: 'bold',
      width: '300px',
      marginLeft: '36px',
      marginRight: '50px'
    }}>
      Collegiants
    </span>
  </div>
)

export default App;
