import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
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
  } = latestMatch
  return (
    <div className="latest-details-container">
      <div className="venue-details">
        <p className="team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
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
