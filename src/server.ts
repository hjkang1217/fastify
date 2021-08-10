import server from './index'
const port: number = 8766;

const app = server;

app.listen(port, (err, address) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
})