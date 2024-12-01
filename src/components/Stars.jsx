import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import stars from '../assets/stars.png';

const StarBackground = () => {
  const mouseX = useSpring(useMotionValue(0));
  const mouseY = useSpring(useMotionValue(0));

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const moveX = (clientX - window.innerWidth / 2) / 25;
    const moveY = (clientY - window.innerHeight / 2) / 25;
    mouseX.set(moveX);
    mouseY.set(moveY);
  };

  return (
    <motion.div
      className="absolute inset-0 z-0 w-full h-full"
      onMouseMove={handleMouseMove}
      style={{ x: mouseX, y: mouseY }}
    >
      <img
        src={stars}
        alt=""
        className="w-full h-full object-cover opacity-30"
      />
    </motion.div>
  );
};

export default StarBackground;
