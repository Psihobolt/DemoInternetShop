export enum EStatus {
    none = '[Status] No action was taken on the data',
    isLoading = '[Status] Data is loading',
    isLoaded = '[Status] Data is loaded',
    isFail = '[Status] Loading data is fail',
}
export interface Loading{
    status: EStatus;
    error?: Error;
}