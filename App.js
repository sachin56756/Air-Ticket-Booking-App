import BookingAssistance from "./components/BookingAssistance";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import FlightDeals from "./components/FlightDeals";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homee from "./components/Homee";
import SmallCardSlider from "./components/SmallCardSlider";
import TrendingDestinations from "./components/TrendingDestinations";
import UnmatchedFares from "./components/UnmatchedFares";

function App() {
  return (
    <div className="App">
      <Header />
      <Homee />
      <BookingAssistance />
      <FlightDeals />
      <UnmatchedFares />
      <FAQ />
      <SmallCardSlider />
      <Features />
      <TrendingDestinations />
      <Footer />
    </div>
  );
}

export default App;
