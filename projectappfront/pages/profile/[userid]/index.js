import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link'

export default function Profile() {
    const router = useRouter()

    const { userid } = router.query;
    return <div>
      
        <Link href="/createpost"> Create Post </Link>
    </div>
}