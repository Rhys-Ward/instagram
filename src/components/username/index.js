export const UsernameForm = (sumbitHandler , setUser) => {
    return (
        <form onSubmit={sumbitHandler}>
        <input onChange={(e) => setUser(e.target.value) }/>
        </form>
    )
}