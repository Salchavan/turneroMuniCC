import { useEffect } from "react"
import { AdvertisementComp } from "./components/AdvertisementComp"
import { Controller } from "./components/Controller.tsx"
import { SimpleComp } from "./simple-view/SimpleComp.tsx"
import { useStore } from "./Store.ts"


export const App = () => {
  const turnerMode = useStore((state) => state.turnerMode)
  const isController = useStore((state) => state.isController)
  const toggleController = useStore((state) => state.toggleController)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'ñ') {
        toggleController()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="h-screen w-screen">
      {isController && <Controller />}
      {turnerMode === 'simple' ? <SimpleComp /> : <AdvertisementComp />}
    </div>
  )
}
