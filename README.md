# Task Manager

A simple yet powerful task management application built with modern web technologies. This project allows users to create, manage, and prioritize their tasks with an intuitive, color-coded interface.

## Features

This application comes with a set of features designed to enhance productivity:

* **Create & Delete Tasks:** Easily add new tasks to your list and remove them when they're no longer needed.
* **Cyclical Priority System:** Click on any task to cycle through its priority level:
    * **(Yellow) Short Term:** For tasks to be done soon.
    * **(Grey) Long Term:** For tasks that are not time-sensitive.
    * **(Red) Immediate:** For urgent, high-priority tasks.
* **Add Notes to Tasks:** Click the *pencil icon* to open a modal where you can add, edit, and save detailed notes for any task.
* **Persistent Storage:** Your tasks are automatically saved to the browser's Local Storage, so your to-do list will be waiting for you when you return.
* **Clean, Responsive UI:** A simple and intuitive interface that works well on different screen sizes.

## Tech Stack

This project is built with a modern, type-safe technology stack:

* [**React**](https://react.dev/): A JavaScript library for building user interfaces.
* [**TypeScript**](https://www.typescriptlang.org/): A strongly typed superset of JavaScript that adds static types.
* **CSS**: Custom styling for a clean and modern look.
* **Git & GitHub**: For version control and source code management.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (which includes npm) installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/ComradeV7/Task-Manager.git](https://github.com/ComradeV7/Task-Manager.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd Task-Manager
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Run the development server:**
    ```sh
    npm run dev
    ```

The application should now be running on `http://localhost:5173` (or the next available port).

## Usage

* **To add a task:** Type your task in the input field and press `Enter` or click the "Add Task" button.
* **To change priority:** Click anywhere on the task item's text area. The color-coded border on the left will cycle through the priorities.
* **To add a note:** Click the *pencil icon* on the right side of a task. A pop-up will appear where you can type and save your notes.
* **To delete a task:** Click the 'x' button on the far right of a task.

