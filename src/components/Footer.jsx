import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-cols">
        <div className="footer-col">
          <p className="footer-col-heading">NAVIGATION</p>
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/work" className="footer-link">Case Studies</Link>
          <Link to="/about" className="footer-link">About</Link>
        </div>
        <div className="footer-col">
          <p className="footer-col-heading">SOCIAL</p>
          <a href="https://www.linkedin.com/in/joannenghiem/" className="footer-link" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
