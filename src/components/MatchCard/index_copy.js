import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    result,
    competingTeamLogo,
    competingTeam,
    matchStatus,
  } = matchCardDetails
  const checking = matchStatus === 'Won' ? 'onGettingWon' : ''
  return (
    <li className="list-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logo2"
      />
      <p className="heading2">{competingTeam}</p>
      <p className="description">{result}</p>
      <p className={`status ${checking}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
