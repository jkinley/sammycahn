import React from 'react';

const PageTitle = ({title}) => {
  return (
    <section className="py-8 bg-gray-300">
			<div className="container mx-auto px-4">
				<h1>{title}</h1>
			</div>
		</section>
  );
};

export default PageTitle;
