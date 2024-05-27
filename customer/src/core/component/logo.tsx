import { Flex, Image, Text } from '@chakra-ui/react'
import Favicon from '../../assets/images/favicon.png'
import { UI } from '../../../reactjs-component'

const Logo = () => {
  return <Flex justify='start' align='end'>
    <Image src={Favicon} boxSize='40px' />
    {UI.createHorizontalSpace(18)}
    <Text fontWeight='bold' fontStyle='italic' fontSize='lg' color='accent' whiteSpace='nowrap'>HCMUS E-Ticket</Text> 
  </Flex>
}

export default Logo