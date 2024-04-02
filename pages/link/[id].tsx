import {useRouter} from "next/router";

const LinkDetail = () => {
    const router = useRouter()
    const linkId = router.query['id'];
    return (
        <>
            <div className="component-default-margin">
                <h1>Here is {linkId}!</h1>
            </div>
        </>
    );
};

export default LinkDetail;
