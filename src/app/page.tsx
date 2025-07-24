import Footer from "@/app/(LandingPage)/Footer";
import Categorias from "@/app/(LandingPage)/Categorias";
import Navbar from "@/components/Navbar/navbar";
import Ocasiones from "@/app/(LandingPage)/Ocasiones";
import Header from "@/app/(LandingPage)/Header";
import Rewards from "@/app/(LandingPage)/Rewards";
import Reminder from "@/app/(LandingPage)/Reminder";
import TopSellers from "./(LandingPage)/TopSellers";
import Impacto from "@/app/(LandingPage)/Impacto";
import Reseñas from "@/app/(LandingPage)/Reseñas";

export default function Home() {
  return (
<div>
  <Navbar/>
  <Ocasiones/>
  <Header/>
  <Categorias/>
  <Rewards/>
  <Reminder/>
  <TopSellers/>
  <Impacto/>
  <Reseñas/>
  <Footer/>
  <PopUp/>

    </div>
  );
}
