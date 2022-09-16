interface ErrorType {
    error : string
}

export const ErrorComponent = ({error} : ErrorType) => {
    return (
        <>
        <p>{error}</p>
        </>
    )
};