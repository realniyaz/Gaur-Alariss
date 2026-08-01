import Amenities from "./components/Amenities";
import FloatingActions from "./components/FloatingActions";
import Floorplans from "./components/Floorplans";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Price from "./components/Price";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf9f5]">
      <Navbar/>
      <Hero />
      <Overview/>
      <Highlights/>
      <Amenities/>
      <Price/>
      <Floorplans/>
      <Location/>
      <Footer/>
      <FloatingActions/>
    </main>
  );
}