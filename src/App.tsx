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

		  editor.zoomToSelection({
      animation: { duration: 5000 },
    })
  
		 
	}
	 

	return (
		<div style={{ position: 'fixed', inset: 0 }}>
			<Tldraw licenseKey='tldraw-2030-11-24/WyJSLXZ2VVFnYyIsWyIqLm93bi1jYW52YXMudmVyY2VsLmFwcCJdLDksIjIwMzAtMTEtMjQiXQ.T4FxYwWrTxadaHz8rZJHPO9VX2INRsH8wNQhu8qBtvF1BXbr2uYGW9GBC/GfCZjzZsl5v+oqorNG7YVjxd+dVg'  onMount={handleMount}  />
		</div>
	)
}