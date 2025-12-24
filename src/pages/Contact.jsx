// src/pages/Contact.jsx
function Contact() {
  return (
    <div>
      <h1>Kontak Saya</h1>
      <div className="card">
        <p>Email: dio@example.com</p>
        <p>Telepon: +62 812-3456-7890</p>
        <p>LinkedIn: linkedin.com/in/dio</p>
      </div>
      <form style={{ marginTop: '2rem', textAlign: 'left' }}>
        <h3>Kirim Pesan</h3>
        <div style={{ marginBottom: '1rem' }}>
          <label>Nama:</label>
          <input type="text" style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label>
          <input type="email" style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Pesan:</label>
          <textarea style={{ width: '100%', padding: '0.5rem', height: '100px' }} />
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Kirim
        </button>
      </form>
    </div>
  );
}

export default Contact;