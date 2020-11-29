import React from 'react'
import {css} from '@emotion/core'

const Address = () => {
	return (
		<div>
			<address css={address}>
				<strong>Sammy Cahn Music Company</strong><br/>
				704 North Canon Drive<br/>
				Beverly Hills, <abbr class="region" title="California">CA</abbr> 90210
			</address>
		</div>
	)
}

const address = css`
	font-size: 0.9rem;
	padding: 1rem;
	border-radius: 4px;
	background-color: #eaeaea;
	width: 45vw;
	@media (min-width: 1024px) {
		width: 100%;
	}
`

export default Address
