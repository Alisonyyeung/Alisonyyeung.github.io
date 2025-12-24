# Personal Website

This repository contains the source code for my personal website, built using Next.js. The website serves as a portfolio to showcase my projects and provide information about myself.

## Project Structure

- **app/**: Contains the main application files.
  - **layout.tsx**: Defines the layout component for the application, wrapping all pages with a common structure.
  - **page.tsx**: The main entry point for the home page.
  - **about/**: Contains the About page.
    - **page.tsx**: Provides information about myself, my background, and my skills.
  - **projects/**: Displays the Projects page.
    - **page.tsx**: Showcases my projects and links to detailed project descriptions.
  - **contact/**: Includes the Contact page.
    - **page.tsx**: Features a contact form and my contact information.
  - **resume/**: Presents my Resume page.
    - **page.tsx**: Summarizes my professional experience and skills.

- **components/**: Contains reusable components for the application.
  - **Header.tsx**: Displays the website's title and logo.
  - **Footer.tsx**: Contains copyright information and other footer content.
  - **Navigation.tsx**: Provides links to the main sections of the website.
  - **ProjectCard.tsx**: Displays individual project details in a card format.

- **public/**: Contains static assets such as images, icons, or other files that can be served directly.

- **styles/**: Contains global CSS styles for the application.
  - **globals.css**: Defines the overall look and feel of the website.

- **data/**: Contains structured data about my projects.
  - **projects.json**: Includes titles, descriptions, technologies used, and links for each project.

- **package.json**: Configuration file for npm, listing dependencies, scripts, and metadata for the project.

- **tsconfig.json**: Configuration file for TypeScript, specifying compiler options and files to include in the compilation.

- **next.config.js**: Contains configuration settings for Next.js, allowing customization of the framework's behavior.

## Getting Started

To set up the website locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/personal-website.git
   ```

2. Navigate to the project directory:
   ```
   cd personal-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to view the website.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or suggestions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.