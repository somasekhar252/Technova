# TechNova — Corporate IT Services Website

An enterprise-grade, static multi-page website built for **TechNova**, an IT Services & Custom Software Engineering firm.

Designed with an editorial corporate aesthetic, clean rectangular design token geometry, vector SVG illustrations, accessible contrast ratios, and strict data integrity standards.

---

## 🔗 Project Metadata & Domain Configuration

- **GitHub Repository URL**: `https://github.com/somasekhar252/Technova`
- **Live Demo Website URL**: `[Insert Live Demo URL]`
- **Developer Name**: `Somasekhar`
- **Date of Completion**: `October 2026`
- **Domain Configuration Instructions**: Production URLs, Open Graph tags, canonical links, `robots.txt`, and `sitemap.xml` reference `https://technova-demo.com`. Before deployment, search and replace `https://technova-demo.com` with your verified custom domain.
- **Legal Content Review Notice**: `privacy-policy.html` and `terms.html` contain structured draft governance policies. The website owner should review these with qualified legal counsel prior to formal execution.

---

## 🚀 Architectural Principles & Aesthetic Polish

- **100% Vanilla Web Stack**: HTML5, CSS3, and ES6+ JavaScript. Zero external frontend framework dependencies (React, Vue, Tailwind, Bootstrap). Opens directly in any modern web browser or static server.
- **Human-Designed Visual Identity**:
  - **Color Palette**: Deep charcoal navy (`#0F172A`), cool slate (`#475569`), crisp white (`#FFFFFF`), light neutral backgrounds (`#F8FAFC`, `#F1F5F9`), and restrained corporate electric teal (`#0284C7`). Zero purple/multicolor gradient hero blobs, zero glowing borders, zero cursor-following gimmicks.
  - **Rectilinear Button & Badge Geometry**: All buttons, category filter tabs, badges, and cards use clean 6px–10px radii, avoiding generic capsule/pill buttons.
  - **Vector SVG Icons**: 100% stroke line-style SVGs. Zero emojis used in pastel square icon boxes.
  - **Natural Copywriting & Typography**: Clean punctuation without repetitive em dashes or generic AI clichés (*"Empowering digital transformation"*).
- **Data Integrity & Credibility**: All statistical counters, client project case studies, leadership team profiles, and job listings are explicitly disclaimed in footer notes as **sample capability benchmarks** for TechNova. Zero fake testimonials, zero fabricated star ratings, and zero fake customer logos.

---

## 📁 Directory & File Structure (`images/`, `css/`, `js/`)

```
d:/Technova/
├── css/
│   └── style.css            # Custom CSS3 (Design tokens, layout grids, 6px radii, components, media queries)
├── images/                  # Structured SVG vector asset hierarchy
│   ├── hero/                # Hero illustrations (architecture.svg)
│   ├── services/            # Service category illustrations (web-dev, app-dev, cloud, uiux)
│   ├── projects/            # Case study mockups (fintech, healthcare, ecommerce)
│   ├── products/            # Software product dashboards (product-1, product-2)
│   ├── team/                # Leadership avatars (avatar-1, avatar-2, avatar-3, avatar-4)
│   └── blog/                # Insights article thumbnails (post-1, post-2, post-3)
├── js/
│   ├── main.js              # Global nav, mobile toggle, animated counters, accordions, modals, newsletter form
│   ├── services.js          # Service category filter logic & empty state handling
│   ├── portfolio.js         # Case study filtering, quick preview modal trigger & empty state handling
│   ├── technologies.js      # Tech stack category tab switcher
│   ├── careers.js           # Job department & employment type filter logic, quick enquiry modal & empty state
│   ├── blog.js              # Live keyword search & category filter logic & empty state
│   ├── estimator.js         # Multi-step project wizard & real-time cost calculation engine
│   └── validation.js        # Global form input validation script
├── index.html              # Homepage
├── about.html              # About Us & Corporate History
├── services.html           # Services Directory
├── service-details.html    # Service Detail Template (Web Application Development)
├── solutions.html          # Turnkey Enterprise Solutions
├── industries.html         # Industry Solutions
├── portfolio.html          # Portfolio & Case Studies
├── case-study.html         # Case Study Detail Template (SmartCampus LMS)
├── products.html           # Software Products Showcase
├── product-details.html    # Product Detail Template
├── technologies.html       # Tech Stack Directory
├── team.html               # Leadership & Engineering Team
├── careers.html            # Open Positions & Culture
├── job-details.html        # Job Detail & Application Form Template
├── blog.html               # Tech Insights & Blog
├── blog-details.html       # Blog Post Detail Template
├── faq.html                # Help Center & Interactive FAQ Accordion
├── contact.html            # Contact Page & Enquiries Form
├── start-project.html      # Project Estimator & Multi-step Wizard
├── privacy-policy.html     # Privacy Policy & Data Handling Draft
├── terms.html              # Terms & Conditions Governance Draft
├── favicon.svg             # TechNova Brand Favicon
├── robots.txt              # Search Engine Crawler Directives
├── sitemap.xml             # XML Sitemap (All 21 Pages)
└── server.js               # Local HTTP server helper
```

---

## 📄 Complete Page Directory Map (21 Pages)

1. `index.html` — Homepage featuring tech hero, capability metrics, service cards, case study previews, and newsletter subscription.
2. `about.html` — Corporate history, mission, vision, core engineering values, and company timeline.
3. `services.html` — Full IT services directory with category filters (*Development, Design, Cloud, Business, Automation, Consulting, Marketing*).
4. `service-details.html` — Service detail template (*Web Application Development*) with 7-stage Agile delivery framework.
5. `solutions.html` — Turnkey enterprise software solutions (*CRM, ERP, School Management, Real Estate*) with problem-solution breakdowns.
6. `industries.html` — Industry solutions covering Healthcare, FinTech, EdTech, Logistics, Retail, PropTech, and Startups.
7. `portfolio.html` — Case studies portfolio grid with filter tabs and quick preview overlay modal.
8. `case-study.html` — Detailed case study template (*SmartCampus LMS Platform*), featuring challenge, architecture, and outcomes.
9. `products.html` — Proprietary software products showcase (*BusinessFlow CRM, NexusERP, SmartCampus LMS, FleetPulse IoT*).
10. `product-details.html` — Product breakdown page with dashboard mockups, features, and demo request triggers.
11. `technologies.html` — Technology stack directory with filter tabs (*Frontend, Backend, Database, Mobile, Cloud, Tools*).
12. `team.html` — Leadership & engineering team directory with role profiles.
13. `careers.html` — Culture overview and job listings with department & employment type filters, plus quick enquiry modal.
14. `job-details.html` — Job details page (*Senior Full Stack Engineer*) with multi-input application form and client-side validation.
15. `blog.html` — Tech insights blog directory with live category filter and instant search bar.
16. `blog-details.html` — Formatted technical article layout with code snippets and author bio.
17. `faq.html` — Help Center with interactive `aria-expanded` accordion handling.
18. `contact.html` — Lead-generation page with office info, interactive map graphic, and validated contact form.
19. `start-project.html` — Multi-step project enquiry wizard & interactive Project Cost Estimator tool.
20. `privacy-policy.html` — Privacy policy covering data processing, client NDAs, local storage, and candidate data rights.
21. `terms.html` — Governance terms covering website usage, project estimates, IP transfers, and scope disclaimers.

---

## 🔌 Form Submission & Backend Integration Guide

Client-side validation is implemented in `js/validation.js` and `js/estimator.js`. Clear developer hooks are embedded in the JavaScript submission handlers for connecting to server endpoints:

- **Contact & Enquiries** (`contact.html`): Form validates inputs -> triggers `POST /api/contact`.
- **Project Cost Estimator & Wizard** (`start-project.html`): Multi-step form calculates cost estimate in real time -> triggers `POST /api/project-estimate`.
- **Job Applications** (`job-details.html`, `careers.html`): Validates applicant details & resume upload hook -> triggers `POST /api/careers/apply`.
- **Newsletter Subscription** (`main.js`): Validates email input -> triggers `POST /api/newsletter/subscribe`.

---

## 💻 How to Run Locally

1. **Direct File Viewing**: Open any `.html` file (e.g. `index.html`) directly in any web browser.
2. **Node.js Server**: Run `node server.js` in the project root directory and navigate to `http://localhost:8000`.
3. **Python HTTP Server**: Run `python -m http.server 8000` and open `http://localhost:8000`.

---

## 📸 Screenshots & Visual Overview Checklist

- [x] **Homepage Hero & Capability Metrics**: Editorial typography, deep navy header, static capability metrics.
- [x] **Services Directory & Detail View**: Responsive card grid with line-style vector SVG graphics.
- [x] **Interactive Cost Estimator**: Multi-step wizard with real-time price & timeline outputs.
- [x] **Portfolio & Case Study Quick View**: Category filtering and overlay modal summaries.
- [x] **Careers Directory & Application Modal**: Department filters and quick job enquiry modal.
- [x] **Help Center Accordions**: Fully keyboard accessible with dynamic `aria-expanded` attributes.
- [x] **Privacy Policy & Terms Pages**: Dedicated legal pages with draft governance disclosures.
