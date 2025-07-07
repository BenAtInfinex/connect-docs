import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
export default function NotFoundContent({ className }) {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--12">
          <Heading as="h1" className="hero__title text-center">
            <Translate id="theme.NotFound.title" description="The title of the 404 page">
              📕 Oops! We Couldn't Find That Page
            </Translate>
          </Heading>
          <p className="margin-vert--md text-center">
            <Translate id="theme.NotFound.p1" description="The first paragraph of the 404 page">
              Where you following a link? Let us know using the Feedback button and we will setup a
              redirect for you in no time
            </Translate>
          </p>
        </div>
      </div>
    </main>
  );
}
