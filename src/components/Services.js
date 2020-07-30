import React, {Component} from 'react';
import cart from '../assets/img/shoppingCart.svg'
import lock from '../assets/img/lockIcon.svg'
import comp from '../assets/img/laptopIcon.svg'
  
  
class Services extends Component {
 
  render() {
     return ( 
        <section className="page-section" id="services">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Services</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div className="row text-center">
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                    <img  width="125px" src={cart} alt="cart icon"/>                    
                    </span>
                    <h4 className="my-3">E-Commerce</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                    <img  width="125px" src={comp} alt="laptop icon"/>
                    </span>
                    <h4 className="my-3">Responsive Design</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                    <img  width="125px" src={lock} alt="lock icon"/>
                    </span>
                    <h4 className="my-3">Web Security</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
            </div>
        </div>
    </section>
    )
}

}

export default Services;