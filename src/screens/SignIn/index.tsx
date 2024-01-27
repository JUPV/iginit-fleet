import { Container, Title, Slogan } from './styles';

import backgroundImg from '../../assets/background.png'
import { Button } from '../../components/Button';

export function SignIn() {
  console.log(process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID)
  console.log(process.env.EXPO_PUBLIC_IOS_CLIENT_ID)
  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>

      <Slogan>
        Gestão de uso de veículos
      </Slogan>

      <Button title='Entrar com Google'/>
    </Container>
  );
}