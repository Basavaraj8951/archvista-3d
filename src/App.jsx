import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext'
import { CompareProvider } from './context/CompareContext'
import { ExperienceProvider } from './context/ExperienceContext'
import ErrorBoundary from './components/common/ErrorBoundary'
import Loader from './components/common/Loader'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CompareBar from './components/compare/CompareBar'
import Home from './pages/Home'
const page = (n) => lazy(() => import(`./pages/${n}.jsx`))
const [Houses, HouseDetails, Experience, Interiors, InteriorDetails, Furniture, ProductDetails, Materials, Favorites, Compare, About, Contact, Rooms, FloorPlanPage, RequestDesign] =
  ['Houses', 'HouseDetails', 'Experience', 'Interiors', 'InteriorDetails', 'Furniture', 'ProductDetails', 'Materials', 'Favorites', 'Compare', 'About', 'Contact', 'Rooms', 'FloorPlanPage', 'RequestDesign'].map(page)
const Redirect = ({ to }) => <Navigate replace to={to(useParams())} />
export default function App() {
  return <FavoritesProvider><CompareProvider><ExperienceProvider>
    <Navbar />
    <ErrorBoundary><main className="min-h-[70vh]"><Suspense fallback={<Loader label="Loading" />}><Routes>
      <Route path="/" element={<Home />} /><Route path="/houses" element={<Houses />} /><Route path="/houses/:id" element={<HouseDetails />} />
      <Route path="/experience/:id" element={<Experience />} /><Route path="/viewer/:id" element={<Redirect to={(p) => `/experience/${p.id}`} />} />
      <Route path="/rooms" element={<Rooms />} /><Route path="/rooms/:id" element={<Redirect to={(p) => `/experience/house-1?room=${p.id}`} />} />
      <Route path="/interiors" element={<Interiors />} /><Route path="/interiors/:id" element={<InteriorDetails />} />
      <Route path="/furniture" element={<Furniture />} /><Route path="/products" element={<Navigate replace to="/furniture" />} /><Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/materials" element={<Materials />} /><Route path="/favorites" element={<Favorites />} /><Route path="/compare" element={<Compare />} />
      <Route path="/floor-plan" element={<FloorPlanPage />} /><Route path="/request-design" element={<RequestDesign />} />
      <Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} /></Routes></Suspense></main></ErrorBoundary>
    <Footer /><CompareBar />
  </ExperienceProvider></CompareProvider></FavoritesProvider>
}
