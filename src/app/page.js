'use client'
import React from 'react'

import { pages } from './testdata'
import useWindowWidth from './hooks/use-window-width'
import AccordionPage from '@/components/AccordionPage'
import LandingContent from '@/components/LandingContent'

export default function Home() {
  
  const width = useWindowWidth()
  const [activePage, setActivePage] = React.useState(null)
  const [isMobile, setIsMobile] = React.useState(undefined)
  const [showLanding, setShowLanding] = React.useState(true)
  
  React.useEffect(() => {
    setIsMobile(width < 768)
  }, [width])
    
  React.useEffect(() => {
    if (activePage === null) {
      setShowLanding(true)
    } else {
      setShowLanding(false)
    }
  }, [showLanding])
  
  return (
    <main className="relative p-6 min-h-screen bg-[#E8EEF2]">
      <div className='absolute inset-10 flex justify-center align-center border-2 border-solid border-black bg-[#E8EEF2]'>
        <div className='flex flex-col justify-end h-full w-full md:flex-row'>  
            {showLanding && <LandingContent />}
            {pages.map(({ page, label, color, colorHover }, index) => (
              <AccordionPage 
                key={`${page}-${index}`}
                isMobile={isMobile}
                page={page}
                label={label}
                color={color}
                colorHover={colorHover}
                activePage={activePage}
                setActivePage={setActivePage}
                setShowLanding={setShowLanding}
              />
            ))}        
        </div>
      </div>
    </main>
  );
}
