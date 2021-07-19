import React from 'react';

export default function Promotion(props) {
	return (
		<section id="scroll">
			<div className="container px-5">
				<div className="row gx-5 align-items-center">
					<div className={props.imageDir ? "col-lg-6 order-lg-2" : 'col-lg-6'}>
						<div className="p-5"><img className="img-fluid rounded-circle" src={props.imgUrl} alt={props.promoTitle} /></div>
					</div>
					<div className={props.imageDir ? "col-lg-6 order-lg-1" : 'col-lg-6'}>
						<div className="p-5">
							<h2 className="display-4">{props.promoTitle}</h2>
							<p>{props.description}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
