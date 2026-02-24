import "./poster.css"
import poster from "../../img/poster.png"
import slideone from "../../img/slide1.png"
import slidetwo from "../../img/slider2.png"
import slidethree from "../../img/slider3.png"

function Poster() {
  const getscrollY=() => {
    window.scrollBy({
      top: 500, 
      behavior: "smooth" 
    });
  };
  return (
    <div className="poster">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 text-center text-lg-start">
            <h2>Book Appointment</h2>
            <h3>With Trusted</h3>
            <h4>Doctors</h4>

            <div className="info d-flex align-items-center gap-3 my-4 flex-column flex-md-row">

              <div className="image d-flex">
                <img src={slideone} alt="" />
                <img src={slidetwo} alt="" />
                <img src={slidethree} alt="" />
              </div>

              <div className="text">
                <h5>Simply Browse Through our Extensive List of</h5>
                <h5>Trusted Doctors</h5>
                <h5>Schedule Your Appointments Hassle-free</h5>
              </div>

            </div>
<button onClick={getscrollY}  className="btn btn-primary text-dark px-4 py-2">
              Book Appointments
            </button>
            
          </div>

          <div className="col-lg-6 col-md-12 text-center mt-4 mt-lg-0">
            <img src={poster} alt="Doctor" className="img-fluid" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Poster