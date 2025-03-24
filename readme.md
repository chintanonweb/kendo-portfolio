# Kendo Challenge Portfolio

Welcome to my personal portfolio! This project showcases my skills, projects, and experience as a full-stack developer. The portfolio is built using **React**, **TypeScript**, **Tailwind CSS**, and **KendoReact** components. It includes several sections such as Home, About, Projects, Testimonials, and Contact.

## Features

- **Home**: A welcoming section with a brief introduction, social links, and buttons to navigate to projects and contact pages.
- **About**: A detailed section showcasing my skills, experience, and professional background.
- **Projects**: A collection of my projects with descriptions, tags, and links to live demos and source code.
- **Testimonials**: Client testimonials with ratings and feedback.
- **Contact**: A contact form and my contact information for easy communication.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **KendoReact**: A suite of UI components for React, including Cards, Buttons, Inputs, and more.
- **Framer Motion**: A library for adding animations and transitions to React components.

## Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
- **npm**: npm is bundled with Node.js, so you don't need to install it separately.

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/chintanonweb/kendo-portfolio.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd kendo-portfolio
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

   This will install all the necessary dependencies listed in the `package.json` file.

4. **Run the development server**

   ```bash
   npm run dev
   ```

   This will start the development server, and you can view the project in your browser at `http://localhost:5173`.

### Available Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run lint`**: Runs ESLint to check for code quality issues.
- **`npm run preview`**: Previews the production build locally.

## Project Structure

Here’s a brief overview of the project structure:

```
kendo-portfolio/
├── public/                  # Static assets (images, etc.)
├── src/                     # Source code
│   ├── components/          # React components
│   │   ├── About.tsx        # About section
│   │   ├── Contact.tsx      # Contact section
│   │   ├── Home.tsx         # Home section
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Projects.tsx     # Projects section
│   │   └── Testimonials.tsx # Testimonials section
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Entry point for the app
│   └── vite-env.d.ts        # TypeScript declarations for Vite
├── .eslintrc.cjs            # ESLint configuration
├── .gitignore               # Files and directories to ignore in Git
├── index.html               # HTML template
├── package.json             # Project dependencies and scripts
├── postcss.config.cjs       # PostCSS configuration
├── README.md                # Project documentation
├── tailwind.config.cjs      # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Customization

If you want to customize this portfolio for your own use, follow these steps:

1. **Update Personal Information**: Replace the content in the `Home.tsx`, `About.tsx`, and `Contact.tsx` files with your own information.
2. **Update Projects**: Modify the `Projects.tsx` file to include your own projects.
3. **Update Testimonials**: Replace the testimonials in the `Testimonials.tsx` file with your own client feedback.
4. **Styling**: You can customize the styling by modifying the Tailwind CSS classes in the components or by editing the `tailwind.config.cjs` file.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Any contributions, whether bug fixes, improvements, or new features, are welcome!

## License

This project is open-source and available under the MIT License. Feel free to use it as a template for your own portfolio.

## Acknowledgments

- **KendoReact**: For providing a comprehensive suite of UI components.
- **Tailwind CSS**: For making it easy to style the application.
- **Framer Motion**: For adding smooth animations and transitions.

---

Thank you for checking out my portfolio! If you have any questions or feedback, feel free to reach out. 😊