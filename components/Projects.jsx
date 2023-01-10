import React from "react";
import ProjectItem from "./ProjectItem";

import criptoApp from "../public/assets/projects/criptobase.jpg";
import financeiro from "../public/assets/projects/financeiro.jpg";
import eshopImg from "../public/assets/projects/eshop.png";
import nextPokedex from "../public/assets/projects/nextpokedex.jpg";
import bestFoodImg from "../public/assets/projects/best-food.jpg";
import multiHomeImg from "../public/assets/projects/multi-home.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest font-bold uppercase text-[#fe140d]">
          Projetos
        </p>
        <h2 className="py-4">O que Eu Construí</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="eShop e-Commerce"
            subTitle="ReactJs / Redux / Firebase / CSS3"
            backgroundImg={eshopImg}
            projectUrl="/Eshop"
          />
          <ProjectItem
            title="Multi Home."
            subTitle="ReactJs / Redux / Tailwind CSS"
            backgroundImg={multiHomeImg}
            projectUrl="/MultiHome"
          />
          <ProjectItem
            title="Criptobase APP"
            subTitle="ReactJs / Tailwind CSS / API / Firebase"
            backgroundImg={criptoApp}
            projectUrl="/Criptobase"
          />
          <ProjectItem
            title="Best Food App"
            subTitle="ReactJS / Tailwind CSS / NodeJS"
            backgroundImg={bestFoodImg}
            projectUrl="/BestFood"
          />
          <ProjectItem
            title="NextJs Pokédex"
            subTitle="NextJs / Tailwind CSS / API"
            backgroundImg={nextPokedex}
            projectUrl="/NextPokedex"
          />
          <ProjectItem
            title="Controle Financeiro"
            subTitle="ReactJs / localStorage"
            backgroundImg={financeiro}
            projectUrl="/Financeiro"
          />
        </div>
        <div>
          <a
            href="https://github.com/pauloaraujo028"
            target="_blank"
            rel="noreferrer"
          >
            <p className="w-full pt-10 flex justify-center items-center text-gray-600 underline cursor-pointer hover:text-[#fe140d] dark:text-white">
              Confira mais projetos no GitHub.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
