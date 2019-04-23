import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Productos from './Productos';

class Aplicacion extends Component {
    render () {
        const productos = [
            {nombre: 'Queso' , precio: 200},
            {nombre: 'Uvas' , precio: 300},
            {nombre: 'Fresas' , precio: 100},
            {nombre: 'Manzanas' , precio: 2000}
        ]
        return (
            <div>
                <Header/>
                <Productos
                productos = {productos}
                />
                <Footer/>
            </div>
        )
    }
}

export default Aplicacion;