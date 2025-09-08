import { categories, menuList, offerList } from "./appData";
import { ContactForm, GalleryList, MobileMenu, ReservationForm } from "./components";
import CategoryItem from "./components/CategoryItem/CategoryItem";
import Contacts from "./components/Contacts/Contacts";
import Navbar from "./components/Navbar/Navbar";
import OfferDescription from "./components/OfferDescription/OfferDescription";
import OfferItem from "./components/OfferItem/OfferItem";

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
      
      <h3 style={{ margin: 0 }}>OfferItem</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        {offerList.map((offer, i) => {
          let active: boolean = false;
          if (i === 1) { active = true };
          return (
            <div style={{display: 'flex', width: '400px'}}>
              <OfferItem key={i} offer={offer} active={active} />
            </div>
          )
        })}
      </div>

      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}>OfferItem</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <OfferDescription offer={offerList[1]} />
      </div>

      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}>Categories</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        {categories.map((category, i) =>
          <div key={i} style={{width: '300px'}}>
            <CategoryItem
              name={category.name}
              session={category.session}
              title={category.title}
              description={category.description}
              composition={category.composition}
              imagesPreview={category.imagesPreview}
            />
          </div>
        )}
      </div>

      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}>Gallery</h3>
      <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <GalleryList images={categories[0].images} />
      </div>

      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}>Mobile Menu</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <MobileMenu menuList={menuList}/>
      </div>

      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}>Contact Form</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', maxWidth: '500px' }}>
        <ContactForm />
      </div>

      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}>Reservation Form</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', maxWidth: '500px' }}>
        <ReservationForm />
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
      
      <h3 style={{ margin: 0 }}>OfferItem</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        {offerList.map((offer, i) => {
          let active: boolean = false;
          if (i === 1) { active = true };
          return <OfferItem key={i} offer={offer} active={active} />
        })}
      </div>

      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}>OfferDescription</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <OfferDescription offer={offerList[1]} style="dark" />
      </div>

      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}>Categories</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        {categories.map((category, i) =>
          <div key={i} style={{width: '300px'}}>
            <CategoryItem
              name={category.name}
              session={category.session}
              title={category.title}
              description={category.description}
              composition={category.composition}
              imagesPreview={category.imagesPreview}
            />
          </div>
        )}
      </div>

      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}>Contact Form</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', maxWidth: '500px' }}>
        <ContactForm  style="dark" />
      </div>

      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}>Reservation Form</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', maxWidth: '500px' }}>
        <ReservationForm style="dark" />
      </div>

      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--color-shadow)' }} />
      
      <h3 style={{ margin: 0 }}></h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
      </div>

    </div>
  </>;
};

export default App;
