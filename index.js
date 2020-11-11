const express = require('express')
const app = express()

app.get('/', (_, res) => {
    res.send('yeah yeah okkkkk okokokok')
})

app.listen(5050, () => {
    console.log('yup this is running on port 5050 yaaaay')
})