const findJudge = (Number, trust) => {
    const p = new Array(Number + 1).fill(0);
    for (let [i, j] of trust) {
      --p[i];
      ++p[j];
    }
    for (let i = 1; i < p.length; ++i) if (p[i] === Number - 1) return i;
    return -1;
  };