import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'

import './index.css'

class TeamMatches extends Component {
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
    const data = await response.json()
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
    const latestMatch = data.latest_match_details
    const latestMatchDetails = {
      umpires: latestMatch.umpires,
      result: latestMatch.result,
      manOfTheMatch: latestMatch.man_of_the_match,
      id: latestMatch.id,
      date: latestMatch.date,
      venue: latestMatch.venue,
      competingTeam: latestMatch.competing_team,
      competingTeamLogo: latestMatch.competing_team_logo,
      firstInnings: latestMatch.first_innings,
      secondInnings: latestMatch.second_innings,
      matchStatus: latestMatch.match_status,
    }
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
export default TeamMatches
