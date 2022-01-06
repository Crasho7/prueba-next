import Link from 'next/link'
import {useRouter} from 'next/router'

const NotFound = () => {
    const router = useRouter();
    return(  
    <>
        <h1>Ooops..</h1>
        <h2>Not Found</h2>
        <p>Go back to the <button onClick={() => router.back()}>go back</button></p>
    </>
);
}
 
export default NotFound;