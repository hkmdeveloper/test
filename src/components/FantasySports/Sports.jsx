

const Sports = ({img, title, desc}) => {
    
  return (
    
    <div className="sports-item">
        <div className="sports-header">
            <div className="sports-icon">
                <img src={img} alt={title} />
            </div>
            <div className="sports-title">{title}</div>
        </div>
        <p>{desc}</p>
    </div>
    
  )
}

export default Sports