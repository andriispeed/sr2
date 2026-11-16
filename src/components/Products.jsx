import React from 'react';
import data from '../data.json';

export default function Products() {
  return (
    <section id="products" className="catalog">
      <h2>{data.catalogTitle}</h2>
      <div className="products">
        {data.products.map(product => (
          <article className="product" key={product.id}>
            <img src={product.image} alt={product.name} loading="lazy" />
            <div className="product-info">
              <p className="label">{product.type}</p>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">{product.price.toLocaleString('uk-UA')} грн</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
