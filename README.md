# Alison Yeung's Personal Website

A modern, nature-themed personal portfolio website built with Next.js, showcasing research projects, publications, and personal experiences. The website features an interactive world map, dynamic detail pages, and a clean, wide layout with nature-inspired graphics.

## Features

- **About Me**: Homepage featuring background, research highlights, and project showcases
- **Research**: Detailed research projects with interactive content, images, and PDF reports
- **Projects**: Portfolio of projects with implementation details and results
- **Publications**: Academic publications with links to papers
- **Personal Life**: Interests and an interactive world map showing travel experiences
- **CV/Resume**: Professional resume and experience

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: CSS with custom properties and modern design
- **Maps**: Leaflet.js for interactive world map
- **Image Optimization**: Next.js Image component with lazy loading

## Project Structure

```
├── app/
│   ├── page.tsx              # Homepage (About Me)
│   ├── layout.tsx            # Root layout
│   ├── about/                # About page (redirects to homepage)
│   ├── research/             # Research listing and detail pages
│   │   ├── page.tsx          # Research projects overview
│   │   └── [id]/             # Dynamic research detail pages
│   ├── projects/             # Projects listing and detail pages
│   │   ├── page.tsx          # Projects overview
│   │   └── [id]/             # Dynamic project detail pages
│   ├── publications/         # Publications page
│   ├── personal-life/        # Personal interests and travel map
│   └── resume/               # CV/Resume page
├── components/
│   ├── Header.tsx            # Site header with navigation
│   ├── Footer.tsx            # Site footer with contact info
│   ├── WorldMap.tsx          # Interactive Leaflet world map
│   └── ProjectCard.tsx       # Project card component
├── data/
│   ├── research.json         # Research projects data
│   ├── projects.json         # Projects data
│   └── publications.json     # Publications data
├── public/
│   └── assets/               # Images, reports, and static assets
│       ├── research_img/     # Research project images
│       ├── projects_img/     # Project images
│       ├── reports/          # PDF research reports
│       └── nature3.jpeg      # Nature background image
└── styles/
    └── globals.css           # Global styles and theme

```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Alisonyyeung/Alisonyyeung.github.io.git
   cd Alisonyyeung.github.io
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Key Features

### Dynamic Content Pages

- Research and project detail pages are dynamically generated from JSON data
- Support for rich text formatting, inline images, and media galleries
- Interactive content blocks with markdown-like syntax

### Interactive World Map

- Built with Leaflet.js showing travel experiences
- Color-coded markers for visited places, exchanges, and internships
- Hover tooltips with detailed information

### Image Optimization

- Next.js Image component with automatic optimization
- Lazy loading for below-the-fold images
- Responsive image sizing

### Nature-Themed Design

- Transparent nature background image (taken in UK Oxford)
- Wide, open layout without container constraints
- Glassmorphism effects on cards

## Data Structure

### Research Projects (`data/research.json`)

- Title, description, date, team lead status
- Key contributions and technologies
- Media gallery and detailed content blocks
- PDF report links

### Projects (`data/projects.json`)

- Similar structure to research with implementation details
- Media support for images in different positions
- Overview, implementation, and results sections

### Publications (`data/publications.json`)

- Title, authors, journal, date, and links

## Customization

### Adding New Research/Projects

Edit the respective JSON files in the `data/` directory. The structure supports:

- Rich text with bold keywords (`**text**`)
- Links (`[text](url)`)
- Inline images (`[IMAGE:index]` or `[IMAGE:path]`)
- Media galleries

### Changing Background Image

Replace `/public/assets/nature3.jpeg` with your own nature image. Adjust opacity in `styles/globals.css` (currently 0.15).

## Contact

- **Email**: alisonyeung0911@gmail.com
- **GitHub**: [@Alisonyyeung](https://github.com/Alisonyyeung)

## License

This project is licensed under the MIT License.
