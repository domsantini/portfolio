'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import useWindowWidth from '@/app/hooks/use-window-width'
import ContentWrapper from './ContentWrapper';

function AccordionPage({ page, label, color, colorHover, activePage, setActivePage, setShowLanding }) {
    let isOpen = activePage === page;
    const width = useWindowWidth()
    const [isMobile, setIsMobile] = React.useState(undefined)
    const [isHovered, setIsHovered] = React.useState(undefined)
    
    React.useEffect(() => {
        setIsMobile(width < 768)
    }, [width])
    
    function handleClick() {
        if (activePage === null || activePage != page) {
            setActivePage(page)
        } else if (activePage === page) {
            setActivePage(null)
        } 
    }
    
    return(
        <>
            <button
                className='flex justify-between items-center w-full outline-1 outline-[#6d6e71] outline p-4 cursor-pointer md:flex-col md:h-full md:w-fit md:px-[2vw] transition-colors'
                // TODO: Fix state being set onClick
                style={{ backgroundColor:`${isHovered || isOpen ? colorHover : color}`}}
                id={page}
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className='flex flex-1 justify-start md:justify-center items-center md:rotate-180'>
                    <p className='uppercase text-3xl md:text-4xl font-extrabold text-[#f5f5f5] md:vertical-lr'>
                        {label}
                    </p>
                </div>
                {/* This bit is for the color code, if I ever want to add that back */}
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
                        onAnimationComplete={(variant) => {
                            variant === 'closed' && activePage 
                            ? setShowLanding(true) 
                            : setShowLanding(false)
                        }}
                    >
                        <div
                            className='w-full'
                            style={{ backgroundColor: colorHover }}
                        >    
                            <ContentWrapper page={page} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )    
}

export default React.memo(AccordionPage);

const pageVariantsSmall = {
    open: {
        height: '100%',
        width: '100%',
        transition: { delay: 0.1, duration: 0.7, ease: 'easeOut' }
    },
    closed: {
        height: '0%',
        width: '100%',
        transition: { delay: 0.1, duration: 0.5, ease: 'easeIn'}
    },
}
const pageVariantsLarge = {
    open: {
        height: '100%',
        width: '100%',
        transition: { delay: 0.1, duration: 0.7, ease: 'easeOut' }
    },
    closed: {
        height: '100%',
        width: '0%',
        transition: { delay: 0.1, duration: 0.5, ease: 'easeIn'}
    },
}