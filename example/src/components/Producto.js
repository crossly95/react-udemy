import React, {Component} from 'react';

class Producto extends Component {
    render () {
        const {nombre,precio} = this.props.producto;
        return (
            <div>
                <p>{nombre} {precio}</p>               
            </div>
        )
    }
}

export default Producto;
