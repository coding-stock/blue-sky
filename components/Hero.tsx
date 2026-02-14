import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="home">
      <h1>
        Empowering Today&apos;s Youth, Building Tomorrow&apos;s <br />
        Leaders
      </h1>
      <div className="bottom">
        <Link href="/contact">
          <button>Get started</button>
        </Link>
        <Image src="/assets/next.png" alt="Arrow" width={40} height={33} priority/>
      </div>
    </section>
  )
}
