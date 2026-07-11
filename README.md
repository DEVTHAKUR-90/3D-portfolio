<div align="center">

<img src=".github/images/img_main.png" alt="Dev Thakur Portfolio" width="100%" />

<br>

# ⚡ Dev Thakur — Portfolio

<br>

```
██████╗ ███████╗██╗   ██╗  ████████╗██╗  ██╗ █████╗ ██╗  ██╗██╗   ██╗██████╗ 
██╔══██╗██╔════╝██║   ██║  ╚══██╔══╝██║  ██║██╔══██╗██║ ██╔╝██║   ██║██╔══██╗
██║  ██║█████╗  ██║   ██║     ██║   ███████║███████║█████╔╝ ██║   ██║██████╔╝
██║  ██║██╔══╝  ╚██╗ ██╔╝     ██║   ██╔══██║██╔══██║██╔═██╗ ██║   ██║██╔══██╗
██████╔╝███████╗ ╚████╔╝      ██║   ██║  ██║██║  ██║██║  ██╗╚██████╔╝██║  ██║
╚═════╝ ╚══════╝  ╚═══╝       ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝
```

### 🧑‍💻 Developer &nbsp;·&nbsp; 📊 Data Analyst &nbsp;·&nbsp; 🛡️ Security Enthusiast

<br>

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-devthakur.vercel.app-7C3AED?style=for-the-badge&labelColor=1a1a2e)](https://devthakur.vercel.app)

<br>

[![GitHub](https://img.shields.io/badge/GitHub-DEVTHAKUR--90-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DEVTHAKUR-90)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-dev--thakur90-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dev-thakur90)
[![LeetCode](https://img.shields.io/badge/LeetCode-Anonymous__9045-FFA116?style=for-the-badge&logo=leetcode&logoColor=white)](https://leetcode.com/u/DEVTHAKUR-90/)
[![Email](https://img.shields.io/badge/Email-90dthakur@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:90dthakur@gmail.com)

<br>

</div>

---

## 🔍 About

Space-themed developer portfolio featuring **breathing skill animations**, **animated starfield**, and a fully responsive layout. Built to showcase real projects — not template filler.

> *"Building intelligent & scalable solutions."*

<br>

<div align="center">

| | |
|---|---|
| 🚀 **Framework** | Next.js 14 + React 18 |
| 🎨 **Styling** | Tailwind CSS |
| ✨ **Animations** | Framer Motion + Three.js |
| 📱 **Responsive** | Mobile, Tablet, Desktop |
| ♿ **Accessible** | `prefers-reduced-motion`, ARIA labels |
| ⚡ **Performance** | GPU-accelerated transforms, 60fps |

</div>

---

## 📸 Screenshots

<div align="center">

| Hero Section | Skills — Breathing Animation |
|:---:|:---:|
| <img src=".github/images/img1.png" alt="Hero Section" width="480" /> | <img src=".github/images/img2.png" alt="Skills Section" width="480" /> |

| Projects | Contact |
|:---:|:---:|
| <img src=".github/images/img3.png" alt="Projects" width="480" /> | <img src=".github/images/img4.png" alt="Contact" width="480" /> |

</div>

---

## 🚀 Featured Projects

<table>
<tr>
<td width="33%" valign="top">

### 🩺 MedAI
**AI Disease Prediction System**

React + TypeScript web app that predicts diseases from user-selected symptoms. Deployed on Vercel.

[![Repo](https://img.shields.io/badge/GitHub-Repo-181717?style=flat-square&logo=github)](https://github.com/DEVTHAKUR-90/MedAI-AI-Disease-Prediction-System)
[![Demo](https://img.shields.io/badge/▶_Live-Demo-7C3AED?style=flat-square)](https://med-ai-ai-disease-prediction-system.vercel.app)

`React` `TypeScript` `Tailwind` `Vercel`

</td>
<td width="33%" valign="top">

### 📋 ClipGuard
**Cross-Device Clipboard Sync**

Copy on Windows, paste on iPhone — instantly over local Wi-Fi. No cloud, no sign-ups.

[![Repo](https://img.shields.io/badge/GitHub-Repo-181717?style=flat-square&logo=github)](https://github.com/DEVTHAKUR-90/ClipGuard)

`Python` `FastAPI` `WebSocket` `PWA`

</td>
<td width="33%" valign="top">

### 🔐 SecureTransfer
**Encrypted File Transfer**

AES-256-GCM encryption, RSA-2048 key exchange, Argon2 hashing, RBAC, and chain-hashed audit logs.

[![Repo](https://img.shields.io/badge/GitHub-Repo-181717?style=flat-square&logo=github)](https://github.com/DEVTHAKUR-90/Secure-File-Transfer-System)

`Python` `Flask` `AES-256` `Cryptography`

</td>
</tr>
</table>

---

## ⚙️ Run Locally

```bash
# Clone
git clone https://github.com/DEVTHAKUR-90/portfolio.git

# Install
cd portfolio && npm install

# Run
npm run dev
```

> 🌐 Open **http://localhost:3000**
>
> 📱 Phone access: `http://<your-local-ip>:3000` (same Wi-Fi)

---

## 📁 Project Structure

```
portfolio/
│
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Home page composition
│   └── globals.css         # Global styles + animations
│
├── components/
│   ├── main/
│   │   ├── hero.tsx        # Hero section + blackhole video
│   │   ├── skills.tsx      # Breathing skill animations
│   │   ├── encryption.tsx  # Cybersecurity interlude
│   │   ├── projects.tsx    # Project cards grid
│   │   ├── contact.tsx     # Contact CTA section
│   │   ├── footer.tsx      # Footer with links
│   │   ├── navbar.tsx      # Responsive nav + mobile menu
│   │   └── star-background.tsx  # Three.js starfield
│   │
│   └── sub/
│       ├── hero-content.tsx    # Hero text + CTAs
│       └── project-card.tsx    # Individual project card
│
├── constants/index.ts      # All data (skills, projects, links)
├── config/index.ts         # SEO metadata
├── public/
│   ├── projects/           # Project thumbnails
│   ├── skills/             # Skill icons
│   └── videos/             # Background videos
│
└── next.config.js          # Next.js config
```

---

## ✨ Key Features

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  🫧  Breathing Animations  Icons emerge, hold, retract   │
│  🌌  Animated Starfield    Three.js particle system      │
│  📱  Fully Responsive      Mobile → Tablet → Desktop     │
│  ♿  Accessible            Reduced motion + ARIA          │
│  ⚡  GPU Accelerated       transform + opacity only      │
│  🎨  Space Theme           Dark cosmic UI                │
│  🔗  Real Projects         Live demos + GitHub repos     │
│  📬  Contact Section       Email + LinkedIn CTAs         │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 📬 Contact

<div align="center">

[![Email](https://img.shields.io/badge/📧_Email-90dthakur@gmail.com-EA4335?style=for-the-badge)](mailto:90dthakur@gmail.com)
[![LinkedIn](https://img.shields.io/badge/💼_LinkedIn-dev--thakur90-0A66C2?style=for-the-badge)](https://www.linkedin.com/in/dev-thakur90)
[![GitHub](https://img.shields.io/badge/🐙_GitHub-DEVTHAKUR--90-181717?style=for-the-badge)](https://github.com/DEVTHAKUR-90)
[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-devthakur.vercel.app-7C3AED?style=for-the-badge)](https://devthakur.vercel.app)

</div>

---

## 📄 License

Open source under the [MIT License](LICENSE).

---

<div align="center">

<br>

⭐ **Star this repo if you found it useful** ⭐

<br>

<img src="https://img.shields.io/badge/Built_with-❤️_by_Dev_Thakur-7C3AED?style=for-the-badge" />

<br><br>

<sub>© 2026 Dev Thakur. All rights reserved.</sub>

</div>
