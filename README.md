# ResiTech Pro

ResiTech Pro is a SaaS application designed to streamline property management processes for property owners and apartment complexes. This repository contains the frontend codebase built with Next.js, Tailwind CSS, and Redux for state management.

## Getting Started

To get started with the ResiTech Pro frontend locally, follow these steps:

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Docker (optional)

### Installation

1. Clone this repository to your local machine:
   ```zsh
   git clone git@github.com:MEZ901/resitechpro.git
   ```
2. Navigate to the project directory:
   ```zsh
   cd resitechpro
   ```
3. Install dependencies using npm:
   ```zsh
   npm install
   ```

### Development

To start the development server, run:

```zsh
npm run dev
```

The application will be accessible at `http://localhost:3000`.

### Building

To build the production-ready application, run:

```zsh
npm run build
```

The optimized production build will be generated in the `./out` directory.

### Docker

To run the resitechpro using Docker, make sure you have Docker installed on your machine.

1. Build the Docker image:
   ```zsh
   docker build -t resitech-ui -f docker/Dockerfile .
   ```
2. Run the Docker container:
   ```zsh
   docker run -p 3000:3000 resitech-ui
   ```

Alternatively, you can use `docker-compose` for a more streamlined setup:

1. Build and run the Docker container using docker-compose:
   ```zsh
   docker-compose up --build
   ```

The application will be accessible at `http://localhost:3000`.

> _Please note that this project relies on API endpoints from services in the [Resitech Pro](https://github.com/ResitechPro) organization. Ensure that the necessary services are running before starting the project._

## Features

- **Next.js**: Utilizes the power of Next.js for server-side rendering, routing, and API handling.
- **Tailwind CSS**: Utilizes Tailwind CSS for utility-first styling, enabling rapid UI development.
- **Redux**: Implements Redux for state management, facilitating predictable state updates across components.
