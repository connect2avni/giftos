import p1 from '../assets/images/p1.png'
import p2 from '../assets/images/p2.png'
import p3 from '../assets/images/p3.png'
import React, { useState } from 'react';
import './Cart.css';
import SearchComponent from './searchComponent';
import ShowCourseComponent from './ShowCourceComponent';
import UserCartComponent from './UserCartComponent';

function CartApp() {
	const [courses, setCourses] = useState([
		{ id: 1, 
		name: 'Teddy', 
		price: 499, 
		image: p1
		// <ProductCard picture={p1} name="Ring" price="$200"/> 

		},
		{ id: 2, 
		name: 'Flowers', 
		price: 699, 
		image: p2

		},
		{ id: 3, 
		name: 'Hoodie', 
		price: 799, 
		image: p3

		}
	]);

	const [cartCourses, setCartCourses] = useState([]);
	const [searchCourse, setSearchCourse] = useState('');

	const addCourseToCartFunction = (GFGcourse) => {
		const alreadyCourses = cartCourses
							.find(item => item.product.id === GFGcourse.id);
		if (alreadyCourses) {
			const latestCartUpdate = cartCourses.map(item =>
				item.product.id === GFGcourse.id ? { 
				...item, quantity: item.quantity + 1 } 
				: item
			);
			setCartCourses(latestCartUpdate);
		} else {
			setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
		}
	};

	const deleteCourseFromCartFunction = (GFGCourse) => {
		const updatedCart = cartCourses
							.filter(item => item.product.id !== GFGCourse.id);
		setCartCourses(updatedCart);
	};

	const totalAmountCalculationFunction = () => {
		return cartCourses
			.reduce((total, item) => 
						total + item.product.price * item.quantity, 0);
	};

	const courseSearchUserFunction = (event) => {
		setSearchCourse(event.target.value);
	};

	const filterCourseFunction = courses.filter((course) =>
		course.name.toLowerCase().includes(searchCourse.toLowerCase())
	);

	return (
		<>
		<div className="App">
			{/* <SearchComponent searchCourse={searchCourse} 
							courseSearchUserFunction=
								{courseSearchUserFunction} /> */}
			<main className="App-main">
				<ShowCourseComponent
					courses={courses}
					filterCourseFunction={filterCourseFunction}
					addCourseToCartFunction={addCourseToCartFunction}
				/>
	
				<UserCartComponent
					cartCourses={cartCourses}
					deleteCourseFromCartFunction={deleteCourseFromCartFunction}
					totalAmountCalculationFunction={
						totalAmountCalculationFunction
					}
					setCartCourses={setCartCourses}
				/>
			</main>
		</div>
		</>
	);
}

export default CartApp;
