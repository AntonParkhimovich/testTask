import Link from 'next/link'
import { useRouter } from 'next/router';
export const Header = () => {
    const router = useRouter()
    let { cityName } = router.query
    return (
        <header className={'header'}>
            <Link className={'header-link'} href={`/in/${cityName}`} as={`/in/${cityName}`}>HOME</Link>
            <Link className={'header-link'} href={`/in/${cityName}/detail`} as={`/in/${cityName}/detail`}>DETAIL</Link>
        </header>
    )
}