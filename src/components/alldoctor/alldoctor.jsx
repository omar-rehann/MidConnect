import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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
import { useState } from "react";
import "./alldoctor.css"
import Services from "../services/services";
function Alldoctor(){
    const alldoctor = [
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
     const [selectdoctor,useselectdoctor]=useState("All");
     const filterdata =selectdoctor ==="All"?alldoctor:alldoctor.filter((card)=>card.specialty===selectdoctor);
    return(
        <>
        <div className="alldoctor">
            <div className="row">
                <div className="col-md-3">
                    <button onClick={()=>useselectdoctor("General Physician")} className="w-100 btn btn-primary m-2">General physician</button>
                    <button onClick={()=>useselectdoctor("Gynecologist")} className="w-100 btn btn-primary m-2">Gynecologist</button>
                    <button onClick={()=>useselectdoctor("Dermatologist")} className="w-100 btn btn-primary m-2">Dermatologist</button>
                    <button onClick={()=>useselectdoctor("Pediatrician")} className="w-100 btn btn-primary m-2">Pediatrician</button>
                    <button onClick={()=>useselectdoctor("Neurologist")} className="w-100 btn btn-primary m-2">Neurologist</button>
                    <button onClick={()=>useselectdoctor("Gastroenterologist")} className="w-100 btn btn-primary m-2">Gastroenterologist</button>



                </div>
               <div className="col-md-9">
  <div className="row g-2">
    {filterdata.map((e, index) => (
      <div className="col-md-3 mb-4  m-1" key={index}>
        <Card  border="primary" className="doctor-card  shadow-sm ">
          <Card.Img variant="top" src={e.img} />

          <Card.Body>
            <span
              className={`status-badge ${
                e.status === "Available"
                  ? "text-success"
                  : "text-danger"
              }`}
            >
              ● {e.status}
            </span>

            <Card.Title className="mt-2">
              {e.name}
            </Card.Title>

            <Card.Text className="text-muted">
              {e.specialty}
            </Card.Text>

           
          </Card.Body>
        </Card>
      </div>
    ))}
  </div>
</div>
            </div>
        </div>
        <Services/>
        </>
    )
}
export default Alldoctor