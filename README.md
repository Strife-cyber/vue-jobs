# vue-jobs

A Vue.js crash course project demonstrating how to create a responsive job listing website. This project showcases the simplicity and power of Vue 3 and modern development tools like Vite, along with hands-on examples of dynamic web application features.

## About the Project

This project is designed to teach the basics of Vue.js through a real-world example: a job listing website. It covers key concepts such as API integration, reusable components, state management, and responsive design. By the end of this project, you’ll have a clear understanding of how to use Vue.js to create modern web applications.

## Features

- **Modern Development Tools**: Built with Vue 3 and Vite for a fast and optimized development experience.
- **Dynamic API Integration**: Fetches job listings dynamically using Axios.
- **Loading Spinner**: Provides a better user experience with a loading spinner powered by `vue-spinner`.
- **Responsive Design**: Displays job cards in a responsive grid layout.
- **Reusable Components**: Simplifies the codebase with configurable and reusable Vue components.
- **Lazy Loading**: Improves performance by only loading visible content.

## Prerequisites

Before starting, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/vue-jobs.git
   cd vue-jobs
   ```

2. Install dependencies:

   ```
   npm install
   ```

## Usage

### Start the Development Server

Run the following command to start the development server:

```
npm run dev
```

This will start the Vite development server. Open your browser and navigate to the local address provided in the terminal (e.g., `http://localhost:3000`).

### Build for Production

To build the project for production, run:

```
npm run build
```

The compiled files will be stored in the `dist` directory.

### Preview the Production Build

To locally preview the production build, run:

```
npm run preview
```

## Project Structure

```
vue-jobs/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable Vue components
│   │   ├── JobListing.vue
│   │   ├── JobListings.vue
│   │   └── PulseLoader.vue
│   ├── App.vue           # Main app component
│   ├── main.js           # App entry point
│   └── assets/           # Project-specific styles or images
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration file
└── README.md             # Project documentation
```

## Key Libraries

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [vue-spinner](https://github.com/drehimself/vue-spinner)

## How It Works

1. **API Integration**: The application fetches job listings from an API endpoint (`http://localhost:8000/jobs`) using Axios in the `onMounted` lifecycle hook.
2. **Loading Spinner**: While data is being fetched, a loading spinner (`PulseLoader`) is displayed to improve user experience.
3. **Dynamic Rendering**: Job listings are dynamically rendered as cards using the `JobListing` component.

## Contributing

Contributions are welcome! If you have suggestions for improvements or find any bugs, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- Thanks to [Vue.js](https://vuejs.org/) for providing an excellent framework for building modern web applications.
- Special thanks to the open-source community for tools and libraries used in this project.