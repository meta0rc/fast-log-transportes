import { Logo } from "../logo/logo"
import { Nav } from "../nav/nav"
import HeaderContainer from "./style"

export const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <Nav />
        </HeaderContainer>
        )

}