"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  repoUrl: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Code Spark - Frontend",
    description:
      "Uma plataforma de cursos online com sistema de login, pagamento e gerenciamento de cursos.",
    image: "/assets/projects/codespark.png",
    tags: ["Vue", "Tailwind CSS", "PrimeVue", "Firebase", "MongoDB"],
    repoUrl: "https://github.com/vitanho98/Code-Spark-Client",
  },
  {
    id: 2,
    title: "Zomboid Tips",
    description:
      "Uma plataforma de dicas para o jogo Zomboid. (Vai ser refatorado)",
    image: "/assets/projects/projectzomboid.png",
    tags: ["React.js", "Next.js", "Tailwind CSS", "Shadcn UI"],
    repoUrl: "https://github.com/vitanho98/ZomboidTips",
    demoUrl: "https://zomboid-tips.netlify.app/",
  },
  {
    id: 3,
    title: "PushPipe",
    description:
      "Uma plataforma que captura automaticamente os principais eventos do GitHub e os envia diretamente para os canais de comunicação da sua equipe, garantindo que todos fiquem informados sobre atividades importantes de desenvolvimento exatamente quando elas acontecem.",
    image: "/assets/projects/pushpipe.png",
    tags: ["React.js", "Next.js", "Tailwind CSS", "Shadcn UI", "Husky", "Auth"],
    repoUrl: "https://github.com/vitanho98/pushpipe",
    demoUrl: "https://push-pipe.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center py-20">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meus Projetos
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Confira alguns dos meus trabalhos recentes e projetos pessoais.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full flex flex-col pt-0">
                  <div className="overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      width={500}
                      height={300}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button asChild variant="outline" size="sm">
                      <Link
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> Código
                      </Link>
                    </Button>
                    {project.demoUrl ? (
                      <Button variant="outline" asChild size="sm">
                        <Link
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" /> Demo
                        </Link>
                      </Button>
                    ) : null}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          <Button
            variant="outline"
            className={`mt-8 cursor-pointer ${
              projects.length < 4 ? "hidden" : ""
            }`}
          >
            Ver mais projetos
          </Button>
        </div>
      </div>
    </section>
  );
}
