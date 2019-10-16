import React from 'react';
import RootStack from './src/routes/routes';
import NavigationService from './src/routes/NavigationService';

export default class App extends React.Component {
  render() {
    return <RootStack
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
    />;
  }
}
