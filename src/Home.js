import './Home.css';
//import React from 'react';

// importing Link from react-router-dom to navigate to 
// different end points.
function Home()
{
    return(
<body id="page-top">
      
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div class="container px-4">
                <a class="navbar-brand" href="#page-top">Start Extracting Here!</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="homepage.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" id="abt" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" id="ssv" href="#services">Services</a></li>
                        <li class="nav-item"><a class="nav-link" id="ccv"href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
     
        <header class="bg-primary bg-gradient text-white">
            <div class="container px-4 text-center">
                <h1 class="fw-bolder">Welcome to Tweet Extractor</h1>
                <p class="lead">We Got Everything You Are Looking For!</p>
                
            </div>
        </header>
      
        <section id="about">
            <div class="container px-4">
                <div class="row gx-4 justify-content-center">
                    <div class="col-lg-8">
                        <h2>About this page</h2>
                        <p class="lead">Tweet Extractor is a Web platform which helps in mining your desired information from twitter. </p>
                    </div>
                </div>
            </div>
        </section>
   
        
        <section class="bg-light" id="services">
            <div class="container px-4">
                <div class="row gx-4 justify-content-center">
                    <div class="col-lg-8">
                        <h2>Services we offer</h2>
                        <p class="lead">Here we are with the services you need:</p>
                          <ul>
                       <li> <a class="btn btn-lg btn-light" href="dashboard/dist/search for tweet.html">Start your search</a></li>
                        <li><a class="btn btn-lg btn-light" href="#about">Dashboard</a></li>
                        <li><a class="btn btn-lg btn-light" href="#about">Graphs</a></li>
                        <li><a class="btn btn-lg btn-light" href="#about">Tweet Analysis</a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
      
        <section id="contact">
            <div class="container px-4">
                <div class="row gx-4 justify-content-center">
                    <div class="col-lg-8">
                        <h2>Contact us</h2>
                        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in, quo totam.</p>
                    </div>
                </div>
            </div>
        </section>
    
        <footer class="py-5 bg-dark">
            <div class="container px-4"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
        </footer>
     
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
       
        <script src="js/scripts.js"></script>
    </body>
    );
}
export default Home;