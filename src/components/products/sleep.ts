/* eslint-disable no-empty */
export function sleep(ms: number) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}
