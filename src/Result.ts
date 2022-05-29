import { Language } from './data';
import { printProgress } from './utils';
import * as chalk from 'chalk';

export class Result {
  constructor(private language: Language, private readonly log = console.log) {
    this.print();
  }

  private async print() {
    await printProgress();
    this.log(chalk.red(`Ваш язык - ${chalk.underline(this.language.name)}`));
  }
}
