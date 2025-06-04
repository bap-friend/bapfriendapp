import React from 'react';
import {View, Alert} from 'react-native';
import {SecondaryScreen} from '../common/SecondaryScreen';
import {SettingsHeader} from '../../components/settings/SettingsHeader';
import {SettingsItem} from '../../components/settings/SettingsItem';
import {useTheme} from '../../hooks/useTheme';

const SettingsScreen = () => {
  const {colors} = useTheme();

  const handleAccountPress = () => {
    // TODO: 계정 정보 설정 화면으로 이동
    console.log('계정 정보 설정');
  };

  const handleLogoutPress = () => {
    Alert.alert(
      '로그아웃',
      '정말 로그아웃 하시겠습니까?',
      [
        {text: '취소', style: 'cancel'},
        {text: '로그아웃', style: 'destructive', onPress: () => console.log('로그아웃')},
      ],
    );
  };

  const handleWithdrawPress = () => {
    Alert.alert(
      '회원 탈퇴',
      '정말 탈퇴하시겠습니까?\n탈퇴 시 모든 데이터가 삭제됩니다.',
      [
        {text: '취소', style: 'cancel'},
        {text: '탈퇴하기', style: 'destructive', onPress: () => console.log('탈퇴하기')},
      ],
    );
  };

  return (
    <SecondaryScreen header={<SettingsHeader />}>
      <View>
        <View>
          <SettingsItem
            title="계정 정보 설정"
            onPress={handleAccountPress}
          />
        </View>

        <View>
          <SettingsItem
            title="로그아웃"
            onPress={handleLogoutPress}
          />
        </View>

        <View>
          <SettingsItem
            title="탈퇴하기"
            onPress={handleWithdrawPress}
          />
        </View>
      </View>
    </SecondaryScreen>
  );
};

export default SettingsScreen;
