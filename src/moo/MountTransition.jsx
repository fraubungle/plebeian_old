import React from 'react'
import { motion } from 'framer-motion'


export const MountTransition = ({ children, slide = 0, slideUp = 0 }) => {
console.log('children: ', children)
console.log('slide: ', slide)
console.log('slideUp: ', slideUp)
  return (
    <motion.div
    exit={{ opacity: 0, x: slide, y: slideUp }}
    initial={{ opacity: 0, x: slide, y: slideUp }}
    animate={{ opacity: 1, x: 0, y: 0 }}
  >
    {children}
  </motion.div>
  )
}