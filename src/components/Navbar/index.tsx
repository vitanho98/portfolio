"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  Home,
  FolderKanban,
  Lightbulb,
  Contact,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./components/ModeToggle";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-2xl text-primary">
            Weslem<span className="text-muted-foreground">Portfolio</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#home"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Projetos
          </Link>
          <Link
            href="#skills"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Habilidades
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contato
          </Link>
          <ModeToggle />
          <Button>Download CV</Button>
        </nav>

        <div className="flex md:hidden items-center gap-4">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Digite um comando ou pesquise..." />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
          <CommandGroup heading="Navegação">
            <CommandItem
              onSelect={() => {
                router.push("#home");
                setOpen(false);
              }}
            >
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("#projects");
                setOpen(false);
              }}
            >
              <FolderKanban className="mr-2 h-4 w-4" />
              <span>Projetos</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("#skills");
                setOpen(false);
              }}
            >
              <Lightbulb className="mr-2 h-4 w-4" />
              <span>Habilidades</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("#contact");
                setOpen(false);
              }}
            >
              <Contact className="mr-2 h-4 w-4" />
              <span>Contato</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Ações">
            <CommandItem
              onSelect={() => {
                setOpen(false);
              }}
            >
              <Download className="mr-2 h-4 w-4" />
              <span>Download CV</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
}
