import React, { useState, useEffect, useRef, useCallback } from "react"
import NavigationItem from "./NavigationItem"
import StatItem from "./StatItem"
import { navigationItems } from "../data/navigation"
import { statsData } from "../data/stats"

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOverflow, setIsOverflow] = useState(false)
  const navRef = useRef(null)
  const containerRef = useRef(null)

  const checkOverflow = useCallback(() => {
    if (navRef.current && containerRef.current) {
      const navItems = navRef.current.children
      const containerWidth = containerRef.current.offsetWidth
      let totalWidth = 0

      Array.from(navItems).forEach((item) => {
        const itemWidth = item.offsetWidth
        totalWidth += itemWidth
      })

      setIsOverflow(totalWidth > containerWidth)
    }
  }, [])

  const handleResize = useCallback(() => {
    checkOverflow()
    setIsMenuOpen(false)
  }, [checkOverflow])

  useEffect(() => {
    handleResize() 

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [handleResize])

  useEffect(() => {
    checkOverflow()
  }, [navigationItems, checkOverflow])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <nav className="fixed top-0 flex justify-between items-center px-5 md:px-20 py-5 w-full bg-white bg-opacity-90 backdrop-blur z-50">
        <img loading="lazy" src="logo.png" alt="Company Logo" className="hidden md:block h-8" />
        <img loading="lazy" src="logom.png" alt="Company Logo" className="md:hidden h-8" />

        <div ref={containerRef} className="hidden md:flex flex-1 justify-center mx-4">
          {!isOverflow && (
            <div ref={navRef} className="flex gap-6 items-center">
              {navigationItems.map((item, index) => (
                <NavigationItem key={index} {...item} />
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <button className="flex gap-2 justify-center items-center px-4 py-3 text-base font-bold text-red-700 rounded-xl border-2 border-red-700 whitespace-nowrap">
            <img loading="lazy" src="phone.png" alt="" className="w-5 aspect-square" />
            <span className="sm:inline">Speak with our Experts</span>
          </button>

          <button className="md:hidden text-red-700" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white z-50 md:hidden">
            <div className="flex flex-col gap-4 p-5">
              {navigationItems.map((item, index) => (
                <NavigationItem key={index} {...item} isMobile={true} onClick={toggleMenu} />
              ))}
            </div>
          </div>
        )}
      </nav>

      <section className="flex flex-col w-full pt-[96px]">
        <div className="flex flex-col w-full font-semibold">
          <div className="w-full relative overflow-hidden h-[250px] md:h-[500px]">
            <div className="absolute top-0 left-0 w-full h-full flex animate-scroll">
              <img
                loading="lazy"
                src="hero.png"
                alt="Hero Banner"
                className="object-cover w-auto h-full flex-shrink-0"
              />
              <img
                loading="lazy"
                src="hero.png"
                alt="Hero Banner"
                className="object-cover w-auto h-full flex-shrink-0"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <img src="crown-bg.png" alt="Crown Background" className="w-24 h-24 md:w-36 md:h-36" />
                <img
                  src="crown.png"
                  alt="Crown Logo"
                  className="absolute inset-0 w-20 h-20 md:w-30 md:h-30 m-auto"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center px-4 md:px-0 max-w-full w-full md:w-[752px] mx-auto mt-12">
            <div className="flex flex-col justify-center w-full text-center">
              <h1 className="text-4xl md:text-6xl leading-tight md:leading-none text-neutral-800">
                Give the best shot
                <br />
                at your <span className="font-bold text-[#B10612]">Dream University</span>
              </h1>
              <p className="mt-4 md:mt-6 text-lg md:text-xl leading-relaxed md:leading-8 text-neutral-800">
                Get expert help, personalised guidance, and all the support you need to{" "}
                <p className="font-bold">increase your chances of success with Ambitio Elite.</p>
              </p>
              <div className="flex justify-center items-center mt-6">
                <button className="bg-neutral-800 min-h-[56px] w-full md:w-[328px] text-white font-bold py-2 px-4 rounded-2xl">
                  10x your chances with Ambitio
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex relative flex-col w-full min-h-[335px] mt-24 px-4 md:px-20 ">
          <div className="flex background-gradient flex-col px-4 md:px-40 pt-14 pb-16 rounded-[32px] relative overflow-hidden ">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-medium">
                We let <span className="text-red-700">our numbers</span> do the talking
              </h2>
              <p className="mt-2 text-lg md:text-2xl font-semibold text-stone-500">
                Our users love us and we know you will too! Explore our Products
              </p>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-8 mt-8">
              {statsData.map((stat, index) => (
                <StatItem key={index} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage

