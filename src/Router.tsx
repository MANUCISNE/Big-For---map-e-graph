import { Routes, Route } from 'react-router-dom' 
import GraficoFortaleza from './pages/GraficoFortaleza'
import { MapaFortaleza } from './pages/MapaFortaleza'
import { Home } from './pages/Home'
 
export function Router() { 
  return ( 
    <Routes> 
      <Route path="/" element={<Home />}> 
      <Route path="/mapafortaleza" element={<MapaFortaleza />} /> 
      <Route path="/graficofortaleza" element={<GraficoFortaleza />} /> 
      </Route> 
    </Routes> 
  ) 
}