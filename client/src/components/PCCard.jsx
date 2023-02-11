

const PCCard = () => {

    const PCArray = '../PC.json'

return (

<div>

      <div className="card">
        <div className="img-wrapper">
            <img src={PCArray.backdrop_path} alt="Computer" />
            <h3>{PCArray.title}</h3>
        </div>
      </div>
</div>

)}

  
  export default PCCard