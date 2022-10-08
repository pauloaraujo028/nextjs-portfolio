import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AboutImg from '../public/assets/about.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl font-bold tracking-widest text-[#fe140d]'>Sobre</p>
          <h2 className='py-4'>Quem sou Eu</h2>
          <p className='py-2 text-gray-600'>
            Eu sempre tive jeito para tecnologia e trabalhar com computadores.
            Em 2022 comecei a estudar programação, como minha primeira linguagem
            escolhi o Python pois a grande facilidade para aprender me chamou a
            atenção e após alguns meses, comecei a estudar back-end e algum tempo depois
            conheci o ReactJs no qual resolvi me dedicar e estudarei até me tornar
            um profissional experiente na linguagem. Comecei com básico do HTML e
            CSS para fazer alguns pequenos projetos, o que eu achava que eram apenas
            algumas pequenas edições se transformaram em amor pelo front-end.
          </p>
          <p className='py-2 text-gray-600'>
            Fascinado com a complexidade da programação, fui rapidamente atraído a
            aprender mais. Comecei a aprender javascript e fiquei ainda mais
            entusiasmados em tornar os sites interativos, então comecei a ver
            muitos projetos, estruturas, formas de pontos de vistas diferentes,
            agora estou passando meu tempo construindo projetos com React Js, Next Js,
            Firebase dentre outras ferramentas e buscando aprender novas tecnologias.
          </p>
          <p className='py-2 text-gray-600'>
            Considero-me ágil e consistente em aprender uma nova linguagem e me
            adaptar a qualquer mudança, e pronto para superar qualquer desafio,
            sempre focando no objetivo! Se pudesse me definir em 3 palavras,
            certamente seriam: otimista, perseverante e esforçado!
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Confira alguns dos meus últimos projetos.</p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl 
        flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt="/" />
        </div>
      </div>
    </div>
  )
}

export default About