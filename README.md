# IBB "Pomodoro App"

Данный проект представляет собой приложение Pomodoro

## Функционал
- Смена светлой и темной темы
- Трекинг времени обучения/отдыха
- Сессии
- Сброс текущего времени
- Возможность настройки времени для обучения/отдыха или количества сессий

## Технологии
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![Redux + RTK](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
- ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
- ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

## Установка и запуск

1. Клонируйте репозиторий:

```bash
git clone https://github.com/Gennod/ibb-pomodoro.git
```

2. Установите зависимости:

```bash
npm install
```

3. Запустите приложение:

```bash
npm run dev
```

## Демо

Посмотреть работающее приложение можно здесь:
[IBB-POMODORO](https://ibb-pomodoro.netlify.app/)

## Структура проекта

```
├── .gitignore
├── .prettierrc
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
    ├── icon.svg
    └── netlify.toml
├── src
    ├── components
    │   └── layout
    │   │   ├── Home
    │   │       └── Home.tsx
    │   │   └── Settings
    │   │       ├── Settings.data.tsx
    │   │       └── Settings.tsx
    ├── contexts
    │   └── ThemeContext.tsx
    ├── index.css
    ├── main.tsx
    ├── store
    │   ├── features
    │   │   └── timer.slice.ts
    │   ├── hooks.ts
    │   └── index.ts
    ├── theme.ts
    ├── types
    │   └── Slider.ts
    ├── ui-build
    │   └── ControlButton.tsx
    ├── ui
    │   ├── CircularProgressWithLabel.tsx
    │   ├── DesktopDrawer.tsx
    │   ├── MobileDrawer.tsx
    │   └── Slider.tsx
    ├── utils
    │   └── formatTime.ts
    └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```
