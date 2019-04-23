import React, {Component} from 'react';

class Producto extends Component {
    render () {
        const {nombre,precio} = this.props.producto;
        return (
            <div>
                <p>{nombre} - Precion : $ {precio}</p>      
            </div>
        )
    }
}

export default Producto;
