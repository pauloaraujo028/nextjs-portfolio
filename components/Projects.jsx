import React from 'react'
import criptoApp from '../public/assets/projects/criptobase.jpg'
import financeiro from '../public/assets/projects/financeiro.jpg'
import eshop from '../public/assets/projects/eshop.png'
import nextPokedex from '../public/assets/projects/nextpokedex.jpg'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest font-bold uppercase text-[#fe140d]'>Projetos</p>
        <h2 className='py-4'>O que Eu Construí</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='eShop e-Commerce'
            subTitle='ReactJs / Redux / Firebase / CSS3'
            backgroundImg={eshop}
            projectUrl='/Eshop'
          />
          <ProjectItem
            title='Criptobase APP'
            subTitle='ReactJs / Tailwind CSS / API / Firebase'
            backgroundImg={criptoApp}
            projectUrl='/Criptobase'
          />
          <ProjectItem
            title='NextJs Pokédex'
            subTitle='NextJs / Tailwind CSS / API'
            backgroundImg={nextPokedex}
            projectUrl='/NextPokedex'
          />
          <ProjectItem
            title='Controle Financeiro'
            subTitle='ReactJs / localStorage'
            backgroundImg={financeiro}
            projectUrl='/Financeiro'
          />
        </div>
        <div>
          <a href="https://github.com/pauloaraujo028" target='_blank' rel='noreferrer'>
            <p className='w-full pt-10 flex justify-center items-center text-gray-600 underline cursor-pointer dark:text-white'>
              Confira mais projetos no GitHub.
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects