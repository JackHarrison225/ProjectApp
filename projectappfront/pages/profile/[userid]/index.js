import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link'
import AuthHomePage from '@/components/AuthHomePage';

export default function Profile() {
    const router = useRouter()

    const { userid } = router.query;
    return <div>
      
        <Link href="/createpost"> Create Post </Link>
        <AuthHomePage />
    </div>
}