export interface Loading{
    status: {
        isLoading: boolean;
        isLoaded: boolean;
        isError: boolean;
    };
    error:{
        message: string;
    }
}