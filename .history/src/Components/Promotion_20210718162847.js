import React from 'react';

export default function Promotion(props) {
	return (
		<section id="scroll">
			<div class="container px-5">
				<div class="row gx-5 align-items-center">
					<div class="col-lg-6 order-lg-2">
						<div class="p-5"><img class="img-fluid rounded-circle" src={props.imgUrl} alt={props.promoTitle} /></div>
					</div>
					<div class="col-lg-6 order-lg-1">
						<div class="p-5">
							<h2 class="display-4">{props.promoTitle}</h2>
							<p>{props.description}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
