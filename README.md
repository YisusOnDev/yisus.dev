# YisusTM_01 - Personal Portfolio

A modern cyberpunk personal portfolio developed with **Astro** and **Tailwind CSS**. A dynamic website with project sections, experience, social links, and technical skills.

## ✨ Features

- 🎨 Modern cyberpunk design with gradients and neon effects
- 🚀 Ultra-fast with Astro (static generation)
- 📱 Fully responsive (mobile and desktop)
- 🌍 Multi-language support (Spanish and English)
- 💼 Dynamic project showcase with categories
- 🎭 Interactive image modal
- 📊 Professional experience timeline
- 🔗 Integrated social links
- ⚡ SEO optimized
- 🎯 Project filtering by category

## 🛠️ Technologies

- **[Astro](https://astro.build/)** - Modern web framework
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Typed JavaScript
- **[pnpm](https://pnpm.io/)** - Fast package manager

## 📁 Project Structure

```text
/
├── public/
│   ├── images/              # Static images
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ProjectCard.astro       # Project card with modal
│   │   └── SocialLink.astro        # Social link
│   ├── data/
│   │   ├── projects.json           # Projects and categories
│   │   ├── categories.json         # Project categories
│   │   ├── experience.json         # Professional experience
│   │   └── skills.json             # Technical skills
│   ├── i18n/
│   │   ├── es.json                 # Spanish translations
│   │   └── en.json                 # English translations
│   ├── layouts/
│   │   └── Layout.astro            # Base layout
│   ├── pages/
│   │   └── [locale].astro          # Multi-language main page
│   └── styles/
│       └── global.css              # Global styles
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## 🧞 Commands

| Command                | Action                                              |
| :--------------------- | :-------------------------------------------------- |
| `pnpm install`         | Install dependencies                              |
| `pnpm dev`             | Start development server at `localhost:4321`      |
| `pnpm build`           | Build for production to `./dist/`                 |
| `pnpm preview`         | Preview build locally                             |
| `pnpm astro ...`       | Run Astro CLI commands                            |

## 🎨 Sections

### 1. Hero
Personal presentation with profile image and description.

### 2. Social Links
Links to social networks (GitHub, Twitch, Twitter, Instagram, Discord).

### 3. Projects
- Dynamic project showcase
- Filter by categories
- Interactive image modal
- Technology information
- Links to live demo and repository

### 4. Experience
Visual timeline of professional experience with:
- Freelancer
- Content Creator
- Developer

### 5. Skills
List of technical skills sorted alphabetically.

### 6. Contact
Direct contact form via email.

## 📝 Customization

### Dynamic Data
All data is stored in JSON files in `src/data/`:

- **projects.json**: Add/edit your projects
- **categories.json**: Define project categories
- **experience.json**: Your professional experience
- **skills.json**: Your technical skills

### Translations
Edit `src/i18n/` to change text:
- `es.json` - Spanish
- `en.json` - English

### Images
- Place project images in `public/images/`
- Reference locally in projects.json: `"image": "imagename.jpg"`
- Or use direct URLs: `"image": "https://..."`

### Styles
Design uses Tailwind CSS. Main colors:
- Primary: `cyan-400` / `blue-400`
- Secondary: `purple-400` / `pink-400`
- Background: `black` / `gray-900`

## 📄 License

This project is under the MIT License.

---

Developed by **YisusTM_01**

[GitHub](https://github.com/YisusOnDev) • [Twitch](https://twitch.tv/YisusTM_01) • [Twitter](https://x.com/YisusTM_01) • [Instagram](https://instagram.com/YisusTM_01)
