import { OfferProps } from "./components/OfferItem/types"

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
]

export const offerList: OfferProps[] = [
    {
        name: 'family',
        title: 'Sesja rodzinna',
        description: 'Naturalne, ciepłe kadry.',
        price: 500,
        details: [
            'do 1 godziny zdjęć (plener lub dom)',
            '15 obrobionych zdjęć w wersji cyfrowej',
            'galeria online do wyboru zdjęć',
            'możliwość dokupienia dodatkowych ujęć',
            'pomoc w przygotowaniu do sesji (stylizacje, lokalizacja)',
        ]
    },
    {
        name: 'occasionaly',
        title: 'Sesja okolicznościowa',
        description: 'Celebruj ważne wydarzenia z bliskimi, a my uchwycimy te wyjątkowe momenty na zdjęciach, które będą dla Was niezatarte pamiątką przez lata. Niezależnie od tego, czy świętujecie chrzest, urodziny, baby shower, rocznicę czy inne rodzinne wydarzenie, ta sesja pozwoli Wam zatrzymać czas i emocje związane z tym wyjątkowym dniem.',
        price: 700,
        details: [
            'reportaż do 2 godzin',
            '30 obrobionych zdjęć',
            'zdjęcia grupowe i detale',
            'galeria online z możliwością pobrania',
            'dojazd w obrębie miasta w cenie',
        ]
    },
    {
        name: 'plenner',
        title: 'Sesja w plenerze',
        description: 'Swobodne zdjęcia w naturalnym świetle - wśród łąk, lasów lub miejskiej przestrzeni.',
        price: 450,
        details: [
            '45 minut sesji w wybranej lokalizacji',
            '12 obrobionych zdjęć',
            'galeria online do wyboru zdjęć',
            'sugestie co do stylizacji i miejsca',
            'możliwość zabrania bliskiej osoby lub pupila',
        ]
    }
]