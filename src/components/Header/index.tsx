import {View, Image} from 'react-native'
import Logo from '../../../assets/Logo.png'
import { styles } from './styles'

export function Header (){


    return(
        <View style={styles.container}>
           <Image source={Logo} style={styles.imageLogo}/>
        </View>
    )
}