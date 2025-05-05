"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiFigma,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const frontendSkills = [
  { name: "HTML", icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS", icon: SiCss3, color: "text-[#1572B6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
];

const backendSkills = [
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "REST API", icon: TbApi, color: "text-[#FF4B4B]" },
];

const otherSkills = [
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
  { name: "UI/UX Design", icon: SiFigma, color: "text-[#F24E1E]" },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export default function Skills() {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const SkillGrid = ({ skills }: { skills: typeof frontendSkills }) => {
    const visibleSkills =
      !showAllSkills && isMobile ? skills.slice(0, 4) : skills;
    const shouldShowOverlay = !showAllSkills && skills.length > 4 && isMobile;

    return (
      <div className="relative">
        <motion.div
          className="max-w-7xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <AnimatePresence mode="wait">
            {visibleSkills.map((skill) => (
              <motion.div key={skill.name} variants={cardVariants} layout>
                <Card className="group hover:border-primary transition-colors">
                  <CardContent className="p-6 flex flex-col items-center justify-center space-y-2">
                    <skill.icon
                      className={`w-12 h-12 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className="font-medium">{skill.name}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {shouldShowOverlay && (
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute -bottom-4 left-0 right-0 top-[40%] bg-gradient-to-t from-background from-30% via-background to-transparent flex items-end justify-center pb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10"
              >
                <Button
                  variant="outline"
                  className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
                  onClick={() => setShowAllSkills(true)}
                >
                  Ver mais
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showAllSkills && isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="mt-6 flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
                  onClick={() => setShowAllSkills(false)}
                >
                  Ver menos
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20">
      <div className="w-full px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col gap-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Minhas Habilidades
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Tecnologias e ferramentas com as quais trabalho.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-4xl mt-8"
          >
            <Tabs
              defaultValue="frontend"
              className="w-full flex flex-col gap-6"
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="other">Outros</TabsTrigger>
              </TabsList>
              <TabsContent value="frontend">
                <SkillGrid skills={frontendSkills} />
              </TabsContent>
              <TabsContent value="backend">
                <SkillGrid skills={backendSkills} />
              </TabsContent>
              <TabsContent value="other">
                <SkillGrid skills={otherSkills} />
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
