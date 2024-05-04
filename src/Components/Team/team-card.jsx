import "./team-card.css" ;
function TeamCard({name, role}){
    return(
        <div className="team-card">
            <h3>{name}</h3>
            <p>{role}</p>
            <br /><hr />
            <div className="social-icons">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
            </div>
        </div>
    )
}

export default TeamCard;