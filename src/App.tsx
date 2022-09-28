import { useEffect, useState } from 'react';
import { RestCountries } from './api';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';

export default function App() {
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);
  const [country, setCountry] = useState<any | null>(null);

  useEffect(() => {
    setLoading(true);

    RestCountries.all()
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Countries App</h1>

      <Countries
        countries={countries}
        loading={loading}
        error={error}
        setCountry={setCountry}
      />

      {country ? (
        <CountryDetails country={country} setCountry={setCountry} />
      ) : null}
    </>
  );
}
