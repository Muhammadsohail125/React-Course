import { Fragment } from 'react';
import NetflixCard, { Header, Footer } from './components/NetflixCard';
import './App.css';
export const App = () => {
  return (
    <>
      <Header />
      <NetflixCard />
      <Footer />
    </>
  );
};
