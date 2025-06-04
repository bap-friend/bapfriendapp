export type RootStackParamList = {
  Main: undefined;
  Settings: undefined;
  Search: undefined;
  Notifications: undefined;
  Splash: undefined;
  CreateMeeting: undefined;
  ReadMeeting: undefined;
  MyMeeting: undefined;
  MeetingHistory: undefined;
  PendingMeeting: undefined;
  LikeMeeting: undefined;
  ProfileEdit: undefined;
  ChatRoom: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
