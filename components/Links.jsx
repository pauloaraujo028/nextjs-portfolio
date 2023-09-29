import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Links = () => {
  return (
    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
      <a
        href="https://www.linkedin.com/in/pauloaraujo028/"
        target="_blank"
        rel="noreferrer"
        title="Veja meu LinkedIn"
      >
        <div
          className="rounded-full shadow-lg shadow-gray-400 p-6 
        cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:text-black dark:shadow-none"
        >
          <FaLinkedinIn />
        </div>
      </a>
      <a
        href="https://github.com/pauloaraujo028"
        target="_blank"
        rel="noreferrer"
        title="Veja meu GitHub"
      >
        <div
          className="rounded-full shadow-lg shadow-gray-400 p-6 
        cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:text-black dark:shadow-none"
        >
          <FaGithub />
        </div>
      </a>
      <a
        href="mailto:pauloaraujo.phz@gmail.com"
        target="_blank"
        rel="noreferrer"
        title="Entre em contato via e-mail"
      >
        <div
          className="rounded-full shadow-lg shadow-gray-400 p-6 
        cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:text-black dark:shadow-none"
        >
          <AiOutlineMail />
        </div>
      </a>
      <a
        href="https://wa.me/5511934429311"
        target="_blank"
        rel="noreferrer"
        title="Entre em contato via Whatsapp"
      >
        <div
          className="rounded-full shadow-lg shadow-gray-400 p-6 
        cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:text-black dark:shadow-none"
        >
          <FaWhatsapp />
        </div>
      </a>
    </div>
  );
};

export default Links;
