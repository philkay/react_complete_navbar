import './NavbarStyles.css';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { MenuItems } from './Menuitems';

class Navbar extends Component{
  state={clicked: false};
  handleClick=()=>{
    this.setState({ clicked: !this.state.clicked });

  }
    render(){
        return <nav className="NavbarItems">
            <h1 className="navbar-logo">Travel Blog</h1>

            <div className="menu-icons" onClick={this.handleClick}>
              <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"} />
            </div>

            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              {MenuItems.map((item, index) => {
                return <li key={index}>
                    <a className={item.cName} href="/">
                      <i className={item.icon} />
                      {item.title}
                    </a>
                  </li>;
              })}
              <button>Sign Up</button>
            </ul>
          </nav>;
    }
}

export default Navbar
