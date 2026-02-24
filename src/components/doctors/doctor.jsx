import "./doctor.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import docone from "../../img/docone.png";
import doctwo from "../../img/doctwo.png";
import docthree from "../../img/docthree.png";
import docfour from "../../img/docfour.png";
import docfive from "../../img/docfive.png";
import docsix from "../../img/docsix.png";
import docseven from "../../img/docseven.png";
import doceight from "../../img/doceight.png";
import docnine from "../../img/docnine.png";
import docten from "../../img/docten.png";
import { Link } from "react-router-dom";

function Doctors() {
  const gettop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

  const doctorsData = [
    {
      id: 1,
      img: docone,
      name: "Dr. Richard James",
      specialty: "General Physician",
      status: "Available"
    },
    {
      id: 2,
      img: doctwo,
      name: "Dr. Sarah Johnson",
      specialty: "Gynecologist",
      status: "Available"
    },
    {
      id: 3,
      img: docthree,
      name: "Dr. Michael Brown",
      specialty: "Dermatologist",
      status: "Available"
    },
    {
      id: 4,
      img: docfour,
      name: "Dr. Emily Davis",
      specialty: "Pediatrician",
      status: "Available"
    },
    {
      id: 5,
      img: docfive,
      name: "Dr. David Wilson",
      specialty: "Neurologist",
      status: "Available"
    },
    {
      id: 6,
      img: docsix,
      name: "Dr. Olivia Martinez",
      specialty: "Gastroenterologist",
      status: "Available"
    },
    {
      id: 7,
      img: docseven,
      name: "Dr. Olivia Martinez",
      specialty: "Gastroenterologist",
      status: "Available"
    },
    {
      id: 8,
      img: doceight,
      name: "Dr. Olivia Martinez",
      specialty: "Gastroenterologist",
      status: "Available"
    },
    {
      id: 9,
      img: docnine,
      name: "Dr. Olivia Martinez",
      specialty: "Gastroenterologist",
      status: "Available"
    },
    {
      id: 10,
      img: docten,
      name: "Dr. Olivia Martinez",
      specialty: "Gastroenterologist",
      status: "Available"
    }
  ];

  return (
    <div className="doctors py-5">
      <div className="container text-center mb-5">
        <h2 className="fw-bold">Top Doctors to Book</h2>
        <p className="text-muted">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      <div className="container">
        <div className="row g-4">
          {doctorsData.map((doctor,index) => (
            <div className="col-md-4" key={doctor.index}>
              <Link onClick={gettop} to={`/creat/${doctor.id}`} className="link">
              <div className="col-md-12" >
              <Card className="doctor-card h-100 shadow-sm ">
                <Card.Img variant="top" src={doctor.img} />

                <Card.Body>
                  <span
                    className={`status-badge ${
                      doctor.status === "Available"
                        ? "text-success"
                        : "text-danger"
                    }`}
                  >
                    ● {doctor.status}
                  </span>

                  <Card.Title className="mt-2">
                    {doctor.name}
                  </Card.Title>

                  <Card.Text className="text-muted">
                    {doctor.specialty}
                  </Card.Text>

                 
                </Card.Body>
              </Card>
            </div>
            

                </Link>

            </div>
             
            
          ))}
        </div>
      </div>
       <Link to="/all" className="link">
      <div className="more text-center mt-5">
        <button onClick={gettop} className="btn btn-primary rounded">More</button>
      </div>
                </Link>
     
    </div>
  );
}

export default Doctors;