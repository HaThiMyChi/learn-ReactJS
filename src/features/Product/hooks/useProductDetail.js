import ProductApi from "api/productApi";
import { useEffect, useState } from "react";

export default function useProductDetail(productId) {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const result = await ProductApi.get(productId);
                setProduct(result);
                console.log('result', result)
            } catch (error) {
                console.log('Failed to fetch product', error)
            }
            setLoading(false)
        })()
    }, [productId])
    return { product, loading };
}