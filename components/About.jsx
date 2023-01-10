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
            Desde jovem, sempre tive afinidade com tecnologia e computadores. Em
            2022, decidi mergulhar no mundo da programação e escolhi o Python
            como minha primeira linguagem de estudo. A facilidade de aprendizado
            me encantou e, após alguns meses, passei a me dedicar ao back-end.
            Mais tarde, me interessei pelo ReactJS e decidi me especializar na
            linguagem. Comecei meus primeiros projetos com HTML e CSS básicos,
            mas logo me apaixonei pelo front-end.
          </p>
          <p className="py-2 text-gray-600 dark:text-white">
            A complexidade da programação me fascinou e me incentivou a
            continuar aprendendo. Passei a estudar javascript e me empolguei em
            tornar os sites mais interativos. Desde então, tenho estudado
            diversos projetos, estruturas e pontos de vista diferentes.
            Atualmente, dedico meu tempo a projetos com ReactJS, NextJS e
            Firebase, enquanto procuro sempre me atualizar com novas
            tecnologias.
          </p>
          <p className="py-2 text-gray-600 dark:text-white">
            Acredito ser ágil e consistente ao aprender novas linguagens e me
            adaptar a mudanças, sempre focando em meus objetivos e pronto para
            enfrentar qualquer desafio. Se tivesse que me definir em três
            palavras, seriam: otimista, perseverante e dedicado.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer hover:text-[#fe140d] dark:text-white">
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
