import type { Icon } from "@phosphor-icons/react";
import type { Editor } from "@tiptap/react";

export type MenuButtonEditor = {
  Icon: Icon;
  run: (editor: Editor, callback?: () => unknown) => void;
  identifier: string | { [key: string]: string };
};
