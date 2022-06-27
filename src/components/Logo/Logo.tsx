import { LogoLink, LogoTemplate, Subtitle, Title } from './LogoStyle';
import { Link } from 'react-router-dom';
import { Dimensions } from './LogoConfig';

interface PropsLogo {
  dimension: Dimensions;
  justify: string;
}

export function Logo(props: PropsLogo) {
  const route = {
    label: 'home',
    to: '/',
  }; 

  return (
    <LogoLink  to={route.to} >
      <LogoTemplate >
        { props.dimension === Dimensions.BIG ? (
          <Title as="h1">Reviva Fashion</Title>
        ) : (
          <Title>Reviva Fashion</Title>
        )}
        <Subtitle>by RCHLO</Subtitle>
      </LogoTemplate>
    </LogoLink>
  );
}
