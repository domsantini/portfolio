'use client'
import { motion, AnimatePresence } from 'framer-motion'

function LandingContent() {
    return (
        <AnimatePresence>    
            <motion.div 
                className=" border-2 border-solid border-green-500 flex flex-col justify-center items-center gap-4 h-full w-full"
                variants={contentVariants}
                initial='closed'
                animate='open'
                exit='closed'
            >
                <p className='text-[10vw] uppercase font-bold'>Dominic Santini</p>
                <p className='text-2xl uppercase'>Frontend developer</p>
                
            </motion.div>
        </AnimatePresence>
    )
}

export default LandingContent;

const contentVariants = {
    open: {
        opacity: 1,
        transition: { duration: 1 }
    },
    closed: { 
        opacity: 0,
        transition: { duration: 0.1 }
    },
}