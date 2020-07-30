import React, {Component} from 'react';
  
import envatoLogo from '../assets/img/logos/envato.jpg';
import designmodeLogo from '../assets/img/logos/designmodo.jpg';
import themeforestLogo from '../assets/img/logos/themeforest.jpg';
import creativeMarketLogo from '../assets/img/logos/creative-market.jpg';
  
class Clients extends Component {
 
  render() {
     return ( 
        <div className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6 my-3">
                    <a href="#!"><img className="img-fluid d-block mx-auto" src={envatoLogo} alt="" /></a>
                </div>
                <div className="col-md-3 col-sm-6 my-3">
                    <a href="#!"><img className="img-fluid d-block mx-auto" src={designmodeLogo} alt="" /></a>
                </div>
                <div className="col-md-3 col-sm-6 my-3">
                    <a href="#!"><img className="img-fluid d-block mx-auto" src={themeforestLogo} alt="" /></a>
                </div>
                <div className="col-md-3 col-sm-6 my-3">
                    <a href="#!"><img className="img-fluid d-block mx-auto" src={creativeMarketLogo} alt="" /></a>
                </div>
            </div>
        </div>
    </div>
    )
}

}

export default Clients;