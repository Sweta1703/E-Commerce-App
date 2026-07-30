import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 4000

connectDB()
connectCloudinary()

// Middlewares
app.use(express.json())

const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:5175',  // admin dev server
    'https://e-commerce-app-frontend-puce.vercel.app',
    'https://e-commerce-app-admin-ten.vercel.app',
]

app.use(
    cors({
        origin: (origin, callback) => {
            // Allow requests with no origin (mobile apps, curl, Postman)
            if (!origin) return callback(null, true);
            if (allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'token'],
        credentials: true,
    })
)


// API routes
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server started on PORT : ${port}`)
})
