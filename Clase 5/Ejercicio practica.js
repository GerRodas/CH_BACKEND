const jesus = {};
for (let i = 0; i < 10000; i++) {
  let a = parseInt(Math.random() * 20);
  if (!jesus[a]) {
    jesus[a] = 1;
  } else {
    jesus[a]++;
  }
}
console.log(jesus);
