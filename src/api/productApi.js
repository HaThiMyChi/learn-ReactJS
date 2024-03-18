import axiosClient from "./axiosClient";

const ProductApi = {
    async getAll(params) {
        // Transform _page to start
        const newParams = { ...params };
        newParams._start = !params._page || params._page <= 1
            ? 0
            : (params._page - 1) * (params._limit) || 50;

        console.log('newParams', newParams)

        // Remove un-needed key (no tinh toan xong cai start, thi no remove cai _page minh truyen xuong)
        delete newParams._page;

        // Fetch product list + count
        const productList = await axiosClient.get('/products', { params: newParams });
        const count = await axiosClient.get('/products/count', { params: newParams });

        // Build respose and return
        return {
            data: productList,
            pagination: {
                page: params._page,
                limit: params._limit,
                total: count
            }
        };
    },


};

export default ProductApi;