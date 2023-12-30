// import { useRouteError } from "react-router-dom";


export default function ErrorPage() {
    // const error = useRouteError();
    // console.log("Error", error)
    return (
        <div className="text-center">
            <h1>Error Occur</h1>
            <p>The page you requested on is not found</p>
            {/* <p>{error.message}</p> */}
        </div>
    )
}