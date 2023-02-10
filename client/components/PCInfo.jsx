
const PCInfo = ({PCArray}) => {
  return (    
  <li className="PCInfo"id={PCArray.id}>
    <div>
        {PCArray.map((PCInfo) => (
            <div className= "poster">
                <img src={PC.backdrop_path}alt=""/>
                </div>
        ))}
    </div>
    </li>
)}

export default PCInfo