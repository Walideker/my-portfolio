import React from 'react'
import Footer from './footer'
import ShowGitRepo from './showGitRepo'

function about() {
  return (
    <div>
    <div className='container text-center'>
      <div className='intro mt-5'>
        <img src="/src/assets/update.jpg" alt="" width={400} />
        <p>"Empowering digital experiences through innovative frontend development — that's my passion! I am a highly skilled and creative frontend developer with 2 years of experience dedicated to crafting visually captivating and user-friendly websites and applications. Proficient in HTML, CSS, JavaScript, Bootstrap, React, TypeScript, Git, Redux, Linux I thrive on turning ideas into reality with clean code and pixel-perfect designs. With a keen eye for detail and a user-centered mindset, I am driven to create seamless, accessible, and performance-optimized experiences. Let's collaborate on transformative projects that leave a lasting impact in the digital landscape."</p>
      </div>
      <ShowGitRepo/>
      </div>
      <Footer/>
    </div>
  )
}

export default about
