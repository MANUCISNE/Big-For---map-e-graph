import { MapTrifold, ChartLine } from 'phosphor-react';

export function Button() {
  
  function handlePageMapa() {
    console.log('oi')
  }

  function handlePageGrafico() {

  }

  return (
          <header>
            <button onClick={handlePageMapa} title="Mapa de Fortaleza">
              < MapTrifold size={90}/>
            </button>

            <button onClick={handlePageGrafico} title="Gráfico de Lixo e Alagamento">
              < ChartLine size={90}/>
            </button>
          </header>)}