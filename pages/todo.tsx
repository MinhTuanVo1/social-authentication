type Data = {
  name: string
}

function Todo() {
    return (
        <form method="post" action="/api/hello">
            <input type='text' name="name"/>
            <button type="submit">submit</button>
        </form>
    )
}


export default Todo;