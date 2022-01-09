
import './App.css';
import './styles/landing-page.css'
import favs from './data/favs';
import LandingPageFav from './components/landingRes';
import {Link} from "react-router-dom"
function App() {
  return (
    <div className='main-container'>
      <div className='landing-box'>
        <div className='top-bar'>
          <div className="space"><p>space</p></div>
          <div className="head-title">
            <h2>DOORDASH</h2>
          </div>
          <div className='user-controls'>
            <Link to="/user/sign-in">
              <button id="in">Sign In</button>
            </Link>
            
            <button id="up">Sign Up</button>
          </div>
          
        </div>
        <div className='search-box'>
            <h1>Restaurants and More,<br/> delivered to your door</h1>
            <form className="search">
              <input type="text" id="search-bar" placeholder="Enter delivery address"/>
              <button>Go</button>
            </form>            
        </div>
      </div>
       <div className="near-you">
         <h1>Favorites Near You</h1>
         <div className="fav-rests row row-cols-3">
           {
             favs.map((fav) => {
               return (
                 <div id="res" className='col'>
                   <LandingPageFav restaurant={fav}/>
                 </div>   
               )              
             })
           }
         </div> 

       </div>
       <div className='features'>
           <div className="feature">
             <img src="https://cdn.doordash.com/media/consumer/home/landing/new/ScootScoot.svg"/>
              <h3>Start Earning</h3>
              <p>As a delivery driver, you'll make reliable money--working anytime,anywhere.</p>
              <span>Start earning</span>
            </div>
           <div className='feature'>
             <img src="https://cdn.doordash.com/media/consumer/home/landing/new/Storefront.svg"/>
             <h3>Become a Partner</h3>
             <p>Grow your business and reach new customers by partnering with us.</p>
             <span>Sign up your store</span>
            </div>
           <div className='feature'>
             <img src="https://cdn.doordash.com/media/consumer/home/landing/new/iphone.svg"/>
              <h3>Try the App</h3>
              <p>Experience the best your neighborhood has to offer, all in one app.</p>
              <span>Get the app</span>
           </div>
       </div>
       <div className='point'>
         <div className='point-content'>
           <h2>It's all here.</h2>
           <h2>All in one app.</h2>
           <p>Discover local, on-demand delivery or Pickup from restaurants, nearby grocery and convenience stores, and more.</p>
           <button>Get the App</button>
         </div>
         <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1366,format=auto,quality=50/https://cdn.doordash.com/media/consumer/home/landing/new/all_in_one.jpg"/>
       </div>
       <div className='point'>
       <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1366,format=auto,quality=50/https://cdn.doordash.com/media/consumer/home/landing/new/ev_fla_wel_alt.jpg"/>
         <div className='point-content'>
           <h2>Every Flavor Welcome</h2>
           <p>From your neighborhood sushi spot to the burger and fries you crave, choose from over 300,000 local and national favorites across the U.S., Canada and Australia.</p>
           <button>Find restaurants</button>
         </div> 
       </div>
       <div className='footer'>
         <div className='footer-content'>
           <div className='top-stuff'>
           </div>
           <div className='bottom-stuff'>
             <div className='side-1'></div>
             <div className='side-2'></div>
           </div>
         </div>
         
       </div>
    </div>
  );
}

export default App;
