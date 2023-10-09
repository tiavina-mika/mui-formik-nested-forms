export type IAutoCompleteOption<T = Record<string, any>>  = {
  value: string;
  data: T;
}