import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./styles/1-reset.scss"
import { ScrollToTop } from "./codes/functions/ScrollToTop"
import { AllChannels } from "./docs/AllChannels"
import { BasicLayout } from "./components/layouts/BasicLayout"
import { AllDemos } from "./docs/AllDemos"
import { Page } from "./docs/_types/PageTypes"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<BasicLayout page={AllChannels.Home} />} />

        {Object.values(AllDemos).map((demo: Page, i: number) => (
          <Route
            key={i}
            path={`/${demo.info.slug}`}
            element={<BasicLayout page={demo} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
