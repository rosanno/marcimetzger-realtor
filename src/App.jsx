import AboutMe from "./components/AboutMe";
import ContactUs from "./components/ContactUs";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Navigation from "./components/Navigation";
import Partners from "./components/Partners";
import SearchForm from "./components/SearchForm";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      {/* Navigation bar component */}
      <Navigation />

      {/* Hero section component */}
      <Hero />

      {/* Search form component */}
      <SearchForm />

      {/* About Me component */}
      <AboutMe />

      {/* Info component */}
      <Info />

      {/* Partners component */}
      <Partners />

      {/* Gallery component */}
      <Gallery />

      {/* Services component */}
      <Services />

      {/* Contact Us component */}
      <ContactUs />
    </>
  );
};

export default App;
