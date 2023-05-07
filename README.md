# Шаблон для ReactNative приложений

## Данный шаблон будет в себя включать следующие готовые решения с примерами

- Feature Slice Design
- Effector
- Тесты
- React Navigation
- Различные хуки
- Fastlane
- Firebase
- Taliwindcss
- Linter


## Структура проекта
Проект использует архитекутуру [Feature Sliced Design](https://feature-sliced.design)

```sh
└── src/
    ├── @types # Общие типы для переиспользования
    ├── app
        ├── navigation # Навигация приложения
        ├── providers # Провайдеры для приложения
        ├── App.tsx # Связывание провайдеров и навигации
        └── index.ts #  Точка входа приложения
    ├── features # Ключевой функционал приложения
    ├── entities # Сущности приложения
    ├── screens # Экраны приложения
    └── shared # Переиспользуемые модули
        ├── ui # UI модули
        └── config # Различные статические данные

```

## Используемые библиотеки

- [Effector](https://effector.dev)
- [NativeWind](https://www.nativewind.dev/)