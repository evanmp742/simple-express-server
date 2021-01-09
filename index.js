const express = require('express')
const app = express()

app.get('/', (_, res) => {
    res.send('running from coder school host!')
})

app.listen(5050, () => {
    console.log('yup this is running on port 5050 yaaaay')
})
