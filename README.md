# Syed Mohammad Hamzah — Portfolio Website

Personal portfolio website built with HTML5, CSS3, and modern Vanilla JavaScript.

🔗 **Live site:** https://syedhamzah.netlify.app/

## Built With
- HTML5, CSS3, Vanilla JavaScript (Zero build step or heavy dependencies required)
- Responsive design with smooth Light/Dark mode themes
- Modular data-driven architecture (`data.js`) for effortless updates
- Deployed on Netlify

## Project Structure
```text
portfolio/
├── index.html      # Semantic page structure, navigation, and layout
├── style.css       # Complete design system, animations, and responsive themes
├── script.js       # Dynamic data rendering, theme toggle, mobile menu, and observers
├── data.js         # Centralized data store (Resume, Projects, Certifications, Learning)
├── profile.jpg     # Profile photograph
├── resume.pdf      # (Place your PDF resume here — see instructions below)
└── README.md       # Project documentation
```

---

## How to Maintain and Update Portfolio Content

All dynamic content is organized in `data.js` for quick, centralized maintenance without repeatedly editing HTML templates:

### 1. Updating Your Resume (Single-File Replacement)
To update your resume whenever you produce a new version:
1. Save your new resume PDF with the exact filename: **`resume.pdf`**.
2. Place or overwrite it directly in the project root directory:
   `c:\Users\mohdh\Desktop\Projects\My_Portfolio_Website\resume.pdf`
3. Both the **"View Resume"** (opens PDF in a new browser tab) and **"Download Resume"** (downloads `Syed_Mohammad_Hamzah_Resume.pdf`) buttons automatically point to this single file path.
4. **Cache & Deployment Note:** When redeploying to Netlify or GitHub Pages, browsers may occasionally cache PDFs for returning visitors. A simple hard-refresh (`Ctrl + F5`) ensures the latest version is fetched immediately.

### 2. Updating Projects and Live URLs
Open `data.js` and locate `PORTFOLIO_DATA.projects`:
- **Election Campaign Analyzer:** Live Demo is configured to `https://election-analyzer.streamlit.app/`.
- **Healthcare Efficiency Explorer:** Live Streamlit dashboard and Claude AI Challenge GitHub links are configured.
- **Project Summaries:** All project descriptions are kept to concise, recruiter-friendly 2–3 sentence summaries explaining what the project does, the problem it addresses, and its primary purpose.

### 3. Updating the 4 Certifications
Open `data.js` and locate `PORTFOLIO_DATA.certificates`:
1. `Claude AI — 60 Days Challenge`
2. `Data Science In-house Internship/Training — Sipher Web Pvt. Ltd.`
3. `Data Analytics — Integral University`
4. `Linux Programming — Integral University`
- To attach a certificate link, update the `url` field for the respective certificate (e.g., paste your Google Drive share link).
- **Google Drive Permission Tip:** When using Drive links, ensure sharing permissions are set to **"Anyone with the link can view"** so recruiters and visitors can view your certificates without sign-in obstacles.

### 4. Updating Learning Journey
Open `data.js` and locate `PORTFOLIO_DATA.learningJourney` to update your current learning milestones or active topics.

---

## How to Run Locally
Just open `index.html` directly in any web browser, or serve locally with Python:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.