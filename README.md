##  Overview
The **Restaurant Finder App** is a simple **React.js project** that allows users to search for restaurants in **Patras, Thessaloniki, and Athens**. Users can **filter restaurants** by **city** and **rating**, and view detailed information such as:
-  **Restaurant Name**
-  **Short Description**
-  **Ratings**
-  **Image Preview**

The app is built using **React.js**, **Framer Motion** for animations, and **CSS for styling**.

---

##  Features

✅ **Search System:** Users can search for a **specific city** (e.g., "Patras") or all restaurants  
✅ **Dynamic Filtering:** Apply **filters** to sort restaurants by **rating** or **alphabetically**  
✅ **Interactive UI:** Modern **hover effects, animations, and dark theme**  
✅ **Real Images:** Restaurants have **fixed Unsplash images** for consistency  
✅ **Responsive Design:** Works across **desktop & mobile devices**  

---

## 🛠 Technologies Used

- **React.js** ⚛ - Frontend framework
- **Framer Motion**  - For smooth animations
- **CSS3**  - Styling and responsiveness
- **Unsplash API**  - Fetching restaurant images
- **Node.js & npm**  - Project dependencies

---

##  Getting Started

###  Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/restaurant-finder.git
cd restaurant-finder
```

###  Step 2: Install Dependencies
Make sure **Node.js** (v18 or later) is installed, then run:
```bash
npm install
```

###  Step 3: Start the App
Run the development server:
```bash
npm start
```
 The app will open automatically at:  
 **http://localhost:3000**

---

##  How the App Works

### 1. **Search Functionality**
- Users can **search by city name** (`"Patras"`, `"Thessaloniki"`, `"Athens"`).
- Searching `"Restaurants"` **displays all restaurants**.

### 2. **Displaying Restaurants**
- When a **city is selected**, the restaurants from that city appear.
- Restaurants **fade in smoothly** using **Framer Motion**.

### 3. **Filtering Options**
- Users can filter **restaurants** by **rating** (`high to low`) or **alphabetically**.

### 4. **Hover Effects & Styling**
- **Cards change color & scale up** on hover.
- **Dark theme UI with rounded buttons** for a modern feel.

---

##  Project Structure

```
restaurant-finder/
│── public/                   # Static files (favicon, index.html)
│── src/                      # Main React source files
│   ├── components/           # Reusable components
│   │   ├── SearchComponent.jsx
│   │   ├── RestaurantList.jsx
│   │   ├── RestaurantData.js
│   ├── pages/                # Page-level components (if needed)
│   ├── App.js                # Main app entry
│   ├── index.js              # Renders app to the DOM
│── package.json              # Project dependencies
│── README.md                 # Documentation (this file)
```

---

##  Deployment
You can **deploy this app online** using **GitHub Pages, Vercel, or Netlify**.

### **2. Deploy to GitHub Pages**
```bash
npm run build
npm install -g gh-pages
npm run deploy
```
 The app will be **hosted at:**  
`https://yourusername.github.io/restaurant-finder/`

### **2. Deploy to Netlify (Recommended)**
1. Go to [Netlify](https://app.netlify.com/) and **connect your GitHub repo**.
2. Click **Deploy** → Your app will be online in minutes! 🚀

---

##  Contributors
- **Your Name** - [GitHub Profile](https://github.com/yourusername)
- **Other Contributors** (if any)

---

##  License
This project is licensed under the **MIT License** – feel free to modify and distribute! 📜
```
