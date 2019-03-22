import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink as Link } from 'react-router-dom';
import owl from './images/logo.svg';
import Home from './modules/Home'
import About from './modules/About'
import Services from './modules/Services'
import Terms from './modules/Terms'
import Mandarin from './modules/Mandarin'
import Testimonials from './modules/Testimonials'
import Submitted from './modules/Submitted'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <AppBody>
          <Nav>
            <NavItems>
              <Link className='subNav'to={'/'}>
                <div style={{position: 'relative', display: 'inline'}}>
                  <Title>Collegiants</Title>
                </div>
              </Link>
              <Link className='subNav subNav1' to={'/about'}>
                <NavItem>About</NavItem>
              </Link>
              <Link className='subNav subNav2' to={'/services'}>
                <NavItem>Services</NavItem>
              </Link>
              <Link className='subNav subNav3' to={'/testimonials'}>
                <NavItem>Testimonials</NavItem>
              </Link>
              <Link className='subNav subNav4' to={'/terms'}>
                <NavItem>Terms</NavItem>
              </Link>
              <Link className='subNav subNav5' to={'/mandarin'}>
                <NavItem>Mandarin</NavItem>
              </Link>
            </NavItems>
          </Nav>
          <Content>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/services' component={Services}/>
            <Route exact path='/testimonials' component={Testimonials}/>
            <Route exact path='/terms' component={Terms}/>
            <Route exact path='/mandarin' component={Mandarin}/>
            <Route exact path='/submitted' component={Submitted}/>
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
  <div className='theNav' style={{
    display: 'inline-block',
    width: '100vw',
    textAlign: 'left',
    backgroundColor: '#d34747',
    opacity: '1',
    zIndex: '1',
    color: 'white'
  }} {...props} />
)

const NavItems = (props) => (
  <div className='theNavItems' style={{
    width: '1100px',
    fontWeight: 'bold',
    maxWidth: '100vw',
    margin: '0 auto',
  }} {...props} />
)

const Content = (props) => (
  <div className='theContent' style={{
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
    <img className='owlLogo' src={owl} style={{
      height: '32px',
      position: 'absolute',
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
