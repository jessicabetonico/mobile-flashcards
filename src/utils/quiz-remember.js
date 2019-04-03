import { Notifications } from 'expo';
import { getLastPlayedQuiz, saveLastPlayedQuiz } from '../storage/last-played';

export function handlePlayQuizToday() {
  console.log('handlePlayQuizToday');
  saveLastPlayedQuiz(new Date());
  Notifications.cancelAllScheduledNotificationsAsync();
}

export async function handleChangeTimeQuizRemember() {
  const { dateTime } = await getLastPlayedQuiz();
  console.log('handleChangeTimeQuizRemember', dateTime);
  if (dateTime) {
    const today = new Date();
    const lastPlayedQuiz = new Date(dateTime);
    if (!isSameDay(today, lastPlayedQuiz)) {
      schedule2HoursLaterQuizRemember();
    }
  } else {
    schedule2HoursLaterQuizRemember();
  }
}

function isSameDay(date1, date2) {
  return date1.getDate() === date2.getDate()
    && date1.getMonth() === date2.getMonth()
    && date1.getFullYear() === date2.getFullYear();
}

async function schedule2HoursLaterQuizRemember() {
  await Notifications.cancelAllScheduledNotificationsAsync();

  const schedule2HoursLater = new Date();
  schedule2HoursLater.setHours(schedule2HoursLater.getHours() + 2);

  Notifications.scheduleLocalNotificationAsync({
      title: 'Reminder!',
      body: `You don't play quiz today!`,
    }, {
      time: schedule2HoursLater,
    }
  );
};
