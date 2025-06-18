import NavbarTemp from "./components/NavBarTemp";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Posts from "./components/Posts";
import Contact from "./components/Contact";
function App() {
  return (
      <>
        <NavbarTemp/>
        <Banner/>
          <Experience/>
          <Skills/>
          <Posts/>
          <Contact/>
      </>

  );
}

export default App;
