import { useState, useEffect } from 'react';
import { Artwork } from '../types';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const ArtworkPreviewDiv = styled.div`
  margin: 3rem;
  padding: 1rem;
  width: 20rem;
  background-color: lightblue;
`;

const ArtworkPreview = ({ artwork }: { artwork: Artwork }) => {
  console.log(artwork);
  return (
    <Link to={`/artwork/${artwork.id}`}>
      <ArtworkPreviewDiv>
        <h2>{artwork.artist_title}</h2>
        <p>{artwork.place_of_origin}</p>
        <p>{artwork.date_end}</p>
      </ArtworkPreviewDiv>
    </Link>
  );
};

export default function ArtworksListContent() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [numArtworks, setNumArtworks] = useState(5);

  useEffect(() => {
    async function getArtworks() {
      const response = await fetch('https://api.artic.edu/api/v1/artworks');
      const data = await response.json();
      setArtworks(data.data);
    }
    getArtworks();
  }, [numArtworks]);

  return (
    <div>
      <input
        type='number'
        value={numArtworks}
        placeholder='Number of Artworks'
        onChange={(e) => setNumArtworks(parseInt(e.target.value))}
      />
      <div>
        {artworks.map((artwork) => (
          <ArtworkPreview key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </div>
  );
}
