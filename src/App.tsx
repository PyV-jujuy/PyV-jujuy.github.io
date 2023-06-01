import { Routes, Route } from 'react-router-dom'

import { Footer, Header } from 'src/layouts'
import { Home, NotFound } from './pages'

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-between">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
