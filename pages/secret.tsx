import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/client';

const Secret = () => {
	const [session, loading] = useSession();
	const [content, setContent] = useState();

	const fetchData = async () => {
		const res = await fetch('/api/secret');
		const json = await res.json();
		if (json.content) setContent(json.content);
	};

	useEffect(() => {
		fetchData();
	}, [session]);

	if (typeof window !== 'undefined' && loading) return null;

	if (!session) return <h1>Not signed in</h1>;
	return <h1>Welcome {JSON.stringify(session)}</h1>;
};

export default Secret;
