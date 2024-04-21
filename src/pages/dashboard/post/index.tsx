import { MagnifyingGlass, Plus } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import { Table } from "./table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UsePostPaginateQuery } from "@/query/post";

export function Post(): React.ReactElement {
  const navigate = useNavigate();
  const { data: posts, status } = UsePostPaginateQuery();

  return (
    <section className="flex flex-1 w-full h-full justify-center items-center flex-col gap-5 text-[#4763E4]">
      <div className="flex w-full">
        <h1 className="text-2xl  font-bold">Postagens</h1>
      </div>
      <div className="flex w-full gap-2">
        <Input placeholder="Pesquise por título ou autor" />
        <Button className="px-4 max-w-[150px] w-full bg-[#4763E4]">
          <MagnifyingGlass size={20} weight="bold" />
        </Button>
        <Button
          className="px-4 max-w-[150px] w-full bg-[#4763E4]"
          onClick={() => navigate("/dashboard/post/create")}
        >
          <Plus size={20} weight="bold" />
        </Button>
      </div>
      <div className="flex-1 w-full">
        {status === "success" && (
          <Table
            labels={[
              "Título",
              // "Conteúdo",
              // "Banner",
              "Autor",
            ]}
            data={posts.data}
          />
        )}
      </div>
    </section>
  );
}
