const bubbleSort = (items: number[]): void => {
  for (let i = 0; i < items.length - 1; i++) {
    for (let j = 0; j <= items.length - i - 2; j++) {
      const k = j + 1;
      if (items[j] > items[k]) {
        const temp = items[j];
        items[j] = items[k];
        items[k] = temp;
      }
    }
  }
};

export default bubbleSort;
