import styled from 'styled-components';

type CountriesProps = {
  countries: any[];
  loading: boolean;
  error: any;
  setCountry: React.Dispatch<any>;
};

export default function Countries({
  countries,
  loading,
  error,
  setCountry,
}: CountriesProps) {
  if (loading) return <h2>Loading</h2>;
  else if (error) return <h2>Error</h2>;
  else
    return (
      <CountriesContainer>
        {countries.map((c, i) => (
          <Country key={i} onClick={() => setCountry(c)}>
            <Flag src={c.flags['png']} alt='Flag' />
            <CountryName>{c.translations.fra.common}</CountryName>
          </Country>
        ))}
      </CountriesContainer>
    );
}

const CountriesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin: 1rem 0;
`;

const Country = styled.div`
  height: 270px;
  max-width: 320px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.8rem;
  box-shadow: 0 0 10px #2323231b;
  cursor: pointer;
`;

const Flag = styled.img`
  aspect-ratio: 16/9;
  width: 100%;
  object-fit: cover;
  border-radius: 0.8rem 0.8rem 0 0;
`;

const CountryName = styled.h3`
  word-wrap: break-word;
  flex: 1;
  padding: 10px;
`;
