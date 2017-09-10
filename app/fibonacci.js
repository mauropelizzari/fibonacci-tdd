exports.fibonacci = (n) => {

  let series = [];
  for(var i = 0; i<n; i++) {
    if (i<=1) series.push(1);
    else series.push(series[i-1]+series[i-2]);
  }

  return series;
}

exports.getNumberAt = (index) => {
  if (index<=1)
    return

  return this.fibonacci(index)[index-1];
}
