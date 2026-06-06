import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="page active">
      <div className="about-split">
        <h2 className="about-split-heading">about me</h2>
        <div className="about-split-body">
          <p>I'm a Product Designer who helps teams turn complexity into products and services that feel simple, intuitive, and impactful. My work combines user research, systems thinking, and delivery to solve real-world problems and create better outcomes for both users and organisations.</p>
          <p>Having started my career in frontend development, I bring a practical understanding of implementation and enjoy working closely with engineers, product managers, and stakeholders to bridge the gap between strategy, design, and delivery.</p>
          <p>I'm driven by understanding how people actually behave, using those insights to design experiences that are useful, usable, and meaningful.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
