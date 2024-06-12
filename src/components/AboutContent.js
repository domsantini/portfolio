function AboutContent() {
    return (
        <div className="relative flex flex-col items-center px-4 py-6 font-extralight text-white text-base">
            <div className='flex flex-col gap-4 overflow-scroll max-w-[500px]'>    
                <p className='text-lg'>Hello there!</p>
                <p>
                    I'm currently an independent front-end developer looking to bring immense passion, an eagerness to learn and develop, and a solid skill set to your team.
                </p>
                <p>
                    After graduating UC Santa Barbara in 2016, I began following a career path in finance. I started work at a Big 4 accounting firm, Ernst & Young, then transitioned to Upstart. Throughout this stage of my career, something felt amiss. 
                </p>
                <p>
                    After years of deep reflection, I realized I was capable of so much more and wanted a career where my genuine curiosity and desire to learn could flourish. I had long been mystified by programming and decided to take the leap into teaching myself how to build applications. While an innate love of design draws me to the front-end, I’ve built full-stack applications from scratch, and truly desire to keep growing a holistic approach to all aspects of coding. 
                </p>
                <p>My spark has been reignited and I hope to work with you!</p>
            </div>
            {/* <div className='absolute bottom-0 h-[40px] w-full z-30 blur-2xl'/> */}
        </div>
    )
}

export default AboutContent;
