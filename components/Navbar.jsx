/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Image from 'next/image';
import NavLogo from '../public/assets/navLogo.png'
import ThemeToggle from "./ThemeToggle"
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();

  const { systemTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    if (
      router.asPath === '/eshop' ||
      router.asPath === '/criptobase' ||
      router.asPath === '/nextpokedex' ||
      router.asPath === '/financeiro'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router])

  const handleNav = () => {
    setNav(!nav)
  };

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <ThemeToggle className="dark:text-white" onClick={() => setTheme('light')}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        </ThemeToggle>
      )
    } else {
      return (
        <ThemeToggle className="" onClick={() => setTheme('dark')}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
          </svg>

        </ThemeToggle>
      )
    }
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div style={{ backgroundColor: `${navBg}` }}
      className={shadow ? 'fixed w-full h-14 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 dark:bg-[#2d3748]'>
        <Link href="/">
          <a>
            <Image
              src={NavLogo}
              alt='/'
              width='125'
              height='90'
              className='cursor-pointer'
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex font-bold'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b dark:text-white'>Inicio</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase hover:border-b dark:text-white'>Sobre</li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase hover:border-b dark:text-white'>Habilidades</li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-sm uppercase hover:border-b dark:text-white'>Projetos</li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-sm uppercase hover:border-b dark:text-white'>Contato</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>

        <div className='items-center justify-center hidden md:flex'>
          {renderThemeChanger()}
          <button className='w-full p-[5px] text-gray-100 capitalize ml-2 dark:shadow-none lg:text-base md:text-xs'><a href='/Resumo.pdf' download={true}>Baixar CV</a></button>
        </div>
      </div>

      {/* Mobile */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav
          ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500  dark:bg-[#2d3748]'
          : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href="/">
                <a>
                  <Image
                    src={NavLogo}
                    width='87'
                    height='70'
                    alt='/'
                  />
                </a>
              </Link>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:text-black dark:bg-white dark:shadow-none '>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-2'>
              <p className='w-[85%] md:w-[90%] py-2 dark:text-[#fff]'>Vamos construir algo lendário juntos</p>
            </div>
          </div>
          <div className='py-4 flex flex-col dark:text-[#fff]'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Inicio</li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Sobre</li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Habilidades</li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Projetos</li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Contato</li>
              </Link>
            </ul>
            <div className='flex items-center justify-center'>
              {renderThemeChanger()}
              <button className='w-full p-2 m-8 text-gray-100 capitalize dark:shadow-none'><a href='/Resumo.pdf' download={true}>Baixar CV</a></button>
            </div>
            <div className='pt-0'>
              <p className='uppercase tracking-widest text-[#fe140d]'>Vamos Conversar</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a href="https://www.linkedin.com/in/pauloaraujo028/" target='_blank' rel='noreferrer' title='Veja meu LinkedIn'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 
                cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-white dark:text-black dark:shadow-none'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="https://github.com/pauloaraujo028" target='_blank' rel='noreferrer' title='Veja meu GitHub'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 
                cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-white dark:text-black dark:shadow-none'>
                    <FaGithub />
                  </div>
                </a>
                <a href="mailto:pauloaraujo.phz@gmail.com" target='_blank' rel='noreferrer' title='Entre em contato via e-mail'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 
                cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-white dark:text-black dark:shadow-none'>
                    <AiOutlineMail />
                  </div>
                </a>
                <a href='https://wa.me/5511934429311' target='_blank' rel='noreferrer' title='Entre em contato via Whatsapp'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 
                cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-white dark:text-black dark:shadow-none'>
                    <FaWhatsapp />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Navbar;