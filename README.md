Frontend Quiz Application

-This project is my implementation of the provided Figma design for the Frontend Developer Intern assignment.
-The goal: recreate the desktop experience with solid structure, clean code, and interactions that feel close to the design—without overcomplicating things.

-This README covers what was built, how it works, what it uses, and where it intentionally drifts from the Figma.

Overview:
-The application is a simple multi-question quiz that displays one question at a time, tracks selections, shows progress, and reveals the final score with an animated percentage roll-up.

Main priorities:
-Match the layout and feel of the design as much as reasonably possible
-Keep components small and reusable
-Maintain readable, organized code
-Add smooth transitions without going full “motion graphics”

Tech Stack Used:
-React + TypeScript
-Vite (fast dev environment)
-Tailwind CSS
-PostCSS + Autoprefixer
-Everything chosen aligns with the assignment requirements and speeds up development.

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
-Clone the repo:
git clone <repo-url>
cd <project-folder>
-Install dependencies:
npm install
-Start the development server:
npm run dev
-Open the app using the local URL provided in the terminal.
Production build:
npm run build

-Outputs to the dist/ folder.

Deployment Notes:
-Configured for static deployment.

Vercel settings:
-Framework: Vite
-Build command: npm run build
-Output directory: dist

Accessibility Notes:
-All interactive elements support :focus-visible
-Sufficient contrast for essential UI
-Animations avoid unnecessary motion and don’t block interaction

Assumptions Made:
-Only desktop screens were required, so no responsive behavior was included
-Quiz data is stored locally (scope didn’t include API work)
-Some interaction details weren’t specified in the Figma, so standard UI behavior was used where appropriate

Notes & Known Deviations from the Figma Design:
-This project aims to stay faithful to the Figma design, but a few details differ, some intentionally, some because browsers don’t care about our feelings.
1. Transition Animations (Quiz → Result → Restart)
The Figma animation shows the inner rectangle expanding outward to transition into the result screen, and shrinking back in when restarting.
Here, the transitions use fade/scale instead—cleaner to implement, still smooth, but not a frame-by-frame replica of the original effect.
2. Color Treatments & Micro-Styling
Some gradients, shadows, and exact spacings vary slightly.
This is mainly because:
Tailwind uses its own gradient controls
The Figma file didn’t specify exact RGBA stops everywhere
Browsers render subtle gradients differently
The overall look remains consistent with the intended design.
3. Navigation Arrows & Placement
The arrow buttons behave correctly, but their placement isn’t pixel-perfect to the Figma.
Translating fixed Figma spacing into a flexible React/Tailwind layout required a bit of interpretation.
4. Answer Selection Behavior
In the Figma, options visually behave like radio buttons.
In this build, the selected gradient can appear on multiple buttons if clicked—but internally only one answer is recorded per question.
This was kept intentionally since:The Figma didn’t specify deselection behavior
The gradient animation looked cleaner this way
5. General Layout Differences
A handful of visual differences exist, such as:
slight spacing adjustments
gradient angles
max-width values
paw/speech bubble positioning
-All core functionality, structure, and interactions remain accurate to the assignment requirements.

Why These Deviations Exist:
-This was built in an iterative, time-boxed process.
-Where the Figma didn’t provide exact values, reasonable decisions were made to keep the UI clean, maintainable, and consistent.

Planned Improvements (If Extended):
-Implement the exact rectangle-morphing animations
-Rebuild the navigation section to match Figma spacing 1:1
-Apply color gradients sampled directly from Figma exports
-Tighten the answer option behavior to mimic strict radio-button states

Closing Notes:
-The project reflects the intended design, maintains clean structure, and follows the functional requirements end-to-end.
-Some UI details vary slightly due to practical limitations and Figma ambiguities, but the overall experience remains faithful to the assignment.

If you are reading this, thank you for being here. Good night- 5:07 AM
