import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div id="page">
      <h1 id="page-title">About Us</h1>
      <p className="text-justify">
        <strong>IEEE Student Branch of Brescia</strong>
        {' '}
        is the reference for the
        {' '}
        <em>IEEE </em>
        (Institute of Electrical and Electronics Engineers) in Brescia. Our
        {' '}
        <strong>main goal</strong>
        {' '}
        is to integrate the modus operandi of
        scientific research into the academic and professional career of each
        member, this takes place through group projects or individual research
        in different fields of IT.
      </p>
      <p className="text-justify">
        The
        {' '}
        <strong>Branch</strong>
        {' '}
        offers the opportunity to
        {' '}
        <em>research</em>
        {' '}
        at the same level as IEEE members from around the world, while remaining
        completely immersed in the academic environment, with the support of the
        teaching staff and doctoral students.
      </p>
      <p className="text-justify">
        The possibility to get in touch realities other than purely scholastic
        allows one to have a different vision about what
        {' '}
        <strong>developing</strong>
        {' '}
        and
        <strong>maintaining</strong>
        {' '}
        a project
        mean, and also the ability to
        <strong>learn</strong>
        {' '}
        new concepts.
      </p>
      <p className="text-justify">
        In addition to the
        {' '}
        <em>projects</em>
        , we give our members the
        opportunity to attend a conference, to talk about their project and the
        difficulties they have encountered, as well as the things they have
        learned.
      </p>
      <p className="text-justify">
        Within the site there are some of the
        {' '}
        <em>projects</em>
        {' '}
        we are
        developing or that we have carried out over the past year.
      </p>
    </div>
  );
}

export default AboutUs;
