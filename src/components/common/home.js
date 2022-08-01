import React from 'react'
import { Link } from 'react-router-dom'
import gif1 from '../../assets/video/gif1.gif'
import gif2 from '../../assets/video/gif2.gif'
import gif3 from '../../assets/video/gif3.gif'
import gif4 from '../../assets/video/gif4.gif'
import gif5 from '../../assets/video/gif5.gif'
import gif6 from '../../assets/video/gif6.gif'
import gif7 from '../../assets/video/gif7.gif'
import gif8 from '../../assets/video/gif8.gif'
import banner1 from '../../assets/images/banner1.jpg'
import banner4 from '../../assets/images/banner4.png'
import card1 from '../../assets/images/card1.png'
import card2 from '../../assets/images/card2.png'
import card3 from '../../assets/images/card3.png'
import Footer from './footer'
function Home() {
  return (
    <div className="home_body">
      <div className="row m-0">
        <div className="col-md-4 p-0">
          
          {/* <div className="gifs">
            <div>
              <img src={gif1} className="w-100 p-2" />
              <img src={gif2} className="w-100 p-2" />
              <img src={gif3} className="w-100 p-2" />
              <img src={gif4} className="w-100 p-2" />
            </div>
          </div> */}
        </div>
        <div className="col-md-12 p-0">
          <div className="center-content">
            <div className="banner">
            <div className="sidePanel">
            </div>
            <div className='sidePanel_img'>
              <img src={gif1} />
            </div>
              <img className="banner1 w-100 padding_left" src={banner1} />
            </div>
            <div className="banner bg-dark">
              <img className="banner1 padding_left" src={banner4} />
            </div>
            <div className="padding_left">
              <div className='buttons'>
                <div>
                <Link to={'/login'}>LOGIN</Link>
                <Link to={'/register'}>REGISTER</Link>
                </div>
               
              </div>
            </div>
            <div className="py-5 bg-dark padding_left">
              <div className="row m-0">
                <div className="col-md-4">
                  <div className="card mb-3">
                    <div className="card-body">
                      <img src={card1} className="w-100" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-3">
                    <div className="card-body">
                      <img src={card2} className="w-100" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-3">
                    <div className="card-body">
                      <img src={card3} className="w-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
        {/* <div className="col-md-2 p-0">
          <div className="gifs">
            <div>
              <img src={gif5} className="w-100 p-2" />
              <img src={gif6} className="w-100 p-2" />
              <img src={gif7} className="w-100 p-2" />
              <img src={gif8} className="w-100 p-2" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Home
