import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Card from '<molecules>/Card'

const renderCards = (items = []) => (
  items.map((item, index) => {
    return (<Card
      name={item.name}
      image={item.image}
      key={index}
    />)
  })
)

const CardList = ({ items }) => (
  <CardList.Container>
    {renderCards(items)}
  </CardList.Container>

)

CardList.Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  padding: 40px;
`

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string
    })
  )
}

export default CardList
