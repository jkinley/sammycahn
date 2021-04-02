import React from 'react'
import { Link } from "gatsby";

const AboutSammy = () => {
  return (
    <div className="flex flex-col">
      <h2 className="mb-2">About Sammy</h2>
      <p className="flex-1">Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui.</p>
      <Link to="/bio" className="btn ml-auto" component={Link}>Read More</Link>
    </div>
  );
};

export default AboutSammy;
