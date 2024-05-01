import CharacterCount from '@tiptap/extension-character-count';
import type { EditorContentProps } from '@tiptap/react';
import { EditorContent, useEditor } from '@tiptap/react';
import React from 'react';

import { EDITOR_EXTENSIONS } from '@/lib/editor';
import { cn } from '@/lib/utils';

import { Menu } from './menu';

interface EditorProps extends Omit<EditorContentProps, 'editor' | 'onChange'> {
	maxCharacter?: number;
	onChange?: (html: string) => void;
	editable?: boolean;
	mode?: 'default' | 'view';
}

interface HTMLDivProps extends Omit<HTMLDivElement, 'onChange'> {}

type Props = EditorProps & React.RefAttributes<HTMLDivProps>;

const Editor = React.forwardRef<HTMLDivElement, Props>(
	(
		{
			maxCharacter,
			editable = true,
			mode = 'default',
			className,
			value,
			onChange,
			...rest
		},
		ref,
	) => {
		const editor = useEditor({
			content: value?.toString(),
			extensions: [
				...EDITOR_EXTENSIONS,
				CharacterCount.configure({
					limit: maxCharacter,
				}),
			],
			editable,
			onUpdate({ editor }) {
				if (onChange) onChange(editor?.getHTML());
			},
			editorProps: {
				attributes: {
					class: 'prose max-w-full text-xl',
				},
			},
		});

		return (
			<div className="flex flex-1 flex-col w-full h-full">
				{editor && mode === 'default' && (
					<React.Fragment>
						{editable && <Menu editor={editor} />}
						<EditorContent
							className={cn(
								'flex-1 border w-full min-h-96 no-underline px-4 py-2 overflow-auto rounded-br-xl rounded-bl-xl',
								className,
							)}
							editor={editor}
							{...rest}
							ref={ref}
						/>
					</React.Fragment>
				)}
			</div>
		);
	},
);

Editor.displayName = 'Editor';

export { Editor };
