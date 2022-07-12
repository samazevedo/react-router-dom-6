import { Link } from 'react-router-dom'
import { data } from '../data/data'
import '../App.css'
function Products() {
    return (
        <main className='main-content'>
            <h2>Products</h2>
            <ul className='product-list'>
                {data.map((product) => {
                    const { id, name, price, image } = product
                    return (
                        <li key={id} className='product-list-item'>
                            <h4>{name}</h4>
                            <p>{price}</p>
                            <img src={image} alt={name} />
                            <Link to={`/products/${id}`}>View Product</Link>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Products
