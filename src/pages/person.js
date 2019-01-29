import React from 'react';
import { Link } from 'gatsby';
import { Trans } from 'react-i18next';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Producer from '../components/producer/producer';

const Person = () => (
  <Layout>
    <SEO title="Person" />
    <Producer person={window.localStorage.getItem('producerName')} />
    <Link to="/">
      <Trans>Back</Trans>
    </Link>
  </Layout>
);

export default Person;
