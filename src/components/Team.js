import React, {Component} from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';

import team1 from '../assets/img/team/1.jpg';
import team2 from '../assets/img/team/2.jpg';
import team3 from '../assets/img/team/3.jpg'; 

import '../styling/Team.css';
class Team extends Component {
 
  render() {
     return ( 
         <section className="page-section bg-light" id="team">
         <div className="container">
             <div className="text-center">
                 <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                 <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
             </div>
             <div className="row">
                 <div className="col-lg-4">
                     <div className="team-member">
                         <img className="mx-auto rounded-circle" src={team1} alt="" />
                         <h4>Kay Garland</h4>
                         <p className="text-muted">Lead Designer</p>
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
                 </div>
                 <div className="col-lg-4">
                     <div className="team-member">
                         <img className="mx-auto rounded-circle" src={team2} alt="" />
                         <h4>Larry Parker</h4>
                         <p className="text-muted">Lead Marketer</p>
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
                 </div>
                 <div className="col-lg-4">
                     <div className="team-member">
                         <img className="mx-auto rounded-circle" src={team3} alt="" />
                         <h4>Diana Petersen</h4>
                         <p className="text-muted">Lead Developer</p>
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
                 </div>
             </div>
             <div className="row">
                 <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
             </div>
         </div>
     </section>
    )
}

}

export default Team;