'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="comp">
        <div className="logo">Blue Sky</div>
        <div className="tabs">
          <Link href="/">Home</Link>
          <a onClick={() => scrollToSection('curve')} style={{ cursor: 'pointer' }}>About</a>
          <Link href="/contact">Contact us</Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="mobile">
        <div className="logo">Blue Sky</div>
        <div className="mobile_tabs">
          <Image 
            id="menu" 
            src="/assets/menu.png" 
            alt="Menu" 
            width={30} 
            height={30}
            onClick={() => setMobileMenuOpen(true)}
            style={{ cursor: 'pointer' }}
          />
        </div>
        {mobileMenuOpen && (
          <article className="links">
            <Image 
              src="/assets/close.png" 
              alt="Close" 
              className="close"
              width={40}
              height={40}
              onClick={() => setMobileMenuOpen(false)}
            />
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <a onClick={() => scrollToSection('curve')} style={{ cursor: 'pointer' }}>About</a>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact us</Link>
          </article>
        )}
      </nav>
    </>
  )
}
