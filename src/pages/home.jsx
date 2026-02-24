import Poster from "../components/poster/poster";
import Specialization from "../components/Specialization/Specialization"
import Doctors from "../components/doctors/doctor";
import Services from "../components/services/services";
import Before from "../components/beforefooer/before";
function Homepage(){
    return(
        <>
        <div className="homepage">
             <Poster/>
      <Specialization/>
      <Doctors/>
      <Services/>
      <Before/>
            
        </div>
        </>
    )
}
export default Homepage