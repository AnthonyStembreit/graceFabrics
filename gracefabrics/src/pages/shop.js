import React, { useEffect, useState } from "react";
import Product from '../components/Product';
import { Grid } from '@material-ui/core/';
import API from '../utils/API';
import './shop.css'

const Shop = (props) => {
    let [productsList, setProducts] = useState({
        products: []
    });

    useEffect(() => {
        console.log(props)
        API.getSortedStoles(props.type).then(function (res) {
            console.log("it worked!")
            setProducts({
                products: res.data
            })
        })
    }, []);



    let productsMaped = productsList.products.map(product => {

        return (
            <Grid item xs={9} sm={4} md={3} key={product.id}>
                <Product
                    productinfo={product}
                />
            </Grid>
        )
    })



    return (
        <Grid container>
            {productsMaped}
        </Grid>
    )
}

export default Shop;
