"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const frontendSkills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "Tailwind CSS", level: 90 },
];

const backendSkills = [
  { name: "Node.js", level: 85 },
  { name: "Express", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "PostgreSQL", level: 70 },
  { name: "GraphQL", level: 65 },
  { name: "REST API", level: 90 },
];

const otherSkills = [
  { name: "Git/GitHub", level: 90 },
  { name: "Docker", level: 70 },
  { name: "AWS", level: 65 },
  { name: "CI/CD", level: 75 },
  { name: "Testing", level: 80 },
  { name: "UI/UX Design", level: 70 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
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
              Minhas Habilidades
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Tecnologias e ferramentas com as quais trabalho.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-3xl mt-8"
          >
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="frontend" className="cursor-pointer">
                  Frontend
                </TabsTrigger>
                <TabsTrigger value="backend" className="cursor-pointer">
                  Backend
                </TabsTrigger>
                <TabsTrigger value="other" className="cursor-pointer">
                  Outros
                </TabsTrigger>
              </TabsList>
              <TabsContent value="frontend">
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    {frontendSkills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="backend">
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    {backendSkills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="other">
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    {otherSkills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
