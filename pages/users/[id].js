import { useRouter } from "next/dist/client/router";

const User = () => {
    const router = useRouter();
    console.log(router.query);

    const { id } = router.query

    return (
        <div>
            <h1>User: {id}</h1>
        </div>
    )
}

export default User;