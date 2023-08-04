import React, { useState } from 'react';
import { SearchFormProps } from '../../props/SearchFormProps';



const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const sendCity = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={sendCity}>
      <label htmlFor="city">City : </label>
      <input
        type="text"
        id="city"
        name="city"
        value={city}
        onChange={handleChange}
      />
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchForm;
