const Dream11Card = ({ count, img, title, desc }) => {
  return (
    <div className="dream11-card-item">
      <div className="card-count">{count}</div>
      <div className="dream11-card-title-img">
        <div className="card-title">{title}</div>
        <img src={img} alt={title} className="card-img" />
      </div>
      <div className="card-desc">{desc}</div>
    </div>
  );
};

export default Dream11Card;
