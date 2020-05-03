export default function generateRandomNumber(n = 6) {
  return (
    Math.floor(Math.random() * (9 * Math.pow(10, n - 1))) + Math.pow(10, n - 1)
  );
}
