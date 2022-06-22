import { Dimensions } from '../../components/Logo/LogoConfig';
import { iconsState } from 'pages/state/atoms/static/iconsState';
import { linksState } from 'pages/state/atoms/static/linksState';
import { useRecoilValue } from 'recoil';
import { Logo } from '../Logo/Logo';
import style from './Footer.module.scss';
import { Teste } from './FooterStyle';
import {
  FooterIcons,
  FooterInfos,
  FooterNewsletter,
  FooterTemplate,
} from './FooterStyle';
import { contactsState } from 'pages/state/atoms/static/contactsState';
import { NavbarLink } from '../Navbar/NavbarStyle';

export function Footer() {
  const pageLinks = useRecoilValue(linksState);
  const icons = useRecoilValue(iconsState);
  const contatctsIcons = useRecoilValue(contactsState);

  return (
    <FooterTemplate>
      <Logo dimension={Dimensions.BIG} justify='right' />

      <FooterInfos>
        <ul className={style['footer__infos--menu']}>
          {pageLinks.map((item, index) => {
            return (
              <li key={index}>
                <NavbarLink to={item.href}>{item.page}</NavbarLink>
              </li>
            );
          })}
        </ul>

        <ul className={style['footer__infos--networks']}>
          <li>Siga-nos nas redes sociais</li>
          <FooterIcons>
            {icons.map((icon, index) => {
              return (
                <li key={index}>
                  <img src={icon.url} alt={icon.description} />
                </li>
              );
            })}
          </FooterIcons>
        </ul>

        <ul className={style['footer__infos--contact']}>
          <li>Entre em contato</li>

          <li>Contato</li>
          <li>reviva@rchlo.com.br</li>
          <>
            {contatctsIcons.map((contact) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <FooterIcons as='div'>
                  <Teste itemRef={contact.urlImage}>{contact.title}</Teste>
                </FooterIcons>
              );
            })}
          </>
        </ul>

        <FooterNewsletter>
          <p>Assine nossa newsletter</p>
          <div>
            <input type='text' />

            <button>ASSINAR JÁ</button>
          </div>
        </FooterNewsletter>
      </FooterInfos>
    </FooterTemplate>
  );
}
