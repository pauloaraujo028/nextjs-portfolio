import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

import Image from "next/image";
import certificate01 from "../public/assets/certificates/certificate01.jpg";
import certificate02 from "../public/assets/certificates/certificate02.png";
import certificate03 from "../public/assets/certificates/certificate03.jpg";
import certificate04 from "../public/assets/certificates/certificate04.jpg";

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
            className="lg:w-[700px] md:w-[500px] w-[280px] h-full"
          >
            <SwiperSlide>
              <Image
                src={certificate01}
                alt="Certificado Bootcamp de Angular, Typescript e AWS"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={certificate02} alt="Certificado Bootcamp Linux" />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={certificate03}
                alt="Certificado Trabalhando em Equipes Ágeis"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={certificate04}
                alt="Certificado Formação HTML Web Developer"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
