import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="planets-app-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider>
        {planetsList.map(planetList => (
          <PlanetItem key={planetList.id} planetDetails={planetList} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
