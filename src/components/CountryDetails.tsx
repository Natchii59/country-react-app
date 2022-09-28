import styled from 'styled-components';

type CountryDetailsProps = {
  country: any;
  setCountry: React.Dispatch<any>;
};

export default function CountryDetails({
  country,
  setCountry,
}: CountryDetailsProps) {
  const formatter = Intl.NumberFormat('fr', { notation: 'compact' });

  return (
    <CountryOverlay>
      <Background onClick={() => setCountry(null)} />

      <Container>
        <h1 style={{ marginBottom: '10px' }}>
          {country.flag} {country.translations.fra.official}
        </h1>

        <p>Population: {formatter.format(country.population)}</p>

        <a href={country.maps.googleMaps} target='_blank' rel='noreferrer'>
          Localisation
        </a>

        <p>{country.independent ? 'Indépendant' : 'Dépendant'}</p>

        <p>Langues: {Object.values(country.languages).join(', ')}</p>
      </Container>
    </CountryOverlay>
  );
}

const CountryOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.9;
  z-index: 100;
`;

const Container = styled.div`
  z-index: 101;
  background-color: #fff;
  width: 80%;
  height: 60%;
  border-radius: 0.6rem;
  padding: 10px;
`;
