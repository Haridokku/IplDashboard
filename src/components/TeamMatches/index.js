import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import './index.css'

class MatchCard extends Component {
  state = {
    latestMatchData: {},
    teamBanner: '',
    matchCardData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIplMatch()
  }

  getIplMatch = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = response.json()
    console.log(data)

    const updateData = data.recent_matches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))
    console.log(updateData)

    const bannerDetails = data.team_banner_url
    const latestMatchDetails = data.latest_match_details.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))
    console.log(latestMatchDetails)

    this.setState({
      matchCardData: updateData,
      teamBanner: bannerDetails,
      latestMatchData: latestMatchDetails,
      isLoading: false,
    })
  }

  onLoading = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  onGetCompleteDetails = () => {
    const {latestMatchData, teamBanner, matchCardData} = this.state
    return (
      <div className="team-matches-list">
        <img src={teamBanner} alt="team banner" className="banner" />
        <h1 className="latest-heading">Latest Matches</h1>
        <LatestMatch latestMatchData={latestMatchData} />
        <ul className="match-card-details">
          {matchCardData.map(each => (
            <MatchCard key={each.id} matchCardDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="match-details-container">
        {isLoading ? this.onLoading() : this.onGetCompleteDetails()}
      </div>
    )
  }
}
export default MatchCard
