# BlueCircle Connect

**Connecting Stories, Data & Awareness**

## Mission
To raise global awareness about diabetes using clear information, interactive charts, and user-friendly tools like a BMI calculator and health quizzes.

---

**Creator:**
Abhimanyu Chaudhary  
Founder, Developer & Researcher

Inspired by his research published in the National High School Journal of Science on diabetes prevalence and comorbidities, Abhimanyu created BlueCircle Connect to make science approachable, visual, and accessible.

---

## Tech Stack
- Next.js (React framework)
- TypeScript
- Tailwind CSS
- shadcn/ui (for beautiful UI components)
- Framer Motion (animations)
- Lucide React (icons)

---

## Project Structure
```
src/
├── app/                   # App routing (Home, Tools, Visualizations, About)
├── components/
│   ├── ui/                # Reusable UI elements (Button, etc.)
│   └── blocks/            # Full-page sections (HeroSection, Footer, etc.)
├── lib/                   # Utilities (e.g., cn())
├── data/                  # Static data (CSV or JSON files)
```

---

## Pages
| Route              | Description                                                      |
|--------------------|------------------------------------------------------------------|
| `/`                | Homepage: introduces diabetes, quick facts, action buttons        |
| `/visualizations`  | Charts & graphs showing real-world diabetes data                 |
| `/tools`           | BMI calculator and diabetes knowledge quiz                       |
| `/about`           | Project background, founder story, research, vision              |

---

## Tools and Features
- Interactive Hero Section with scroll animation
- BMI Calculator that gives live feedback
- Diabetes Quiz with auto-scoring
- Charts (bar, pie, and line) built using real health data
- Fully responsive UI (mobile, tablet, desktop)

---

## Development Roadmap
1. Setup project + install frameworks: Local dev working with home page visible
2. Build Hero Section: Visually strong homepage
3. Add chart data: Sample CSV/JSON added to /data
4. Setup Visualizations page: Static layout for all charts
5. Add charts (bar, pie, line): Fully working interactive graphs
6. Create Tools page layout: BMI form + quiz section built
7. Add BMI + quiz logic: Fully interactive tool functionality
8. Add footer & polish UI: Consistent design + contact links
9. Test mobile + accessibility: Works well on all screen sizes
10. Deploy + write docs: Live site and this file complete

---

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## License
MIT
