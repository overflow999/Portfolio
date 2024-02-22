import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
   <main className="flex min-h-screen flex-col bg-[#121212] ">
    <Navbar/>
    <div className="container mt-24 mx-auto px-12 py-4">
    <Hero/>
    <AchievementsSection/>
    <AboutSection/>
    <ProjectSection/> 
    <EmailSection/>
    </div>
    <Footer/>
   </main>
  );
}
