import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './css/footer.css'

const FooterForm = () => {
  return (
    <footer className=''>
      <h3>Contact Me</h3>
      <div>
      <a href="https://www.facebook.com/profile.php?id=100041662728032"><FaFacebook size={25} color='black' /></a>
      <a href="https://www.linkedin.com/in/walid-adr-5939b227a/"><FaLinkedin size={25} color='black' className='m-2' /></a>
      <a href="https://www.instagram.com/walid.eker/"><FaInstagram size={25} color='black' /></a>
      </div>
      <p>© 2023 Med Walid Adrouche. All rights reserved.</p>
    </footer>
  );
};

export default FooterForm;
