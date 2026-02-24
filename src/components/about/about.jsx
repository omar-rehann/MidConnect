import aboutimg from "../../img/about.png";

function About() {
  return (
    <>
      <div className="about p-3">
        <div className="row">
          <div className="col-md-6">
            <div className="image text-center">
              <img src={aboutimg} className="w-100 rounded" alt="About Prescripto" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="text">
              <h1>ABOUT US</h1>

              <p>
                <i 
                  className="fa-solid fa-circle fa-beat-fade me-2"
                  style={{ 
                    fontSize: '10px',
                    '--fa-beat-fade-opacity': '0.4',
                    '--fa-beat-fade-scale': '1.3',
                    '--fa-animation-duration': '1.8s',
                    color: '#0d6efd' 
                  }}
                ></i>
Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.

              </p>

              <p>
                <i 
                  className="fa-solid fa-circle fa-beat-fade me-2"
                  style={{ 
                    fontSize: '10px',
                    '--fa-beat-fade-opacity': '0.4',
                    '--fa-beat-fade-scale': '1.3',
                    '--fa-animation-duration': '1.8s',
                    color: '#0d6efd' 
                  }}
                ></i>
Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.

              </p>

              <p>
                <i 
                  className="fa-solid fa-circle fa-beat-fade me-2"
                  style={{ 
                    fontSize: '10px',
                    '--fa-beat-fade-opacity': '0.4',
                    '--fa-beat-fade-scale': '1.3',
                    '--fa-animation-duration': '1.8s',
                    color: '#0d6efd' 
                  }}
                ></i>
Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.

              </p>
              <p>
   <i 
                  className="fa-solid fa-circle fa-beat-fade me-2"
                  style={{ 
                    fontSize: '10px',
                    '--fa-beat-fade-opacity': '0.4',
                    '--fa-beat-fade-scale': '1.3',
                    '--fa-animation-duration': '1.8s',
                    color: '#0d6efd' 
                  }}
                ></i>
  Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
</p>
   <p>
                <i 
                  className="fa-solid fa-circle fa-beat-fade me-2"
                  style={{ 
                    fontSize: '10px',
                    '--fa-beat-fade-opacity': '0.4',
                    '--fa-beat-fade-scale': '1.3',
                    '--fa-animation-duration': '1.8s',
                    color: '#0d6efd' 
                  }}
                ></i>
Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.

              </p>
               <p>
                <i 
                  className="fa-solid fa-circle fa-beat-fade me-2"
                  style={{ 
                    fontSize: '10px',
                    '--fa-beat-fade-opacity': '0.4',
                    '--fa-beat-fade-scale': '1.3',
                    '--fa-animation-duration': '1.8s',
                    color: '#0d6efd' 
                  }}
                ></i>
Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.

              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;