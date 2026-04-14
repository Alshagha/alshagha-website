#!/bin/bash
mkdir -p website/src website/public/images
cd website
npm init -y
npm install react react-dom
npm install -D vite @vitejs/plugin-react

cat > package.json << 'EOF'
{
  "name": "website",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.0",
    "vite": "^5.4.0"
  }
}
EOF

cat > vite.config.js << 'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
EOF

cat > index.html << 'EOF'
<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Alshagha Family</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
EOF

cat > src/main.jsx << 'EOF'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
EOF

cat > src/App.jsx << 'EOF'
import './App.css'

function App() {
  return (
    <>
      <h1>أسرة الشقحاء</h1>
    </>
  )
}

export default App
EOF

touch src/index.css src/App.css
cp "../بيت الجد.png" public/images/grandpas_house.png
cp "../شجرة.png" public/images/family_tree.png
cp "../وصية١.png" public/images/testament_1.png
cp "../وصية٢.png" public/images/testament_2.png
cp "../وصية٣.png" public/images/testament_3.png

npm install
EOF
