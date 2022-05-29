import * as prompts from 'prompts';
import { Result } from './Result';
import { SelectPrompt } from './SelectPrompt';
import { languages } from './data';

const askReason = async () => {
  const question = new SelectPrompt(
    'Для чего Вы хотите изучать программирование?',
    [
      { title: 'Мне это интересно', value: 'interests' },
      { title: 'Для ребенка', value: 'child' },
      { title: 'Чтобы больше зарабатывать', value: 'money' },
      { title: 'Хочу развиваться', value: 'improve' },
      { title: 'Хочу просто попробовать', value: 'try' },
      { title: 'Повеселиться', value: 'fun' },
    ],
  );
  return prompts(question.getArray());
};

const askChildAge = async () => {
  const question = new SelectPrompt('Возраст Вашего ребенка:', [
    { title: 'Менее 10 лет', value: 'less' },
    { title: '10 и более лет', value: 'more' },
  ]);
  return prompts(question.getArray());
};

const runForChild = async () => {
  const age = await askChildAge();

  if (age.answer === 'less') {
    new Result(languages.scratch);
  }
};

export const askQuestions = async () => {
  const reason = await askReason();

  if (reason.answer === 'child') {
    await runForChild();
  }
};
