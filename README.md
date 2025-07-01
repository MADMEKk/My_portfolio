# Dynamic Portfolio Website

A modern, responsive portfolio website built with React and TailwindCSS. This portfolio is fully customizable, allowing you to showcase your projects, skills, and experience.

## Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Looks great on all devices, from mobile to desktop
- **Dynamic Content**: Easily update your projects, skills, and personal information
- **Project Showcase**: Detailed project pages with images, descriptions, and links
- **Skills Section**: Visual representation of your skills and expertise
- **Contact Form**: Interactive contact form for potential clients or employers
- **Dark Theme**: Professional dark theme with customizable accent colors

## Technologies Used

- React 18
- React Router v6
- TailwindCSS
- Framer Motion for animations
- React Icons
- Styled Components

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Customization

### Personal Information

Edit the data files in the `src/data` directory:

- `profile.js`: Your personal information, experience, and education
- `projects.js`: Your projects with details and images
- `skills.js`: Your skills categorized by type

### Styling

The main color scheme can be customized in the `tailwind.config.js` file.

## Deployment

Build the app for production:

```
npm run build
```

The build folder will contain the optimized production build ready for deployment.

## Contact Form Setup

To enable the contact form email functionality, follow these steps:

1. **Create a Resend account**:
   - Sign up at [Resend](https://resend.com/)
   - Create an API key

2. **Set up environment variables**:
   - Rename the `.env.example` file to `.env` (or create a new `.env` file if it doesn't exist)
   - Add your Resend API key: `RESEND_API_KEY=your_api_key_here`
   - Set your recipient email: `RECIPIENT_EMAIL=your_email@example.com`

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **For development**:
   - Start both the React app and the Express server:
   ```bash
   npm run dev
   ```
   - The React app will run on port 3000 and the Express server on port 5000

5. **For production**:
   - Build the React app:
   ```bash
   npm run build
   ```
   - Start the server (which will serve both the API and the built React app):
   ```bash
   npm run server
   ```

## Troubleshooting Contact Form

If the contact form is not working:

1. Check if the API server is running
2. Make sure your Resend API key is valid
3. Check the console for any errors
4. Verify the RECIPIENT_EMAIL is set correctly in your .env file

## License

MIT License

## Acknowledgements

- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
