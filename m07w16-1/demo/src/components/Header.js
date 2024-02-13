import './Header.css';

const Header = (props) => {
  console.log(props);

  return (
    <div>
      <h2 className={props.color}>Header component: {props.color}</h2>
    </div>
  );
};

export default Header;
