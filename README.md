# 🌐 Backend API - SENADA

Ini adalah RESTful API backend yang dibangun menggunakan **Node.js**, **Express.js**, dan **MySQL** menggunakan ORM **Sequelize**. Proyek ini menyediakan endpoint untuk manajemen data pengguna, event, dan pembelian.

---

## 🚀 Teknologi yang Digunakan

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [nodemon](https://www.npmjs.com/package/nodemon)

---

## 📦 Instalasi

```bash
# Clone repositori
git clone https://github.com/agunglaksonoputra/senada-api.git

# Masuk ke direktori proyek
cd senada-api

# Instal dependensi
npm install
````

## 🗃️ Database Setup
````bash
# Jalankan migrasi database
npx sequelize-cli db:migrate

# Isi database dengan data awal
npx sequelize-cli db:seed:all

# Menghapus database
npx sequelize-cli db:migrate:undo:all
````

## ▶️ Menjalankan Server API
````bash
# Mode development
npm run dev
````
