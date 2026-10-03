import { Routes, Route, Navigate } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext'
import { CompareProvider } from './context/CompareContext'
import { ExperienceProvider } from './context/ExperienceContext'
import ErrorBoundary from './components/common/ErrorBoundary'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CompareBar from './components/compare/CompareBar'
import Home from './pages/Home'
import Houses from './pages/Houses'
import HouseDetails from './pages/HouseDetails'
import Experience from './pages/Experience'
import Interiors from './pages/Interiors'
import InteriorDetails from './pages/InteriorDetails'
import Furniture from './pages/Furniture'
import ProductDetails from './pages/ProductDetails'
import Materials from './pages/Materials'
import Favorites from './pages/Favorites'
import Compare from './pages/Compare'
import About from './pages/About'
import Contact from './pages/Contact'
export default function App() {
  return <FavoritesProvider><CompareProvider><ExperienceProvider>
    <Navbar />
    <ErrorBoundary><main className="min-h-[70vh]"><Routes>
      <Route path="/" element={<Home />} /><Route path="/houses" element={<Houses />} /><Route path="/houses/:id" element={<HouseDetails />} />
      <Route path="/experience/:id" element={<Experience />} /><Route path="/interiors" element={<Interiors />} /><Route path="/interiors/:id" element={<InteriorDetails />} />
      <Route path="/furniture" element={<Furniture />} /><Route path="/products/:id" element={<ProductDetails />} /><Route path="/materials" element={<Materials />} />
      <Route path="/favorites" element={<Favorites />} /><Route path="/compare" element={<Compare />} /><Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} /></Routes></main></ErrorBoundary>
    <Footer /><CompareBar />
  </ExperienceProvider></CompareProvider></FavoritesProvider>
}
