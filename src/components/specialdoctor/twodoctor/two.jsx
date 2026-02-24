import "../../../styles/similllar.css"
import onedoctor from "../../../img/doctwo.png"
import Badge from 'react-bootstrap/Badge';
import threedoctor from "../../../img/docthree.png"
import fourdoctor from "../../../img/docfive.png"
import fivedoctor from "../../../img/docsix.png"
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"


import { useState } from "react";

function Twodoctor(){
  const gettop=()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}
   const datatimer = [
  {
    data:"SAT 21",
    times:["12:00 AM","02:00 PM","05:00 PM","08:00 PM"]
  },
  {
    data:"SUN 22",
    times:["10:30 AM","12:30 AM","04:00 PM","05:00 PM","07:30 PM"]
  },
  {
    data:"MON 23",
    times:["11:00 AM","03:00 PM","06:00 PM"]
  },
  {
    data:"TUE 24",
    times:["09:00 AM","11:00 AM","02:30 PM","05:30 PM"]
  },
  {
    data:"WED 25",
    times:["09:30 AM","12:30 PM","05:30 PM","06:30 PM"]
  },
  {
    data:"THU 26",
    times:["10:00 AM","01:00 PM","03:00 PM","07:00 PM"]
  },
  {
    data:"FRI 27",
    times:["12:00 AM","02:00 PM","07:00 PM"]  
  }
];

const[information,setinformation]=useState("SAT 21");

const filterdata = information === "SAT 21" 
  ? datatimer.slice(0,1)
  : datatimer.filter((e) => e.data === information);

    return(
        <>
        <div className="onedoctor">
           <div className="row align-items-center">
  <div className="col-md-4">
    <div className="image">
      <img src={onedoctor} alt="Doctor Richard James" />
    </div>
  </div>

  <div className="col-md-8">
    <div className="text border p-3">
      <h2>
Dr. Emily Larson <i className="fas fa-certificate fa-1x text-primary mb-3"></i>     </h2>
      <h6>MBBS - Gynecologist <h5>
        Example heading <Badge bg="secondary">5 Years</Badge>
      </h5>

</h6>

      <p>
       Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.
      </p>

      <p className="fw-bold mt-3">
        Appointment fee: <span className="text-primary">$60</span>
      </p>
      <div className="row">
    <div className="col-12">
        <div className="buttons">
            <button className="btn btn-primary m-2" onClick={()=>setinformation("SAT 21")}>SAT 21</button>
            <button className="btn btn-primary m-2" onClick={()=>setinformation("SUN 22")}>SUN 22</button>
            <button className="btn btn-primary m-2" onClick={()=>setinformation("MON 23")}>MON 23</button>
            <button className="btn btn-primary m-2" onClick={()=>setinformation("TUE 24")}>TUE 24</button>
            <button className="btn btn-primary m-2" onClick={()=>setinformation("WED 25")}>WED 25</button>
            <button className="btn btn-primary m-2" onClick={()=>setinformation("THU 26")}>THU 26</button>
            <button className="btn btn-primary m-2" onClick={()=>setinformation("FRI 27")}>FRI 27</button>
        </div>
        <div className="alltimes">
            {filterdata.map((e,index)=>{
                return (
                  <div key={index}>
                    <h5>{e.data}</h5>
                    {e.times.map((time, i) => (
                      <span key={i} style={{margin: "0 10px"}}>{time}</span>
                    ))}
                  </div>
                )
            })}
        </div>
    </div>
</div>
    </div>
  </div>
</div>

        </div>
         <div className="row m-2">
          <div className="col-md-4">
                                <Link onClick={gettop} to="/creat/3" className="link">
                                     <div className="cards">

         <Card className="doctor-card  shadow-sm ">
                <Card.Img  src={threedoctor} className="" />

                <Card.Body>
                 

                  <Card.Title className="mt-2">
<p>Dr. Sarah Patel </p>                  </Card.Title>

                  <Card.Text className="text-muted">
                    <p>MBBS - Dermatologist
</p>
                  </Card.Text>

                 
                </Card.Body>
              </Card>
        </div>
                                </Link>

       

          </div>
          <div className="col-md-4">
                  <Link onClick={gettop} to="/creat/4" className="link">
                   <div className="cards">
         <Card className="doctor-card  shadow-sm ">
                <Card.Img  src={fourdoctor} className="" />

                <Card.Body>
                 

                  <Card.Title className="mt-2">
<p>Dr. Jennifer Garcia </p>                  </Card.Title>

                  <Card.Text className="text-muted">
                    <p>MBBS - Dermatologist

</p>
                  </Card.Text>

                 
                </Card.Body>
              </Card>
        </div>
                  </Link>

           

          </div>
          <div className="col-md-4">
                  <Link onClick={gettop} to="/creat/5" className="link">
                     <div className="cards">
         <Card className="doctor-card  shadow-sm ">
                <Card.Img  src={fivedoctor} className="" />

                <Card.Body>
                 

                  <Card.Title className="mt-2">
<p>Dr. Andrew Williams </p>                  </Card.Title>

                  <Card.Text className="text-muted">
                    <p>MBBS - Gastroenterologist




</p>
                  </Card.Text>

                 
                </Card.Body>
              </Card>
        </div>
                  </Link>

         

          </div>
        </div>
        </>
    )
}
export default Twodoctor