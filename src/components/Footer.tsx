import "./Footer.css";


function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div>
          <h2>🛒 QuickCart</h2>
          <p>Your trusted online grocery store.</p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <p>Home</p>
          <p>Vegetables</p>
          <p>Milk</p>
          <p>Non Veg</p>

        </div>

        <div>

          <h3>Contact</h3>

          <p>📍 Hyderabad</p>

          <p>📞 +91 9876543210</p>

          <p>✉ support@quickcart.com</p>

        </div>

      </div>

      <hr />

      <p className="copyright">

        © 2026 FreshMart. All Rights Reserved.

      </p>

    </footer>
  );
}

export default Footer;