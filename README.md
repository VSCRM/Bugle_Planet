# 📰 Bugle Planet — News Aggregator SPA

Bugle Planet — це сучасний новинний агрегатор, розроблений як Single Page Application (SPA) на базі бібліотеки React 19. Проєкт створено в рамках курсової роботи, він демонструє принципи компонентного програмування, ефективного управління станом та швидкої збірки за допомогою Vite.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://vscrm.github.io/Bugle_Planet/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-latest-646CFF)](https://vitejs.dev/)

## 🚀 Основні особливості

* **Блискавична швидкість**: Завдяки використанню Vite та Virtual DOM
* **Глобальний стан**: Авторизація та дані користувача контролюються через React Context API
* **Адаптивний дизайн**: Інтерфейс побудований за допомогою Tailwind CSS, що забезпечує ідеальний вигляд на десктопах та смартфонах
* **Надійна маршрутизація**: Використання `HashRouter` для коректної роботи на GitHub Pages без помилок 404
* **Атомарна структура**: Компоненти розділені за принципом повторного використання

## 🛠 Технологічний стек

| Технологія | Призначення |
|------------|-------------|
| **React 19** | Frontend framework (Hooks, Context API) |
| **Vite** | Build tool та dev server |
| **Lucide React** | Набір іконок |
| **React Router Dom** | Маршрутизація |
| **GitHub Pages** | Deployment та хостинг |

## 📂 Структура проєкту

```
Bugle_Planet/
│
├── src/
│   ├── components/     # Атомарні компоненти
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── NewsCard.jsx
│   │
│   ├── context/        # Глобальне управління станом
│   │   └── AuthContext.jsx
│   │
│   ├── pages/          # Сторінки додатку
│   │   ├── Home.jsx
│   │   ├── Search.jsx
│   │   ├── Profile.jsx
│   │   └── Login.jsx
│   │
│   ├── assets/         # Статичні ресурси
│   │   ├── logo.svg
│   │   └── images/
│   │
│   ├── App.jsx         # Основний файл конфігурації маршрутів
│   └── main.jsx        # Точка входу
│
├── public/             # Публічні файли
├── index.html          # HTML шаблон
├── package.json        # Залежності проєкту
├── vite.config.js      # Конфігурація Vite
└── README.md           # Документація
```

## ⚙️ Встановлення та запуск

### Передумови

Переконайтеся, що у вас встановлено:
- Node.js (версія 16 або вище)
- npm або yarn

### Кроки встановлення

1. **Клонуйте репозиторій:**
   ```bash
   git clone https://github.com/VSCRM/Bugle_Planet.git
   ```

2. **Перейдіть у папку проєкту:**
   ```bash
   cd Bugle_Planet
   ```

3. **Встановіть залежності:**
   ```bash
   npm install
   ```

4. **Запустіть режим розробки:**
   ```bash
   npm run dev
   ```

5. **Відкрийте браузер:**

   Перейдіть за адресою `http://localhost:5173`

### Доступні команди

```bash
npm run dev          # Запуск dev сервера
npm run build        # Збірка для production
npm run preview      # Попередній перегляд production збірки
npm run deploy       # Деплой на GitHub Pages
```

### Етапи розробки

- ✅ Проєктування архітектури
- ✅ Налаштування інфраструктури (Vite)
- ✅ Розробка атомарних компонентів
- ✅ Реалізація маршрутизації
- ✅ Управління глобальним станом
- ✅ Адаптивний дизайн
- ✅ Деплой на GitHub Pages

## 🔗 Живе демо

Ви можете переглянути працюючий проєкт за посиланням:

**🌐 [https://vscrm.github.io/Bugle_Planet/](https://vscrm.github.io/Bugle_Planet/)**

## 📝 Ліцензія

Цей проєкт ліцензовано під [MIT License](LICENSE) - дивіться файл LICENSE для деталей.

## 👨‍💻 Автор

**Розроблено студентом групи ІП-23-1
Кручкевичем Богданом - https://github.com/VSCRM/Bugle_Planet.git**

Курсова робота з дисципліни "Технологія компонентного ПЗ для веб"

📅 2026 рік

---

<div align="center">

**Зроблено з React**

</div>
