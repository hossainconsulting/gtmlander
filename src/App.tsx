import { Suspense, lazy } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Problem from './components/sections/Problem'
import Solution from './components/sections/Solution'
import Features from './components/sections/Features'
import FAQ from './components/sections/FAQ'
import Pricing from './components/sections/Pricing'

const Hero = lazy(() => import('./components/sections/Hero'))

export default function App() {
  return (
    <div className="bg-brand-navy text-white">
      <Header />
      <Suspense fallback={<div className="h-screen bg-brand-navy" />}>
        <Hero />
      </Suspense>
      <Problem />
      <Solution />
      <Features />
      <FAQ />
      <Pricing />
      <Footer />
    </div>
  )
}
