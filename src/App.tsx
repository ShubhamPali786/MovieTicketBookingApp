import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './Layout/Layout';
import AppRouter from './AppRouter';

function App() {
  return (
    <Layout>
      <AppRouter/>
    </Layout>
  );
}

export default App;
