import { MagnifyingGlass, Plus } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Course(): React.ReactElement {
  return (
    <section className="flex flex-1 w-full h-full justify-center items-center flex-col gap-5">
      <div className="flex w-full">
        <h1 className="text-2xl text-[#4763E4] font-bold">Cursos</h1>
      </div>
      <div className="flex flex-1 w-full gap-2">
        <Input placeholder="Pesquise por nome" className="text-[#4763E4]" />
        <Button className="px-4 max-w-[150px] w-full bg-[#4763E4]">
          <MagnifyingGlass size={20} weight="bold" />
        </Button>
        <Button className="px-4 max-w-[150px] w-full bg-[#4763E4]">
          <Plus size={20} weight="bold" />
        </Button>
      </div>
    </section>
  );
}
