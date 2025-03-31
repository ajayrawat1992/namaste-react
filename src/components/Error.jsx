import { useRouteError } from "react-router-dom"

const Error=()=>
{
    const error=useRouteError()
    console.log(error)
    return(
        <div>
            <h4>Oops!!</h4>
            <h3>There is Some Error</h3>
            <h2>{error.status} : {error.statusText  }</h2>
        </div>
    )
}

export default Error