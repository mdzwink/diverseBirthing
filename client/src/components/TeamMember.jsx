const TeamMember = (props) => {
  const { member } = props;

  return (
    <>
      <td><div className="avatar"></div></td>
      <td>&nbsp;{member.name}<br/>{member.title}</td>
      {member.advisor ? 
        <td><div className="avatar"></div></td>
        :
        <td></td>
      }
      <td>{member.advisor}</td>
    </>
  )
}

export default TeamMember;