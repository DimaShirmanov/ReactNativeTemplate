# Шаблон для ReactNative приложений

## Что реализовано

- Архитектура Feature Sliced Design ✅
- Шаблон навигации ✅
- Шаблон стора Effector ✅
- Fastlane ✅
- Стили через nativewind(tailwindcss) ✅
- Некоторые частоиспользуемые провайдеры ✅

## Что будет реализовано

- Тестированиие экранов, компонентов через [@testing-library/react-native](https://testing-library.com/docs/react-native-testing-library/intro/) 🔲
- Push Notification 🔲
- Доработка TypeScript navigation 🔲
- Работа с API(axios) + Effector 🔲
- Хуки для работы с анимацией 🔲

## Под вопросом реализации
- Добавление Firebase ❓
- Кастомные популярные хуки ❓
- Добавление новых провайдеров ❓

## Структура проекта

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
        ├── lib # Вспомогательные библиотеки
        ├── assets # Медиа файлы (картинки, иконки)
        └── config # Различные статические данные
└── fastlane # Автоматизация сборок IOS/Android приложений
```

## fastlane

```sh
└── fastlane/
    ├── .env # Ключи для сборок
    ├── Appfile
    ├── Fastfile # Файл с логикой сборок
    ├── Pluginfile # Плагины
    └── Readme.md
```

## navigation

```sh
└── navigation
    ├── navigators/
        ├── {StackName/} # Навигационный стек с экранами
        └── index.ts # Общий экспорт стеков
    ├── options/ # Конфигурации навигаций
    └── index.tsx # Точка входа и иницилизцаия навигации
```

## providers

```sh
└── providers
    ├── with{NameProvider}.tsx # Файл провайдера
    └── index.tsx # Точка входа через compose(Provider1, Provider2, Provider3)
```

## entities

```sh
└── entities
    ├── {entityName/} # Сущность
        ├── model.ts # Логика сущности
        ├── ui/ # Представлени сущности
            └── {Component/}
                ├── {Component}.tsx # Представление
                └── index.ts # Точка входа компонента
            └── index.ts # Точка входа компонентов
        └── index.ts # Точка входа сущности
```

## shared

```sh
└── shared
    ├── config
        ├── {name}.ts # Статичская сущность
        └── index.ts # Общий импорт
    └── ui # Переиспользуемые UI компорненты
        ├── {component/} # Папка компонента
            ├── Component.tsx # Компонент
            ├── Componen.spec.tsx # Unit тест
            └── index.ts # Точка входа компонента
        └── index.ts # Общий импорт
```

```sh
└── shared
    ├── config
        ├── {name}.ts # Статичская сущность
        └── index.ts # Общий импорт
    └── ui # Переиспользуемые UI компорненты
        ├── {component/} # Папка компонента
            ├── Component.tsx # Компонент
            ├── Componen.spec.tsx # Unit тест
            └── index.ts # Точка входа компонента
        └── index.ts # Общий импорт
```

## Дополнитльно

- Проект использует [Feature Sliced Design](https://feature-sliced.design) архитектуру
- Как хранилище выбран [Effector](https://effector.dev)
- Вместо привычных стилей через StyleSheet используется [NativeWind](https://www.nativewind.dev/)

## Как запустить проект

- IOS
  - cd iod && pod install
  - npm run ios
- Android
  - npm run android
