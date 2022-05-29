/* eslint-disable max-len */
import * as chalk from 'chalk';

export type Language = {
  name: string;
  description: string;
  links: string[];
};

export type Languages = Record<string, Language>;

export const languages: Languages = {
  scratch: {
    name: 'Scratch',
    description: `${chalk.bold(
      'Scratch',
    )} — это визуальная объектно-ориентированная среда программирования.
    В ней ученики управляют объектами-спрайтами. Для них задается графическое
    представление, которое может быть импортировано из любого источника
    изображения, и скрипт действий, который составляется из блоков
    по принципу drag-and-drop.`,
    links: [
      'https://www.udemy.com/topic/scratch-programming/?persist_locale&locale=ru_RU',
      'https://younglinux.info/scratch/',
      'https://clubpixel.ru/scratch',
    ],
  },
};
