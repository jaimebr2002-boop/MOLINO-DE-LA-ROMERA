/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-brand-cream min-h-screen font-sans text-brand-black selection:bg-brand-gold selection:text-brand-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <Location />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}
