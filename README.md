# Rural Literacy & Health Programme (RLHP) — Official Website

> **Empowering People Through Health, Education & Livelihood since 1984.**

An institutional, accessible web application for **Rural Literacy & Health Programme (RLHP)**, a registered non-governmental organization working across Karnataka and Southern India towards child-focused, community-centred development and empowerment.

---

## 🌟 Key Highlights & Features

- **Responsive & Modern Architecture**: Built with React 18, Vite, and Tailwind CSS.
- **Interactive 3D Book & Report Turn Modal (Flipbook)**:
  - Realistic multi-page PDF flipbook viewer with turn animations, zoom, and navigation.
  - Interactive flipbooks for Annual Reports, Financial Audits, and Educational Handbooks.
- **Impact & Publications**:
  - Live filterable Annual Reports, Audited Balance Sheets, and FCRA Disclosures.
  - **Books & Research Studies** section with full PDF downloads and interactive reading.
  - Transformative Community Footprint metrics with cascade scroll animations.
- **Identity & Governance**:
  - Visual timeline chronicles over 42 years of field missions (1984–2026).
  - Profiles for Founding Members, Executive Leadership, and Governing Board.
- **Projects & Programmes**:
  - Highlights initiatives in child protection, education, nutrition, women empowerment, and disaster relief.
- **Media Coverage & News Archive**:
  - Over 46 press clippings and news publication reports with high-resolution lightbox viewing.
- **Gallery & Visual Archive**:
  - Categorized image showcases celebrating community events, rallies, and workshops.
- **Transparent Governance & Tenders**:
  - Public RFPs, active procurement tenders, and verified institutional bank details for direct tax-exempt donations (12A, 80G, FCRA).

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | UI component architecture and client-side routing |
| **Vite 6** | Build tool, HMR, and bundling engine |
| **Tailwind CSS 3** | Utility-first styling with custom branding colors |
| **Lucide React** | Clean, lightweight icon suite |
| **Page-Flip & PDF.js** | Interactive 3D flipbook rendering for publications & reports |
| **GitHub Pages** | Continuous deployment & hosting via GitHub Actions |

---

## 📁 Project Structure

```text
RLHP_web-main/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── docs/                       # Production build directory (hosted on GitHub Pages)
│   ├── 404.html                # SPA fallback for GitHub Pages client routing
│   ├── documents/              # Public PDF resources & handbooks
│   └── index.html
├── public/
│   ├── books/                  # Research study publications
│   ├── documents/              # Audits, FCRA filings, and Handbooks
│   ├── images/                 # Gallery, leadership, awards, and media assets
│   └── reports/                # Annual report PDFs and high-res covers
├── src/
│   ├── components/             # Reusable UI components (Navbar, Footer, FlipbookModal, ScrollReveal)
│   ├── data/                   # Centralized data store (rlhpData.js)
│   ├── pages/                  # Page views (Home, AboutUs, OurIdentity, Projects, ImpactPage, etc.)
│   ├── utils/                  # Document download and PDF helper utilities
│   ├── App.jsx                 # Core application setup & route state management
│   └── main.jsx                # Application root entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.x or later (recommended: Node 20 LTS)
- **npm**: v9.x or later

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Navabharth-Technologies/RLHP-Website.git
   cd RLHP-Website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/RLHP-Website/` in your browser.

---

## 🏗️ Build & Deployment

### Local Production Build

To build the static application into the `docs/` folder:

```bash
npm run build
```

*Note: For GitHub Pages SPA routing, ensure `docs/index.html` is mirrored to `docs/404.html`:*
```bash
# On Windows PowerShell
cmd /c copy /y docs\index.html docs\404.html

# On Linux / macOS
cp docs/index.html docs/404.html
```

### GitHub Pages Deployment

The repository includes an automated GitHub Actions workflow (`.github/workflows/deploy.yml`) that triggers on every push to `main`:
1. Checks out the code and sets up Node.js 20.
2. Installs dependencies and runs `npm run build`.
3. Creates the `docs/404.html` SPA routing fallback.
4. Uploads and deploys the `docs/` directory directly to GitHub Pages.

---

## 🤝 Contributing & Maintenance

1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Commit your changes:
   ```bash
   git commit -m "Add descriptive feature message"
   ```
3. Push to the branch and open a Pull Request.

---

## 📄 License & Legal Notice

All content, documentation, brand logos, and media publications are the exclusive intellectual property of **Rural Literacy & Health Programme (RLHP)**, Mysuru, Karnataka, India. All rights reserved.
