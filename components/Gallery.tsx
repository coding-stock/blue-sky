import Image from 'next/image'

export default function Gallery() {
  const images = [
    {
      src: "/assets/IMG_20260131_091814_111.jpg.jpeg",
      title: "Leadership Begins With a Voice"
    },
    {
      src: "/assets/IMG_4900.jpg.jpeg",
      title: "Knowledge That Builds Confidence"
    },
    {
      src: "/assets/IMG_4950.jpg.jpeg",
      title: "Leadership is a Journey, Not a Title"
    },
    {
      src: "/assets/image.jpg",
      title: "Collaboration Creates Strong Leaders"
    }
  ]

  return (
    <section className="gallery_section">
      <h1>Our Impact in action</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <div className="image-box" key={index}>
            <Image 
              src={image.src} 
              alt={image.title}
              width={400}
              height={300}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              loading="lazy"
            />
            <h3>{image.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
