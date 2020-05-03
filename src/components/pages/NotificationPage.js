import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

const NotificationPage = props => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [showDate, setShowDate] = useState(false);

  const [title, setTitle] = useState('Title');
  const [message, setMessage] = useState('Messages');
  const [secondDelay, setSecondDelay] = useState('20');

  useEffect(() => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: token => {
        console.log('TOKEN:', token);
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification: notification => {
        console.log('NOTIFICATION:', notification);

        // process the notification

        // required on iOS only (see fetchCompletionHandler docs: https://github.com/react-native-community/react-native-push-notification-ios)
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });
  }, []);

  return (
    <View>
      <Button
        title="Set Local Notification"
        onPress={() => {
          PushNotification.localNotificationSchedule({
            title,
            message,
            number: 3,
            soundName: 'happy.mp3',
            date: new Date(Date.now() + parseInt(secondDelay) * 1000), // in 60 secs
          });
          alert('notification set');
        }}
      />
      <TextInput
        value={title}
        onChangeText={setTitle}
        autoFocus
        placeholder="Title"
        style={{
          backgroundColor: 'white',
          margin: 20,
          padding: 10,
          borderRadius: 10,
        }}
      />
      <TextInput
        value={message}
        onChangeText={setMessage}
        multiline
        placeholder="Message"
        style={{
          backgroundColor: 'white',
          margin: 20,
          height: 45,
          padding: 10,
          borderRadius: 10,
        }}
      />
      <TextInput
        value={secondDelay}
        onChangeText={setSecondDelay}
        keyboardType={'number-pad'}
        style={{
          backgroundColor: 'white',
          margin: 20,
          padding: 10,
          borderRadius: 10,
        }}
      />

      {showDate && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          mode="time"
          value={date}
          onChange={() => {}}
        />
      )}
      <Text>{JSON.stringify({ secondDelay, title, message })}</Text>
    </View>
  );
};

export default NotificationPage;
