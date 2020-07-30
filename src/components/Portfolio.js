import React, {Component} from 'react';
import Modal from './Modal';
import cross from '../assets/img/cross.svg'

import projects from '../data/projects';
import '../styling/Portfolio.css'
class Portfolio extends Component {
 constructor() {
     super();

     this.state = {
         modalVisible: false,
         selectedModal: 0
     }
 }

 openModal= (item) => {
    this.setState({
        modalVisible: !this.state.modalVisible,
        selectedModal: item

    })
}

closeModal= () => {
    this.setState({
        modalVisible: !this.state.modalVisible

    })
}

  render() {
      let list = projects.map((elem, index) => {
        return (
        <div key={index} className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
                <div className="portfolio-link" onClick={(e) => {this.openModal(index)}}>
                    <div className="portfolio-hover">
                    <img  width="60px" src={cross} />
                        <div className="portfolio-hover-content"></div>
                    </div>
                    <img className="img-fluid" src={elem.thumbImage} alt="" />
                </div>
                <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{elem.client}</div>
                    <div className="portfolio-caption-subheading text-muted">{elem.category}</div>
                </div>
            </div>
        </div>

        
        )
      });

     return ( 
        
        <section className="page-section bg-light" id="portfolio">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Portfolio</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div className="row">
                {list}
            </div>
        </div>
        <Modal projects={projects[this.state.selectedModal]} modalVisible={this.state.modalVisible} closeModal={this.closeModal}/>
    </section>
    
    )
}

}

export default Portfolio;