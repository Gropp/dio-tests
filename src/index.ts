import { app } from './app'

//process.env.PORT ||
app.listen(5001, () => {
  console.log(`Server on port ${process.env.PORT} \nhttp://localhost:${process.env.PORT}`)
})
