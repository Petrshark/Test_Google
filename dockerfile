# Použijeme oficiální Node.js obraz jako základní obraz
FROM node:14

# Nastavíme pracovní adresář v kontejneru
WORKDIR /app

# Zkopírujeme package.json a package-lock.json do pracovního adresáře
COPY package*.json ./

# Nainstalujeme závislosti
RUN npm install

# Zkopírujeme zbytek aplikace do pracovního adresáře
COPY . .

# Exponujeme port 8081 pro přístup k aplikaci
EXPOSE 8081

# Spustíme HTTP server
CMD ["npx", "http-server", "-p", "8081"]
