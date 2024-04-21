import {
  ImageSquare,
  ListBullets,
  ListChecks,
  ListNumbers,
  TextAlignCenter,
  TextAlignJustify,
  TextAlignLeft,
  TextAlignRight,
  TextB,
  TextHThree,
  TextHTwo,
  TextItalic,
  TextUnderline,
} from "@phosphor-icons/react";

import type { MenuButtonEditor } from "@/dtos/menu";

export const MenuButtonEditorList: MenuButtonEditor[] = [
  {
    Icon: TextB,
    run(editor): void {
      editor?.chain().focus().toggleBold().run();
    },
    identifier: "bold",
  },
  {
    Icon: TextItalic,
    run(editor): void {
      editor?.chain().focus().toggleItalic().run();
    },
    identifier: "italic",
  },
  {
    Icon: TextUnderline,
    run(editor): void {
      editor?.chain().focus().toggleUnderline().run();
    },
    identifier: "underline",
  },

  {
    Icon: TextHTwo,
    run(editor): void {
      editor?.chain().focus().setHeading({ level: 2 }).run();
    },
    identifier: "underline",
  },
  {
    Icon: TextHThree,
    run(editor): void {
      editor?.chain().focus().setHeading({ level: 3 }).run();
    },
    identifier: "underline",
  },

  {
    Icon: TextAlignLeft,
    run(editor): void {
      editor?.chain().focus().setTextAlign("left").run();
    },
    identifier: { textAlign: "left" },
  },
  {
    Icon: TextAlignCenter,
    run(editor): void {
      editor?.chain().focus().setTextAlign("center").run();
    },
    identifier: { textAlign: "center" },
  },
  {
    Icon: TextAlignRight,
    run(editor): void {
      editor?.chain().focus().setTextAlign("right").run();
    },
    identifier: { textAlign: "right" },
  },
  {
    Icon: TextAlignJustify,
    run(editor): void {
      editor?.chain().focus().setTextAlign("justify").run();
    },
    identifier: { textAlign: "justify" },
  },
  {
    Icon: ListNumbers,
    run(editor): void {
      editor.chain().focus().toggleOrderedList().run();
    },
    identifier: "orderedList",
  },
  {
    Icon: ListBullets,
    run(editor): void {
      editor?.chain().focus().toggleBulletList().run();
    },
    identifier: "bulletList",
  },
  {
    Icon: ListChecks,
    run(editor): void {
      editor?.chain().focus().toggleTaskList().run();
    },
    identifier: "taskList",
  },
  {
    Icon: ImageSquare,
    async run(editor, callback): Promise<void> {
      if (callback) {
        const file = callback() as File;

        if (!file) return;

        const reader = new FileReader();

        reader.addEventListener("loadend", () => {
          editor
            ?.chain()
            .focus()
            .setImage({
              src: reader.result as string,
            })
            .run();
        });

        reader.readAsDataURL(file);
      }
    },
    identifier: "image",
  },
];
