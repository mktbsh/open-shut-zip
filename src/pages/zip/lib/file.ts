export const byteToUnit = (bytes: number, digit = 2) => {
  const unit = ["B", "KB", "MB", "GB", "TB", "PB"];

  let count = 0;
  while (bytes >= 1024 && count < unit.length) {
    bytes /= 1024;
    ++count;
  }

  return [bytes.toFixed(digit), unit[count]].join(" ");
};
