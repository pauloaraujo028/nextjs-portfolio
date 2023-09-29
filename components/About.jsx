import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl font-bold tracking-widest text-[#fe140d]">
            Sobre
          </p>
          <h2 className="py-4">Quem sou Eu</h2>
          <p className="py-2 text-gray-600 dark:text-white">
            Entusiasta de tecnologia desde jovem, em 2022, iniciei minha jornada
            na programação com Python, fascinando-me pela sua facilidade.
            Rapidamente me aprofundei no back-end e descobri minha paixão pelo
            front-end, especialmente com ReactJS. Hoje, foco em projetos
            envolvendo ReactJS, NextJS e Firebase, sempre buscando me atualizar
            com as últimas tecnologias.
          </p>
          <p className="py-2 text-gray-600 dark:text-white">
            Considero-me ágil e consistente ao aprender novas linguagens,
            adaptando-me facilmente a mudanças. Encaro desafios com otimismo,
            mantendo-me perseverante e dedicado em busca dos meus objetivos. Se
            eu tivesse que me definir em três palavras, seriam: otimista,
            perseverante e dedicado.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer hover:text-[#fe140d] dark:text-white hover:dark:text-[#fe140d]">
              Confira alguns dos meus últimos projetos.
            </p>
          </Link>
        </div>
        <div
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl 
        flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 dark:shadow-none"
        >
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
