import React from 'react'

export default function About() {
  return (
   <section id="about">

     <div className='container mx-auto flex px-10 py-20 mj:flex-row flex-col items.center'>
       <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-6 flex flex-col md:items-start md:text-left mb:16 md:mb-0 items-center text-center"></div>
       <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
         Hi, I am Grace Mutinda
       </h1>
       <br  className='hidden lg:inline-block' /> I love building amazing web Apps & Mobile Apps with new tech staff
       <p className='mb-8 leading-relaxed'>
         A mix of solo and group projects to build technical and soft skills <br />
         Developing semantically-correct, accessible and responsive web applications,<br />
         as well as open source contributions
         focused on writing clean, maintainable and testable code.
         Building familiarity with Git workflows<br />
       </p>
       <div className='flex justify-center'>
         <a href='contact' className='inline-flex text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-100 rounded text-large'>
         Work with me
         </a>
         <a href='contact' className='ml-4 inline-flex text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-100 rounded text-large'>
         My projects
         </a>
       </div>
        </div>
        <div className='lg:max-w-lg lg:w-full mj:w-1/2 w-5/6'>
          <img className='object-cover object-center rounded'
          alt='hero' src='./project-1.jpeg'
          />
          
       </div>
   </section>
  );
}
