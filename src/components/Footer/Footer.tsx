import { Dimensions } from '../Logo/LogoConfig';
import { Logo } from '../Logo/Logo';
import style from './Footer.module.scss';
import { Teste } from './FooterStyle';
import {
  FooterIcons,
  FooterInfos,
  FooterNewsletter,
  FooterTemplate,
} from './FooterStyle';
import { NavbarLink } from '../Navbar/NavbarStyle';
import { contactsInfoList as contactsInfo } from 'pages/assets/contactsInfoList';
import { iconsList as icons } from 'pages/assets/iconsList';
import { linksList as pageLinks } from 'pages/assets/linksList';

export function Footer() {
  return (
    <FooterTemplate>
      <Logo dimension={Dimensions.BIG} justify='right' />

      <FooterInfos>
        <ul>
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
            {contactsInfo.map((contact) => {
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
            <input type='email' />

            <button>ASSINAR JÁ</button>
          </div>
        </FooterNewsletter>
      </FooterInfos>
    </FooterTemplate>
  );
}
