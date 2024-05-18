'use client'
import { range } from './utils'
import { pages } from './testdata'

export default function Home() {
  return (
    <main className="relative p-6 min-h-screen border border-red-500 border-solid">
      <div className='absolute inset-6 flex justify-center align-center border-2 border-solid border-blue-600'>
        
        <div className='flex flex-col justify-end h-full w-full border border-solid border-pink-600'>
            {pages.map(({ page }, index) => (
              <button 
                key={`${index}-${page}`} 
                data-page={page} 
                className='w-full h-12 border border-solid border-green-600 cursor-pointer'  
                onClick={(e) => console.log(e.target.dataset.page)}
              >
                {page.toLocaleUpperCase()}
              </button>
            ))}        
        </div>
      </div>
    </main>
  );
}
