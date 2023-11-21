export interface IProps {
  requestApi: (word: string) => Promise<void>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>

}