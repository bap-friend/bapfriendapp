import React from 'react';
import {Text} from 'react-native';
import {SecondaryScreen} from '../common/SecondaryScreen';
import {ProfileEditHeader} from '../../components/mypage/ProfileEditHeader';

const ProfileEditScreen = () => {
  return (
    <SecondaryScreen header={<ProfileEditHeader />}>
      <Text>프로필 수정 화면</Text>
    </SecondaryScreen>
  );
};

export default ProfileEditScreen;
