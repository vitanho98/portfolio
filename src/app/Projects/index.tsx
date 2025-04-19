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

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Uma plataforma de e-commerce completa com carrinho de compras, pagamentos e painel de administração.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Aplicativo de gerenciamento de tarefas com recursos de arrastar e soltar, notificações e colaboração em equipe.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Site de portfólio responsivo com animações suaves e design moderno.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="w-full px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meus Projetos
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Confira alguns dos meus trabalhos recentes e projetos pessoais.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
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
                    <Button asChild size="sm">
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          <Button variant="outline" className="mt-8 cursor-pointer">
            Ver mais projetos
          </Button>
        </div>
      </div>
    </section>
  );
}
