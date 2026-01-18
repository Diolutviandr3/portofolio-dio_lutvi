function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Halo, saya</span>
              <span className="name-highlight">Dio Lutvi</span>
            </h1>
            <h2 className="hero-subtitle">
              <span className="typing-text">Web Developer</span>
              <span className="cursor">|</span>
            </h2>
            <p className="hero-description">
              Saya seorang Web Developer yang bersemangat dalam menciptakan pengalaman digital 
              yang menarik, fungsional, dan mudah digunakan. Saya berfokus pada pengembangan 
              aplikasi web modern dengan teknologi terkini.
            </p>
            <div className="hero-cta">
              <a href="#/projects" className="cta-button primary">
                <span>Lihat Proyek</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#/contact" className="cta-button secondary">
                <span>Hubungi Saya</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="m22 6-10 7L2 6"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-avatar">
              <div className="avatar-inner">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                  <circle cx="60" cy="60" r="60" fill="#4f46e5"/>
                  <path d="M60 30C70 30 78 38 78 48C78 58 70 66 60 66C50 66 42 58 42 48C42 38 50 30 60 30Z" fill="white"/>
                  <path d="M40 80C30 80 22 88 22 98H98C98 88 90 80 80 80H40Z" fill="white"/>
                </svg>
              </div>
              <div className="avatar-decoration">
                <div className="decoration-circle"></div>
                <div className="decoration-circle"></div>
                <div className="decoration-circle"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <span>Scroll untuk menjelajahi</span>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="section-header">
          <h2 className="section-title">Keahlian Saya</h2>
          <p className="section-subtitle">Teknologi dan tools yang saya kuasai</p>
        </div>
        
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML5, CSS3, Tailwind</p>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2">
                <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/>
                <path d="M8 16h.01"/>
                <path d="M8 20h.01"/>
                <path d="M12 18h.01"/>
                <path d="M12 22h.01"/>
                <path d="M16 16h.01"/>
                <path d="M16 20h.01"/>
              </svg>
            </div>
            <h3>Backend</h3>
            <p>Node.js, Express, MongoDB, REST API</p>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path d="M12 16v-4M12 8h.01"/>
              </svg>
            </div>
            <h3>Tools</h3>
            <p>Git, Vite, Figma, VS Code, Responsive Design</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>Tentang Saya</h2>
            <p>
              Saya adalah seorang Web Developer dengan passion dalam menciptakan solusi digital 
              yang tidak hanya tampak menarik tetapi juga memberikan pengalaman pengguna yang optimal. 
              Saya percaya bahwa teknologi yang baik adalah teknologi yang dapat diakses dan bermanfaat 
              bagi semua orang.
            </p>
            <p>
              Saat ini, saya fokus pada pengembangan aplikasi web dengan React dan ekosistem modernnya. 
              Saya selalu tertantang untuk mempelajari teknologi baru dan menerapkan praktik terbaik 
              dalam setiap proyek yang saya kerjakan.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Proyek Selesai</span>
              </div>
              <div className="stat">
                <span className="stat-number">1,5</span>
                <span className="stat-label">Tahun Pengalaman</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Komitmen</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;