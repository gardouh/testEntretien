exports.processTemperatureData = (rawData) => {
  const monthlySum = {};
  const monthlyCount = {};

  rawData.result.forEach((item) => {
    item.series.forEach((seriesItem) => {
      const date = new Date(seriesItem.isodate);
      const yearMonth = `${date.getFullYear()}/${date.getMonth() + 1}`;

      if (!monthlySum[yearMonth]) {
        monthlySum[yearMonth] = 0;
        monthlyCount[yearMonth] = 0;
      }

      monthlySum[yearMonth] += seriesItem.value;
      monthlyCount[yearMonth]++;
    });
  });

  const monthlyAvg = {};
  for (const month in monthlySum) {
    monthlyAvg[month] = monthlySum[month] / monthlyCount[month];
  }

  return monthlyAvg;
};
