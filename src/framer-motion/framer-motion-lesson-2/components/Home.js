import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const containerVariants = {
  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1,
    transition:{
      delay:.5,
      duration:.5
    }
  },
  exit:{
    x:'-100vw',
    transition:{
      ease:'easeInOut'
    }
  }
}
const Home = () => {
  return (
    <motion.div 
    className="home container"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      <motion.h2 
       animate={{}}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
         whileHover={{
            scale:1.1
         }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;