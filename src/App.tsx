import Button from "./elements/Button/Button";
import IconSVG from "./elements/Icons/IconSVG";
import LogoIcon from "./elements/Icons/LogoIcon";
import SocialIcon from "./elements/Icons/SocialIcon";
import LinkTo from "./elements/Links/LinkTo";
import Link from "./elements/Links/Link";
import Image from "./elements/Images/Image";
import ImageBg from "./elements/Images/ImageBg";



function App() {
  return <>
    <div style={{ padding: '30px', color: 'var(--color-secondary)', backgroundColor: 'var(--color-primary)', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      <h3>Buttons</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        <Button linkTo="">Zapytaj o termin</Button>
        <Button linkTo="" style="dark">Zapytaj o termin</Button>
        <Button linkTo="" view="full">Zapytaj o termin</Button>
        <Button linkTo="" view="full" style="dark">Zapytaj o termin</Button>
      </div>
      
      <h3>Links</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        <LinkTo href="" >Sprawdź moje oferty&nbsp;&nbsp;&nbsp;&gt;</LinkTo>
        <Link >Regulamin</Link>
      </div>
      
      <h3>Icons</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', fill: 'var(--color-secondary)' }}>
        <div style={{width: '2rem', height: '2rem'}}>
          <IconSVG name="envelop" />
        </div>
        <div style={{width: '2rem', height: '2rem'}}>
          <IconSVG name="phone" />
        </div>
        <SocialIcon name="facebook" />
        <SocialIcon name="instagram" />
        <LogoIcon />
      </div>
      
      <h3>Images</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        <div style={{width: '200px'}}>
          <Image name="image1.jpg" orientation="landscape" />
          landscape
        </div>
        <div style={{width: '200px'}}>
          <Image name="image1.jpg" orientation="portrait" />
          portrait
        </div>
        <div style={{width: '200px', height: '50px'}}>
          <Image name="image1.jpg" />
          any size
        </div>
        <div style={{width: '200px', height: '100px'}}>
          <ImageBg name="image1.jpg" />
          background
        </div>
      </div>
      
      <h3></h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        
      </div>
    </div>

    <div style={{ padding: '30px', color: 'var(--color-primary)', backgroundColor: 'var(--color-secondary)', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      <h3>Buttons</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        <Button linkTo="">Zapytaj o termin</Button>
        <Button linkTo="" style="dark">Zapytaj o termin</Button>
        <Button linkTo="" view="full">Zapytaj o termin</Button>
        <Button linkTo="" view="full" style="dark">Zapytaj o termin</Button>
      </div>
      
      <h3>Links</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        <LinkTo href="" style="dark">Sprawdź moje oferty&nbsp;&nbsp;&nbsp;&gt;</LinkTo>
        <Link >Regulamin</Link>
      </div>
      
      <h3>Icons</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', fill: 'var(--color-primary)' }}>
        <div style={{width: '2rem', height: '2rem'}}>
          <IconSVG name="envelop" />
        </div>
        <div style={{width: '2rem', height: '2rem'}}>
          <IconSVG name="phone" />
        </div>
        <SocialIcon name="facebook" style="dark" />
        <SocialIcon name="instagram" style="dark" />
        <LogoIcon />
      </div>
      
      <h3></h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        
      </div>
    </div>
  </>;
}

export default App;
