import React from 'react'
import Login from '../components/Login'
import PopHeader from '../components/PopHeader'
import PopHero from '../components/PopHero'
import Section from 'grommet/components/Section'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <PopHeader />
        <PopHero />
      </div>
    )
  }
}
