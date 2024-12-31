type NavBarProps = {
    children: React.ReactNode;
};

function NavBar({ children }: NavBarProps) {
    return (
        <>
            {children}
        </>
    );
}

export default NavBar;