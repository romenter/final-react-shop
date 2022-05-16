import React, { useContext } from 'react';
import AppContext from '../context/AppContext'
import '@styles/OrderItem.scss';
import iconClose from '@icons/icon_close.png'


const OrderItem = (props) => {
	// a mi me gusta asi, pero puedes poner lo que esta 	 
        // dentro de { } ahí arriba en vez de props
	const { product, indexValue } = props
	const { removeFromCart } = React.useContext(AppContext)

	const handleRemove = (index) => {
		removeFromCart(index)
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img 
				src={iconClose} 
				alt="close" 
				onClick={() => handleRemove(indexValue )}
			/>
		</div>
	);

}

export default OrderItem;