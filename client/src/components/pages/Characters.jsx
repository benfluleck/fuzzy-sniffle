import React from 'react'
import { Query } from 'react-apollo'
import PropTypes from 'prop-types'

import withPageTemplate from '../HOC/withPageTemplate'
import CardList from '<organisms>/CardList'
import GET_ALL_CHARACTERS from '<graphql>/pages/Characters.gql'

function Characters (props) {
  function handleClick (character) {
    props.history.push(`/${character.id}`, {
      character
    })
  }

  return (
    <Query
      query={GET_ALL_CHARACTERS}>
      {
        ({ data, loading }) => {
          if (loading) return <div>Loading....</div>
          return (<CardList
            items={data.characters.results}
            onClick={handleClick}
          />)
        }
      }
    </Query>
  )
}

Characters.propTypes = {
  history: PropTypes.object
}

export default withPageTemplate(Characters, 'Characters')
