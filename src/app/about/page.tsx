// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <div>
      {/* Section Home */}
      <section className="home" id="home">
        <div className="content">
          <h1>
            Hi, it&apos;s <span>Reni Kartika</span>
          </h1>
          <h3 className="text-animation">
            i&apos;m a <span></span>
          </h3>
          <p>
            &quot;Halo, saya Reni Kartika, mahasiswa Informatika yang memiliki
            passion di bidang web development dan data science. Saya membangun
            aplikasi web yang efisien dan mudah digunakan serta menganalisis
            data untuk menyelesaikan masalah nyata. Selamat datang di portofolio
            saya!&quot;
          </p>
          <div className="icons">
            <i className="fab fa-linkedin" aria-hidden="true"></i>
            <i className="fab fa-github" aria-hidden="true"></i>
            <i className="fab fa-instagram" aria-hidden="true"></i>
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </div>
          <div className="flex-btn">
            <a href="#" className="btn hire">
              hire
            </a>
            <a href="#" className="btn">
              contact
            </a>
          </div>
        </div>
        {/* Perhatikan: <img> bisa diganti dengan <Image> dari next/image untuk optimalisasi */}
        <img src="/Reni formal.jpg" alt="Reni Kartika" />
      </section>

      {/* Section Education */}
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
    </div>
  );
}
