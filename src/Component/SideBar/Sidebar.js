import React from 'react'
import $ from 'jquery';
import '../SideBar/Sidebar.css'


export const Sidebar = () => {


  // const style = document.createElement('style')
  
  return (


    <div>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
      <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
      {/* <!------ Include the above in your HEAD tag ----------> */}

      <head>
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" /></head>
      <div class="container" />
      <div class="row" />
      <h2>Some text</h2>
      <hr />

      <div id="wrapper" />



      {/* <!-- Sidebar --> */}
      <div id="sidebar-wrapper">
        <ul class="sidebar-nav newul" >
          <li class="sidebar-brand">

            <a href="#menu-toggle" id="menu-toggle" class="newa"  /> <i class="fa fa-bars newb"  aria-hidden="true" ></i>

          </li>
          <li>
            <a href="#"><i class="fa fa-sort-alpha-asc " aria-hidden="true"> </i> <span class = "newc">Section</span>  </a>
          </li>
          <li>
            <a href="#"> <i class="fa fa-play-circle-o " aria-hidden="true"> </i> <span class="newc"> Section</span> </a>
          </li>
          <li>
            <a href="#"> <i class="fa fa-puzzle-piece" aria-hidden="true"> </i> <span class="newc" > Section</span> </a>
          </li>
          <li>
            <a href="#"> <i class="fa fa-font" aria-hidden="true"> </i> <span class ="newc" > Section</span> </a>
          </li>
          <li>
            <a href="#"><i class="fa fa-info-circle " aria-hidden="true"> </i> <span  class ="newc">Section </span> </a>
          </li>
          <li>
            <a href="#"> <i class="fa fa-comment-o" aria-hidden="true"> </i> <span  class ="newc"> Section</span> </a>
          </li>
        </ul>
      </div>
      {/* <!-- /#sidebar-wrapper --> */}

      {/* <!-- Page Content --> */}
      <div id="page-content-wrapper" />
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            {/* </a> */}




            {/* <!-- /#page-content-wrapper --> */}


            {/* <!-- /#wrapper --> */}


            {/* <script>
                      $("#menu-toggle").click(function(e) {
                      e.preventDefault()
                      }$("#wrapper").toggleClass("toggled");)
            </script> */}
          </div>
        </div>
      </div>
    </div>
  )
}
