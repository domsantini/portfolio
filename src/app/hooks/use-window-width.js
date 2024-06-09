'use client'
import React from 'react'

function useWindowWidth(){
    const [width, setWidth] = React.useState(undefined)
    
    React.useEffect(() => {    
        function handleResize() {
            setWidth(window.innerWidth)
        }
        
        window.addEventListener('resize', handleResize)
        
        handleResize()
        
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    
    return width
}

export default useWindowWidth;
