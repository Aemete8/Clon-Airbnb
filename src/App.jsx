import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SearchBox from './components/SearchBox'
import PropertiesSection from './components/PropertiesSection'
import { properties } from './data/properties'


function App() {
  const [city, setCity] = useState("")
  const [search, setSearch] = useState("")
  const [type, setType] = useState("")
  const [searchedType, setSearchedType] = useState("")
  const [propertiesFromAPI, setPropertiesFromAPI] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  //Agregar filtro con huespedes const []= useState("")

  useEffect(() => {
    const timerId = setTimeout(() => {
      try {
        setPropertiesFromAPI(properties);
      } catch {
        setError("No pudimos cargar las propiedades.");
      } finally {
        setIsLoading(false);
      }
    }, 4000);

    return () => clearTimeout(timerId);
  }, []);

  const filteredProperties = propertiesFromAPI.filter((property) => {
    const searchText = search.toLowerCase();
    const searchType = searchedType.toLowerCase()

    return (
      property.title.toLowerCase().includes(searchText) ||
      property.location.toLowerCase().includes(searchText)) &&
      property.type.toLowerCase().includes(searchType)
  });


  return (
    <>
      <Header />

      <main className="mx-auto max-w-6xl px-6 pb-16 pt-8 md:px-10">
        <Hero />

        <SearchBox
          value={city}
          onChange={setCity}
          searchedValue={search}
          onSearch={setSearch}
          onClear={() => {
            setCity("")
            setSearch("")
            setType("")
            setSearchedType("")
          }}

          type={type}
          onChangeType={setType}
          searchedType={searchedType}
          onSearchType={setSearchedType}
        />

        {isLoading && <p className='my-8 text-center'>Cargando propiedades...</p>}

        {error && <p>{error}</p>}

        {!isLoading && !error && (
          <PropertiesSection properties={filteredProperties} />
        )}
      </main>
    </>
  )
}

export default App

