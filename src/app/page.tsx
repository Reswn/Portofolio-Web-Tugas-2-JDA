"use client";
import Image from 'next/image';

export default function HomePage() {
  return (
    <div>

<section className="home" id="home">
  <div className="content">
    <h1>
      Hi, it&apos;s <span>Reni Kartika</span>
    </h1>
    <h3 className="text-animation">
      I&apos;m a <span></span>
    </h3>
    <p>
      Halo saya Reni Kartika mahasiswa Informatika yang memiliki passion di bidang web development dan data science. 
      Saya membangun aplikasi web yang efisien dan mudah digunakan serta menganalisis data untuk menyelesaikan masalah nyata. 
      Selamat datang di portofolio saya!
    </p>
    <div className="icons">
      <i className="fab fa-linkedin" aria-hidden="true"></i>
      <i className="fab fa-github" aria-hidden="true"></i>
      <i className="fab fa-instagram" aria-hidden="true"></i>
      <i className="fab fa-twitter" aria-hidden="true"></i>
    </div>
    <div className="flex-btn">
      <a href="#" className="btn hire">
        Hire
      </a>
      <a href="#contact" className="btn">
        Contact
      </a>
    </div>
  </div>
  <Image
    src="/Reni formal.jpg"
    alt="Foto formal Reni Kartika"
    width={400}
    height={500}
  />
</section>


      <section className="education" id="education">
        <h2 className="heading">Education</h2>
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2022</div>
            <div className="timeline-content">
              <h3>Universitas Sebelas April</h3>
              <p>
                Reni Kartika menempuh pendidikan S1 di jurusan Informatika, yang
                memberikan dasar kuat dalam pemrograman, pengembangan perangkat
                lunak, serta teknologi data. Ini melibatkan pembelajaran tentang
                pengembangan web, machine learning, manajemen proyek, dan
                teknologi IoT, seiring dengan ketertarikan pada data science dan
                web development.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2019</div>
            <div className="timeline-content">
              <h3>SMAN 1 Sumedang</h3>
              <p>
                Reni menempuh pendidikan SMA dengan jurusan MIPA, yang
                memberikan landasan kuat dalam bidang matematika dan sains,
                mendukung pengembangan minatnya dalam teknologi dan informatika.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <h2 className="heading">service</h2>
        <span>what i will do for you</span>
        <div className="box-container">
          {[
            {
              icon: "fa fa-code",
              title: "UI/UX Design",
              text: "UI/UX berfokus pada desain dan pengalaman pengguna dalam berinteraksi dengan produk digital. UI (User Interface) mengacu pada tampilan visual, seperti layout, warna, tipografi, dan elemen interaktif lainnya. UX (User Experience) berhubungan dengan bagaimana perasaan dan pengalaman pengguna saat menggunakan produk, memastikan produk mudah digunakan, menyenangkan, dan memenuhi kebutuhan pengguna.",
            },
            {
              icon: "fa-code",
              title: "Front-End Development",
              text: "Front-end development berfokus pada pengembangan antarmuka pengguna sebuah aplikasi atau situs web. Ini melibatkan penggunaan HTML, CSS, dan JavaScript untuk menciptakan elemen visual dan interaktif yang dapat dilihat dan diakses pengguna secara langsung. Pengembang front-end harus memastikan tampilan dan fungsi aplikasi bekerja dengan baik di berbagai perangkat dan browser.",
            },
            {
              icon: "fa-database",
              title: "Back-End Development",
              text: "Back-end development melibatkan pengelolaan dan pengembangan sisi server dari sebuah aplikasi atau situs web. Ini mencakup logika bisnis, pengelolaan database, autentikasi, dan komunikasi dengan front-end. Pengembang back-end bekerja dengan bahasa seperti Python, Java, PHP, atau Node.js untuk menangani proses di belakang layar yang memungkinkan aplikasi berjalan dengan lancar",
            },
            {
              icon: "fa-line-chart",
              title: "Data Science",
              text: "Data science adalah bidang yang menggabungkan ilmu statistik, pemrograman, dan pengetahuan domain untuk mengumpulkan, mengolah, dan menganalisis data. Tujuannya adalah untuk mendapatkan wawasan yang berharga dan membantu pengambilan keputusan. Ini melibatkan teknik seperti machine learning, analisis big data, dan visualisasi data untuk menemukan pola dan tren tersembunyi dalam data.",
            },
          ].map((service, i) => (
            <div className="box" key={i}>
              <div className="uiux">
                <i className={`fa ${service.icon}`} aria-hidden="true"></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="btn-box">
                <a href="#" className="btn">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="skills" id="skills">
        <h2 className="heading">My Skill</h2>

        <div className="skill-main">
          <div className="skill-left">
            <h3> Technical and Professional</h3>
            {[
              { name: "Python", percent: 72 },
              { name: "CSS", percent: 80 },
              { name: "JavaScript", percent: 62 },
              { name: "Figma", percent: 65 },
            ].map((skill, i) => (
              <div className="skill-bar" key={i}>
                <div className="info">
                  <p>{skill.name}</p>
                  <p>{skill.percent}%</p>
                </div>
                <div className="bar">
                  <span className={skill.name.toLowerCase()}></span>
                </div>
              </div>
            ))}
          </div>

          <div className="skill-right">
            <h3>Professional Skills</h3>
            <div className="professional">
              {[
                { name: "Team Work", percent: 90 },
                { name: "Creativity", percent: 85 },
                { name: "Time Management", percent: 70 },
                { name: "Project Management", percent: 80 },
              ].map((item, i) => {
                const dots = 80;
                const marked = Math.floor((item.percent / 100) * dots);

                return (
                  <div className="box" key={i}>
                    <div className="circle">
                      {Array.from({ length: dots }).map((_, j) => (
                        <div
                          key={j}
                          className={`points${j < marked ? " marked" : ""}`}
                          style={
                            {
                              "--i": j,
                              "--rot": "4.5deg", // 360 / 80
                            } as React.CSSProperties
                          }
                        />
                      ))}
                    </div>
                    <div className="text">
                      <big>{item.percent}%</big>
                      <small>{item.name}</small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

     import Image from "next/image";

<section className="portofolio" id="portofolio">
  <h2 className="heading">Latest Project</h2>
  <h4>
    <span className="pb-10px">Projects that I have done</span>
  </h4>

  <div className="portofolio-gallery">
    {[
      {
        img: "porto (1).jpg",
        title: "Healingku.ai",
        description:
          "Healingku.ai adalah platform perencanaan perjalanan wisata berbasis AI. Membantu membuat itinerary otomatis berdasarkan preferensi pengguna.",
        link: "https://github.com/Reswn/HEALINGKU.AI_UAS_Digital-Startup",
        category: "product",
      },
      {
        img: "porto (2).jpg",
        title: "Blog App",
        description:
          "Aplikasi blog dengan fitur membuat, membaca, dan mengedit postingan. Dibangun menggunakan Next.js dan MongoDB dengan autentikasi dan dashboard admin.",
        link: "https://github.com/Reswn/Blog-App_",
        category: "web",
      },
      {
        img: "porto (3).jpg",
        title: "Car Price Predictive Analysis",
        description:
          "Aplikasi prediksi harga mobil menggunakan Machine Learning. Terdapat web interaktif yang memungkinkan pengguna memasukkan fitur mobil dan mendapatkan estimasi harga secara real-time.",
        link: "https://github.com/Reswn/Car-Price-Prediction-Application",
        category: "ml",
      },
    ].map((item, index) => (
      <div className={`port-box mix ${item.category}`} key={index}>
        <div className="port-image">
          <Image
            src={`/${item.img}`}
            alt={`Screenshot of ${item.title}`}
            width={400}
            height={300}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="port-content">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-external-link" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


      <section className="contact" id="contact">
        <h2 className="heading">
          contact <span>me</span>
        </h2>
        <div className="form-container">
          <form action="#" method="get">
            <div className="inputs">
              <input type="text" placeholder="Full Name" className="input" />
              <input type="email" placeholder="Email" className="input" />
              <input
                type="number"
                placeholder="Phone Number"
                className="input"
              />
              <input type="text" placeholder="Subject" className="input" />
            </div>
            <div className="text">
              <textarea placeholder="your message" />
              <button type="submit" className="btn">
                send message
              </button>
            </div>
          </form>
        </div>
      </section>
      <section>
        <footer className="footer">
          {/* Ikon Sosial Media */}
          <div className="icons">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
          </div>

          {/* Navigasi Footer */}
          <nav className="footer-nav">
            <a href="#home">Beranda</a>
            <a href="#about">Tentang</a>
            <a href="#contact">Kontak</a>
            <a href="#portofolio">Proyek</a>
          </nav>

          {/* Credit */}
          <div className="credit">
            <p>
              <i className="fa fa-copyright" aria-hidden="true"></i> Reni
              Kartika Suwandi <span>||</span> all rights reserved
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
}
