import { OfferProps } from "./utils";
import { CategoryGalleryProps } from "./utils/types/categoryGallery";

export const menuList = [
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
];

export const offerList: OfferProps[] = [
  {
    name: 'family',
    title: 'Sesja rodzinna',
    description: 'Naturalne, ciepłe kadry.',
    price: 500,
    details: [{
      heading: 'do 1 godziny zdjęć (plener lub dom)',
      value: '',
    },
    {
      heading: '15 obrobionych zdjęć w wersji cyfrowej',
      value: '',
    },
    {
      heading: 'galeria online do wyboru zdjęć',
      value: '',
    },
    {
      heading: 'możliwość dokupienia dodatkowych ujęć',
      value: '',
    },
    {
      heading: 'pomoc w przygotowaniu do sesji (stylizacje, lokalizacja)',
      value: '',
    }]
  },
  {
    name: 'occasionaly',
    title: 'Sesja okolicznościowa',
    description: 'Celebruj ważne wydarzenia z bliskimi, a my uchwycimy te wyjątkowe momenty na zdjęciach, które będą dla Was niezatarte pamiątką przez lata. Niezależnie od tego, czy świętujecie chrzest, urodziny, baby shower, rocznicę czy inne rodzinne wydarzenie, ta sesja pozwoli Wam zatrzymać czas i emocje związane z tym wyjątkowym dniem.',
    price: 700,
    details: [{
      heading: 'Reportaż fotograficzny do 2 godzin',
      value: 'W zależności od wydarzenia, będziemy w stanie uchwycić wszystkie najważniejsze momenty, od ceremonii po zabawę z gośćmi. Pracuję dyskretnie, nie ingerując w przebieg wydarzeń, aby zdjęcia były naturalne i pełne emocji.'
    },
    {
      heading: '30 starannie wybranych, obrobionych zdjęć',
      value: 'Każde zdjęcie przechodzi przez profesjonalną obróbkę, aby jak najlepiej oddać klimat wydarzenia i emocje, które mu towarzyszą. Zadbam o odpowiednią kolorystykę, światło i detale, by zdjęcia były nie tylko piękne, ale również pełne głębi.'
    },
    {
      heading: 'Zdjęcia grupowe i detale',
      value: 'Oprócz zdjęć głównych bohaterów wydarzenia, wykonam także zdjęcia grupowe z rodziną i przyjaciółmi, jak i detale, które oddadzą charakter wydarzenia (np. dekoracje, tort, prezenty, kwiaty).'
    },
    {
      heading: 'Galeria online z możliwością pobrania',
      value: 'Po sesji otrzymasz dostęp do prywatnej galerii online, w której będziesz mógł obejrzeć wszystkie zdjęcia. W łatwy sposób wybierzesz swoje ulubione kadry, a także pobierzesz je w wysokiej rozdzielczości, gotowe do wydruku lub udostępnienia.'
    },
    {
      heading: 'Dojazd w obrębie miasta w cenie',
      value: 'Nie musisz martwić się o dodatkowe koszty związane z dojazdem do miejsca wydarzenia w obrębie miasta. Koszt transportu jest już wliczony w cenę pakietu. Jeśli sesja odbędzie się poza miastem, skontaktuj się ze mną, aby omówić szczegóły.'
    }]
  },
  {
    name: 'plenner',
    title: 'Sesja w plenerze',
    description: 'Swobodne zdjęcia w naturalnym świetle - wśród łąk, lasów lub miejskiej przestrzeni.',
    price: 450,
    details: [{
      heading: '45 minut sesji w wybranej lokalizacji',
      value: '',
    },
    {
      heading: '12 obrobionych zdjęć',
      value: '',
    },
    {
      heading: 'galeria online do wyboru zdjęć',
      value: '',
    },
    {
      heading: 'sugestie co do stylizacji i miejsca',
      value: '',
    },
    {
      heading: 'możliwość zabrania bliskiej osoby lub pupila',
      value: '',
    }],
  }
];

export const categories: CategoryGalleryProps[] = [
  {
    name: 'plener',
    session: 'Sesja w plenerze',
    title: 'Malwina i Maciek - sesja nad jeziorem',
    description: 'Czuła i piękna sesja narzeczonych nad jeziorkiem Suchockim. Czuła i piękna sesja narzeczonych nad jeziorkiem Suchockim.',
    composition: 1,
    imagesPreview: [
      {
        name: 'l1.png',
        alt: '',
        orientation: "landscape",
      },
    ],
    images: [],
  },
  {
    name: 'plener',
    session: 'Sesja w plenerze',
    title: 'Malwina i Maciek - sesja nad jeziorem',
    description: 'Czuła i piękna sesja narzeczonych nad jeziorkiem Suchockim.',
    composition: 2,
    imagesPreview: [
      {
        name: 'p1.png',
        alt: '',
        orientation: "portrait",
      },
      {
        name: 'p2.png',
        alt: '',
        orientation: "portrait",
      },
    ],
    images: [],
  },
  {
    name: 'plener',
    session: 'Sesja w plenerze',
    title: 'Malwina i Maciek - sesja nad jeziorem',
    description: 'Czuła i piękna sesja narzeczonych nad jeziorkiem Suchockim.',
    composition: 3,
    imagesPreview: [
      {
        name: 'p1.png',
        alt: '',
        orientation: "portrait",
      },
      {
        name: 'l1.png',
        alt: '',
        orientation: "landscape",
      },
      {
        name: 'l2.png',
        alt: '',
        orientation: "landscape",
      },
    ],
    images: [],
  },
  {
    name: 'plener',
    session: 'Sesja w plenerze',
    title: 'Malwina i Maciek - sesja nad jeziorem',
    description: 'Czuła i piękna sesja narzeczonych nad jeziorkiem Suchockim.',
    composition: 4,
    imagesPreview: [
      {
        name: 'l1.png',
        alt: '',
        orientation: "landscape",
      },
      {
        name: 'l2.png',
        alt: '',
        orientation: "landscape",
      },
      {
        name: 'p1.png',
        alt: '',
        orientation: "portrait",
      },
    ],
    images: [],
  },
  {
    name: 'plener',
    session: 'Sesja w plenerze',
    title: 'Malwina i Maciek - sesja nad jeziorem',
    description: 'Czuła i piękna sesja narzeczonych nad jeziorkiem Suchockim.',
    composition: 5,
    imagesPreview: [
      {
        name: 'l1.png',
        alt: '',
        orientation: "landscape",
      },
      {
        name: 'l2.png',
        alt: '',
        orientation: "landscape",
      },
      {
        name: 'l3.png',
        alt: '',
        orientation: "landscape",
      },
      {
        name: 'l4.png',
        alt: '',
        orientation: "landscape",
      },
    ],
    images: [],
  },
]