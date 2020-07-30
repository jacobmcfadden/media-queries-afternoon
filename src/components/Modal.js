import React from 'react';
import close from '../assets/img/close-icon.svg'

import '../styling/Modal.css';

function Modal(props) {
    const { projects } = props

    return ( 
    //Modal 1
    <div   
    //id changes with each
    id={`portfolioModal${projects.id}` }
    tabIndex="-1" 
    role="dialog"
    className={ props.modalVisible === false ? "portfolio-modal modal fade show" : "portfolio-modal modal-open fade show" }>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="close-modal" onClick={props.closeModal}><img src={close} alt="Close modal" /></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="modal-body">
                                
                                <h2 className="text-uppercase">{projects.projectName}</h2>
                                <p className="item-intro text-muted">{projects.phrase}</p>
                                <img className="img-fluid d-block mx-auto" src={projects.fullImage} alt="" />
                                <p>{projects.description}</p>
                                <ul className="list-inline">
                                    <li>{projects.date}</li>
                                    <li>{projects.client}</li>
                                    <li>{projects.category}</li>
                                </ul>
                                <button className="btn btn-primary" onClick={props.closeModal} type="button">
                                    <i className="fas fa-times mr-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

}

export default Modal;