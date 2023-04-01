import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    umpires,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    result,
    date,
    competingTeamLogo,
    venue,
    competingTeam,
  } = latestMatchData
  return (
    <div className="latest-details-container">
      <div className="venue-details">
        <h1 className="team">{competingTeam}</h1>
        <p className="describe">{date}</p>
        <p className="describe">{venue}</p>
        <p className="describe">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="logo1"
      />
      <div className="innings">
        <p className="describe">first Innings</p>
        <p className="describe">{firstInnings}</p>
        <p className="describe">Second Innings</p>
        <p className="describe">{secondInnings}</p>
        <p className="describe">Man Of The Match</p>
        <p className="describe">{manOfTheMatch}</p>
        <p className="describe">Umpires</p>
        <p className="describe">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
