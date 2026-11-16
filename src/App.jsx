import React from 'react';
import data from './data.json';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="intro" id="about">
          <div>
            <p className="label">{data.about.label}</p>
            <h1>{data.about.title}</h1>
            <p>{data.about.text}</p>
            <a className="button" href="#products">{data.about.linkText}</a>
          </div>
          <img src={data.about.image} alt={data.about.imageAlt} />
        </section>
        <Products />
      </main>
      <Footer />
    </>
  );
}
