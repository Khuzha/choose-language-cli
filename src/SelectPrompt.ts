import * as prompts from 'prompts';

export class SelectPrompt {
  constructor(
    private readonly message: string,
    private readonly choices: prompts.Choice[],
  ) {}

  getArray(): Array<prompts.PromptObject<string>> {
    return [
      {
        type: 'select',
        name: 'answer',
        message: this.message,
        choices: this.choices,
      },
    ];
  }
}
