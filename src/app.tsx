import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

export function App() {
  return (
    /* space-y-valor: gera um espaçamento vertical do tamanho escolhido entre todos os elementos filhos do elemento com essa classe. */
    <div className="mx-auto my-12 max-w-6xl space-y-6">
      <img src={logo} alt="NLW expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
        />
      </form>
      <div className="h-px bg-slate-700"></div>

      {/* usar [] para poder especificar um valor não padrão do tailwind. Nesse caso as rows de 250px */}
      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard />

        <NoteCard
          note={{
            date: new Date(),
            content: "Hello World",
          }}
        />
      </div>
    </div>
  );
}
