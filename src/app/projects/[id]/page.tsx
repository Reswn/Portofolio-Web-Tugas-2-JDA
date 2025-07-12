'use client';

import Image from 'next/image';

export default function ProjectsPage() {
  const projects = [
    {
      img: 'porto (1).jpg',
      title: 'Healingku.ai',
      description:
        'Healingku.ai adalah platform perencanaan perjalanan wisata berbasis AI. Membantu membuat itinerary otomatis berdasarkan preferensi pengguna.',
      link: 'https://github.com/Reswn/HEALINGKU.AI_UAS_Digital-Startup',
      category: 'product',
    },
    {
      img: 'porto (2).jpg',
      title: 'Blog App',
      description:
        'Aplikasi blog dengan fitur membuat, membaca, dan mengedit postingan. Dibangun menggunakan Next.js dan MongoDB dengan autentikasi dan dashboard admin.',
      link: 'https://github.com/Reswn/Blog-App_',
      category: 'web',
    },
    {
      img: 'porto (3).jpg',
      title: 'Car Price Predictive Analysis',
      description:
        'Aplikasi prediksi harga mobil menggunakan Machine Learning. Terdapat web interaktif yang memungkinkan pengguna memasukkan fitur mobil dan mendapatkan estimasi harga secara real-time.',
      link: 'https://github.com/Reswn/Car-Price-Prediction-Application',
      category: 'ml',
    },
  ];

  return (
    <section className="portofolio">
      <h2 className="heading">Latest Project</h2>
      <h4>
        <span className="pb-10px">Project that I have done</span>
      </h4>

      <div className="portofolio-gallery">
        {projects.map((item, index) => (
          <div className={`port-box ${item.category}`} key={index}>
            <div className="port-image">
              <Image
                src={`/${item.img}`}
                alt={`Project ${index + 1} - ${item.title}`}
                width={500}
                height={300}
                style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
                priority={index === 0}
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
  );
}
