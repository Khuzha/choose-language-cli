import * as ProgressBar from 'progress';
import * as chalk from 'chalk';

export const printProgress = (total = 10, width = 21) => {
  let ticks = 0;

  console.log(chalk.green('Вычсиляем наиболее подходящий Вам язык...'));

  const bar = new ProgressBar(':bar осталось: :counter', {
    total,
    width,
  });

  const timer = setInterval(function () {
    ticks++;
    bar.tick({ counter: 10 - ticks });
    if (bar.complete) {
      clearInterval(timer);
    }
  }, 100);
};
