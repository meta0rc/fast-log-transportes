import {GlobalStyles} from './assets/styles/global.js'
import { Banner } from './components/banner/banner.js'
import { Customers } from './components/customers/customers.js'
import { Evaluetions } from './components/evaluetions/evaluetions.js'
import { Footer } from './components/footer/footer.js'
import { Header } from './components/header/header.js'
import { News } from './components/news/news.js'
import { Numbers } from './components/numbers/numbers.js'
import { Selos } from './components/selos/selos.js'
import { Services } from './components/services/services.js'
import { WhoWeAre } from './components/who/who.js'

export const App = () => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Banner />
            <Evaluetions />
            <WhoWeAre />
            <Selos />
            <Numbers />
            <Customers />
            <Services /> 
            <News />
            <Footer />
        </>
    )
}