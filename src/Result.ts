import { Language } from './data';
import { printProgress } from './utils';
import * as chalk from 'chalk';

export class Result {
  constructor(private language: Language, private readonly log = console.log) {
    this.print();
  }

  private async print() {
    await printProgress();
    this.log(chalk.green(`Ваш язык - ${chalk.bgGreen(this.language.name)}`));
    this.log(
      chalk(`${chalk.underline('Описание')}: ${this.language.description}`),
    );
    this.log(
      chalk(`${chalk.underline('Курсы')}: ${this.language.links.join(', ')}`),
    );
  }
}
