import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { pageStyles } from './styles'
import { Layout } from '../../components/flex'
import { onPrev } from '../../../utils'

import data from '../../assets/data/classes.json'
import SkillSearch from './SkillSearch'
import SkillList from './SkillList'

class Skill extends Component {
  constructor() {
    super()

    this.state = {
      keyword: null
    }

    this.handleKeyMessage = this.handleKeyMessage.bind(this)
  }



  handleKeyMessage(value) {
    this.setState({ keyword: value })
    console.log(this.state.keyword)
  }

  render() {
    // const { skills } = this.props
    const skills = data.classes
    return (
      <Layout title='Skill'>
        <SkillSearch onKey={this.handleKeyMessage} />
        <SkillList data={skills} />
      </Layout>
    )
  }
}

export default Skill