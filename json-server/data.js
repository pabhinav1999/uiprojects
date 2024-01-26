export default () => {
    const data = {
        products: []  
    }

    for (let i = 0; i < 1000; i++) {
        data.products.push({
            id: i,
            title: `product${i}`
        })
    }

    return data;
}

// If we change db.json to data.js in package.json  and restart the server , we can observe the dat
