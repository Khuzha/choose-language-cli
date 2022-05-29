import * as prompts from 'prompts';

export class SelectPrompt {
  constructor(
    private readonly message: string,
    private readonly choices: prompts.Choice[],
  ) {}

  private getArray(): Array<prompts.PromptObject<string>> {
    return [
      {
        type: 'select',
        name: 'answer',
        message: this.message,
        choices: this.choices,
      },
    ];
  }

  async ask() {
    return prompts(this.getArray());
  }
}
