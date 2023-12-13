import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Ready to build something together? <br className="sm:block hidden" />{" "}
        Drop me a message via electronic mail! 🤓
      </p>
      <Link to="mailto:viguilla.allan@gmail.com" className="btn">
        Contact Me
      </Link>
    </section>
  );
};

export default CTA;
