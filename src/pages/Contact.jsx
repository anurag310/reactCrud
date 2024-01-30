import React from 'react'

export default function Contact() {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    
    function opentab(tabname, event) {
         for (const tablink of tablinks) {
            tablink.classList.remove("active-links")
        }
        for (const tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab")
        }
        event.currentTarget.classList.add("active-links");
        document.getElementById(tabname).classList.add("active-tab");
    }
    
    var sidemenu=document.getElementById("sidemenu")
    function openmenu(){
        sidemenu.style.right="0"
    }
    function closemenu(){
        sidemenu.style.right="-200px"
    }
    
    
  return (
    <>
    <div id="contact">
            <div class="container">
                <div class="row">
                    <div class="contact-left">
                        <h1 class="sub-title">Contact Me</h1>
                        <p><i class="fa-solid fa-share-from-square"></i>contact@exampe.com</p>
                        <p><i class="fa-solid fa-phone"></i>1234567890</p>
                        <div class="social-icons">
                            <a href="https://facebook.com/"><i class="fa-brands fa-facebook"></i></a>
                            <a href=""><i class="fa-brands fa-square-instagram"></i></a>
                            <a href=""><i class="fa-brands fa-twitter"></i></a>
                            <a href=""><i class="fa-brands fa-square-whatsapp"></i></a>
                        </div>
                        <a href="C:\Users\91600\OneDrive\Documents\progam using class.cpp" class="btn btn2">Download CV</a>
                    </div>
                    <div class="contact-right"></div>
                    <form>
                        <input type="text" name="Name" placeholder="Your Name" required />
                        <input type="email" name="Email" placeholder="Your Email" required />
                        <textarea type="message" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit" class="btn btn2">Submit</button>
                    </form>
                </div>
            </div>
            <div class="copyright">
                <p>Copyright o Anamika with<i class="fa-solid fa-heart"></i> by easy tutorials</p>
            </div>
         </div>
        
     
  </>
  )
}
