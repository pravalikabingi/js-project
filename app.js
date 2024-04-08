let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

// let themeToggler = document.querySelector(".theme-toggler");
// let toggleBtn = document.querySelector(".toggle-btn");



// document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
//   btn.onclick = () => {
//     let color = btn.style.background;
//     document.querySelector(":root").style.setProperty("--theme-color", color);
//   };
// });





document.addEventListener('DOMContentLoaded', function () {
  
  const contactForm = document.getElementById('contactForm');

  
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const number = document.getElementById('numberInput').value;
    const subject = document.getElementById('subjectInput').value;
    const message = document.getElementById('messageInput').value;



    if (name === '' || email === '' || number === '' || subject === '' || message === '') {
      swal("oops details are missing !", "...please fill all the details");
      return; 
    }

    
    const formData = {
      name,
      email,
      number,
      subject,
      message,
    };

    const formDataJson = JSON.stringify(formData);

   
    localStorage.setItem('contactFormData', formDataJson);

    
    swal({
      // title: "Good job!",
      text: "Your Message sent",
      icon: "success",
      
      
    });

    
    contactForm.reset();
  });
});
