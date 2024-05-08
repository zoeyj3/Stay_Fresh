export const API_ADDRESS = "https://stayfresh-9e8c7ab11753.herokuapp.com"

export function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getBestBeforeDate(preservingTime) {
  const now = new Date();
  const daysToAdd = parseInt(preservingTime, 10);
  if (!isNaN(daysToAdd)) {
    now.setDate(now.getDate() + daysToAdd);
  }
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getPreserveDayByBestBefore(bestBeforeDate) {
  const bestBefore = new Date(bestBeforeDate);
  const today = new Date(getCurrentDate());
  const diffInTime = bestBefore.getTime() - today.getTime()
  const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24))
  return diffInDays;
}