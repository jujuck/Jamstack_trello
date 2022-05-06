import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Page from './pages/Page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:name" element={<Page />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
