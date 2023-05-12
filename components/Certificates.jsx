import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

import Image from "next/image";
import certificate01 from "../public/assets/certificates/certificate01.jpg";
import certificate02 from "../public/assets/certificates/certificate02.jpg";
import certificate03 from "../public/assets/certificates/certificate03.png";
import certificate04 from "../public/assets/certificates/certificate04.png";
import certificate05 from "../public/assets/certificates/certificate05.jpg";
import certificate06 from "../public/assets/certificates/certificate06.jpg";

export default function Certificates() {
  return (
    <div id="certificates" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest font-bold uppercase text-[#fe140d]">
          Certificados
        </p>
        <h2 className="py-4">Alguns Cursos Realizados</h2>

        <div className="flex m-auto w-full mt-10">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="lg:w-[600px] md:w-[400px] w-[280px] h-full"
          >
            <SwiperSlide>
              <Image src={certificate01} alt="Certificado - ReactJs" />
              <div className="relative h-[150px] md:h-[200px] text-[9px] md:text-[13px] lg:text-[20px] top-[-8px] border bg-white text-black rounded-b-lg flex justify-center items-center">
                <ol className="list-disc">
                  <p className="flex justify-center items-center font-bold">
                    Principais Trilhas do Curso
                  </p>
                  <li></li>
                  <li></li>
                </ol>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={certificate02}
                alt="Certificado - Formação HTML Web Developer"
              />
              <div className="relative h-[150px] md:h-[200px] text-[10px] md:text-[15px] lg:text-[20px] top-[-8px] border bg-white text-black rounded-b-lg flex justify-center items-center">
                <ol className="list-disc">
                  <p className="flex justify-center items-center font-bold">
                    Principais Trilhas do Curso
                  </p>
                  <li>Primeiros Passos com HTML</li>
                  <li>HTML I: Conceitos Básicos</li>
                  <li>HTML II: Ampliando o Conhecimento</li>
                </ol>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={certificate03}
                alt="Certificado - Formação CSS Web Developer"
              />
              <div className="relative h-[150px] md:h-[200px] text-[10px] md:text-[15px] lg:text-[20px] top-[-8px] border bg-white text-black rounded-b-lg flex justify-center items-center">
                <ol className="list-disc">
                  <p className="flex justify-center items-center font-bold">
                    Principais Trilhas do Curso
                  </p>
                  <li>Primeiros Passos com HTML</li>
                  <li>HTML I: Conceitos Básicos</li>
                  <li>HTML II: Ampliando o Conhecimento</li>
                </ol>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image src={certificate04} alt="Certificado - Formação NextJs" />
              <div className="relative h-[150px] md:h-[200px] text-[10px] md:text-[15px] lg:text-[20px] top-[-8px] border bg-white text-black rounded-b-lg flex justify-center items-center">
                <ol className="list-disc">
                  <p className="flex justify-center items-center font-bold">
                    Principais Trilhas do Curso
                  </p>
                  <li>Primeiros Passos com HTML</li>
                  <li>HTML I: Conceitos Básicos</li>
                  <li>HTML II: Ampliando o Conhecimento</li>
                </ol>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={certificate05}
                alt="Certificado - Bootcamp de Angular, Typescript e AWS"
              />
              <div className="relative h-[150px] md:h-[250px] text-[10px] md:text-[15px] lg:text-[20px] top-[-8px] border bg-white text-black rounded-b-lg flex justify-center items-center">
                <ol className="list-disc">
                  <p className="flex justify-center items-center font-bold">
                    Principais Trilhas do Curso
                  </p>
                  <li>Páginas Web com HTML e CSS</li>
                  <li>Primeiras Páginas Interativas com JavaScript</li>
                  <li>Começando no Framework Angular</li>
                  <li>Princípios de Cloud Computing com AWS</li>
                </ol>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={certificate06}
                alt="Certificado - Trabalhando em Equipes Ágeis"
              />
              <div className="relative h-[150px] md:h-[200px] text-[10px] md:text-[15px] lg:text-[20px] top-[-8px] border bg-white text-black rounded-b-lg flex justify-center items-center">
                <ol className="list-disc">
                  <p className="flex justify-center items-center font-bold">
                    Principais Trilhas do Curso
                  </p>
                  <li>Introdução à Cultura Ágil</li>
                  <li>Gerenciamento de Projetos e Gestão Ágil</li>
                  <li>Métodos e Ferramentas Ágeis</li>
                </ol>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
