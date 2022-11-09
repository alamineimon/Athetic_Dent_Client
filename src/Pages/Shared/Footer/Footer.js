import React from 'react';

const Footer = (props) => {
    return (
      <footer className="footer p-10 text-white  bg-black">
        <div>
          <img
            src="https://st2.depositphotos.com/1768926/9860/v/600/depositphotos_98600482-stock-illustration-dental-care-logo.jpg"
            alt=""
            className="h-16 md:rounded-lg"
          />
          <p>
            Athetic Dent.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    );
}

export default Footer;