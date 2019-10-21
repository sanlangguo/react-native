import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation'; 
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Find from '../../pages/Find/index';
import CourseList from '../../pages/Course/list';
import Remote from '../../pages/Remote/index';
import Train from '../../pages/Train/index';
import User from '../../pages/User/index';
import _styles from './_styles';

// 底部导航列别表
const dataList = [
  {
    title: "课程",
    url: "/pages/course/list/list",
    id: 0
  }, {
    title: "发现",
    url: "/pages/find/list/list",
    id: 1
  },
  {
    title: "遥控",
    url: "/pages/remote-control/remote-control",
    id: 3
  }, {
    title: "我的训练",
    url: "/pages/training/index/index",
    id: 2
  }, {
    title: "我的",
    url: "/pages/my/index/index",
    id: 4
  },
];

const FooterNav = createBottomTabNavigator({
  CourseList: { screen: CourseList },
  Find: { screen: Find },
  Train: { screen: Train },
  Remote: { screen: Remote },
  User: { screen: User },
});

export default FooterNav
// export default function index() {
//   return (
//    dataList.map((item, index) => {
//     return (
//       <View>
//         <Image 
//           source={{uri:`https://cdn0.shapejoy.com/web/applets/footer-${index+1}${index === item.id ? '-on': ''}.png`}}
//           style={_styles.icoImg}
//         />
//         <Text>{item.title}</Text>
//       </View>
//     )})
//   )
// }