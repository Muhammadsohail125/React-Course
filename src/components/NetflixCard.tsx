import React from 'react';
import seriesData from '../api/seriesData.json';

// NetflixCard component
const NetflixCard = () => {
  return (
    <ul>
      {
        seriesData.map((curElem, i) => {
          return (
            <li key={curElem.id}>
              <div className="card">
                <img src={curElem.img_url} width="500px" alt={curElem.name} />
                <div className="card-body">
                  <h2>Name: {curElem.name}</h2>
                  <h3>Rating: {curElem.rating}</h3>
                  <h3>Cast: {curElem.cast}</h3>
                  <p>Description: {curElem.description}</p>
                  <p>Genre: {curElem.genre}</p>
                  <a href={curElem.watch_url} target="_blank">
                    <button>Watch Now</button>
                  </a>
                </div>
              </div>
            </li>
          );
        })
      }
    </ul>
  );
};

// Header component
export const Header = () => {
  return (
    <div className="header">
      <p>Header Here</p>
    </div>
  );
};

// Footer component
export const Footer = () => {
  return (
    <div className="footer">
      <p>Footer here</p>
    </div>
  );
};

// Default export of NetflixCard
export default NetflixCard;