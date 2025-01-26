import personal_image from '../assets/personel_image.jpg';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  return (
    <div className="container mx-auto px-4 flex justify-evenly">
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:justify-between">
        {/* Text Content */}
        <div 
          data-aos="fade-right" 
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase bg-gradient-to-r from-purple-700 to-indigo-800 bg-clip-text text-transparent">
            Hi, I'm Srinandan
          </h1>
          <p 
            className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold tracking-tighter"
          >
            <Typewriter
              words={[
                "Aspiring Web Developer",
                "Learning UI/UX Design",
                "Curious Tech Enthusiast",
                "Always Growing",
                "Problem Solver in Progress",
              ]}

              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        </div>

        {/* Image */}
        <div 
          data-aos="fade-up"
          className="mt-8 md:mt-0"
        >
          <img 
            src={personal_image} 
            alt="Profile picture" 
            className="rounded-lg shadow-xl w-[250px] md:w-[300px] lg:w-[400px] h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
