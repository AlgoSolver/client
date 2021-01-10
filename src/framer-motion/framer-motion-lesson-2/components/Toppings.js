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
      delay:0,
      duration:1
    }
  },
  exit:{
    x:'-100vw',
    transition:{
      ease:'easeInOut'
    }
  }
}
const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div 
    variants={containerVariants}
     initial="hidden"
     animate="visible"
     exit="exit"
    className="toppings container">
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{ topping }</span>
            </li>
          )
        })}
      </ul>

      <Link to="/order">
        <button>
          Order
        </button>
      </Link>

    </motion.div>
  )
}

export default Toppings;