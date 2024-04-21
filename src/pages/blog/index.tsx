import React from "react";
import { useParams } from "react-router-dom";

import { Editor } from "@/components/editor";
import { UsePostShowQuery } from "@/query/post";

export function Blog(): React.ReactElement {
  const params = useParams() as { id: string };
  // const navigate = useNavigate();

  const { data: post, status: postStatus } = UsePostShowQuery(
    Number(params?.id),
  );

  return (
    <React.Fragment>
      {postStatus === "error" && (
        <section className="h-screen w-screen flex justify-center items-center flex-col gap-4">
          <h1 className="text-slate-800 font-bold text-2xl">
            Ops. Post não encontrado
          </h1>

          <img src="/image-1.png" />

          {/* <Button
            className="max-w-sm w-full"
            onClick={() => navigate("/", { replace: true })}
          >
            Voltar
          </Button> */}
        </section>
      )}

      {postStatus === "success" && (
        <section className="container py-8 flex-col gap-8">
          <div className="flex flex-1 flex-row gap-2 items-center">
            {/* <Button
              onClick={() => navigate("/", { replace: true })}
              className="px-2 py-1 bg-transparent hover:bg-transparent shadow-none text-[#4763E4]"
            >
              <ArrowLeft size={18} weight="bold" />
            </Button> */}
            <h1 className="text-slate-800 font-bold text-2xl">{post.title}</h1>
          </div>

          <Editor
            content={post.content}
            value={post.content}
            editable={false}
            className="border-0 text-lg text-gray-600 p-0 mt-8"
          />
        </section>
      )}
    </React.Fragment>
  );
}
