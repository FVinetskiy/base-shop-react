import axios from 'axios';
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import './FullProduct.sass'

const FullProduct: React.FC = () => {
    const [product, setProduct] = React.useState<{
        title: string,
        price: number
    }>();
    const navigate = useNavigate();
    let { id } = useParams();
    
    React.useEffect(() => {
        async function fetchProductFull() {
            try {
                const { data } = await axios.get('https://63ba79d34482143a3f28546c.mockapi.io/items/' + id)
                setProduct(data)
            } catch (error) {
                alert('такого товара нету')
                console.log('данные выбранного товара не загрузились')
                navigate('/')
            }
        }

        fetchProductFull()
    })

    if (!product) {
        return  <>'загрузка'</>
    }

    return (
        <div>
            <p>{product.title}</p>
            <p>{product.price}</p>
        </div>
  )
}

export default FullProduct
