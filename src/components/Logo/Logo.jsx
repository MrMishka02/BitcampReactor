import logo from "../../assets/img/equilibrium.jpg";

function Logo({ name }) {
  return (
    <div className="mt-4 w-[17.375rem] h-[17.375rem]">
      <img src={logo} className="rounded-xl" alt="Wall img" />
      <h1 className="text-white text-xl uppercase"> {name} </h1>
    </div>
  );
}

export default Logo;
