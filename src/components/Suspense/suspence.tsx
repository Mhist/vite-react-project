import { lazy, Suspense } from 'react';

const AsyncComponent = lazy(() => import('../AsyncComponent/asyncComponent'));
const SuspenseComp = () => {

    return (
        <>
            <Suspense fallback={<div>loading...</div>}>
                <AsyncComponent />
            </Suspense>
        </>
    );
};

export default SuspenseComp;