import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

export const App: FC = () => {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="posts" element={<Posts />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
    </>
  );
}

