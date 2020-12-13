import React from 'react'
import {css} from '@emotion/core'

const Address = () => {
	return (
		<div className="mb-24 p-4 rounded bg-brand-lightgray">
			
            <p className="mb-4 font-bold">Sammy Cahn Music Company</p>
            
            <address className="mb-4">
                10 Lea Avenue, Suite 300<br />
                Nashville, Tenn. 37210
            </address>

            <address className="mb-4">
                229 West 28th Street, 11th floor<br />
                New York, NY 10001
            </address>

            <address className="mb-4">
                71-91 Aldwych<br />
                London, WC2B 4HN
            </address>
		</div>
	)
}



export default Address
