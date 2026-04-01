# Mahlwalerwa Trading Enterprises (PTY) LTD — Website

Official website for **Mahlwalerwa Trading Enterprises (Pty) Ltd**, a dynamic trading company based in Kempton Park, Ekurhuleni, South Africa. Established in 2015 and registered with CIPC (Reg. No: 2015/397194/07).

> _Innovative Solutions for a Better Tomorrow_

---

## Table of Contents

- [About](#about)
- [Pages](#pages)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Color Palette](#color-palette)
- [Contact](#contact)
- [License](#license)

---

## About

Mahlwalerwa Trading Enterprises is a multi-service company offering products and services across several industries including:

- **Custom Bed Solutions** — Mattresses, storage bases, and standard bases in King, Queen, Three Quarter, Double, and Single sizes.
- **Printers & IT Equipment** — Sales, rentals, toner supply, hardware/software troubleshooting, and network printer setup.
- **Elegant Furniture** — Quality furniture for homes and businesses.
- **Construction & Renovation** — Building repairs, painting, tiling, plumbing, carpentry, steel fabrication, and welding.
- **Engineering & Repairs** — Pipe repairs, vehicle maintenance, electrical installations, air conditioning, cold rooms, and fire protection.
- **Facility Management** — General cleaning, spillage control, and waste disposal.
- **Events & Catering** — Full event management and catering services.
- **Skills Development** — Courses in conflict management, leadership, entrepreneurship, and more.

---

## Pages

| Page          | File                     | Description                                                                        |
| ------------- | ------------------------ | ---------------------------------------------------------------------------------- |
| Home          | `website/index.html`     | Landing page with hero section, services overview, about section, and contact form |
| Beds          | `website/beds.html`      | Product catalog for bed solutions (King, Queen, Three Quarter, Double, Single)     |
| Printers & IT | `website/printers.html`  | Printer sales, rentals, and IT support services                                    |
| Furniture     | `website/furniture.html` | Furniture product catalog                                                          |

---

## Project Structure

```
Mahlwalerwa/
├── README.md
├── Mahlwalerwa Company Profile.txt
└── website/
    ├── index.html          # Home / landing page
    ├── beds.html            # Beds product page
    ├── furniture.html       # Furniture product page
    ├── printers.html        # Printers & IT solutions page
    ├── css/
    │   └── premium.css      # Custom styles & animations
    ├── js/
    │   └── premium.js       # Navigation, animations & interactivity
    └── images/              # Logo, product images & assets
```

---

## Tech Stack

| Technology                     | Purpose                                                     |
| ------------------------------ | ----------------------------------------------------------- |
| **HTML5**                      | Semantic page structure                                     |
| **Tailwind CSS** (CDN)         | Utility-first responsive styling                            |
| **Custom CSS** (`premium.css`) | Animations, nav styles, and brand-specific overrides        |
| **JavaScript** (`premium.js`)  | Mobile navigation, scroll effects, and interactive features |
| **AOS** (Animate on Scroll)    | Scroll-triggered animations                                 |
| **Font Awesome 6**             | Icons throughout the site                                   |
| **Google Fonts**               | Playfair Display (headings) & Inter (body text)             |

---

## Getting Started

This is a static website with no build step required.

1. **Clone the repository**

   ```bash
   git clone https://github.com/Silas-Matabane/Mahlwalerwa.git
   cd Mahlwalerwa
   ```

2. **Open in browser**
   Open `website/index.html` directly in your browser, or serve it locally:

   ```bash
   # Using Python
   cd website
   python -m http.server 8000

   # Using Node (npx)
   npx serve website
   ```

3. **Visit** `http://localhost:8000` in your browser.

> **Note:** An internet connection is required on first load for CDN resources (Tailwind CSS, Font Awesome, Google Fonts, AOS).

---

## Color Palette

| Color      | Hex       | Usage                              |
| ---------- | --------- | ---------------------------------- |
| Navy       | `#1B1F5E` | Primary brand color, headings, nav |
| Royal Blue | `#2B4FA3` | Secondary accents                  |
| Accent Red | `#C42127` | CTAs, highlights, active states    |
| Silver     | `#C0C0C0` | Subtle borders and secondary text  |

---

## Contact

- **Phone:** +27 78 717 4356
- **Email:** caswell@mahlwalerwa.com
- **Website:** [www.mahlwalerwa.com](http://www.mahlwalerwa.com)
- **Location:** Kempton Park, Ekurhuleni, South Africa

---

## License

Copyright &copy; 2015–2026 Mahlwalerwa Trading Enterprises (Pty) Ltd. All rights reserved.
