import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import contactImg from '../public/assets/contato.jpg'
import NavLogo from '../public/assets/navLogo.png'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest font-bold uppercase text-[#fe140d]'>Contato</p>
        <h2 className='py4'>Entrar em Contato</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* letf */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={contactImg} alt="/" />
              </div>
              <div>
                <h2 className='py-2'>Paulo Araújo</h2>
                <p>Desenvolvedor Front-End Jr</p>
                <p className='py-4'>
                  Entre em contato comigo e vamos conversar.
                </p>
              </div>
              <div className='pt-20'>
                <p className='uppercase pt-8 text-[#fe140d]'>Conecte-se Comigo</p>
                <div className='flex items-center justify-between py-4'>
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

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form action='https://getform.io/f/59b42533-1a84-456b-ae7d-29a5b914eb98' method='POST'>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Nome</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='nome' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Telefone</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='telefone' />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>E-mail</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Assunto</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='assunto' />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Mensagem</label>
                  <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='mensagem'></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>Enviar Mensagem</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#fe140d]' size={30} />
            </div>
          </Link>
        </div>
      </div>
      <footer className='flex justify-center items-center font-bold'>
        <p className='text-center'>© 2022 Paulo Araújo. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default Contact;