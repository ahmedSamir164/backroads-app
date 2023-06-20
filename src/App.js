import NavigationBar from "./components/nav/navigation-bar.component";
import Home from "./components/home/home.component";
import AboutUs from "./components/about/about.component";
import Services from "./components/about/services/services.component";
import Tours from "./components/tours/tours";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
      <AboutUs />
      <Services />
      <Tours />
      <Footer />
    </div>
  );
}

export default App;
