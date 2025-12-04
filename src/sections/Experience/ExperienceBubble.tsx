const ExperienceBubble = (props) => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h2>{props.title}</h2>
        <h3>{props.date}</h3>
      </div>
      <h3>{props.company}</h3>
      {props.description.map((description) => {
        return (
          <>
            <p key={description}>{description}</p>
            <br></br>
          </>
        )
      })}
    </div>
  )
}

export default ExperienceBubble
