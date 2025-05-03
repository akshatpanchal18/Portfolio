import HomePage from "./Components/Main/Home";
import AboutMe from "./Components/Main/AboutMe";
import Work from "./Components/Main/Work";
import Contact from "./Components/Main/Contact";

export default function Home() {
  return (
    <>
      <div>
        <div id="home" className="md:pt-10 lg:pt-10 pt-24">
          <HomePage />
        </div>
        {/* <section
          id="about"
          className="h-screen bg-gray-100 flex items-center justify-center"
        >
          <AboutMe />
        </section> */}
        <div
          id="about-me"
          className="p-4 md:pt-10 lg:pt-10 flex items-center justify-center"
        >
          {/* <Services /> */}
          <AboutMe />
        </div>

        <div
          id="work"
          className=" p-4 md:pt-10 lg:pt-10  flex items-center justify-center"
        >
          <Work />
        </div>
        {/* <div
          id="testimonial"
          className="p-4 md:pt-10 lg:pt-10 flex items-center justify-center"
        >
          <TestimonialSection />
        </div> */}
        <div
          id="contact"
          className="p-4 md:pt-10 lg:pt-10 flex items-center justify-center"
        >
          <Contact />
        </div>
      </div>
    </>
  );
}
