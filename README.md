Frontend Quiz Application:
This project is my implementation of the provided Figma design for the Frontend Developer Intern assignment. The goal was to recreate the desktop interface as accurately as possible, keep the codebase clean, and make the experience interactive while staying faithful to the original layout.

This README explains what I built, how it works, what I used, and where things slightly differ from the design.

Overview:
The application is a simple multi-question quiz. It shows one question at a time, tracks user selections, displays progress, and calculates a final score with an animated percentage reveal. The UI follows the structure and styling of the given Figma screens.

My main focus was:
Getting the layout to feel like the design
Keeping components reusable
Keeping code readable and structured
Making transitions smooth but not over-engineered
Ensuring accessibility basics were still followed

Tech Stack Used:
React (with TypeScript)
Vite
Tailwind CSS
PostCSS + Autoprefixer
Tools chosen to match the assignment requirements and keep development fast.

Folder Structure:
src/
│   App.tsx
│   main.tsx
│   index.css
│
├── pages/
│     Quiz.tsx
│     Result.tsx
│
├── components/
│     AnswerOption.tsx
│     NavButtons.tsx
│     ProgressBar.tsx
│
└── data/
      questions.ts

How to Run Locally:
Clone the repository:
git clone <repo-url>
cd <project-folder>

Install dependancies:
npm install

Start the development server:
npm run dev
Open the app in your browser using the provided local URL.

Build command:
npm run build
This outputs the production build into the dist/ folder.

Deployment Notes:
This project is set up for static deployment.
On Vercel:
Framework: Vite
Build command: npm run build
Output directory: dist

Accessibility Notes:
All buttons use :focus-visible outlines for keyboard navigation.
Interactive elements maintain consistent contrast.
Animations avoid excessive motion and don’t block interaction.

Assumptions Made:
The assignment explicitly asked for a desktop version only, so no responsive adjustments were included.
Quiz data is kept local since no backend was part of the scope.
The Figma did not include all interactions (for example, how error states should look), so I made reasonable assumptions based on standard UI patterns.

Closing Notes:
I did my best to keep the design faithful and the codebase structured. A couple of UI details differ slightly from the Figma due to practical constraints and browser rendering, but the overall experience reflects the intended design.
If more time were allowed or if access to exact spacing tokens from the original design system was provided, the match could be pushed even closer.