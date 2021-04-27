// eslint-disable-next-line import/no-cycle
import { MainType } from "..//features/Home/Home.state";

export interface AppInterface {
  characters: MainType;
}

export class ActionClass {
  readonly type: string | undefined;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toJSON(): Record<string, any> {
    return { ...this };
  }
}
