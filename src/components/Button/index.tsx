import { Container, Title, Loading } from './styles';
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
}

export function Button({ title, isLoading, ...res }: Props) {
  return (
    <Container
      activeOpacity={0.7}
      disabled={isLoading}
      {...res}
    >
      {
        isLoading
        ? <Loading />
        : <Title>{title}</Title>
      }
    </Container>
  );
}