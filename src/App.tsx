import { Editor, Tldraw, toRichText } from 'tldraw'
import 'tldraw/tldraw.css'

export default function App() {
	const handleMount = (editor:Editor) => {

    editor.user.updateUserPreferences({
      colorScheme: 'dark',
    })

		editor.createShape({
			type: 'text',
			x: 200,
			y: 200,
			props: {
				richText: toRichText('Shivam Chaudhary!'),
			},
		})

		editor.selectAll()

		 
	}

	return (
		<div style={{ position: 'fixed', inset: 0 }}>
			<Tldraw  onMount={handleMount} />
		</div>
	)
}