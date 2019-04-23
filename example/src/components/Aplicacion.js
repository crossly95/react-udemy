import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Productos from './Productos';

class Aplicacion extends Component {

    state = {
        productos : []
    };
    componentDidMount(){
        const productos = [
            {nombre: 'Queso' , precio: 200},
            {nombre: 'Uvas' , precio: 300},
            {nombre: 'Fresas' , precio: 100},
            {nombre: 'Manzanas' , precio: 2000}
        ]
        setTimeout(()=>{
            this.setState({
                productos : productos
            })
        },3000);
    }

    render () {
        
        return (
            <div>
                <Header/>
                <Productos productos = {this.state.productos}/>
                <Footer/>
            </div>
        )
    }
}

export default Aplicacion;