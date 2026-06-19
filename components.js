// Immediate Page Loader & FontAwesome Injection
(function() {
  // Inject Page Loader
  const loader = document.createElement("div");
  loader.className = "page-loader";
  loader.innerHTML = `
    <div class="loader-content">
      <div class="loader-spinner"></div>
      <div class="loader-text">NOBLE</div>
    </div>
  `;
  document.documentElement.appendChild(loader);

  window.addEventListener("load", () => {
    loader.classList.add("fade-out");
    setTimeout(() => {
      loader.remove();
    }, 450);
  });

  // Inject FontAwesome stylesheet
  const faLink = document.createElement("link");
  faLink.rel = "stylesheet";
  faLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
  document.head.appendChild(faLink);
})();

document.addEventListener("DOMContentLoaded", () => {
  // Inject Header
  const headerContainer = document.querySelector("#header-container");
  if (headerContainer) {
    headerContainer.innerHTML = `
      <!-- Topbar -->
      <div class="topbar">
        <div class="container topbar-content">
          <div class="topbar-contacts">
            <a href="tel:+918879648603">
              <svg class="contact-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" height="14" fill="currentColor">
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
              </svg>
              +91 8879648603
            </a>
            <a href="tel:+919892653200">/ 9892653200</a>
            <a href="mailto:info@noblejuniorcollege.edu.in">
              <svg class="contact-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" height="14" fill="currentColor">
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
              </svg>
              info@noblejuniorcollege.edu.in
            </a>
          </div>
          <div class="topbar-actions">
            <span class="blinking font-weight-bold">
              <svg class="contact-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="12" height="12" fill="currentColor">
                <path d="M0 256L224 0l64 32L128 288h192L96 512l-32-32 128-192H0z"/>
              </svg>
              FYJC (11th Std) Admissions Open 2026-27
            </span>
            <a href="admissions.html#enquiry" class="btn-enquiry">Admission Enquiry</a>
          </div>
        </div>
      </div>

      <!-- Middle Header -->
      <div class="middle-header">
        <div class="container middle-header-content">
          <a href="index.html" class="logo">
            <div class="logo-icon">N</div>
            <div class="logo-text">
              <h1>NOBLE</h1>
              <p>School & Junior College (11th & 12th Std)</p>
            </div>
          </a>

          <div class="header-call">
            <div class="call-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="22" height="22" fill="currentColor">
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
              </svg>
            </div>
            <div class="call-details">
              <span>Call Counselor</span>
              <a href="tel:+918879648603">+91 8879648603</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Navbar -->
      <nav class="navbar">
        <div class="container nav-container">
          <!-- Logo in Navbar (visible only on mobile/tablet) -->
          <a href="index.html" class="logo nav-logo">
            <div class="logo-icon">N</div>
            <div class="logo-text">
              <h1>NOBLE</h1>
              <p>School & Junior College</p>
            </div>
          </a>

          <!-- Navigation Links / Drawer -->
          <ul class="nav-links">
            <li class="nav-item" data-page="index.html"><a href="index.html" class="nav-link">Home</a></li>
            
            <li class="nav-item has-dropdown" data-page="about.html">
              <div class="nav-link-wrapper">
                <a href="about.html" class="nav-link">About Us</a>
                <button class="dropdown-toggle" aria-label="Toggle Dropdown">▼</button>
              </div>
              <ul class="dropdown">
                <li class="dropdown-item"><a href="about.html#vision">Vision & Mission</a></li>
                <li class="dropdown-item"><a href="about.html#messages">Principal Desk</a></li>
                <li class="dropdown-item"><a href="about.html#chart">Organizational Chart</a></li>
                <li class="dropdown-item"><a href="about.html#quality">Quality Policy</a></li>
              </ul>
            </li>

            <li class="nav-item has-dropdown" data-page="admissions.html">
              <div class="nav-link-wrapper">
                <a href="admissions.html" class="nav-link">Admissions</a>
                <button class="dropdown-toggle" aria-label="Toggle Dropdown">▼</button>
              </div>
              <ul class="dropdown">
                <li class="dropdown-item"><a href="admissions.html#life">Life @ Noble</a></li>
                <li class="dropdown-item"><a href="admissions.html#eligibility">Eligibility criteria</a></li>
                <li class="dropdown-item"><a href="admissions.html#fees">Fees Structure</a></li>
                <li class="dropdown-item"><a href="admissions.html#enquiry">Enquiry Form</a></li>
              </ul>
            </li>

            <li class="nav-item has-dropdown" data-page="academics.html">
              <div class="nav-link-wrapper">
                <a href="academics.html" class="nav-link">Streams</a>
                <button class="dropdown-toggle" aria-label="Toggle Dropdown">▼</button>
              </div>
              <ul class="dropdown">
                <li class="dropdown-item"><a href="academics.html#science">Science Stream (11th & 12th)</a></li>
                <li class="dropdown-item"><a href="academics.html#commerce">Commerce Stream (11th & 12th)</a></li>
                <li class="dropdown-item"><a href="academics.html#arts">Arts Stream (11th & 12th)</a></li>
              </ul>
            </li>

            <li class="nav-item has-dropdown" data-page="affiliation.html">
              <div class="nav-link-wrapper">
                <a href="affiliation.html" class="nav-link">Affiliation</a>
                <button class="dropdown-toggle" aria-label="Toggle Dropdown">▼</button>
              </div>
              <ul class="dropdown">
                <li class="dropdown-item"><a href="affiliation.html#msbshse">MSBSHSE Board (Pune)</a></li>
                <li class="dropdown-item"><a href="affiliation.html#dyde">Education Department</a></li>
              </ul>
            </li>

            <li class="nav-item has-dropdown" data-page="events.html">
              <div class="nav-link-wrapper">
                <a href="events.html" class="nav-link">Events</a>
                <button class="dropdown-toggle" aria-label="Toggle Dropdown">▼</button>
              </div>
              <ul class="dropdown">
                <li class="dropdown-item"><a href="events.html#gallery">Photo Gallery</a></li>
                <li class="dropdown-item"><a href="events.html#videos">Video Tour</a></li>
              </ul>
            </li>

            <li class="nav-item has-dropdown" data-page="career.html">
              <div class="nav-link-wrapper">
                <a href="career.html" class="nav-link">Career Guidance</a>
                <button class="dropdown-toggle" aria-label="Toggle Dropdown">▼</button>
              </div>
              <ul class="dropdown">
                <li class="dropdown-item"><a href="career.html#about">Counselling Desk</a></li>
                <li class="dropdown-item"><a href="career.html#coaching">JEE / NEET Prep</a></li>
                <li class="dropdown-item"><a href="career.html#results">Board Results</a></li>
              </ul>
            </li>

            <li class="nav-item has-dropdown" data-page="activities.html">
              <div class="nav-link-wrapper">
                <a href="activities.html" class="nav-link">Clubs & Activities</a>
                <button class="dropdown-toggle" aria-label="Toggle Dropdown">▼</button>
              </div>
              <ul class="dropdown">
                <li class="dropdown-item"><a href="activities.html#about">Co-curricular Clubs</a></li>
                <li class="dropdown-item"><a href="activities.html#nss-sports">NSS & Sports Council</a></li>
              </ul>
            </li>

            <li class="nav-item" data-page="alumni.html"><a href="alumni.html" class="nav-link">Alumni</a></li>

            <li class="nav-item" data-page="contact.html"><a href="contact.html" class="nav-link">Contact Us</a></li>
            
            <!-- Mobile drawer extra info & contacts (visible only on mobile drawer) -->
            <li class="mobile-only mobile-drawer-info">
              <div class="drawer-divider"></div>
              <div class="drawer-contact-info">
                <a href="tel:+918879648603" class="drawer-contact-item">
                  <svg class="contact-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" fill="currentColor">
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                  </svg>
                  +91 8879648603
                </a>
                <a href="tel:+919892653200" class="drawer-contact-item">
                  <svg class="contact-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" fill="currentColor">
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                  </svg>
                  +91 9892653200
                </a>
                <a href="mailto:info@noblejuniorcollege.edu.in" class="drawer-contact-item">
                  <svg class="contact-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" fill="currentColor">
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                  </svg>
                  info@noblejuniorcollege.edu.in
                </a>
              </div>
              <div style="padding: 1.5rem 0 0 0;">
                <a href="admissions.html#enquiry" class="btn btn-secondary btn-block" style="text-align: center; display: block; width: 100%;">Admission Enquiry</a>
              </div>
            </li>
          </ul>

          <!-- Mobile Hamburger Toggle button -->
          <button class="mobile-nav-toggle" aria-label="Toggle navigation">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>
        </div>
      </nav>

      <!-- Background Overlay for Mobile Menu -->
      <div class="nav-overlay"></div>
    `;
  }

  // Inject Footer
  const footerContainer = document.querySelector("#footer-container");
  if (footerContainer) {
    footerContainer.innerHTML = `
      <footer>
        <div class="container footer-grid">
          <div class="footer-col">
            <h3>Noble Junior College</h3>
            <p style="margin-top: 1rem; font-size: 0.85rem; line-height: 1.6;">
              Noble School & Junior College is dedicated to imparting quality higher secondary education, laying a robust foundation for competitive entrance exams and successful career tracks in Science, Commerce, and Arts.
            </p>
          </div>
          <div class="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="about.html">About College</a></li>
              <li><a href="admissions.html">Admissions 2026</a></li>
              <li><a href="career.html">Academic Records</a></li>
              <li><a href="events.html">Gallery & Events</a></li>
              <li><a href="contact.html">Reach Us</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>Streams</h3>
            <ul>
              <li><a href="academics.html#science">Science Stream (Class 11 & 12)</a></li>
              <li><a href="academics.html#commerce">Commerce Stream (Class 11 & 12)</a></li>
              <li><a href="academics.html#arts">Arts Stream (Class 11 & 12)</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>Contact Info</h3>
            <p style="font-size: 0.85rem; margin-top: 1rem; line-height: 1.6;">
              <svg class="contact-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16" fill="currentColor" style="color:var(--secondary);">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/>
              </svg>
              Sapgaon, Taluka Shahapur, Thane District, Maharashtra, India - 421601<br><br>
              <svg class="contact-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" fill="currentColor" style="color:var(--secondary);">
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
              </svg>
              +91 8879648603 / 9892653200<br><br>
              <svg class="contact-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" fill="currentColor" style="color:var(--secondary);">
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
              </svg>
              info@noblejuniorcollege.edu.in
            </p>
          </div>
        </div>
        <div class="container footer-bottom">
          <p>&copy; 2026 Noble School & Junior College. All Rights Reserved. Designed with excellence.</p>
          <div class="footer-socials">
            <a href="#" aria-label="Facebook">F</a>
            <a href="#" aria-label="Twitter">T</a>
            <a href="#" aria-label="LinkedIn">L</a>
            <a href="#" aria-label="YouTube">Y</a>
          </div>
        </div>
      </footer>
    `;
  }

  // Set Active Navigation Link based on Current Page URL
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";
  
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    if (item.getAttribute("data-page") === page) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Mobile Menu Drawer and Overlay Toggle
  const mobileToggle = document.querySelector(".mobile-nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navOverlay = document.querySelector(".nav-overlay");
  const body = document.body;
  
  function toggleMenu() {
    if (mobileToggle && navLinks && navOverlay) {
      const isOpen = navLinks.classList.toggle("open");
      mobileToggle.classList.toggle("open", isOpen);
      navOverlay.classList.toggle("open", isOpen);
      body.classList.toggle("no-scroll", isOpen);
    }
  }

  function closeMenu() {
    if (mobileToggle && navLinks && navOverlay) {
      navLinks.classList.remove("open");
      mobileToggle.classList.remove("open");
      navOverlay.classList.remove("open");
      body.classList.remove("no-scroll");
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener("click", toggleMenu);
  }

  if (navOverlay) {
    navOverlay.addEventListener("click", closeMenu);
  }

  // Handle click on links inside the drawer (to close the menu when clicked)
  const navLinksList = document.querySelectorAll(".nav-link");
  navLinksList.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 1024) {
        closeMenu();
      }
    });
  });

  // Mobile Dropdown toggling (accordion style on Chevron click)
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const currentItem = toggle.closest(".nav-item");
      const isAlreadyOpen = currentItem.classList.contains("active-dropdown");
      
      // Close other dropdowns first for a clean accordion effect
      const allActiveDropdowns = document.querySelectorAll(".nav-item.active-dropdown");
      allActiveDropdowns.forEach(item => {
        item.classList.remove("active-dropdown");
      });
      
      // Toggle current dropdown
      if (!isAlreadyOpen) {
        currentItem.classList.add("active-dropdown");
      }
    });
  });

  // Inject Floating Actions (Back to Top)
  const floatingActions = document.createElement("div");
  floatingActions.className = "floating-actions";
  floatingActions.innerHTML = `
     <!-- Scroll to Top Button -->
     <button class="floating-btn back-to-top-btn" aria-label="Scroll to top">
        <i class="fa-solid fa-arrow-up" style="font-size: 1.25rem; color: #ffffff; display: block; line-height: 1;"></i>
     </button>
  `;
  document.body.appendChild(floatingActions);

  // Scroll logic for Back to Top button
  const backToTopBtn = floatingActions.querySelector(".back-to-top-btn");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
