import React, {Component} from 'react';
import logo from '../assets/img/navbar-logo.svg';
import hamburger from '../assets/img/hamburger.svg';
import '../styling/Navbar.css';
  
class Navbar extends Component {
 constructor() {
    super();

    this.state = {
        menuVisible: false,
        transform: false
    }
 }

 toggleMenu= () => {
     this.setState({
         menuVisible: !this.state.menuVisible
     })
 }

 componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
 }

 componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
 }

 handleScroll= (event) => {
    if (window.scrollY === 0 && this.state.transform === true) {
        this.setState({transform: false});
    }
    else if (window.scrollY !== 0 && this.state.transform !== true) {
        this.setState({transform: true});
    }
}

  render() {
      console.log(this.state.transform)
     return ( 
        // Navbar
        <nav className={ this.state.transform ? "navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink" : "navbar navbar-expand-lg navbar-dark fixed-top" } id="mainNav">
        <div className="container">
            <a className="navbar-brand" href="#page-top"><img src={logo} alt="" /></a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" onClick={this.toggleMenu}>
               <span className="row mx-1">Menu<img  className="ml-1" width="10px" src={hamburger} alt="" /></span> 
            </button>
          
                <div className={ this.state.menuVisible ? "navbar-collapse" : "collapse navbar-collapse" } id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services" onClick={this.toggleMenu}>Services</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio" onClick={this.toggleMenu}>Portfolio</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about" onClick={this.toggleMenu}>About</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#team" onClick={this.toggleMenu}>Team</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact" onClick={this.toggleMenu}>Contact</a></li>
                    
                </ul>
            </div>
            
        </div>
        </nav>
    )
}

}

export default Navbar;