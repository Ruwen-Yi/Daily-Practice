export default function Clock({ time }) {
  let hours = time.getHours();
  let mode = '';
  if (hours >= 0 && hours <= 6) {
    mode = 'night';
  } else {
    mode = 'day';
  }
  return (
    <h1 className={mode}>
      {time.toLocaleTimeString()}
    </h1>
  );
}
