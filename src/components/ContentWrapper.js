'use client'
import { motion } from 'framer-motion'

import AboutContent from "./AboutContent"
import ProjectContent from "./ProjectContent"
import ContactContent from "./ContactContent"

const contentMap = {
    about: AboutContent,
    projects: ProjectContent,
    contact: ContactContent
}

function ContentWrapper({ page, color }) {
    const ContentComponent = contentMap[page]
    
    return (
        <motion.div 
            variants={contentVariants}
            initial='closed'
            animate='open'
            exit='closed'
            style={{ backgroundColor: color }} 
            className='h-full w-full'
        >
            {ContentComponent ? <ContentComponent /> : null}
        </motion.div>
    )
}

export default ContentWrapper;

const contentVariants = {
    open: { 
        opacity: 1,
        transition: { delay: 0.5, duration: 0.5, ease: 'easeOut'}
    },
    closed: { 
        opacity: 0,
        transition: { duration: 0.1, ease: 'easeIn'}
    },
}