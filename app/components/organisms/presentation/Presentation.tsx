import React from "react";
import Button from "../../atoms/button/Button";
import Link from "next/link";
import { Container, Paragraph, Heading, Image } from "../../atoms";
import { FaCode, FaCodeBranch, FaCubes } from "react-icons/fa";
import TechSection from "../tech-section/TechSection";

const Presentation: React.FC = () => {
  const firstColumnTech = ["HTML", "CSS", "Sass", "JavaScript"];
  const secondColumnTech = [
    "React",
    "Redux",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ];
  const thirdColumnTech = ["Figma", "Git", "GitHub"];

  return (
    <section className="text-center">
      <div>
        <Image
          src="/img/photo.jpg"
          alt="Photo de Youssef Nazeer"
          className="rounded-full shadow-lg h-48 w-48 mx-auto mb-4 object-[45%]"
        />
        <Heading
          level={1}
          text="Bonjour, je m'appelle Youssef Nazeer"
          className="mb-4 text-gray-600 text-base md:text-xl lg:text-4xl"
        />
        <Paragraph
          text="En tant que développeur web junior, je construis des sites et applications web, avec l'objectif d'améliorer mon code à chaque nouveau projet."
          className="text-lg mb-8"
        />
        <Container className="mb-8 flex lg:flex-row flex-col 2xl:mx-60 lg:gap-12 py-4">
          <TechSection
            Icon={FaCode}
            title="Fondamentaux du Web"
            description="Les bases indispensables pour créer des interfaces web modernes et esthétiques."
            techs={firstColumnTech}
          />
          <TechSection
            Icon={FaCubes}
            title="Frameworks et Outils Frontend"
            description="Outils avancés pour construire des applications performantes et maintenables."
            techs={secondColumnTech}
          />
          <TechSection
            Icon={FaCodeBranch}
            title="Collaboration et Conception"
            description="Outils pour la collaboration, la gestion de version et l'intégration des maquettes."
            techs={thirdColumnTech}
          />
        </Container>
        <div className="flex justify-center space-x-4 mb-8 lg:mb-0">
          <Link href="/projects" passHref>
            <Button
              label="Mes projets"
              className="bg-blue-500 hover:bg-blue-600 text-white"
            />
          </Link>
          <Link href="/contact" passHref>
            <Button
              label="Contactez-moi"
              className="bg-green-500 hover:bg-green-600 text-white"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
