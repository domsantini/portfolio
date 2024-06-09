'use client'

import React from 'react'
import { projects } from '../app/testdata.js'

import Link from 'next/link'

export function ProjectContent({ color }) {
    
    const [showPopup, setShowPopup] = React.useState(false)
    
    return (
        <div style={{ backgroundColor: color }} className='flex flex-col justify-center items-center h-full w-full p-10 overflow-hidden text-xl'>
            <ul className='border-t border-solid border-white'>
                {projects.map(({ id, title, description, stack, githubLink, liveLink, isShown, setIsShown}) => (
                    <ProjectItem
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        stack={stack}
                        githubLink={githubLink}
                        liveLink={liveLink}
                        isShown={showPopup}
                        setIsShown={setShowPopup}
                    />   
                ))}
                
            </ul>
        </div>
    )
}

function ProjectItem({ id, title, description, stack, githubLink, liveLink, isShown, setIsShown }) {
    return (    
        <li className='flex justify-between items-center gap-40 px-2 py-4 border-b border-solid border-white text-white'>
            <div 
                className='flex flex-1' 
            >
                <p className='font-medium'>{title}</p>
            </div>
            <div className='space-x-4'>
                <Link className='opacity-60 hover:opacity-100' target='_blank' href={liveLink}>site</Link>
                <Link className='opacity-60 hover:opacity-100' target='_blank' href={githubLink}>code</Link>
            </div>
            {isShown && (
                <div className='absolute'>
                    <p>{description}</p>
                    {stack.map((tech) => (
                        <div 
                            key={`${tech}-${id}`}
                            className='border-2 border-solid border-red-500 rounded-lg'
                        >
                            <p>{tech}</p>
                        </div>
                    ))}
                </div>
            )}
        </li>
    )
}

export default ProjectContent;