import { auth } from '@/app/auth';
import { redirect } from 'next/navigation';

export default async function Page() {
    const session = await auth();

    if (!session) {
        redirect(`${process.env.SIGN_PAGE_URL || '/login'}?callbackUrl=/server-test`)
    }
    return <>Protected Server Component Test</>
}