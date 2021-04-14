import express from 'express'
import sinespApi from 'sinesp-api'

const app = express()

app.get('/:placa', async (req, res) => {
  const { placa } = req.params

  const vehicle = await sinespApi.search(placa);

  console.log(vehicle)

  res.status(200).json(vehicle)
})

app.listen(8080, () => console.log('Server running on port 8080'))

