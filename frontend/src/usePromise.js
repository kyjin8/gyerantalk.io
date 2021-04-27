// usePromise.js
import {useState, useEffect} from 'react';

export default function usePromise(promiseCreator, deps){

    const [loading, setLoading] = useState(false); // 대기중 일때
    const [resolved, setResolved] = useState(null); // 완료 일때
    const [error, setError] = useState(null); // 실패 일때

    useEffect(()=>{
        const process = async () => {
            setLoading(true);
            try {
                const resolved = await promiseCreator();
                setResolved(resolved);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        }
        process();
    },deps);

    return [loading, resolved, error];
} 