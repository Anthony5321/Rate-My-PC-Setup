

const PC = ({PCArray}) => {
  return (    
  <li className="PC"id={PCArray.id}>
    <div>
        {PCArray.map((PC) => (
            <div className= "poster">
                <img src={PC.backdrop_path}alt="PC.title"/>
                        <h2>{PC.title}</h2>
                        <h3>{PC.release_date}</h3>
                </div>
        ))}
    </div>
    </li>
)}

export default PC