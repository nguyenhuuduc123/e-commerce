import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from 'react-icons/bs';
const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className='mb-0 text-white '>Sign up for newsletter</h2>
            </div>
          </div>
          <div className="col-7">
          <div className="input-group">
                <input type="text" className="form-control py-1" 
                placeholder="your email address" aria-label="your email address" 
                aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">
                 Subcribe
                </span>
              </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div>
              <address className='text-white fs-6'>Hno : 277 Near Vill chopal,<br/> sonipat, Haryana <br/>
              pincode: 131103</address>
              <a href="tel:+84 966916595" className="mt-3 d-block mb-1 text-white">+94 966916595</a>
              <a href="tel:+84 966916595" className="mt-2 d-block mb-0 text-white">nguyenhuuduc@gmail.com</a> 
              <div className="social_icons d-flex align-items-center gap-30 mt-4">
                <a href="https://www.facebook.com/profile.php?id=100066284267762" className='text-white'><BsLinkedin className=' fs-4'></BsLinkedin></a>
                <a href="https://www.facebook.com/profile.php?id=100066284267762" className='text-white'><BsGithub className='fs-4'></BsGithub></a>
                <a href="https://www.facebook.com/profile.php?id=100066284267762" className='text-white'><BsInstagram className=' fs-4'></BsInstagram></a>
                <a href="https://www.facebook.com/profile.php?id=100066284267762" className='text-white'><BsYoutube className=' fs-4'></BsYoutube></a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'>Infomation</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link className='text-white py-2 mb-1'>Refund policy</Link>
              <Link className='text-white py-2 mb-1'>shipping Policy</Link>
              <Link className='text-white py-2 mb-1'>Term & Conditions</Link>
              <Link className='text-white py-2 mb-1'>Blogs</Link>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>About us</Link>
              <Link className='text-white py-2 mb-1'>faq</Link>
              <Link className='text-white py-2 mb-1'>Contact</Link>
            </div>
          </div>
          <div className="col-2">
            <h4 className='text-white mb-4'>Quick links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Laptop</Link>
              <Link className='text-white py-2 mb-1'>Headphones</Link>
              <Link className='text-white py-2 mb-1'>Tablet</Link>
              <Link className='text-white py-2 mb-1'>Watch</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className='text-center mb-0 text-white'>&copy;{new Date().getFullYear()}; Powered by Developer Ducnguyen</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer