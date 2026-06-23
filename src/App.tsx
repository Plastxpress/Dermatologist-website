import doctorImg from './assets/doctor.png';

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="container">
          <div className="logo-text">Shree Hari Clinic</div>
          <nav>
            <ul className="nav-links">
              <li><a href="#services" className="nav-link active">Services</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>
          <a href="#contact" className="btn-primary cta-pulse">Book Appointment</a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container hero-section">
          <div className="hero-content">
            <div className="badge animate-fade-in">
              <span className="badge-icon"></span>
              EXPERT DERMATOLOGISTS
            </div>
            
            <h1 className="display-lg hero-title animate-fade-in delay-1">
              Expert Care for Your <span>Skin &amp; Health</span>
            </h1>
            
            <p className="body-lg hero-desc animate-fade-in delay-2">
              Dr. Priya Rabadiya provides personalized dermatology, hair health, and general medicine solutions in Ankleshwar.
            </p>
            
            <div className="hero-actions animate-fade-in delay-3">
              <a href="#contact" className="btn-primary">
                Book Appointment
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#about" className="btn-secondary">
                Get Directions
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                </svg>
              </a>
            </div>

            <div className="hero-badges-row animate-fade-in delay-4">
              <div className="hero-badge-item">
                <span className="hero-badge-icon">★</span>
                <strong>4.9/5</strong> Patient Rating
              </div>
              <div className="hero-badge-item">
                <span className="hero-badge-icon blue">✚</span>
                Advanced Treatments
              </div>
            </div>
          </div>

          <div className="hero-image-container animate-fade-in delay-2">
            <div className="doctor-card">
              <img src={doctorImg} alt="Dr. Priya Rabadiya" className="doctor-img" />
              <div className="doctor-credentials">
                <span className="cred-title">EDUCATION &amp; CREDENTIALS</span>
                <div className="cred-item">
                  <span className="cred-icon">🎓</span>
                  MBBS, MD - Dermatology
                </div>
                <div className="cred-item">
                  <span className="cred-icon">🛡️</span>
                  Fellowship in Aesthetic Medicine
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container about-section">
          <div className="about-content">
            <div>
              <h2 className="headline-md">Trusted Healthcare in Ankleshwar</h2>
              <div className="accent-line"></div>
            </div>
            
            <p className="body-md about-desc">
              Offering expert care in dermatology, hair health, general medicine, and homeopathy. We focus on patient-centric, personalized treatment plans tailored to your unique needs.
            </p>

            <div className="address-card">
              <div className="address-icon-container">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="address-details">
                <h4>Clinic Address</h4>
                <p>Candle Corner, 1, 2, Niyam Rd, G.I.D.C, Chokdi, Ankleshwar, Gujarat 393002</p>
              </div>
            </div>
          </div>

          <div className="stats-card">
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Clinic Locations</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">7K+</div>
              <div className="stat-label">Treatments Done</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">FDA</div>
              <div className="stat-label">Approved Tech</div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="container services-section">
          <div className="section-header">
            <h2 className="headline-md">Our Expertise</h2>
            <p className="body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
              Specialized treatments tailored for your skin, hair, and overall health needs.
            </p>
          </div>

          <div className="services-grid">
            {/* Card 1: Skin Care */}
            <div className="service-card hover-lift">
              <div className="service-top">
                <div className="service-icon-box icon-blue">
                  {/* Skin icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <span className="service-badge specialty">Specialty</span>
              </div>
              <h3 className="title-lg service-title">Skin Care</h3>
              <p className="body-md service-desc">
                Comprehensive treatment for skin diseases, acne, pimples, and fungal infections using advanced diagnostic protocols.
              </p>
              <a href="#contact" className="service-link blue">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 2: Cosmetic */}
            <div className="service-card hover-lift">
              <div className="service-top">
                <div className="service-icon-box icon-berry">
                  {/* Cream/Jar icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22a7 7 0 0 0 7-7H5a7 7 0 0 0 7 7z"></path>
                    <path d="M19 15V9a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path>
                    <path d="M12 2v5"></path>
                  </svg>
                </div>
              </div>
              <h3 className="title-lg service-title">Cosmetic</h3>
              <p className="body-md service-desc">
                Hydra Facial, Skin Lightening and Brightening, Black Pigmentation treatment.
              </p>
              <a href="#contact" className="service-link berry">
                Explore
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 3: Hair & Specialty */}
            <div className="service-card hover-lift">
              <div className="service-top">
                <div className="service-icon-box icon-blue">
                  {/* Scissors icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
                    <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
                    <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
                  </svg>
                </div>
              </div>
              <h3 className="title-lg service-title">Hair &amp; Specialty</h3>
              <p className="body-md service-desc">
                Advanced Hair Care solutions, alongside specialized management for Abscesses and Boils.
              </p>
              <a href="#contact" className="service-link blue">
                View details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Card 4: General Practice */}
            <div className="service-card hover-lift">
              <div className="service-top">
                <div className="service-icon-box icon-green">
                  {/* Medical cross icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <span className="service-badge holistic">Holistic Care</span>
              </div>
              <h3 className="title-lg service-title">General Practice</h3>
              <p className="body-md service-desc">
                Integrating traditional General Physician services with Homeopathy for comprehensive wellness and root-cause treatment.
              </p>
              <div className="service-tags">
                <span className="service-tag">
                  <span className="service-tag-icon">✔</span> Homeopathy
                </span>
                <span className="service-tag">
                  <span className="service-tag-icon">✔</span> Physician
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container">
            <div className="section-header">
              <h2 className="headline-md">What Our Patients Say</h2>
            </div>

            <div className="rating-pill-container">
              <div className="rating-pill">
                <strong>4.9</strong>
                <span className="stars">★★★★★</span>
                <span className="divider-dot"></span>
                <span className="review-count">1,200+ Google Reviews</span>
                <span className="g-icon">G</span>
              </div>
            </div>

            <div className="testimonials-grid">
              {/* Testimonial 1 */}
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="patient-info">
                    <h4>Rahul Sharma</h4>
                  </div>
                  <span className="verified-badge">VERIFIED</span>
                </div>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">
                  "Excellent care for my skin issues. Dr. Priya is very professional and explained the treatment clearly."
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="patient-info">
                    <h4>Anjali Patel</h4>
                  </div>
                  <span className="verified-badge">VERIFIED</span>
                </div>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">
                  "The best clinic in Ankleshwar for hair treatments. I saw results within a few weeks. Highly recommended!"
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="patient-info">
                    <h4>Vikram Singh</h4>
                  </div>
                  <span className="verified-badge">VERIFIED</span>
                </div>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">
                  "Very clean clinic and friendly staff. Dr. Priya's diagnosis was spot on for my chronic skin condition."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/Appointment Section (CTA Area) */}
        <section id="contact" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border-subtle)', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
            <h2 className="headline-md">Schedule Your Consultation</h2>
            <p className="body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
              Take the first step towards healthier skin and body. Reach out to book your appointment with Dr. Priya Rabadiya.
            </p>
            <a href="mailto:info@shreehariclinic.com" className="btn-primary cta-pulse" style={{ fontSize: '18px', padding: '16px 32px' }}>
              Book Appointment Now
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-info">
              <div className="footer-logo">Shree Hari Clinic</div>
              <p className="footer-desc">
                Advanced clinical dermatology, hair restoration, and general medicine services.
              </p>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">✉</span>
                  info@shreehariclinic.com
                </div>
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">📞</span>
                  +91 99999 99999
                </div>
              </div>
            </div>

            <div className="footer-links-col">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#services" className="footer-link">Privacy Policy</a></li>
                <li><a href="#about" className="footer-link">Terms of Service</a></li>
                <li><a href="#about" className="footer-link">Ankleshwar Clinic Address</a></li>
                <li><a href="#contact" className="footer-link">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2024 Shree Hari Clinic. Dr. Priya Rabadiya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
