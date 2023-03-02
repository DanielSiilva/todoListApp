import Logo from '../../../assets/Logo.png'

import  {
    HeaderContainer,
    LogoImage

} from './styles'

export function Header (){


    return(
        <HeaderContainer >
           <LogoImage source={Logo}/>
        </HeaderContainer>
    )
}