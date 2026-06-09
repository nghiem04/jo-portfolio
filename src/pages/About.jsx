import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="page active">
      <section className="about-split">
        <h2 className="about-split-heading">about me</h2>
        <div className="about-split-body">
          <p>I'm a Product Designer who enjoys exploring complex problems and turning them into products that feel intuitive, useful, and thoughtfully crafted.</p>
          <p>My path into design started in frontend development. While building digital products, I found myself increasingly drawn to the UX challenges behind them, understanding why something worked, how people used it, and what made an experience feel effortless. Over time, that curiosity naturally led me from building interfaces to designing them.</p>
        </div>
      </section>

      <section className="about-split">
        <h2 className="about-split-heading">my approach</h2>
        <div className="about-split-body">
          <p>I care deeply about product craft and believe great products are shaped through thoughtful decisions, attention to detail, and a willingness to explore beyond the obvious solution. I'm particularly interested in understanding how people actually behave, using research and systems thinking to uncover the underlying problems that influence their experiences.</p>
          <p>I'm also passionate about designing products that create positive outcomes for people, especially those whose needs are often overlooked. My goal is to create solutions that are both practical to deliver and genuinely valuable to the people who use them.</p>

          <div className="about-principles">
            <span className="about-principles-label">How I design</span>
            <ul>
              <li><strong>Explore beyond the obvious.</strong> The first solution is rarely the right one. The interesting work is past it.</li>
              <li><strong>Design from real behaviour.</strong> Research and systems thinking to find the underlying problem, not the surface request.</li>
              <li><strong>Design for the overlooked.</strong> The best outcomes often come from the needs others skip.</li>
              <li><strong>Practical to ship, valuable to use.</strong> A frontend background keeps my designs grounded in what can actually be built.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-split">
        <h2 className="about-split-heading">beyond the work</h2>
        <div className="about-split-body">
          <p>Outside of work, you'll usually find me gaming with friends, planning my next trip, or exploring somewhere new, whether that's a hiking trail, a new city, or simply a rabbit hole of ideas that caught my attention.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
