import React, { Fragment } from 'react'
import { Query } from 'react-apollo'

import CardList from '<organisms>/CardList'
import GET_ALL_CHARACTERS from '<graphql>/pages/Characters.gql'

const CharactersPage = () => {
  return (
    <Fragment>
      <h2>Characters</h2>
      <Query
        query={GET_ALL_CHARACTERS}>
        {
          ({ data, loading }) => {
            if (loading) return <div>Loading....</div>
            return (<CardList
              items={data.characters.results}
            />)
          }
        }
      </Query>
    </Fragment>
  )
}

export default CharactersPage
