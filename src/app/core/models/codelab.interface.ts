export interface Codelab  {
  readonly _id: string;
  readonly title: string;
  readonly author: string;
  readonly categories: string[];
  readonly duration: number;
  readonly level: string;
  readonly date_posted: string;
  readonly practice: string;
  readonly description: string;
  readonly steps: Step[];
}

export interface Step {
  readonly title: string;
  readonly stepNumber: number;
  readonly body: string;
}

