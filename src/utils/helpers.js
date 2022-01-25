export const dateFormatter = date =>
  new Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'longOffset',
  }).format(new Date(date));
