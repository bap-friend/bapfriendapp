import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Platform} from 'react-native';
import {SecondaryScreen} from '../common/SecondaryScreen';
import {ProfileEditHeader} from '../../components/mypage/ProfileEditHeader';
import {ProfileImage} from '../../components/common/ProfileImage';
import {useTheme} from '../../hooks/useTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileEditScreen = () => {
  const {colors} = useTheme();
  const insets = useSafeAreaInsets();
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [nickname, setNickname] = useState('');

  const handleImagePress = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 1,
      });

      if (result.assets && result.assets[0].uri) {
        setImageUrl(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Image picker error:', error);
    }
  };

  return (
    <SecondaryScreen header={<ProfileEditHeader />}>
      <View style={[
        styles.container,
        {paddingBottom: insets.bottom}
      ]}>
        <TouchableOpacity 
          style={styles.imageContainer}
          onPress={handleImagePress}
        >
          <ProfileImage 
            size={120} 
            imageUrl={imageUrl}
          />
          <View style={[styles.cameraIcon, {backgroundColor: colors.border}]}>
            <Icon name="camera" size={20} color={colors.text} />
          </View>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Text style={[styles.label, {color: colors.text}]}>닉네임</Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.border,
                color: colors.text,
              }
            ]}
            value={nickname}
            onChangeText={setNickname}
            placeholder="닉네임을 입력해주세요"
            placeholderTextColor={colors.unselected}
          />
        </View>
      </View>
    </SecondaryScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 32,
    marginBottom: 48,
    position: 'relative',
  },
  cameraIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '100%',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 15,
  },
});

export default ProfileEditScreen;
