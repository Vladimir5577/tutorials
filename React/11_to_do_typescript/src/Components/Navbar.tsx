const Navbar: React.FC = () => {
	return (
		<nav>
		    <div className="nav-wrapper purple darken-2 px1">
		      <a href="/" className="brand-logo">React + Typescript</a>
		      <ul className="right hide-on-med-and-down">
		        <li><a href="/">To Do List</a></li>
		        <li><a href="/a">Info</a></li>
		      </ul>
		    </div>
		</nav>
	);
};

export default Navbar;