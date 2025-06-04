export type RootStackParamList = {
  Main: undefined;
  Settings: undefined;
  Search: undefined;
  Notifications: undefined;
  Splash: undefined;
  CreateMeeting: undefined;
  ProfileEdit: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
