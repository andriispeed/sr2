import React from 'react';
import data from '../data.json';

export default function Header() {
  return (
    <header>
      <div className="container header-row">
        <a className="brand" href="#about">{data.company}</a>
        <nav aria-label="Головне меню">
          {data.menu.map(item => (
            <a key={item.href} href={item.href}>{item.text}</a>
          ))}
        </nav>
      </div>
      <p className="container student">{data.student}</p>
    </header>
  );
}
