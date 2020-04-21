import React, { useState, useEffect } from 'react'
import styles from './countryPicker.mudole.css'
import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchCountries} from '../../Servers'

export default function CountryPicker ({handleCountryChange}) {
  const [fetchCountriesData, setFetchCountriesData] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      setFetchCountriesData(await fetchCountries())
    }
    
    fetchApi()
  }, [])

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {fetchCountriesData.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}