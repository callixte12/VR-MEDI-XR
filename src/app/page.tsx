import { NavBar, Hero, Testimonials, Features, Company, Footer, Team, Benefits, Products, Contact, Sponsors } from '@/components'
import Experts from '@/components/team/experts'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css" rel="stylesheet" />
      </Head>
      <main className="max-w-[1500px] m-auto overflow-hidden">
        <div className="bg-hero-2">
          <NavBar />
          <Hero />
        </div>
        <section id="company">
          <Company />
        </section>
        <div className="mx-auto overflow-y-scroll bg-bg-5 bg-cover bg-fixed bg-center bg-no-repeat shadow-lg -mt-[200px] pt-[200px]">
          <section id="features">
            <Features />
          </section>
          <section id="benefits">
            <Benefits />
          </section>
          <section id="products">
            <Products />
          </section>
          <section id="teams">
            <Experts />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="sponsors">
            <Sponsors />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      {/* <div
        className="mx-auto h-80 max-w-lg overflow-y-scroll bg-bg-5 bg-cover bg-fixed bg-center bg-no-repeat shadow-lg"
      >
        <div className="mt-40">
          <div className="bg-white p-4 sm:p-8">
            <div
              className="font-inter text-2xl font-extrabold tracking-tight text-black">
              Majestic peaks, nature&apos;s embrace.
            </div>
            <div className="mt-1 text-sm font-medium text-slate-500">
              Adventure calls, conquer mountain trails.
            </div>
            <p className="mt-4 leading-7 text-slate-500">
              In the realm of towering mountains, where the air is crisp and
              the vistas stretch endlessly, one finds solace, exhilaration,
              and a profound connection with the untamed beauty of the natural
              world.
            </p>
            <p className="mt-4 leading-7 text-slate-500">
              As the sun rises over the rugged peaks, casting a golden glow on
              the majestic landscape, a sense of awe fills the heart,
              reminding us of the grandeur and power that reside in the
              mountains.
            </p>
          </div>
        </div>
      </div> */}
      <Footer />
      </main>
    </>
  )
}
