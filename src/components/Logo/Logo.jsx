import logo from "../../assets/img/equilibrium.jpg";

function Logo(props) {
  return (
    <div className="mt-4 w-[17.375rem] h-[17.375rem]">
      <img src={logo} className="rounded-xl" alt="Wall img" />
      <h1> { props.name } </h1>
    </div>
  );
}

export default Logo;
