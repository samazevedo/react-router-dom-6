import { useParams, Link } from 'react-router-dom'
import { data } from '../data/data'

function ProductItem() {
    const { id } = useParams()
    const product = data.find((product) => product.id === parseInt(id))
    const { name, price, image } = product

    return (
        <section className='product-item'>
            <h2>{name}</h2>
            <p>{price}</p>
            <img src={image} alt={name} />
            <Link to='/products'>Back to Products</Link>
        </section>
    )
}
export default ProductItem
