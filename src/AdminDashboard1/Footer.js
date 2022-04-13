import React from 'react';

export const Footer = () => {
  return (
    <div>
        <footer class="bg-dark text-center text-white">
  {/* <!-- Grid container --> */}
  <div class="container p-4 pb-0">
    {/* <!-- Section: Social media --> */}
    <section class="mb-4">
      {/* <!-- Facebook --> */}
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
        {/* <i class="fab fa-facebook-f"></i> */}
        <i class="fa fa-facebook" aria-hidden="true"></i></a>

      {/* <!-- Twitter --> */}
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
          {/* <i class="fab fa-twitter"></i> */}
          <i class="fa fa-twitter" aria-hidden="true"></i></a>

     {/*  <!-- Google --> */}
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
          {/* <i class="fab fa-google"></i > */}
          <i class="fa fa-google" aria-hidden="true"></i></a>

      {/* <!-- Instagram --> */}
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
          {/* <i class="fab fa-instagram" aria-hidden="true"></i> */}
          <i class="fa fa-instagram" aria-hidden="true"></i></a>

    {/*   <!-- Linkedin --> */}
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
          {/* <i class="fab fa-linkedin-in" aria-hidden="true"> */}
          <i class="fa fa-linkedin" aria-hidden="true"></i></a>

      {/* <!-- Github --> */}
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
         {/* <i class="fab fa-github" aria-hidden="true"></i > */}
        <i class="fa fa-github" aria-hidden="true"></i></a>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div class="text-center p-3" style={{backGroundcolor: "rgba(0, 0, 0, 0.2)"}}>
    © 2021 Copyright:
    {/* <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a> */}
  </div>
  {/* <!-- Copyright --> */}
</footer>
    </div>
  )
}
