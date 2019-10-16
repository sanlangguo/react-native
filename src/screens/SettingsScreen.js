import React from 'react';
import {
    ScrollView,
    Platform,
    SafeAreaView,
    StatusBar
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {SettingsSwitch} from 'react-native-settings-components';

import styles from '../styles/Styles';
import COLOR_SCHEME from '../styles/ColorScheme';
import COLOR from '../styles/Color';

export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'Settings',
    };

    constructor() {
        super();
        this.state = {
            useCallKit: false,
        };
    }

    componentDidMount() {
        AsyncStorage.getItem('useCallKit')
            .then((value) => {
                this.setState({
                    useCallKit: JSON.parse(value),
                });
            });
    }

    render() {
        return (
            <SafeAreaView style={styles.safearea}>
                <StatusBar barStyle={COLOR_SCHEME.LIGHT} backgroundColor={COLOR.PRIMARY_DARK} />
                <ScrollView style={{flex: 1}}>
                    {Platform.OS === 'ios' && parseInt(Platform.Version, 10) >= 10 ? (
                        <SettingsSwitch
                            title={'Use CallKit'}
                            onSaveValue={(value) => {
                                console.log(`SettingsScreen: use CallKit: ${value}`);
                                this.setState({
                                    useCallKit: value,
                                });
                                AsyncStorage.setItem('useCallKit', JSON.stringify(value));
                            }}
                            value={this.state.useCallKit}
                        />
                    ) : null}
                </ScrollView>

            </SafeAreaView>
        );

    }

}
