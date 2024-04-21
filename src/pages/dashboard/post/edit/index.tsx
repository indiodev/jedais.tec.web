import { zodResolver } from "@hookform/resolvers/zod";
import { CircleNotch } from "@phosphor-icons/react";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { Editor } from "@/components/editor";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseUpdatePostMutation } from "@/mutation/post";
import { UsePostShowQuery } from "@/query/post";

import type { UpdatePostForm } from "./form";
import { Schema } from "./form";

export function Edit(): React.ReactElement {
  const { id } = useParams() as { id: string };

  const { data: post, status: postStatus } = UsePostShowQuery(Number(id));

  const navigate = useNavigate();
  const form = useForm<UpdatePostForm>({
    resolver: zodResolver(Schema),
    mode: "onSubmit",
  });

  const { mutateAsync: update, status: updateStatus } = UseUpdatePostMutation({
    onError(error) {
      if (error instanceof AxiosError) {
        // toast.error(error.response?.data.message);
        console.error(error);
      }
      console.error(error);
      toast.error("Houve um erro ao tentat atualizar.");
    },
    onSuccess() {
      toast.success("Seu novo post foi atualizado.");
      navigate("/dashboard/post");
    },
  });

  const handleCreate = form.handleSubmit((data) =>
    update({ id: Number(id), ...data }),
  );

  return (
    <section className="flex flex-1 w-full h-full justify-center items-center flex-col gap-5 text-[#4763E4]">
      <div className="flex w-full">
        <h1 className="text-2xl  font-bold">Editar Postagem</h1>
      </div>
      <div className="flex flex-1 w-full">
        {postStatus === "success" && (
          <Form {...form}>
            <form
              onSubmit={handleCreate}
              className="flex flex-col gap-8  w-full"
            >
              <FormField
                defaultValue={post.title}
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-indigo-700 text-md">
                      Título
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Título do post"
                        className="text-indigo-700 text-base py-4"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="content"
                defaultValue={post.content}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-indigo-700 text-md">
                      Conteúdo
                    </FormLabel>
                    <FormControl>
                      <Editor {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-[#4763E4] uppercase"
                  disabled={updateStatus === "pending"}
                >
                  {updateStatus === "pending" && (
                    <CircleNotch className="animate-spin" />
                  )}

                  {!(updateStatus === "pending") && <span>Atualizar</span>}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </div>
    </section>
  );
}
