# MediCare – Doctor & Specialty Directory

Modern responsive web application that helps patients discover medical specialties, browse available doctors, view services, learn about the platform, and get in touch. Includes basic user registration/login and admin access (frontend-ready; backend integration possible later).

### Main Pages / Sections

- **Home**  
  - Brief introduction & welcome message  
  - Featured medical specialties  
  - Highlighted / top doctors  
  - Key services overview  

- **About Us**  
  - Platform mission, vision & values  
  - Statistics (number of doctors, specialties, happy patients, etc.)  

- **All Doctors**  
  - Complete list of medical specialties  
  - For each specialty → shows how many doctors are available  
  - Click to view individual doctor profiles (qualifications, experience, photo, etc.)  

- **Login / Register**  
  - User (patient) sign up & sign in  
  - Admin login (separate route – basic frontend UI prepared)  

- **Contact Us**  
  - Simple contact form (name, email, message)  
  - Ready for future email backend integration  

### Key Features

- Fully responsive design (mobile + tablet + desktop)  
- Clean cards for specialties & doctors  
- Specialty → doctor count display  
- RTL support & Arabic-ready layout  
- Simple authentication pages (currently frontend only)  

### Technologies Used

- **Frontend**: React.js (Create React App or Vite)  
- **Styling**: Bootstrap CSS 
- **Routing**: React Router v6  
- **Icons**:  Font Awesome  
- **State Management**: useState + useEffect  

### How to Run Locally

1. Clone the repository  
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
   npm install
# or
yarn install
src/
├── assets/                 # images, logo, doctor photos...
├── components/             # reusable pieces
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── DoctorCard.jsx
│   ├── SpecialtyCard.jsx
│   └── ...
├── pages/                  # main views
│   ├── Home.jsx
│   ├── About.jsx
│   ├── AllDoctors.jsx
│   ├── Contact.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── Admin/
│       └── AdminDashboard.jsx
├── data/                   # mock data (for now)
│   ├── doctors.js
│   └── specialties.js
├── context/                # if using context (Auth, etc.)
└── App.jsx