// import Image from "@tiptap/extension-image";
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import ImageResize from 'tiptap-extension-resize-image';

export const EDITOR_EXTENSIONS = [
	StarterKit.configure(),
	Link,
	TaskItem.configure({
		nested: true,
		HTMLAttributes: {
			class:
				'flex p-0 m-0 items-center gap-2 items-center [&>label]:m-0 [&>label]:p-0 [&>div]:m-0 [&>div]:p-0 [&>div>p]:p-0',
		},
	}),
	TaskList,
	Underline,
	Placeholder.configure({
		placeholder: 'Escreva seu texto aqui',
	}),
	TextAlign.configure({
		types: ['heading', 'paragraph'],
	}),
	ImageResize.configure({
		allowBase64: true,
	}),
];
