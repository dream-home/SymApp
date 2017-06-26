import React, { Component, PropTypes } from 'react';
import {
  Button,
  ScrollView,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import { inject, observer } from 'mobx-react';

import userAction from '../../actions/User';
import { utils, module } from '../../styles';

@inject('user')
@observer
class Navigation extends Component {

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };

  componentWillMount() {
    userAction.isLogin().then((isLogin) => {
      if (!isLogin) {
        this.props.navigation.navigate('Login');
      }
    });
  }

  _logout = () => {
    userAction.logout().then((sc) => {
      if (sc === 0) {
        this.props.navigation.navigate('Login');
      }
    });
  };

  render() {
    const { user } = this.props;

    return (
      <ScrollView style={utils.statusBar}>
        <View style={module.wrap}>
          <TouchableOpacity style={module.list} onPress={this._goView}>
            <Text >帖子[开发中]</Text>
          </TouchableOpacity>
          <TouchableOpacity style={module.list} onPress={this._goView}>
            <Text>回帖[开发中]</Text>
          </TouchableOpacity>
          <TouchableOpacity style={module.list} onPress={this._goView}>
            <Text>匿贴[开发中]</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[module.list, module.listLast]} onPress={this._goView}>
            <Text>匿回[开发中]</Text>
          </TouchableOpacity>
        </View>
        <View style={module.wrap}>
          <TouchableOpacity style={module.list} onPress={this._goView}>
            <Text>关注帖子[开发中]</Text>
          </TouchableOpacity>
          <TouchableOpacity style={module.list} onPress={this._goView}>
            <Text>关注用户[开发中]</Text>
          </TouchableOpacity>
          <TouchableOpacity style={module.list} onPress={this._goView}>
            <Text>关注标签[开发中]</Text>
          </TouchableOpacity>
          <TouchableOpacity style={module.list} onPress={this._goView}>
            <Text>收藏帖子[开发中]</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[module.list, module.listLast]} onPress={this._goView}>
            <Text>关注者[开发中]</Text>
          </TouchableOpacity>
        </View>
        <View style={module.wrap}>
          <TouchableOpacity style={module.list} onPress={this._goView}>
            <Text>积分[开发中]</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[module.list, module.listLast]} onPress={this._goView}>
            <Text>链接熔炉[开发中]</Text>
          </TouchableOpacity>
        </View>
        <View style={module.wrap}>
          <TouchableOpacity
            style={[module.list, module.listLast]}
            onPress={()=>this.props.navigation.navigate('HomeSettingNavigation')}
          >
            <Text>设置</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>);
  }
}

export default Navigation;
