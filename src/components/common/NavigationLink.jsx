const NavLink = ({ href, children }) => (
    <a
        href={href}
        className='group relative inline-block py-2 text-sm font-bold tracking-wide text-gray-600 transition-colors hover:text-black'
    >
        {children}
        {/* The growing underline element */}
        <span className='absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full' />
    </a>
)
export default NavLink
