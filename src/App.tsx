import { useEffect } from 'react'
import { Tldraw, toRichText, type Editor } from 'tldraw'
import 'tldraw/tldraw.css'

export default function App() {
  useEffect(() => {
    console.log('🔵 App mounted')

    return () => {
      console.log('🔴 App UNMOUNTED')
    }
  }, [])

  const handleMount = (editor: Editor) => {
    console.log('🟢 Tldraw mounted')

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
  }

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'black' }}>
      <div
        style={{
          position: 'absolute',
          zIndex: 9999,
          color: 'white',
          top: 8,
          left: 8,
        }}
      >
        APP RUNNING
      </div>
      <Tldraw onMount={handleMount} />
    </div>
  )
}
