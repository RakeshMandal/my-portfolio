import React from 'react';

const ThankYou = () => {
  return (
    <section className="thank-you" style={{ padding: '4rem', textAlign: 'center' }}>
      <h2>Thank You!</h2>
      <p>Your message has been sent. I’ll get back to you shortly.</p>
      <a href="/" style={{ marginTop: '2rem', display: 'inline-block', color: '#007bff' }}>
        ← Back to Home
      </a>
    </section>
  );
};

export default ThankYou;
