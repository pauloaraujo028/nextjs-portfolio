import React from "react";
import Links from "./Links";

const Home = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm">VAMOS CONSTRUIR ALGO JUNTOS</p>
          <h1 className="py-4 text-gray-700 dark:text-white">
            Olá, me chamo <span className="text-[#fe140d]"> Paulo Araújo</span>
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-white">
            Desenvolvedor Front-End Jr
          </h1>
          <p className="py4 text-gray-600 max-w-[70%] m-auto dark:text-white">
            Sou um desenvolvedor front-end Jr me especializando em construir (e
            ocasionalmente projetar) experiências digitais excepcionais.
            Atualmente, estou focado na construção de aplicativos web
            responsivos enquanto aprendo tecnologias back-end.
          </p>
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Home;
