import "./Specialization.css"
import oneimg from "../../img/onespecial.svg"
import twoimg from "../../img/twospecial.svg"
import threeimg from "../../img/threespecial.svg"
import fourimg from "../../img/fourspecial.svg"
import fiveimg from "../../img/fivespecial.svg"
import siximg from "../../img/sixspecial.svg"
function  Specialization(){
    return(
        <>
        <div className="continer" id="Specialization">
            <h4>Find by Speciality</h4>
            <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.

</p>
<div className="content">
   <div className="row g-4">
  <div className="col-md-4">
    <div className="cardd">
      <img src={oneimg} alt="General Physician" />
      <h4>General Physician</h4>
    </div>
  </div>

  <div className="col-md-4">
    <div className="cardd">
      <img src={twoimg} alt="Gynecologist" />
      <h4>Gynecologist</h4>
    </div>
  </div>

  <div className="col-md-4">
    <div className="cardd">
      <img src={threeimg} alt="Dermatologist" />
      <h4>Dermatologist</h4>
    </div>
  </div>



  <div className="col-md-4">
    <div className="cardd">
      <img src={fourimg} alt="Pediatrician" />
      <h4>Pediatrician</h4>
    </div>
  </div>

  <div className="col-md-4">
    <div className="cardd">
      <img src={fiveimg} alt="Neurologist" />
      <h4>Neurologist</h4>
    </div>
  </div>

  <div className="col-md-4">
    <div className="cardd">
      <img src={siximg} alt="Gastroenterologist" />
      <h4>Gastroenterologist</h4>
    </div>
  </div>
</div>

</div>
        </div>
        </>
    )
}
export default Specialization