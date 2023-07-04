import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Kreatifitas",
    description:
      "Sebagai seorang Front End developer, saya memiliki kemampuan untuk menghasilkan desain yang menarik dan inovatif. Dengan kekreatifan saya,saya dapat mengubah ide menjadi kenyataan melalui kode.",
    link: "Learn More",
  },
  {
    name: "Kolaborasi Tim",
    description:
      "Sebagai seorang pekerja lepas, saya sering terlibat dalam berbagai proyek dengan tim yang berbeda. Kemampuan saya dalam berkolaborasi dengan baik, berkomunikasi, dan memahami kebutuhan tim serta klien sangat berharga untuk mencapai tujuan bersama.",
    link: "Learn More",
  },
  {
    name: "Keinginan untuk Belajar",
    description:
      "ndustri teknologi selalu berkembang dengan cepat, dan sebagai seorang Front End developer, saya selalu beradaptasi dengan perubahan tersebut. Saya memiliki kecerdasan dan keinginan yang kuat untuk terus belajar dan mengembangkan keterampilan baru, karena saya sadar bahwa hal tersebut sangat penting dalam profesi ini.",
    link: "Learn More",
  },
  {
    name: "Ketekunan dan Disiplin ",
    description:
      "Dunia pengembangan web membutuhkan ketekunan dan disiplin yang tinggi. Ketika terjadi kesalahan atau kesulitan, kemampuan saya untuk tetap bertahan, mencari solusi, dan terus melangkah maju adalah faktor kunci dalam kesuksesan saya.",
    link: "Learn More",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* text */}

          <motion.div
            variants={fadeIn("right", 0.3)}
            inlist={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-18 lg:mb-0 "
          >
            <h2 className="h2 text-accent mb-6"> What I Do. </h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Seorang Pekerja Lepas Front End developer dengan 2 tahun
              pengalaman.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            inlist={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((services, index) => {
                const { name, description, link } = services;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
