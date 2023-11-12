import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="flex justify-between items-center my-7">
      <Link to="/">
        {" "}
        <h1 className="text-3xl font-bold">Task App</h1>
      </Link>
      <Link
        to="/tasks/new"
        className="bg-zinc-950 text-white font-bold py-2 px-4 roundedk"
      >
        Create Task
      </Link>
    </header>
  );
}

export default Navbar;
