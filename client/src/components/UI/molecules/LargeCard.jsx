import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Text from '<atoms>/Text'
import Title from '<atoms>/Title'

const LargeCard = ({ name, image, status, species, gender }) => (
  <LargeCard.Container>
    <img style={{ width: '100%' }} src={image} />
    <LargeCard.Content>
      <Title>{name}</Title>
      <Text>{status}</Text>
      <Text>{species}</Text>
      <Text>{gender}</Text>
    </LargeCard.Content>
  </LargeCard.Container>)

LargeCard.Container = styled.div`
  width: 600px;
  height: 500px;
  display:flex;
  border-radius: 0.25rem;
  box-shadow: 0px 2px 18px -4px rgba(0, 0, 0, 0.75);
`

LargeCard.Content = styled.div`
  display: flex;
  flex: 0 1 200px;
  flex-direction: column;
  padding: 1rem 1rem 0.5rem;
`

LargeCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string
}

export default LargeCard
