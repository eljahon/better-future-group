import Navbar from "@/components/Navbar";
import GlobalProblems from "@/components/GlobalProblems";
import OurProjects from "@/components/OurProjects";
import Footer from "@/components/Footer";
import Contactus from "@/components/Contactus";
import MeetOurTeam from "@/components/MeetOurTeam";
import Aboutus from "@/components/Aboutus";
import OurProducts from "@/components/OurProducts";

export default function Home() {
  return (
    <div>
        <main className="container">
            <Navbar />
            <GlobalProblems />
             <OurProducts/>
        </main>
       <div className='bg-our'>
           <OurProjects/>
       </div>
        <div className='container'>
            <Aboutus/>
            <MeetOurTeam/>
            <div className='bg-our'>
            <Contactus/>
            </div>
            <Footer/>
        </div>
    </div>
  );
}
