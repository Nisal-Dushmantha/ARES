# ARES - MMA Merchandise Store

A full-stack MERN (MongoDB, Express, React, Node.js) e-commerce platform for selling MMA gear including shorts and compression wear.

## Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **CSS3** - Styling with black/white/gray palette

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication (ready to implement)
- **bcryptjs** - Password hashing (ready to implement)

## Project Structure

```
ARES/
├── server/                 # Backend
│   ├── models/            # MongoDB schemas
│   │   ├── Product.js
│   │   └── Order.js
│   ├── controllers/       # Route handlers
│   │   ├── productController.js
│   │   └── orderController.js
│   ├── routes/           # API routes
│   │   ├── productRoutes.js
│   │   └── orderRoutes.js
│   ├── middleware/       # Express middleware
│   ├── server.js         # Entry point
│   ├── package.json
│   └── .env.example
│
├── client/               # Frontend
│   ├── src/
│   │   ├── components/   # Reusable React components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── pages/       # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── Cart.jsx
│   │   │   └── Checkout.jsx
│   │   ├── styles/      # CSS files
│   │   ├── App.jsx      # Main app component
│   │   ├── main.jsx     # Entry point
│   │   └── index.css    # Global styles
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### 1. Backend Setup

```bash
cd server

# Install dependencies
npm install

# Create .env file from .env.example
cp .env.example .env

# Edit .env with your MongoDB connection string
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ares
# PORT=5000
# JWT_SECRET=your_secret_key_here

# Start development server
npm run dev
```

The backend will run on `http://localhost:5000`

### 2. Frontend Setup

```bash
cd client

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will run on `http://localhost:3000`

### 3. MongoDB Setup

1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Get your connection string
4. Add it to your `.env` file in the server folder
5. Whitelist your IP address in MongoDB Atlas

**Connection String Format:**
```
mongodb+srv://username:password@cluster-name.mongodb.net/ares?retryWrites=true&w=majority
```

## Features

### Frontend
- ✅ Product listing with filter by category
- ✅ Product detail page with image, description, size/color selection
- ✅ Shopping cart with localStorage persistence
- ✅ Checkout with customer information form
- ✅ Responsive design (works on desktop, tablet, mobile)
- ✅ Black/white/gray color palette
- ✅ Modern, clean UI

### Current Products
- MMA Shorts (various premium styles)
- Compression Wear (tops and tights)

### Backend
- ✅ RESTful API for products and orders
- ✅ MongoDB models for Product and Order
- ✅ CORS enabled for frontend communication
- ✅ Product management endpoints
- ✅ Order creation and tracking

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/category/:category` - Get products by category
- `POST /api/products` - Create new product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Orders
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get order by ID
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id` - Update order status
- `DELETE /api/orders/:id` - Delete order

## Placeholder Data

The frontend includes placeholder data for 6 products:
- Premium MMA Shorts ($79.99)
- MMA Compression Shirt ($49.99)
- Elite MMA Shorts V2 ($89.99)
- Compression Tights ($59.99)
- Combat Shorts Pro ($99.99)
- Base Layer Compression ($39.99)

These will be fetched from the API once the backend is connected.

## Color Palette

The site uses a professional black, white, and gray color scheme:
- **Primary**: #000000 (Black) - Main text and backgrounds
- **Secondary**: #ffffff (White) - Light backgrounds
- **Accent**: #666666 (Gray) - Secondary text and borders
- **Light Gray**: #f5f5f5 - Light gray backgrounds

## Building for Production

### Frontend
```bash
cd client
npm run build
# Output in client/dist
```

### Backend
```bash
cd server
# Ensure all dependencies are installed
npm install
```

## Environment Variables

### Server (.env)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ares
PORT=5000
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

### Frontend
The frontend proxies API calls to the backend server (configured in vite.config.js)

## Next Steps

1. **Add MongoDB Connection**: Update the MONGODB_URI in server/.env with your MongoDB Atlas connection string
2. **Seed Database**: Add initial product data to MongoDB
3. **Add Authentication**: Implement user registration and login
4. **Payment Integration**: Add Stripe or PayPal integration
5. **Admin Dashboard**: Create an admin panel for product management
6. **Email Service**: Set up email notifications for orders
7. **Image Upload**: Implement image upload for products
8. **Product Reviews**: Add product review system

## Troubleshooting

### Frontend can't connect to backend
- Ensure backend is running on port 5000
- Check vite.config.js proxy settings
- Check CORS configuration in server.js

### MongoDB connection fails
- Verify connection string in .env
- Check IP whitelist in MongoDB Atlas
- Ensure network access is enabled

### CSS not loading properly
- Clear browser cache
- Restart frontend dev server
- Check that all CSS files are imported correctly

## Development Tips

- The cart persists data in localStorage
- Product data fetches with fallback to placeholder data
- Responsive design works on all screen sizes
- Color variables are defined in index.css for easy theme changes

## License

MIT
