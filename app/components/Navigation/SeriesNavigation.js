import React from 'react';
import SeriesList from '../Series/SeriesList';
import NavigatorWrapper from './NavigatorWrapper';


const SeriesNavigation = () => {
  const initialRoute = {
    name: 'Series',
    index: 0,
    component: SeriesList,
    onPress: () => { console.log('press'); },
    rightText: 'Add',
  };
  return (
    <NavigatorWrapper initialRoute={initialRoute} />
  );
};

export default SeriesNavigation;
