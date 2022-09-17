import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import criptoApp from '../public/assets/projects/criptobase.jpg'
import financeiro from '../public/assets/projects/financeiro.jpg'
import projeto1 from '../public/assets/projects/projeto1.jpg'
import reactpokedex from '../public/assets/projects/reactpokedex.jpg'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projetos</p>
        <h2 className='py-4'>O que Eu Construí</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Criptobase App'
            backgroundImg={criptoApp}
            projectUrl='/criptobase'
          />
          <ProjectItem
            title='Controle Financeiro'
            backgroundImg={financeiro}
            projectUrl='/financeiro'
          />
          <ProjectItem
            title='React Pokédex'
            backgroundImg={reactpokedex}
            projectUrl='/reactpokedex'
          />
          <ProjectItem
            title='Controle Financeiro'
            backgroundImg={projeto1}
            projectUrl='/projeto1'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects