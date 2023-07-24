import React from 'react'
import { LuFacebook, LuInstagram, LuTwitter } from 'react-icons/lu';
import food from '../Images/food.png';
import glass from '../Images/glass.png';
import download from '../Images/download.png';
import knife from '../Images/knife.png';
import chef from '../Images/chef.png';
import sign from '../Images/sign.png';
import video from '../Images/video.mp4';
import one from '../Images/one.png';
import two from '../Images/two.png';
import three from '../Images/three.png';
import five from '../Images/five.png';
import veg from '../Images/veg.png';
import juice from '../Images/juice.png';
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='Navbar'>
      <img className='imag' src={download} alt='Error'></img>
      <div className='Nav-text'>
        <ul className='list'>
          <li>
Log in / Register | Book Table
          </li>
          
        </ul>
      </div>
      <div className='Description'>Chase The New Flavour</div>
      <div className='spoon'>
        <img src=
        "https://gerichtrestaurantapp.netlify.app/static/media/spoon.d079f43fbcf509908d3865293080795a.svg"></img>
      </div>
      <div className='Both'>
        <div className='text'>
      <div className='Dining'>
      <div>The key to Fine Dining</div>
      </div>
        
        <p className='texts'>Sit tellus lobortis sed senectus vivamus molestie.</p>
        <p className='texts'>Condimentum Volutpat Morbi Facilisis Quam Scelerisque</p>
        <p className='texts'>SSapien. Et, Penatibus Aliquam Amet Tellus</p>
        </div>
      <div className='image'>
        <img src={food}></img>
      </div>
      </div>
      <div className='Button'>
        <button className='button'>Explore Menu</button>
      </div>
      <div className='knife'>
        <div className='left'>
         <h1 className='abouttext'>About Us</h1>
         <img className='spoonus' src='https://gerichtrestaurantapp.netlify.app/static/media/spoon.d079f43fbcf509908d3865293080795a.svg'></img>
       <p className='mind'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
       <div className='knifeButton'>
        <button className='knifebutton'>Explore Menu</button>
      </div>
        </div>
        <div className='center'>
        <img className='knifeimage' src={knife} alt='error'></img>
        </div>
        <div className='right'>
          <h1 className='ourtext'>Our History</h1>
          <img className='spoonhistory' src='https://gerichtrestaurantapp.netlify.app/static/media/spoon.d079f43fbcf509908d3865293080795a.svg'></img>
          <p className='minds'>Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat.Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed Odio Nec Aliquet.</p>
          <div className='knifeButtons'>
        <button className='knifebuttons'>Explore Menu</button>
      </div>
        </div>
       
      </div>
      <div className='special'>
        <h3 className='menu'>Menu That Thats Fits Your Plate<br></br><span className='spanfood'>
          <img src='https://gerichtrestaurantapp.netlify.app/static/media/spoon.d079f43fbcf509908d3865293080795a.svg'></img>
          </span></h3>
          <h1 className='today'>Today's Special</h1>
      </div>
      <div className='glass'>
        <div className='glass1' style={{paddingLeft:'7rem'}}>
          <h3 className='wine'style={{paddingLeft:'2.5rem',fontSize:'24px'}}>Wine & Beer</h3>
          <p className='La Vieillw Rose' style={{color:'#dcca87', fontSize:'23px', fontFamily:'Cormorant Upright",serif'}}>La Vieillw Rose ----- $44</p>
          <span className='La Vieillw Rose' style={{color:'#aaa'}}>AU | Bottle</span>
          <p className='Catena Malbee' style={{color:'#dcca87', fontSize:'23px', fontFamily:'Cormorant Upright",serif'}}>La Vieillw Rose ----- $44</p>
          <span className='La Vieillw Rose' style={{color:'#aaa'}}>AU | Bottle</span>
          <p className='La Vieillw Rose' style={{color:'#dcca87', fontSize:'23px', fontFamily:'Cormorant Upright",serif'}}>La Vieillw Rose ----- $44</p>
          <span className='La Vieillw Rose' style={{color:'#aaa'}}>AU | Bottle</span>
          <p className='Rhino Pale Ale' style={{color:'#dcca87', fontSize:'23px', fontFamily:'Cormorant Upright",serif'}}>La Vieillw Rose ----- $44</p>
          <span className='La Vieillw Rose' style={{color:'#aaa'}}>AU | Bottle</span>
          <p className='Irish Guinness' style={{color:'#dcca87', fontSize:'23px', fontFamily:'Cormorant Upright",serif'}}>La Vieillw Rose ----- $44</p>
          <span className='La Vieillw Rose' style={{color:'#aaa'}}>AU | Bottle</span>
        </div>
          <div className='glssimage' style={{paddingRight:'5rem'}}>
            <img src={glass}></img>
          </div>
          <div className='glass2'>
          <h3 className='wine' style={{paddingLeft:'4rem', fontSize:'26px'}}>Cocktails</h3>
          <p className='La Vieillw Rose' style={{color:'#dcca87', fontSize:'23px', fontFamily:'Cormorant Upright",serif'}}>La Vieillw Rose ----- $44</p>
          <span className='La Vieillw Rose' style={{color:'#aaa'}}>AU | Bottle</span>
          <p className='Catena Malbee' style={{color:'#dcca87', fontSize:'23px', fontFamily:'Cormorant Upright",serif'}}>La Vieillw Rose ----- $44</p>
          <span className='La Vieillw Rose' style={{color:'#aaa'}}>AU | Bottle</span>
          <p className='La Vieillw Rose' style={{color:'#dcca87', fontSize:'23px', fontFamily:'Cormorant Upright",serif'}}>La Vieillw Rose ----- $44</p>
          <span className='La Vieillw Rose' style={{color:'#aaa'}}>AU | Bottle</span>
          <p className='Rhino Pale Ale' style={{color:'#dcca87', fontSize:'23px', fontFamily:'Cormorant Upright",serif'}}>La Vieillw Rose ----- $44</p>
          <span className='La Vieillw Rose' style={{color:'#aaa'}}>AU | Bottle</span>
          <p className='Irish Guinness' style={{color:'#dcca87', fontSize:'23px', fontFamily:'Cormorant Upright",serif'}}>La Vieillw Rose ----- $44</p>
          <span className='La Vieillw Rose' style={{color:'#aaa'}}>AU | Bottle</span>
        </div>
      </div>
      <div className='glassButton'>
        <button className='glassbutton' >View More</button>
      </div>
      <div className='chef'>
        <div className='chefimage'>

        <img className='chefImage' src={chef}></img>
        </div>
      <div className='cheftext'>
        <p className='chefp' style={{fontSize:'25px'}}>Chef's word <br></br><span><img src='https://gerichtrestaurantapp.netlify.app/static/media/spoon.d079f43fbcf509908d3865293080795a.svg'></img></span></p>
        <h1 className='chefh'>What we believe in</h1>
        <p className='chefpp'>At our restaurant, we believe in the power of food to bring people together and create memorable experiences. We believe in using only the freshest ingredients, prepared with care and attention to detail.We believe in providing exceptional service and creating an atmosphere that is warm, inviting, and welcoming to all. Above all, we believe in sharing our passion for food with each and every guest who walks through our doors.</p>
        <p className='kevin'>kevin</p>
        <span style={{position:'relative'}}><p className='kevinp'>Chef & Founder</p></span>
        <img className='sign' src={sign}></img>
      </div>
      </div>
      <div className='Video'>
      <video className='video' controls>
        <source src={video} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className='veg' style={{paddingLeft:'8rem'}}>
      <div className='vegtext'>
        <p className='awards'>Awards & Recognition <br></br><span><img src='https://gerichtrestaurantapp.netlify.app/static/media/spoon.d079f43fbcf509908d3865293080795a.svg'></img></span></p>
        <h1 className='our'>Our Laurels</h1>
        <div className='number'>
          <div className='onei'>
        <img className='oneii' src={one}></img>

          </div>
          <div className='Oneh'>
          <h4 className='onehh' style={{paddingLeft:'1rem',color:'#dcca87'}}>Outstanding Service Award</h4> 
        <p className='onep'style={{paddingLeft:'1rem'}}>For Our Dedication To Providing Exceptional Service That Goes Above And Beyond To Ensure Every Guest Has A Memorable Experience.</p>
          </div>

        </div>
        <div className='number'>
          <div className='onei'>
        <img className='oneii' src={two}></img>

          </div>
          <div className='Oneh'>
          <h4 className='onehh' style={{paddingLeft:'1rem',color:'#dcca87'}}>Outstanding Service Award</h4> 
        <p className='onep'style={{paddingLeft:'1rem'}}>For Our Dedication To Providing Exceptional Service That Goes Above And Beyond To Ensure Every Guest Has A Memorable Experience.</p>
          </div>

        </div>
        <div className='number'>
          <div className='onei'>
        <img className='oneii' src={five}></img>

          </div>
          <div className='Oneh'>
          <h4 className='onehh' style={{paddingLeft:'1rem',color:'#dcca87'}}>Outstanding Service Award</h4> 
        <p className='onep'style={{paddingLeft:'1rem'}}>For Our Dedication To Providing Exceptional Service That Goes Above And Beyond To Ensure Every Guest Has A Memorable Experience.</p>
          </div>

        </div>
        <div className='number'>
          <div className='onei'>
        <img className='oneii' src={three}></img>

          </div>
          <div className='Oneh'>
          <h4 className='onehh' style={{paddingLeft:'1rem',color:'#dcca87'}}>Outstanding Service Award</h4> 
        <p className='onep'style={{paddingLeft:'1rem'}}>For Our Dedication To Providing Exceptional Service That Goes Above And Beyond To Ensure Every Guest Has A Memorable Experience.</p>
          </div>

        </div>
      </div>
      <div className='Vegimage'>
        <img className='vegimage' src={veg}></img>
      </div>
    </div>
    <div className='juice'style={{paddingTop:'5rem'}}>
      <div className='juicetext' style={{paddingLeft:'5rem'}}>
        <p className='contact'>Contact<br></br><span><img src='https://gerichtrestaurantapp.netlify.app/static/media/spoon.d079f43fbcf509908d3865293080795a.svg'></img></span></p>
        <h1 className='find'>Find Us</h1>
        <p className='address'>No:123,TTK Road Alwarpet,Chennai-18</p>
        <p className='opening'>Opening Hours</p>
        <p className='time'>Mon-Fri:10:00 Am-9:00 P.M<br></br>

Sat-Sun:10:00 Am-12:00 A.M

</p>
<div className='JuiceButton'>
        <button className='juicebutton'>Visit Us</button>
      </div>
      </div>
      <div className='Juiceimage'>
        <img className='juiceimage' src={juice}></img>
      </div>
    </div>
    <div className='subscribe'>
      <div className='border'>
      <h4 className='news'>NewsLetter<br></br><span ><img src='https://gerichtrestaurantapp.netlify.app/static/media/spoon.d079f43fbcf509908d3865293080795a.svg'></img></span></h4>
      <h1 className='newshead'>Subscribe To Our Newsleter<p className='newsp'>And Never Miss Latest Updates</p></h1>
      
      <form className='subform'>
        <input className='subforminput'style={{border: '1px solid #dcca87'}} placeholder='Enter your Email address'></input><button className='subbutton'>Subscribe</button>   
      </form>
      </div>
    </div>
    <div className='footer'>
<div className='contact'>
  <h1 className='contacthh'>Contact Us</h1>
  <p className='contactpp'>No:123,TTK <br></br>Road,Alwarpet,Chennai-18<br></br>

+044 212-344-1230<br></br>

+91 700-555-1230</p>


</div>
<div className='footerimage'>
<img className='footimage' src={download} alt='Error'></img>
<p className='footerimg'>"The Best Way To Find Yourself Is <br></br>To Lose Yourself In The Service Of Others."<br></br><span ><img src='https://gerichtrestaurantapp.netlify.app/static/media/spoon.d079f43fbcf509908d3865293080795a.svg'></img></span></p>

<a  href='https://www.facebook.com/' target="_blank" color='white'><LuFacebook size={25} color="#FFFFFF"/></a><span><a className='footlinks' href='https://www.facebook.com/' target="_blank" color='white'><LuInstagram size={25} color="#FFFFFF"/></a></span><a className='footlinks'href='https://www.facebook.com/' paddingLeft='2rem' target="_blank" color='white'><LuTwitter size={25} color="#FFFFFF"/></a>
<p className='allrights' style={{paddingTop:'5rem'}}>@copy 2023 Gericht. All Rights Reserved.</p>
</div>
<div className='working'>
  <h1 className='workinghh'>Working Hours</h1>
  <p className='workingpp'>Monday-Friday:<br></br>

10:00 Am - 9:00 Pm<br></br>

Saturday-Sunday:<br></br>

10:00 Am - 12:00 Am</p>


</div>
    </div>
    </div>
  )
}

export default Navbar