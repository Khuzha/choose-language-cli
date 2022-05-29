import * as prompts from 'prompts';
import { Result } from './result';

const askReason = async () => {
  return prompts([
    {
      type: 'select',
      name: 'answer',
      message: 'Для чего Вы хотите изучать программирование?',
      choices: [
        { title: 'Мне это интересно', value: 'interests' },
        { title: 'Для детей', value: 'children' },
        { title: 'Чтобы больше зарабатывать', value: 'money' },
        { title: 'Хочу развиваться', value: 'improve' },
        { title: 'Хочу просто попробовать', value: 'try' },
        { title: 'Повеселиться', value: 'fun' },
      ],
    },
  ]);
};

export const askQuestions = async () => {
  const reason = await askReason();

  console.log(reason);

  const response = new Result('js', 'aaa', ['google.com']);

  response.print();
};
