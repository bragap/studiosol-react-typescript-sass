// components
import Favorites from "../components/Favorites";
import Library from "../components/Library";

// framer motion
import { motion } from 'framer-motion';

function Home() {


  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} >
      <Favorites />
      <Library />
    </motion.div>
  );
}

export default Home
