'use client'
import React from 'react'

import { pages } from './testdata'
import AccordionPage from '@/components/AccordionPage'
import LandingContent from '@/components/LandingContent'

export default function Home() {
  
  const [activePage, setActivePage] = React.useState(null)
  const [showLanding, setShowLanding] = React.useState(true)  
  
  return (
    <main className="relative p-6 min-h-screen bg-[#F4F0EC]">
      <div className='absolute inset-5 md:inset-10 flex justify-center align-center border border-solid border-[#6d6e71] border-collapse bg-[#f5f5f5]'>
        <div className='flex flex-col justify-end h-full w-full md:flex-row'>
            {activePage === null && showLanding && <LandingContent />}
            {pages.map(({ page, label, color, colorHover }, index) => (
              <AccordionPage 
                key={`${page}-${index}`}
                page={page}
                label={label}
                color={color}
                colorHover={colorHover}
                activePage={activePage}
                setActivePage={setActivePage}
                showLanding={showLanding}
                setShowLanding={setShowLanding}
              />
            ))}        
        </div>
      </div>
    </main>
  );
}
