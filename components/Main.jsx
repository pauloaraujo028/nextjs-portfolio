import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Home = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm'>VAMOS CONSTRUIR ALGO JUNTOS</p>
          <h1 className='py-4 text-gray-700'>
            Olá, sou <span className='text-[#fe140d]'> Paulo Araújo</span>
          </h1>
          <h1 className='py-2 text-gray-700'>
            Desenvolvedor Front-End Jr
          </h1>
          <p className='py4 text-gray-600 max-w-[70%] m-auto'>
            Sou um desenvolvedor front-end Jr me especializando em construir
            (e ocasionalmente projetar) experiências digitais excepcionais.
            Atualmente, estou focado na construção de aplicativos web responsivos
            enquanto aprendo tecnologias back-end.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a href="https://www.linkedin.com/in/pauloaraujo028/" target='_blank' rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 
                  cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/pauloaraujo028" target='_blank' rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 
                  cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a href="mailto:pauloaraujo.phz@gmail.com" target='_blank' rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 
                  cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </a>
            <a href='/Resumo.pdf' download={true}>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 
                  cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home