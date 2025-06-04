import React from 'react';
import {Text} from 'react-native';
import {FormScreen} from '../common/FormScreen';
import {FormHeader} from '../../components/common/FormHeader';

const CreateMeetingScreen = () => {
  return (
    <FormScreen
      header={
        <FormHeader
          title="모임 생성"
          rightButton1={{
            iconName: 'checkmark',
            onPress: () => console.log('Save meeting'),
          }}
        />
      }>
      <Text>모임 생성 화면1</Text>
    </FormScreen>
  );
};

export default CreateMeetingScreen;
