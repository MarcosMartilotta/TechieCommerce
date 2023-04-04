import "./hamburguer.scss";
const Hamburguer = ({handleClick}) => {
  return (
    <div onClick={handleClick} className="hamburguer_container">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburguer;
