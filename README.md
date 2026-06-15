# Personal Portfolio — React + Vite + Tailwind CSS

A modern, fully responsive dark-themed portfolio website for a Software Engineering undergraduate seeking internships.

## Tech Stack

- **React 18** — component-based UI
- **Vite 5** — lightning-fast build tool
- **Tailwind CSS 3** — utility-first styling
- **Framer Motion** — smooth animations
- **EmailJS** — contact form without a backend
- **React Hot Toast** — toast notifications
- **React Icons** — icon library

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## Personalization Checklist

### 1. Update your personal data
All content is centralized in `src/assets/data/`. You only need to edit these files:

| File | What to update |
|------|---------------|
| `personal.js` | Name, title, bio, email, phone, social links |
| `skills.js` | Your tech stack and proficiency levels |
| `education.js` | Degrees, institutions, GPA |
| `experience.js` | Internships, freelance work |
| `projects.js` | Project title, description, tech, GitHub/demo links |
| `certifications.js` | Certifications and credentials |
| `achievements.js` | Awards, hackathons, recognition |

### 2. Add your images
Place these files in `/public/images/`:
- `profile.jpg` — Hero section photo
- `about.jpg` — About section photo (can be same as profile)
- `og-image.png` — Social media preview (1200×630px)
- `projects/project1.png` through `project6.png` — Project screenshots

### 3. Add your resume
Place your resume PDF at `/public/resume/resume.pdf`

### 4. Configure EmailJS (Contact Form)
1. Sign up at [EmailJS](https://www.emailjs.com/) — free tier: 200 emails/month
2. Create a service and email template
3. Create `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 5. Update SEO meta tags
Edit `index.html` to update:
- `<title>`
- `<meta name="description">`
- `og:url`, `og:title`, `og:description`
- `twitter:title`, `twitter:description`

### 6. Update the Navbar logo
In `Navbar.jsx`, replace `<YN />` with your own initials.

### 7. Update Footer logo
Same as Navbar — search for `&lt;YN /&gt;` in `Footer.jsx`.

---

## Project Structure

```
src/
├── assets/data/      ← All portfolio content (edit these)
├── components/       ← One folder per section
├── layouts/          ← MainLayout + SectionWrapper
├── hooks/            ← useScrollSpy, useAnimateOnScroll, useTheme
├── utils/            ← scrollTo, formatDate, constants (animation variants)
├── pages/Home.jsx    ← Assembles all sections
├── styles/           ← Global CSS + Tailwind config
├── App.jsx
└── main.jsx
```

---

## Deployment

### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

# In vite.config.js, add:
# base: '/your-repo-name/'

npm run deploy
```

### Vercel / Netlify
Just connect your GitHub repo — both platforms auto-detect Vite projects.

---

## License

MIT — free to use and modify for your own portfolio.
