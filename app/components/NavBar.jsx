import NavItem from "./NavItem"

const navItems = [
    {
    label: 'Why Cypress?',
    path: '/',
    dataTest: 'nav-why-cypress'
    },
    {
    label: 'Overview',
    path: '/overview',
    dataTest: 'nav-overview'
    },
    {
    label: 'Fundamentals',
    path: '/fundamentals',
    dataTest: 'nav-fundamentals'
    },
    {
        label: 'Forms',
        path: '/forms',
        dataTest: 'nav-forms'
    },
    {
        label: 'Examples',
        path: '/examples',
        dataTest: 'nav-examples'
    },
    {
        label: 'Component',
        path: '/component',
        dataTest: 'nav-component' 
    },
    {
        label: 'Best Practices',
        path: '/best-practices',
        dataTest: 'nav-best-practices'
    },
]

export default function NavBar(){
    return (
        <ul className="nav-bar">
            {
                navItems.map((item)=> (
                    <NavItem 
                    key={item.label} 
                    label={item.label} 
                    path={item.path} 
                    dataTest={item.dataTest}
                    />
                ))
            }
        </ul>
    )
}