import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Card = ({ name, image, onClick }) => (
  <Card.Container onClick={onClick}>
    <img style={{ width: '100%' }} src={image} />
    <Card.Content>
      {name}
    </Card.Content>
  </Card.Container>)

Card.Container = styled.div`
  box-shadow: 0px 2px 18px -4px rgba(0, 0, 0, 0.75);
  display: flex;
  border-radius: 0.25rem;
  flex-flow: column wrap;
  transition: box-shadow 0.5s;
  &:hover {
    cursor: pointer;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`

Card.Content = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem 1rem 0.5rem;
`

Card.defaultProps = {
  onClick: () => {}
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  onClick: PropTypes.func
}

export default Card
