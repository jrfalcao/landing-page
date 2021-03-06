export default function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
			<div className="container px-5">
				<a className="navbar-brand" href="#page-top">Landing Page</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item"><a class="nav-link" href="#!">Sign Up</a></li>
						<li className="nav-item"><a class="nav-link" href="#!">Log In</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
