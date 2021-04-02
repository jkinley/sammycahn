import React from 'react';
import { Link } from "gatsby";

const TitaNote = () => {
  return (
    <div className="flex flex-col">
      <h2 className="mb-2">A Note from Tita Cahn</h2>
      <p className="flex-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
      <Link to="/titas-note" className="btn ml-auto" component={Link}>Read More</Link>
    </div>
  );
};

export default TitaNote;
