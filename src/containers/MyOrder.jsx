import React, { useContext } from 'react';
import AppContext from '../context/AppContext'
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';

import flecha from "@icons/flechita.svg";


const MyOrder = () => {
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (a, b) => a + b.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flecha} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">

				{state.cart.map((product, index) => (
					<OrderItem 
						indexValue={index}
						product={product} 
						key={index}
					/>
				))}
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;