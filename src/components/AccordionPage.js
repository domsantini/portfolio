'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import ContentWrapper from './ContentWrapper';

function AccordionPage({ isMobile, page, label, color, colorHover, activePage, setActivePage, setShowLanding }) {
    // const isOpen = activePage === page;
    const [isOpen, setIsOpen] = React.useState(false)
    const [isHovered, setIsHovered] = React.useState(undefined)
    
    function handleClick() {
        if (page === activePage){
            setActivePage(null)
            setIsOpen(false)
        } else {
            setActivePage(page)
            setIsOpen(true)
        }
    }
        
    return(
        <>
            <button
                className='flex justify-between items-center min-h-[120px] w-full px-4 cursor-pointer md:flex-col md:h-full md:w-[120px] md:min-w-[120px] md:py-8 transition-colors'
                style={{ backgroundColor:`${isHovered ? colorHover : color}`}}
                id={page}
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className='flex flex-1 justify-start md:justify-center items-center md:rotate-180'>
                    <p className='uppercase text-3xl md:text-4xl font-extrabold text-white md:vertical-lr'>
                        {label}
                    </p>
                </div>
                {/* <div style={isMobile ? { writingMode: 'vertical-lr' } : undefined}>
                    <p className='text-xs text-white'>
                        {isHovered ? colorHover : color}
                    </p>
                </div> */}
            </button>
            
            <AnimatePresence>    
                {isOpen && (
                    <motion.div 
                        variants={isMobile ? pageVariantsSmall : pageVariantsLarge}
                        initial='closed'
                        animate='open'
                        exit='closed'
                        className='w-full flex overflow-auto'
                        onAnimationComplete={ isOpen ? () => { setShowLanding(true) } : () => { setShowLanding(false) }}
                    >
                        <div
                            className='w-full'
                            style={{ backgroundColor: color }}
                        >    
                            <ContentWrapper page={page} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )    
}

export default AccordionPage;

const pageVariantsSmall = {
    open: {
        height: '100%',
        width: '100%',
        transition: { delay: 0.1, duration: 1, ease: 'easeOut' }
    },
    closed: {
        height: '0%',
        width: '100%',
        transition: { delay: 0.1, duration: 1, ease: 'easeIn'}
    },
}
const pageVariantsLarge = {
    open: {
        height: '100%',
        width: '100%',
        transition: { delay: 0.1, duration: 1, ease: 'easeOut' }
    },
    closed: {
        height: '100%',
        width: '0%',
        transition: { delay: 0.1, duration: 0.5, ease: 'easeIn'}
    },
}