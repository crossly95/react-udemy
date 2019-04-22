import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';

class ComponentFirst extends Component {
    render () {
        return (
            <div>
                <Header/>
                <p>Desde mi primer componente</p>
                <Footer/>
            </div>
        )
    }
}

export default ComponentFirst;