const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.get('/api/regex', (req, res) => {
    const pdfFileName = req.query.pdfFileName

    console.log(pdfFileName)
    const data = {
        customer_info: {
            name: 'test',
            phone: 1833184090,
            email: 'sdfasd@gmail.com',
            billing_address: 'dsafsdf',
            shipping_address: 'adfsdfsd',
        },
        item_details: [
            {
                name: 'iphone',
                unit_price: 150000,
                quantity: 2,
                amount: 300000,
                currency: 'Taka',
            },
            {
                name: 'iphone',
                unit_price: 150000,
                quantity: 2,
                amount: 300000,
                currency: 'Taka',
            },
            {
                name: 'iphone',
                unit_price: 150000,
                quantity: 2,
                amount: 300000,
                currency: 'Taka',
            },
        ],
        total_amount: 900000,
        note: 'adsfsadfasdfsadfsadf',
        invoice_info: {
            date: '15-08-2023',
            number: 12321321,
        },
    }

    res.json(data)
})

const port = 3000

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
