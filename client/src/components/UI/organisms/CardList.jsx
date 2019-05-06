import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Card from '<molecules>/Card'

const renderCards = (items = [], onClick) => (
  items.map((item, index) => {
    return (<Card
      name={item.name}
      image={item.image}
      id={item.id}
      onClick={() => onClick(item)}
      key={index}
    />)
  })
)

const CardList = ({ items, onClick }) => (
  <CardList.Container>
    {renderCards(items, onClick)}
  </CardList.Container>

)

CardList.Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  padding: 4rem;
`

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string
    })
  ),
  onClick: PropTypes.func
}

export default CardList
