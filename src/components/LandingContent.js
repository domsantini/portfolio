'use client'
import { motion, AnimatePresence } from 'framer-motion'

function LandingContent() {
    
    return (
        <AnimatePresence>
            <motion.div 
                className="flex flex-col h-full w-full px-4 py-8 gap-8 leading-none text-[##1a1a1a]"
                variants={contentVariants}
                initial='closed'
                animate='open'
                exit='closed'        
            >
                <div className='flex '>
                    <p className='text-5xl'>Hey. I'm Dom.</p>
                </div>
                <div className='flex-1 '>
                    <p className='text-xl leading-7 tracking-wide'>
                        I'm a self-taught frontend developer interested in creating clean digital experiences. React is my favorite tool. My newest obsession is animation. 
                    </p>
                </div>
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
        transition: {
            type: 'spring'
        }
        // transition: { delay: 1, duration: 5, ease:'easeIn' }
    },
}