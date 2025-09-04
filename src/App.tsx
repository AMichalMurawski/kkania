import Button from "./elements/Button/Button";
import IconSVG from "./elements/Icons/IconSVG";
import LogoIcon from "./elements/Icons/LogoIcon";
import SocialIcon from "./elements/Icons/SocialIcon";
import LinkTo from "./elements/Links/LinkTo";
import Link from "./elements/Links/Link";
import Image from "./elements/Images/Image";
import ImageBg from "./elements/Images/ImageBg";
import Logo from "./elements/Logo/Logo";
import Contact from "./elements/Contact/Contact";



function App() {
  return <>
    <div style={{ padding: '30px', color: 'var(--color-secondary)', backgroundColor: 'var(--color-primary)', display: 'flex', flexDirection: 'column', gap: '60px' }}>
      
      <h3 style={{ margin: 0 }}>Buttons</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <Button linkTo="">Zapytaj o termin</Button>
        <Button linkTo="" style="dark">Zapytaj o termin</Button>
        <Button linkTo="" view="full">Zapytaj o termin</Button>
        <Button linkTo="" view="full" style="dark">Zapytaj o termin</Button>
      </div>

      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}>Links</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <LinkTo href="" >Sprawdź moje oferty&nbsp;&nbsp;&nbsp;&gt;</LinkTo>
        <Link href="" >Regulamin</Link>
      </div>
      
      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}>Icons</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', fill: 'var(--color-secondary)' }}>
        <div style={{ width: '2rem', height: '2rem' }}>
          <IconSVG name="envelop" />
        </div>
        <div style={{ width: '2rem', height: '2rem' }}>
          <IconSVG name="phone" />
        </div>
        <SocialIcon name="facebook" />
        <SocialIcon name="instagram" />
        <LogoIcon />
      </div>
      
      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}>Images</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <div style={{ width: '200px' }}>
          <Image name="image1.jpg" orientation="landscape" />
          landscape
        </div>
        <div style={{ width: '200px' }}>
          <Image name="image1.jpg" orientation="portrait" />
          portrait
        </div>
        <div style={{ width: '200px', height: '50px' }}>
          <Image name="image1.jpg" />
          any size
        </div>
        <div style={{ width: '200px', height: '100px' }}>
          <ImageBg name="image1.jpg" />
          background
        </div>
      </div>
      
      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}>Logo</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <Logo />
        <Logo withoutText />
      </div>
      
      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}>Contact</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <Contact href="" iconName="envelop">kkania@kkania.pl</Contact>
        <Contact href="" iconName="phone">(+48) 012 345 678</Contact>
      </div>

      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}></h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        
      </div>
    </div>

    <div style={{ padding: '30px', color: 'var(--color-primary)', backgroundColor: 'var(--color-secondary)', display: 'flex', flexDirection: 'column', gap: '60px' }}>
      
      <h3 style={{ margin: 0 }}>Buttons</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <Button linkTo="">Zapytaj o termin</Button>
        <Button linkTo="" style="dark">Zapytaj o termin</Button>
        <Button linkTo="" view="full">Zapytaj o termin</Button>
        <Button linkTo="" view="full" style="dark">Zapytaj o termin</Button>
      </div>
      
      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}>Links</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <LinkTo href="" style="dark">Sprawdź moje oferty&nbsp;&nbsp;&nbsp;&gt;</LinkTo>
        <Link href="" >Regulamin</Link>
      </div>
      
      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}>Icons</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', fill: 'var(--color-primary)' }}>
        <div style={{ width: '2rem', height: '2rem' }}>
          <IconSVG name="envelop" />
        </div>
        <div style={{ width: '2rem', height: '2rem' }}>
          <IconSVG name="phone" />
        </div>
        <SocialIcon name="facebook" style="dark" />
        <SocialIcon name="instagram" style="dark" />
        <LogoIcon />
      </div>
      
      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}>Logo</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <Logo style="dark" />
        <Logo style="dark" withoutText />
      </div>

      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
            
      <h3 style={{ margin: 0 }}>Contact</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <Contact href="" iconName="envelop" style="dark">kkania@kkania.pl</Contact>
        <Contact href="" iconName="phone" style="dark">(+48) 012 345 678</Contact>
      </div>

      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />

      <h3 style={{ margin: 0 }}></h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
      
      </div>
    </div>
  </>;
};

export default App;
