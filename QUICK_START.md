# ARES MMA Store - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env and add your MongoDB URL:
# ⚠️ IMPORTANT: Replace the MONGODB_URI with your MongoDB Atlas connection string
```

**Your .env should look like:**
```
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/ares
PORT=5000
JWT_SECRET=your-secret-key-here
NODE_ENV=development
```

To get your MongoDB connection string:
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up or log in
3. Create a cluster
4. Click "Connect" and copy the connection string
5. Paste it in .env (replace username and password)

```bash
# Start the backend server
npm run dev
```

✅ Backend running on http://localhost:5000

### Step 2: Frontend Setup (New Terminal)

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start development server
npm run dev
```

✅ Frontend running on http://localhost:3000

### Step 3: Open in Browser

Open http://localhost:3000 in your browser and start shopping!

---

## 📦 What's Included

✅ **6 Placeholder Products**
- MMA Shorts (3 variants)
- Compression Wear (3 variants)

✅ **Features**
- Product browsing and filtering
- Product detail pages
- Shopping cart
- Checkout form
- Responsive design
- Black/white/gray theme

✅ **Ready-to-use Backend APIs**
- Product endpoints
- Order endpoints
- CORS enabled

---

## 🔌 Connecting the Backend

Once you set up MongoDB and start the backend, the frontend will automatically:
1. Fetch real products from the database
2. Allow actual orders to be placed
3. Store orders in MongoDB

If the backend isn't running, the app will show placeholder products.

---

## 🛠️ Quick Commands Reference

### Backend
```bash
cd server
npm install          # Install dependencies
npm run dev         # Start development server
npm start           # Start production server
```

### Frontend
```bash
cd client
npm install         # Install dependencies
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

---

## ⚠️ Troubleshooting

**Q: Frontend shows "Loading..." but nothing loads**
A: The backend is not running. Make sure to start the backend server first.

**Q: Backend won't connect to MongoDB**
A: Check your MONGODB_URI in .env - it should include username, password, and cluster name.

**Q: CORS error in console**
A: Make sure backend is running on port 5000 and frontend hasn't been changed to connect to a different port.

**Q: Weird styling issues**
A: Clear browser cache (Ctrl+Shift+Delete) and refresh.

---

## 📝 Next Steps

1. **Test the app** - Browse products, add to cart, checkout
2. **Monitor orders** - Orders go to your MongoDB database
3. **Add more products** - Use POST /api/products endpoint
4. **Customize** - Edit colors in client/src/index.css
5. **Deploy** - Follow production build guides for Heroku, Vercel, etc.

---

## 📞 Need Help?

Follow the detailed instructions in **SETUP_GUIDE.md** for more information.

Good luck! 🥋
