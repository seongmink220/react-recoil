import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Info from './components/Info'

function App() {
    console.log("ksmLOG == App.js");

    return <>
        <section className="todoapp">
            <Header />
            <Main />
            <Footer />
        </section>
        <Info />
    </>
}

export default App;