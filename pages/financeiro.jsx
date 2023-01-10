import Image from "next/image";
import React from "react";
import financeiroImg from "../public/assets/projects/financeiro.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const financeiro = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={financeiroImg}
          alt="/"
        />
        <div
          className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] 
          translate-y-[-50%] text-white z-10 p-2"
        >
          <h2 className="py-2">Controle Financeiro</h2>
          <h3>React JS / CSS3 / localStorage</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="mb-4">Projeto</p>
          <h2>Visão Global</h2>
          <p className="mt-4">
            Esse projeto foi construído pensando tanto no aprendizado quanto
            para uso próprio pois no momento estava precisando fazer o controle
            dos meus gastos pessoais, o projeto atual está configurado para
            localStorage o que deixa todo o salvamento de informações no
            navegador. Futuramente irei acrescentar um banco de dados junto da
            adição de um sistema de login, assim como melhorar o design da
            página.
          </p>
          <a
            href="https://appfinanceiro.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mr-8 dark:shadow-none">
              Demonstração
            </button>
          </a>
          <a
            href="https://github.com/pauloaraujo028/controle-financeiro"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 dark:shadow-none">Código</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 dark:shadow-none">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tecnologias</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> localStorage
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Voltar</p>
        </Link>
      </div>
    </div>
  );
};

export default financeiro;
