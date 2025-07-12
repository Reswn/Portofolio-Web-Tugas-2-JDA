export default function ContactPage() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        contact <span>me</span>
      </h2>

      <div className="form-container">
        <form action="#" method="get">
          <div className="inputs">
            <input type="text" placeholder="Full Name" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="number" placeholder="Phone Number" className="input" />
            <input type="text" placeholder="Subject" className="input" />
          </div>
          <div className="text">
            <textarea placeholder="your message" />
            <a href="#" className="btn">
              send message
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
