import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="page active">
      <div className="about-split">
        <h2 className="about-split-heading">about me</h2>
        <div className="about-split-body">
          <p>I'm a Product Designer, working across government and enterprise to design products and services that solve complex, real-world problems. Much of my work sits at the intersection of user research, systems thinking, and delivery, helping teams navigate ambiguity and turn complexity into experiences that feel simple and intuitive.</p>
          <p>Before moving into design, I worked in frontend development, which gives me a strong appreciation for the realities of implementation. I enjoy partnering closely with engineers, product managers, and stakeholders to ensure good ideas can survive contact with real constraints.</p>
          <p>I'm most interested in understanding how people actually behave, not how we expect them to. Whether I'm improving an internal platform, a public service, or a customer-facing product, my goal is the same: create solutions that are useful, usable, and capable of delivering meaningful impact.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
