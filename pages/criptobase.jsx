import Image from 'next/image'
import React from 'react'
import criptobaseImg from '../public/assets/projects/criptobase.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const criptobase = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={criptobaseImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] 
          translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Criptobase APP</h2>
          <h3>React JS / Tailwind CSS / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p className='mb-4'>Projeto</p>
          <h2>Visão Global</h2>
          <p className='mt-4'>
            Este projeto foi feito para demonstrar conhecimento trabalhando
            em React JS e acessar endpoints de uma API. Este aplicativo foi hospedado
            no Firebase, suporta autenticação de usuário. Os
            usuários podem criar uma nova conta usando seus endereços de e-mail e
            pode entrar para salvar moedas para um usuário específico. Isso é
            possível criando um armazenamento em nuvem, com banco de dados no
            momento do registro do usuário. Outra característica deste projeto é o
            React Hooks, Context, React-Router-Dom, useParams, Light/Dark Theme,
            Tailwind, Authentication, Firebase, API. Este aplicativo foi
            construído usando a API Coin Gecko, usando manipulações de dados da
            API, onde o usuário tem visualização das cotações de criptomoedas em
            tempo real.
          </p>
          <a href="https://criptobaseapp.netlify.app/" target='_blank' rel='noreferrer'>
            <button className='px-8 py-2 mr-8 dark:shadow-none'>Demonstração</button>
          </a>
          <a href="https://github.com/pauloaraujo028/cripto-base-app" target='_blank' rel='noreferrer'>
            <button className='px-8 py-2 mt-4 dark:shadow-none'>Código</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 dark:shadow-none'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Tecnologias</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center dark:text-white'>
                <RiRadioButtonFill className='pr-1' /> ReactJs
              </p>
              <p className='text-gray-600 py-2 flex items-center dark:text-white'>
                <RiRadioButtonFill className='pr-1' /> Tailwind CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center dark:text-white'>
                <RiRadioButtonFill className='pr-1' /> React Hooks
              </p>
              <p className='text-gray-600 py-2 flex items-center dark:text-white'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center dark:text-white'>
                <RiRadioButtonFill className='pr-1' /> Gecko API
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Voltar</p>
        </Link>
      </div>
    </div>
  )
}

export default criptobase;