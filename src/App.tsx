import { AdvertisementComp } from "./components/AdvertisementComp"
import { SimpleComp } from "./simple-view/SimpleComp.tsx"
import { useStore } from "./Store.ts"

export const App = () => {
  const turnerMode = useStore((state) => state.turnerMode)

  return (
    <div className="h-screen w-screen">
      {turnerMode === 'simple' ? <SimpleComp /> : <AdvertisementComp />}
    </div>
  )
}
