import TeamCard from "./team-card"
import "./team.css"
export default function Team(){
    return(
        <>
        <div className="head">
        <h1 id="team-heading">Team E-<br/>CELL RGPV</h1>
        <img src="./src/assets/e-cell.jpg" id="e-cell-photo" />
        </div>
        <div className="team-cards">
            <TeamCard name= "Albus Dumbeldore" role= "Head Coordinator" />
            <TeamCard name= "Sirius Snape" role= "Head Coordinator" />
            <TeamCard name= "Minerva McGongall" role= "Head Coordinator" />
            <TeamCard name= "Rubeus Hagrid" role= "Supervisor" />
            <TeamCard name= "Cedric Diggory" role= "Supervisor" />
            <TeamCard name= "Harry Potter" role= "Tech Team" />
            <TeamCard name= "Hermione Granger" role= "Tech Team" />
            <TeamCard name= "Ronald Weasley" role= "Tech Team" />
            <TeamCard name= "Ginny Weasley" role= "Startup Support" />
            <TeamCard name= "Draco Malfoy" role= "Execution Manager" />
            <TeamCard name= "Neville longbottom" role= "Design Co-head" />
            <TeamCard name= "Luna Lovegod" role= "Design Co-head" />
        </div>
        </>
    )
}