export default function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
			<div className="container px-5">
				<span className="navbar-brand">Landing Page</span>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item"><a className="nav-link" href="#scroll">Informações</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
