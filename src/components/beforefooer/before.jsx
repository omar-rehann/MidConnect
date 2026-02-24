import "./before.css"
import before from "../../img/before.png"
import slideone from "../../img/slide1.png"
import slidetwo from "../../img/slider2.png"
import slidethree from "../../img/slider3.png"
import { Link } from "react-router-dom";

function Before() {
  const gettop=()=>{
    window.scrollTo({
      top: 0,       // أعلى الصفحة
      behavior: "smooth"  // حركة سلسة
    });
  }
  return (
    <div className="before">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 text-center text-lg-start">
            <h2>Book Appointment</h2>
            <h3>With 100+ Trusted</h3>
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
<Link to="/createaccount" className="link">
<button onClick={gettop} className="btn btn-primary px-4 py-2">
              Create Account
            </button>
                </Link>
            
          </div>

          <div className="col-lg-6 col-md-12 text-center mt-4 mt-lg-0">
            <img src={before} alt="Doctor" className="img-fluid" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Before