import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./styles/1-reset.scss"
import { ScrollToTop } from "./codes/functions/ScrollToTop"
import { AllChannels } from "./docs/AllChannels"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={AllChannels.Home.content} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
