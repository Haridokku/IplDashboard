import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class Home extends Component {
  state = {isLoading: true, teamsList: []}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsList: updatedData, isLoading: false})
  }

  onLoading = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  onDisplayTeams = () => {
    const {teamsList} = this.state
    return (
      <div className="team-list-container">
        <ul className="team-list">
          {teamsList.map(each => (
            <TeamCard key={each.id} teamDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container">
        <div className="footer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoading ? this.onLoading() : this.onDisplayTeams()}
      </div>
    )
  }
}
export default Home

/*
        id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
          console.log(data)
    console.log(data.teams)
     console.log(updatedData)
      */
