import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageUrl} = teamDetails

  return (
    <li className="list-item">
      <Link to={`/team-matches/${id}`} className="item-link">
        <div className="displaying">
          <img src={teamImageUrl} alt={name} className="logo" />
          <p className="head">{name}</p>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
