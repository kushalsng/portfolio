import { BallCanvas } from "./canvas"
import { styles } from '../style';
import { motion } from 'framer-motion'
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { fadeIn, textVariant } from '../utils/motion'
import Tilt from 'react-tilt'


const TechCard = ({ index, name, icon }) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", 0.3 * index, 0.6)} 
      className="w-20" // smaller width here, adjust as needed
    >
      <Tilt
        tiltMaxAngleX={10} // smaller max tilt angle for subtle effect
        tiltMaxAngleY={10}
        scale={1.05} // slight scale on hover
        transitionSpeed={400}
        style={{background: 'linear-gradient(135deg, rgb(24, 29, 54), #001a52)'}}
        className="p-[1px] rounded-[15px] shadow-card flex justify-center items-center bg-tertiary h-20" // smaller card height and rounded corners
      >
        <img src={icon} alt={name} className="w-10 h-10 object-contain" style={{ transform: "scaleX(-1)"}} />
      </Tilt>
      <div className="text-center mt-2 text-white text-[14px] font-semibold">
        {name}
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} mb-2`}>Skills.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <TechCard 
            key={technology.name} 
            index={index} 
            name={technology.name} 
            icon={technology.icon} 
          />
        ))}
      </div>
    </>
  )

}

export default SectionWrapper(Tech, '')