const app = require('./app')
const connectDB = require('./db')

connectDB()
.then(
    app.listen(3000,()=>console.log("connected"))
)
.catch((err) => {
    console.log("MONGO db connection failed ! ", err);
})
