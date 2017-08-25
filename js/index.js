let n = parseInt(prompt('Enter N'));

function print(data) {
  document.write(data + '<br>');
}

function fib(n) {
  if (n === 0) {
    return 0;
  }
  else if (n === 1) {
    return 1;
  }
  return fib(n - 2) + fib(n - 1);
}

function bine(n) {
  let sqrt5 = Math.sqrt(5);
  let a = (1 + sqrt5) / 2;
  let b = (1 - sqrt5) / 2;
  return Math.round((Math.pow(a, n) - Math.pow(b, n)) / sqrt5);
}

function fib2(n) {
  if (n <= 2) {
    return 1;
  }
  else {
    let a = 1;
    let b = 1;
    let res = 0;
    for (let i = 2; i < n; i++) {
      res = a + b;
      a = b;
      b = res;
    }
    return res;
  }
}

function arr(n) {
  let fib3 = [1, 1];
  for (let i = 2; i < n; i++) {
    fib3[i] = fib3[i - 1] + fib3[i - 2];
  }
  // return fib3;
  return fib3[fib3.length - 1];
}

print('Рекурсія: ' + fib(n));
print('Формула Біне: ' + bine(n));
print('Цикл: ' + fib2(n));
print('Цикл+масив: ' + arr(n) + '<br>');
