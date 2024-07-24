# Administrative Dashboard with Next.js

This project is an administrative dashboard developed with Next.js. It provides a user interface for managing data and visualizing statistics, using various libraries and components to enhance functionality and user experience.

## Technologies Used

- **Framework**: ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white) 14.1.4
- **Component Library**: ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) 18
- **Styling**: ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) 3.3.0
- **Form Validation**: ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=flat&logo=react-hook-form&logoColor=white) 7.52.1
- **Authentication**: ![ClerkJS](https://img.shields.io/badge/ClerkJS-6C47FF?style=flat&logo=clerk&logoColor=white) 4.29.12 (pending migration to JWT)
- **Data Visualization**: ![Recharts](https://img.shields.io/badge/Recharts-22B5BF?style=flat&logo=recharts&logoColor=white) 2.12.7
- **Calendar**: ![FullCalendar](https://img.shields.io/badge/FullCalendar-3788D8?style=flat&logo=fullcalendar&logoColor=white) 6.1.15
- **Form State Management**: ![React Hook Form Resolvers](https://img.shields.io/badge/React%20Hook%20Form%20Resolvers-EC5990?style=flat&logo=react-hook-form&logoColor=white) 3.9.0
- **Utilities**:
  - ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white) 1.7.2
  - ![Date-fns](https://img.shields.io/badge/Date--fns-F7DF1E?style=flat&logo=date-fns&logoColor=black) 3.6.0
  - ![Zod](https://img.shields.io/badge/Zod-3E67B1?style=flat&logo=zod&logoColor=white) 3.23.8
- **Database**: ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white) 5.16.2

## Requirements

- Node.js 16.x or higher
- NPM 7.x or higher

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/luisalmenarez/Dashboard
   ```
2. Navigate to the project directory:
   ```bash
   cd dashboard
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Set up the environment variables in a `.env` file at the root of the project. You can use the `.env.example` file as a guide.

2. Run the database migrations:
   ```bash
   npx prisma migrate dev
   ```

## Available Scripts

- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `start`: Starts the application in production mode.
- `lint`: Runs ESLint to check the code.
- `postinstall`: Generates the Prisma client after dependencies are installed.

## Usage

To start the development server, run:

```bash
npm run dev
```

The application will be available at http://localhost:3000.

## Contributions

Contributions are welcome! If you want to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (git checkout -b feature/new-feature).
3.  Make your changes and commit them (git commit -m 'Add new feature').
4.  Push to the branch (git push origin feature/new-feature).
5.  Open a Pull Request.

## Development Environment Setup

To set up the development environment, follow these steps:

1. Copy the .env.example file and rename it to .env:

```bash
cp .env.example .env
```

2. Open the .env file and configure the necessary environment variables:

```
DATABASE_URL="postgresql://username:password@localhost:5432/mydatabase"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

3. Generate the Prisma client:

```bash
npx prisma generate
```

## Contact

For any inquiries or suggestions, you can contact me at luisalmenarez0428@gmail.com.
