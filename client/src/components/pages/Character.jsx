import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

import withPageTemplate from '../HOC/withPageTemplate'
import GET_CHARACTER from '<graphql>/pages/Character.gql'
import LargeCard from '<molecules>/LargeCard'

const Character = (props) => {
  const { history: { location: { state: { character } } } } = props

  const id = character.id
  return (
    <Query
      query={GET_CHARACTER} variables={{ id }}>
      {
        ({ data, loading }) => {
          if (loading) return <div>Loading....</div>
          return (
            <LargeCard
              image={data.character.image}
              name={data.character.name}
              status={data.character.status}
              species={data.character.species}
              gender={data.character.gender}
            />
          )
        }
      }
    </Query>)
}

Character.propTypes = {
  history: PropTypes.object
}

export default withPageTemplate(Character, 'Character')
