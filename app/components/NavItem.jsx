import Link from "next/link"

export default function NavItem({label,path,dataTest}){
    return (
        <Link data-test={dataTest} href={path}>
            {label}
        </Link>
    )
}