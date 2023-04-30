import React from 'react';
import Head from 'next/head';
import Пятнашки from '../components/Пятнашки';

const App = () => {
  return (
    <div>
      <Head>
        <title>Пятнашки</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Пятнашки />
    </div>
  );
};

export default App;
