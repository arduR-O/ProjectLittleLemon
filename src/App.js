import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero'
import Specials from './Components/Specials';
import Testimonials from './Components/Testimonials'
import About from './Components/About'
import Footer from './Components/Footer'
function App() {
  //we have replace the root div with <></> since we want to use semantic html and div is not semantic html tag
  //I have the high fidelity model ready in figma, refering that I am going to figure out the html to be used to now
  //figma link: https://www.figma.com/file/UKrZqIUAaaEm7jNzGuwj1R/Item-3-Exercise-Wireframing-the-project-Wireframe?type=design&node-id=0%3A1&mode=design&t=R0vjr0PHBi3kg8ck-1
  //HTML comment has the HTML breakdown
  //now that I am done with deciding the html tags, I need to break it down into react components
  //react components have been saved as the same named text group
  //now I will write the stuff as the components that I have decided
  //ok so first of all I made empty file for all components and then imported them into App.js
  //then I looked at the plan and wrote the most basic html in each component, components like card that needed to be dynamic, well I left those components empty so that I may work on them later, for now the html is like 90% done
  //EDIT: for now I am adding nothing dyanimc, I am going to assume that number of card and reviews is constant, afterall I need to finish this project today itself 😬
  //now I will add the meta and open graph tags in index.html
  //go to specials.js to learn how to import images into components
  return (
    <>
      <Header/>
      <Hero/>
      <Specials/>
      <Testimonials/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
