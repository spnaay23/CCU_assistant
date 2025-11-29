---
description: Setup and run the CCU Virtual Assistant chat server
---
1. Open a terminal in the project root (`/Users/spnaay_/ccu-web`).

2. Initialise a new Node.js project (creates `package.json`).  
   ```bash
   npm init -y
   ```

3. // turbo  
   Install required dependencies.  
   ```bash
   npm install express socket.io axios rate-limit-flexible geoip-lite dotenv
   ```

4. // turbo  
   Create a `.env` file with your OpenAI API key (replace `YOUR_KEY`).  
   ```text
   OPENAI_API_KEY=YOUR_KEY
   PORT=2025
   ```

5. Start the server.  
   ```bash
   npm start
   ```

6. Open a browser and navigate to `http://localhost:2025` to use the chat client.  
   Visit `http://localhost:2025/summary.html` for the live stats page.
