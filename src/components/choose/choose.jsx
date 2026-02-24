import "./choose.css"
function Choose(){
    return(
        <>
        <div className="choose">
            
           <div className="row text-center m-2">
  <div className="col-md-4 mb-4"> 
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <i 
          className="fa-solid fa-clock-rotate-left  text-primary mb-3"
          style={{ fontSize: '3rem' }} 
        ></i>
        <h5 className="card-title">EFFICIENCY</h5>
        <p className="card-text">
          Streamlined appointment scheduling that fits into your busy lifestyle.
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-4 mb-4">
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <i 
          className="fa-solid fa-map-location-dot  text-success mb-3"
          style={{ fontSize: '3rem' }}
        ></i>
        <h5 className="card-title">CONVENIENCE</h5>
        <p className="card-text">
          Access to a network of trusted healthcare professionals in your area.
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-4 mb-4">
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <i 
          className="fa-solid fa-user-gear  text-info mb-3"
          style={{ fontSize: '3rem' }}
        ></i>
        <h5 className="card-title">PERSONALIZATION</h5>
        <p className="card-text">
          Tailored recommendations and reminders to help you stay on top of your health.
        </p>
      </div>
    </div>
  </div>
</div>
<div className="row text-center m-2">

  <div className="col-md-4 mb-4"> 
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <i 
          className="fa-solid fa-shield-heart text-danger mb-3"
          style={{ fontSize: '3rem' }} 
        ></i>
        <h5 className="card-title">TRUST & SAFETY</h5>
        <p className="card-text">
          Your medical data is fully protected with advanced security standards.
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-4 mb-4">
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <i 
          className="fa-solid fa-headset text-warning mb-3"
          style={{ fontSize: '3rem' }}
        ></i>
        <h5 className="card-title">24/7 SUPPORT</h5>
        <p className="card-text">
          Our support team is always available to assist you anytime you need help.
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-4 mb-4">
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <i 
          className="fa-solid fa-stethoscope text-primary mb-3"
          style={{ fontSize: '3rem' }}
        ></i>
        <h5 className="card-title">QUALIFIED DOCTORS</h5>
        <p className="card-text">
          Connect with certified and experienced doctors across multiple specialties.
        </p>
      </div>
    </div>
  </div>

</div>
<div className="row text-center m-2">

  <div className="col-md-4 mb-4"> 
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <i 
          className="fa-solid fa-calendar-check text-primary mb-3"
          style={{ fontSize: '3rem' }} 
        ></i>
        <h5 className="card-title">EASY BOOKING</h5>
        <p className="card-text">
          Book appointments in seconds with a simple and user-friendly system.
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-4 mb-4">
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <i 
          className="fa-solid fa-file-medical text-success mb-3"
          style={{ fontSize: '3rem' }}
        ></i>
        <h5 className="card-title">DIGITAL RECORDS</h5>
        <p className="card-text">
          Keep all your medical history and reports securely stored in one place.
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-4 mb-4">
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <i 
          className="fa-solid fa-video text-danger mb-3"
          style={{ fontSize: '3rem' }}
        ></i>
        <h5 className="card-title">ONLINE CONSULTATION</h5>
        <p className="card-text">
          Consult with doctors remotely through secure and high-quality video calls.
        </p>
      </div>
    </div>
  </div>

</div>
        </div>
        </>
    )
}
export default Choose