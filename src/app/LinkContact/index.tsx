import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function CardContact() {
  return (
    <div className="flex gap-4">
      <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon" className="cursor-pointer">
          <Github className="h-5 w-5" />
          <span className="sr-only">Github</span>
        </Button>
      </Link>
      <Link
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="ghost" size="icon" className="cursor-pointer">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Button>
      </Link>
      <Link
        href="mailto:email@example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="ghost" size="icon" className="cursor-pointer">
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </Button>
      </Link>
    </div>
  );
}
