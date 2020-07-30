import React, {Component} from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';

import '../styling/Footer.css';
  
class Footer extends Component {
 
  render() {
     return ( 
        <footer className="footer py-4">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
                <div className="col-lg-4 my-3 my-lg-0">
                <div className="btn btn-dark btn-social mx-2">
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="5" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(62,62,62,1)" iconSize="0" roundness="50%" url="https://some-website.com/my-social-media-url" size="40" />                    
                         </div>
                         <div className="btn btn-dark btn-social mx-2">
                         <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="5" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(62,62,62,1)" iconSize="0" roundness="50%" url="https://some-website.com/my-social-media-url" size="40" />                    
                         </div>   
                         <div className="btn btn-dark btn-social mx-2">
                            <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="5" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(62,62,62,1)" iconSize="0" roundness="50%" url="https://some-website.com/my-social-media-url" size="40" />                    
                        </div>
                </div>
                <div className="col-lg-4 text-lg-right">
                    <a className="mr-3" href="#!">Privacy Policy</a>
                    <a href="#!">Terms of Use</a>
                </div>
            </div>
        </div>
    </footer>
    )
}

}

export default Footer;