import Image from "next/image";
import Hero from "@/components/template/main/Hero";
import Skills from "@/components/template/main/Skills/Skills";
import Projects from "@/components/template/main/Projects/Projects";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
