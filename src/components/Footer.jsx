import React from 'react';
import data from '../data.json';

export default function Footer() {
  return (
    <footer id="contacts">
      <div className="container footer-row">
        <div>
          <h2>{data.footer.title}</h2>
          <a href={'mailto:' + data.footer.email}>{data.footer.email}</a>
          <p>{data.footer.note}</p>
        </div>
        <div>
          <h2>{data.footer.socialTitle}</h2>
          <nav aria-label="Соціальні мережі">
            {data.footer.socials.map(social => (
              <a key={social.name} href={social.url} target="_blank" rel="noreferrer">
                {social.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
