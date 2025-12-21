# 🗓️ Planner Dnia

<div align="center">

**Nowoczesna aplikacja do planowania zadań oparta na React + TypeScript.**
*Czysty kod, komponenty funkcyjne, brak backendu.*

<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</p>

</div>

---

## 📖 O projekcie

**Planner Dnia** to aplikacja demonstrująca czysty podział logiki i prezentacji, wykorzystanie hooków do zarządzania stanem oraz podejście skupione na prostocie i czytelności kodu.

Aplikacja działa **całkowicie lokalnie** — nie wymaga backendu ani serwera bazy danych.

---

## 🚀 Jak uruchomić (Szybki Start)

Możesz uruchomić aplikację standardowo przez Node.js lub w izolowanym kontenerze Docker.

### 🖥️ Opcja 1: Lokalnie (Node.js)

1.  **Zainstaluj zależności:**
    ```bash
    npm install
    ```
2.  **Uruchom serwer:**
    ```bash
    npm run dev
    ```
3.  **Otwórz w przeglądarce:** `http://localhost:5173/`

### 🐳 Opcja 2: Docker

1.  **Zbuduj obraz:**
    ```bash
    docker build -t planner-dnia .
    ```
2.  **Uruchom kontener:**
    ```bash
    docker run -p 8080:80 planner-dnia
    ```
3.  **Otwórz w przeglądarce:** `http://localhost:8080`

---

## ✨ Funkcjonalności

Aplikacja oferuje zestaw niezbędnych narzędzi do zarządzania czasem:

- ✅ **Dodawanie zadań** – z określeniem godziny oraz opisu.
- ✅ **Status zadań** – intuicyjne oznaczanie zadań jako ukończone.
- ✅ **Usuwanie** – proste zarządzanie listą poprzez usuwanie niechcianych pozycji.
- ✅ **Sortowanie** – automatyczne porządkowanie zadań według czasu.
- ✅ **UI/UX** – przejrzysty i przyjazny interfejs użytkownika.

---

## 🧠 Paradygmat Funkcyjny

Projekt opiera się w całości na **komponentach funkcyjnych** i **czystych funkcjach**.

### Kluczowe założenia:
1. **Prostota w utrzymaniu** – kod jest łatwy do analizy i modyfikacji.
2. **Przewidywalne działanie** – brak efektów ubocznych w logice biznesowej.
3. **Separacja logiki** – logika biznesowa jest oddzielona od warstwy prezentacji (JSX).
4. **Reużywalność** – funkcje pomocnicze mogą być wykorzystywane wielokrotnie.

> Folder `utils/` zawiera czystą logikę przetwarzania zadań.

---

## 🧰 Technologie i Architektura

| Technologia | Zastosowanie |
| :--- | :--- |
| **React** | Functional Components + Hooks |
| **TypeScript** | Statyczne typowanie dla bezpieczeństwa kodu |
| **Vite** | Szybki serwer developerski i narzędzie do budowania |
| **CSS** | Lekki styling interfejsu |

### Podejście architektoniczne:
*   🔴 **Brak klas** — wyłącznie funkcje i hooki.
*   🟢 **Separacja** — logika oddzielona od widoków.
*   🛡️ **Immutability** — zero mutowania stanu.
*   🌊 **Flow** — prosty i przewidywalny przepływ danych.

---

## 📁 Struktura Folderów

```text
src/
├── components/
│   ├── TaskForm.tsx      # Formularz do dodawania nowych zadań
│   ├── TaskItem.tsx      # Pojedynczy element listy (wiersz)
│   └── TaskList.tsx      # Kontener wyświetlający listę zadań
├── types/
│   └── Task.ts           # Typy i interfejsy biznesowe (TypeScript)
├── utils/
│   └── taskHelpers.ts    # Czyste funkcje pomocnicze (np. sortowanie)
└── App.tsx               # Główny komponent koordynujący aplikację
```
