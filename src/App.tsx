import Contacts from "./components/Contacts/Contacts";
import Navbar from "./components/Navbar/Navbar";

const menuList = [
  {
    label: 'Strona główna',
    url: '',
  },
  {
    label: 'Poznaj mnie',
    url: '',
  },
  {
    label: 'Oferta',
    url: '',
  },
  {
    label: 'Galeria',
    url: '',
  },
  {
    label: 'Kontakt',
    url: '',
  }
]

function App() {
  return <>
    <div style={{ padding: '30px', color: 'var(--color-secondary)', backgroundColor: 'var(--color-primary)', display: 'flex', flexDirection: 'column', gap: '60px' }}>
      
      <h3 style={{ margin: 0 }}>Navbar</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <Navbar menuList={menuList}/>
      </div>

      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}>Contacts</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <Contacts />
      </div>

      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}></h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>

      </div>

    </div>

    <div style={{ padding: '30px', color: 'var(--color-primary)', backgroundColor: 'var(--color-secondary)', display: 'flex', flexDirection: 'column', gap: '60px' }}>

      <h3 style={{ margin: 0 }}>Navbar</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <Navbar menuList={menuList} style="dark"/>
      </div>

      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}>Contacts</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <Contacts style="dark" />
      </div>

      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}></h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
      </div>

    </div>
  </>;
};

export default App;
