import React, {useState} from 'react';

export default function Header() {
	const [ email, setEmail ] = useState('');

	function handleCadastra() {
		localStorage.setItem('user_email', email);
	}

	return (
		<header className="masthead text-center text-white" id="masthead">
			<div className="masthead-content">
				<div className="container px-5">
					<h1 className="masthead-heading mb-0">Super Black Fride</h1>
					<h3 className="m-3">Receba informações de descontos em primeira mão!</h3>
					<input className="input-email" type="email" value={email} placeholder="Seu melhor e-mail!" onChange={ e => setEmail(e.target.value)} />
					<a className="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll" onClick={handleCadastra}>Cadastrar</a>
				</div>
			</div>
			<div className="bg-circle-1 bg-circle"></div>
			<div className="bg-circle-2 bg-circle"></div>
			<div className="bg-circle-3 bg-circle"></div>
			<div className="bg-circle-4 bg-circle"></div>
		</header>
	);
}
