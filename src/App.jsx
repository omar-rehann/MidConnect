import "./styles/all.css"
import Header from "./components/navbar/nav"; 
import Footer from "./components/footer/footer";
import Homepage from "./pages/home";
import ABoutpage from "./pages/about"
import Admin from "./pages/admin"
import Contactpage from "./pages/contact"
import Alldcotor from "./components/alldoctor/alldoctor"
import Create from "./components/create/create"
import  DocLog from "./components/doctorlogin/doclog"
import Login from "./components/login/login";
import Loginhere from "./components/loghere/loghere"
import Onedoctor from "../src/components/specialdoctor/onedoctor/onedoctor";
import Twodoctor from "./components/specialdoctor/twodoctor/two";
import Threedoctor from "./components/specialdoctor/threedoctor/three";
import Fourdoctor from "./components/specialdoctor/four doctor/four";
import Fivedoctor from "./components/specialdoctor/fivedoctor/five";
import Sixdoctor from "./components/specialdoctor/sixdoctor/six";
import Sevendoctor from "./components/specialdoctor/sevendoctor/seven";
import Eightdoctor from "./components/specialdoctor/eightdoctor/eight";
import Ninedoctor from "./components/specialdoctor/ninedoctor/nine";
import Tendoctor from "./components/specialdoctor/tendoctor/ten"
import { BrowserRouter,Routes, Route  } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Header/>

      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/alldoctor" element={<Alldcotor />} />
      <Route path="/about" element={<ABoutpage />} />
      <Route path="/adminpanel" element={<Admin />} />
      <Route path="/contact" element={<Contactpage />} />
      <Route path="/createaccount" element={<Create />} />
      <Route path="/doctorlogin" element={<DocLog />} />
      <Route path="/adminlogin" element={<Login />} />
      <Route path="/all" element={<Alldcotor />} />
      <Route path="/loginhere" element={<Loginhere />} />
      <Route path="/creat/1" element={<Onedoctor/>}/>
      <Route path="/creat/2" element={<Twodoctor/>}/>
      <Route path="/creat/3" element={<Threedoctor/>}/>
      <Route path="/creat/4" element={<Fourdoctor/>}/>
      <Route path="/creat/5" element={<Fivedoctor/>}/>
      <Route path="/creat/6" element={<Sixdoctor/>}/>
      <Route path="/creat/7" element={<Sevendoctor/>}/>
      <Route path="/creat/8" element={<Eightdoctor/>}/>
      <Route path="/creat/9" element={<Ninedoctor/>}/>
      <Route path="/creat/10" element={<Tendoctor/>}/>



      </Routes>
            <Footer/>
            {/* <Onedoctor/>
            <Twodoctor/>
            <Threedoctor/>
            <Fourdoctor/>
            <Fivedoctor/>
            <Sixdoctor/>
            <Sevendoctor/>
            <Eightdoctor/>
            <Ninedoctor/> */}
      </BrowserRouter>      
  
      
      
    </div>
  );
}

export default App;
