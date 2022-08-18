import { app } from './app'

//process.env.PORT ||
app.listen(process.env.PORT, () => {
  console.log(`Server on port ${process.env.PORT} \nhttp://localhost:${process.env.PORT}`)
})
