"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CardContact from "../LinkContact";

export default function Hero() {
  return (
    <section id="home" className="py-6 md:py-32">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center md:justify-between">
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex flex-col gap-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Olá, eu sou o <span className="text-primary">Weslem</span>
              </motion.h1>
              <motion.p
                className="max-w-[500px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Sou desenvolvedor front-end e estou buscando evoluir a cada dia.
                Esse é meu primeiro portfólio e será constantemente atualizado
                para melhorar cada vez mais, espero que gostem.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button asChild className="cursor-pointer">
                <Link href="#contact">
                  Entre em contato <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="cursor-pointer">
                <Link href="#projects" className="flex items-center">
                  Ver projetos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <CardContact />
            </motion.div>
          </div>
          <motion.div
            className="flex items-center justify-center mb-8 md:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative aspect-square w-full max-w-[200px] md:max-w-[400px] overflow-hidden rounded-full bg-gradient-to-b from-primary to-primary/20">
              <Image
                src="/assets/weslem.png"
                alt="Developer portrait"
                className="object-cover"
                width={280}
                height={280}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
