'use client'

import React from 'react'
import { projects } from '../app/testdata.js'

import Link from 'next/link'

export function ProjectContent({ color }) {
        
    return (
        <div style={{ backgroundColor: color }} className='flex flex-col justify-center items-center h-full w-full p-10 overflow-hidden text-xl'>
            <ul className='flex flex-col gap-4 max-w-[500px]'>
                {projects.map(({ id, title, description, stack, githubLink, liveLink }) => (
                    <ProjectItem
                        key={id}
                        title={title}
                        description={description}
                        stack={stack}
                        githubLink={githubLink}
                        liveLink={liveLink}
                    />   
                ))}
            </ul>
        </div>
    )
}

function ProjectItem({ title, description, stack, githubLink, liveLink }) {
    return (    
        <li className='flex flex-col gap-4 px-2 py-4 text-white '>
            <p className='w-full border-b border-solid border-white'>{title}</p>
            {/* <span>{stack.map((tech) => (
                <span className='text-xs'>{tech}</span>
            ))}</span> */}
            <p className='text-base w-full'>{description}</p>
            <div className='flex gap-2'>    
                <Link className='opacity-60 hover:opacity-100 hover:scale-110 transition-all' target='_blank' href={liveLink}>site</Link>
                <span className='opacity-30'>{'·'}</span>
                <Link className='opacity-60 hover:opacity-100 hover:scale-110 transition-all' target='_blank' href={githubLink}>code</Link>
            </div>
        </li>
    )
}


export default ProjectContent;