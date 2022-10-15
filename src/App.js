import './App.css'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/global'
import RoutesApp from './routes'
import { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllCurrenciesAndCategoriesAction } from './redux/products/products-action'

const theme = {
  colors: {
    header: 'white',
    body: '#fff',
    footer: '#003333',
    primary: '#54DA7D',
    light: 'white',
    activeBg: 'rgb(217, 215, 215)',
    hoverBg: 'rgb(200, 200, 200, 0.3)',
  },
  mobile: '768px',
}

class App extends Component {
  componentDidMount() {
    this.props.dispatchFetchAllCurrenciesAndCategories()
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RoutesApp />
      </ThemeProvider>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchAllCurrenciesAndCategories: () => dispatch(fetchAllCurrenciesAndCategoriesAction())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)

