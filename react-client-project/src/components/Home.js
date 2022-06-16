import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div class="container-xl">
      <div class="row">
        <div class="col"></div>
        <div class="col-8">
                        <Carousel>
                            <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://wallpaperbat.com/img/417900-pharmacist-wallpaper.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First  Slide</h3>
                                
                            </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src="https://wallpaperbat.com/img/181993-why-amazon-bought-pillpack-for-753-million-and-what-happens-next.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Second slide - Alien</h3>
                              
                            </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://wallpaperbat.com/img/370715-pills-pharmacy-wallpaper-hd-desktop-and-mobile-background.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide</h3>
                            </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://wallpaperbat.com/img/417900-pharmacist-wallpaper.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First  Slide</h3>
                                
                            
                            </Carousel.Caption>
                            </Carousel.Item>

                            

                        </Carousel>
        </div>
        <div class="col"></div>

        <div class="row">
          <div class="col"></div>
          <div class="col-8">

          
            
            <p class="lead">
            Create a dynamic and responsive .Net+React e-healthcare web application to allow users 
to purchase medicines for different categories.

            </p>
            <p class="lead">
            ABC Healthcare is a Mumbai-based pharma company which sales medicines throughout 
India as per the demand they receives from multiple hospitals and clinics. They have 
been operating in India since last 15 years.
            </p>

            <p class="lead">
            However in recent years since all industries are coming online to boost their sales and 
cover larger market space, ABC Healthcare missed the chance and as a result their sales 
has been dropping since last 2 years. To overcome this and bring sales back on track 
they have decided to bring their service online to allow their customers to purchase 
medicines by their web application.
            </p>

            <p class="lead">
            You are hired as one of the Full Stack .Net developer and have been asked to develop 
the web application. The management team has provided you the requirements and 
their business model so that you can easily arrange different components of the 
application.
            </p>

          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;