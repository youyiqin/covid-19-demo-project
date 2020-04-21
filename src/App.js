import React from 'react'
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './Servers'
import logoImg from './images/images.jpeg'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {},
      country: ''
    }
  }

  handleCountryChange = async (country) => {
    // fetch the data
    // set the data state
    const fetchedData = await fetchData(country)
    this.setState({data: fetchedData, country})
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
  }

  render() {
    const { data, country } = this.state;
    if (data === {}) {
      return <div>Data is loading</div>
    }    
    return (
      <div className={styles.container}>
        <img src={logoImg} alt="covid-19" className={styles.img} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country} />
      </div>
    )
  }
}
export default App;
