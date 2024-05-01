import type { Editor } from '@tiptap/react';
import React from 'react';

import { MenuButtonEditorList } from '@/lib/constant';
import { cn } from '@/lib/utils';

import { Button } from '../../ui/button';

type Props = {
	editor: Editor;
};

export function Menu({ editor }: Props): React.ReactElement {
	const inputRef = React.useRef<HTMLInputElement | null>(null);

	return (
		<div className="w-full bg-[#007bff]/25 rounded-tr-xl rounded-tl-xl flex gap-2 py-2 px-4">
			{MenuButtonEditorList?.map(
				({ Icon, run, identifier }, index): React.ReactElement => {
					return (
						<React.Fragment key={index}>
							<input
								type="file"
								className="hidden"
								accept="image/*"
								ref={inputRef}
								onChange={(event) => {
									const files = event.target?.files;

									if (!files || !(files?.length > 0)) return;

									const file = files[0];

									run(editor, (): File => file);
								}}
							/>
							<Button
								type="button"
								className={cn(
									'p-0 w-6 h-6 border-[#007bff] border bg-transparent text-[#007bff]',
									editor?.isActive(identifier) && 'text-slate-100 bg-[#007bff]',
								)}
								onClick={() => {
									if (!(identifier === 'image')) {
										run(editor);
										return;
									}

									if (identifier === 'image') {
										inputRef.current?.click();
									}
								}}
							>
								<Icon
									size={18}
									weight="bold"
								/>
							</Button>
						</React.Fragment>
					);
				},
			)}
		</div>
	);
}
