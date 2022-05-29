import { printProgress } from './utils';

export class Result {
  constructor(
    private language: string,
    private description: string,
    private links: string[],
  ) {}

  print() {
    printProgress();
  }
}
