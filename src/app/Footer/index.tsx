import CardContact from "../LinkContact";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="w-full p-4 flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Weslem Portifolio. Todos os
            direitos reservados.
          </p>
        </div>
        <CardContact />
      </div>
    </footer>
  );
}
