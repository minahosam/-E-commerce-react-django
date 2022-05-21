import Header from './Container/Header'
import Footer from './Container/Footer'
import { Container } from 'react-bootstrap'
import HomePage from './screens/HomePage'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import ProductPage from './screens/ProductPage'


function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/" component={HomePage} />
          <Route path="/product/:id" component={ProductPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;