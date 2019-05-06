import React from 'react'
import PropTypes from 'prop-types'
import withPageTemplate from '../HOC/withPageTemplate'

const Character = (props) => {
  const { history: { location: { state: { character } } } } = props

  return (<h1>{JSON.stringify(character)}</h1>)
}

Character.propTypes = {
  history: PropTypes.object
}

export default withPageTemplate(Character, 'Character')
