import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import CourseList from './pages/Course/list';
import CourseDetais from './pages/Course/details';
import Find from './pages/Find/index';
import Remote from './pages/Remote/index';
import Train from './pages/Train/index';
import User from './pages/User/index';

const RootStack = createStackNavigator(
  { 
    CourseList,
    CourseDetais,
    Find,
    Remote,
    Train,
    User
  },
  {
    initialRouteName: 'Remote',
  }
);

export default RootStack