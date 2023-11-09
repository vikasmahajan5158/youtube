require('dotenv').config()

const express = require('express')

const app = express()
 

app.get('/', (req, res) => {
  res.send('<h1>OM NAMAH SHIVAY</h1><h1>OM NAMO BHAGAVTEH HANUMNATEH NAMAH</h1><h1>OM SAI NATHAY MANAH</h1><h1>SHREE KRISHNA GOVINDA HARE MURARI HE NATH NARAYAN VASUDEVA</h1>   <h1>OM SHREE GANESHAY NAMAH</h1>   <h1>JAY MAAA RENUKA MATA KI JAY HO</h1>   <h1>JAY MA ICHHADEVI KI JAY HO</h1>   <h1>SHREE SHIVAY NAMASTUBHYAM</h1>');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})