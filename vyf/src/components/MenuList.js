import HomeIcon from "@material-ui/icons/Home";
import DescriptionIcon from "@material-ui/icons/Description";
import EventIcon from "@material-ui/icons/Event";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import BusinessIcon from "@material-ui/icons/Business";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const menuList = [
  {
    label: "Home",
    link: "/home",
    frameUrl: "/bos/factuur/open-overzicht.jsf",

    icon: <HomeIcon fontSize="small" />,
    id: 1,
    pages: [],
  },
  {
    label: "Factuur",
    icon: <DescriptionIcon fontSize="small" />,
    id: 2,
    pages: [
      {
        label: "Open",
        link: "/home",
        frameUrl: "/bos/factuur/open-overzicht.jsf",
      },
      {
        label: "Examens",
        link: "/home",
        frameUrl: "/bos/factuur/open-examen-overzicht.jsf",
      },
      {
        label: "Incompany",
        link: "/home",
        frameUrl: "/bos/factuur/open-evenement-overzicht.jsf",
      },
      {
        label: "Te fiatteren",
        link: "/home",
        frameUrl: "/bos/factuur/tefiatteren-overzicht.jsf",
      },
      {
        label: "Creditnota's verzenden",
        link: "/home",
        frameUrl: "/bos/factuur/teexporteren-overzicht.jsf",
      },
      {
        label: "Verstuurd",
        link: "/home",
        frameUrl: "/bos/factuur/teexporteren-overzicht.jsf",
      },
      {
        label: "Batches",
        link: "/home",
        frameUrl: "/bos/factuur/tefiatteren-overzicht.jsf",
      },
    ],
  },
  {
    label: "Evenement",
    icon: <EventIcon fontSize="small" />,
    id: 3,
    pages: [
      {
        label: "Opleiding evenementen",
        link: "/home",
        frameUrl: "/bos/evenement/evenementen-overzicht.jsf",
      },
      {
        label: "Examen evenementen",
        link: "/home",
        frameUrl: "/bos/evenement/examen-evenementen-overzicht.jsf",
      },
      {
        label: "Modules",
        link: "/home",
        frameUrl: "/bos/evenement/module-evenement-overzicht.jsf",
      },
      {
        label: "Plaatsen",
        link: "/home",
        frameUrl: "/bos/evenement/plaatsen-overzicht.jsf",
      },
      {
        label: "Inschrijvingen",
        link: "/home",
        frameUrl: "/bos/evenement/inschrijving-overzicht.jsf",
      },
      {
        label: "Internet aanmeldingen",
        link: "/home",
        frameUrl: "/bos/evenement/internet-aanmelding/overzicht.jsf",
      },
      {
        label: "Plusport wachtkamer",
        link: "/home",
        frameUrl: "/bos/evenement/internet-aanmelding/plusport-wachtlijsten-overzicht.jsf",
      },
      {
        label: "Evaluaties",
        link: "/home",
        frameUrl: "/bos/evenement/evaluaties-overzicht.jsf",
      },
      {
        label: "Rapportage",
        link: "/home",
        frameUrl: "/bos/evenement/rapportage/index.jsf",
      },
    ],
  },
  {
    label: "ANS",
    icon: <DescriptionIcon fontSize="small" />,
    id: 4,
    pages: [
      {
        label: "Module overzicht",
        link: "/home",
        frameUrl: "/bos/ans/ans-module-overzicht.jsf",
      },
      {
        label: "Taken overzicht",
        link: "/home",
        frameUrl: "/bos/ans/ans-taak-overzicht.jsf",
      },
    ],
  },
  {
    label: "Stam",
    icon: <AccountTreeIcon fontSize="small" />,
    id: 5,
    pages: [
      {
        label: "Module",
        link: "/home",
        frameUrl: "/bos/stam/opleiding/module-overzicht.jsf",
      },
      {
        label: "Opleiding",
        link: "/home",
        frameUrl: "/bos/stam/cursus/cursus-overzicht.jsf",
      },
      {
        label: "Examen module",
        link: "/home",
        frameUrl: "/bos/stam/opleiding/examen-module-overzicht.jsf",
      },
      {
        label: "Examen",
        link: "/home",
        frameUrl: "/bos/stam/examen/examen-overzicht.jsf",
      },
      {
        label: "Opleidingstype",
        link: "/table",
        frameUrl: "/bos/stam/financieel/opleidingstype-overzicht.jsf",
      },
      {
        label: "Kostentype",
        link: "/home",
        frameUrl: "/bos/stam/financieel/kostentype-overzicht.jsf",
      },
      {
        label: "Kostendragers",
        link: "/home",
        frameUrl: "/bos/stam/financieel/kostendragers-tonen.jsf",
      },
      {
        label: "Periodes",
        link: "/home",
        frameUrl: "/bos/agenda/periode-overzicht.jsf",
      },
      {
        label: "Dropdown",
        link: "/home",
        frameUrl: "/bos/stam//dropdownvalues/overzicht.jsf",
      },
      {
        label: "Vakantiedagen",
        link: "/home",
        frameUrl: "/bos/agenda/vakantiedag-overzicht.jsf",
      },
      {
        label: "Betaalwijze",
        link: "/home",
        frameUrl: "/bos/stam/betaalwijze/betaalwijze-overzicht.jsf",
      },
      {
        label: "Kenmerken",
        link: "/home",
        frameUrl: "/bos/stam/kenmerken/overzicht.jsf",
      },
    ],
  },
  {
    label: "Persoon",
    icon: <AccountBoxIcon fontSize="small" />,
    id: 6,
    pages: [
      {
        label: "Persoon",
        link: "/home",
        frameUrl: "/bos/persoon/persoon-overzicht.jsf",
      },
      {
        label: "Berichten",
        link: "/home",
        frameUrl: "/bos/persoon/klacht/klacht-overzicht.jsf",
      },
      {
        label: "Persoongroep",
        link: "/home",
        frameUrl: "/bos/persoon/persoonGroep/persoonGroep-overzicht.jsf",
      },
      {
        label: "Mailing",
        link: "/home",
        frameUrl: "/bos/persoon/mailing/mail-overzicht.jsf",
      },
      {
        label: "Brochure aanvraag",
        link: "/home",
        frameUrl: "/bos/persoon/brochureaanvraag/brochure-aanvraag-overzicht.jsf",
      },
      {
        label: "Internet brochure aanvraag",
        link: "/home",
        frameUrl: "/bos/persoon/internetbrochureaanvraag/internet-brochure-aanvraag-overzicht.jsf",
      },
      {
        label: "Huiswerk",
        link: "/home",
        frameUrl: "/bos/persoon/huiswerk/huiswerk-overzicht.jsf",
      },
      {
        label: "Crediteuren",
        link: "/home",
        frameUrl: "/bos/persoon/crediteuren/persooncrediteuren-overzicht.jsf",
      },
    ],
  },
  {
    label: "Bedrijf",
    icon: <BusinessIcon fontSize="small" />,
    id: 7,
    pages: [
      {
        label: "Bedrijf",
        link: "/home",
        frameUrl: "/bos/bedrijf/bedrijf-overzicht.jsf",
      },
      {
        label: "Bedrijfgroep",
        link: "/home",
        frameUrl: "/bos/bedrijf/bedrijfGroep/bedrijfGroep-overzicht.jsf",
      },
      {
        label: "Bezoekverslag",
        link: "/home",
        frameUrl: "/bos/bedrijf/bezoekverslag/bezoekverslag-overzicht.jsf",
      },
      {
        label: "Offerte",
        link: "/home",
        frameUrl: "/bos/offerte/offerte-overzicht.jsf",
      },
      {
        label: "Omzet export",
        link: "/home",
        frameUrl: "/bos/bedrijf/omzetexport/bedrijfOmzetExport.jsf",
      },
      {
        label: "Crediteuren",
        link: "/home",
        frameUrl: "/bos/bedrijf/crediteuren/bedrijfcrediteuren-overzicht.jsf",
      },
      {
        label: "Rapportage",
        link: "/home",
        frameUrl: "/bos/bos/bedrijfHistorieRapportage.flow",
      },
    ],
  },
  {
    label: "Resultaten",
    icon: <TrendingUpIcon fontSize="small" />,
    id: 8,
    pages: [
      {
        label: "Aanwezigheid",
        link: "/home",
        frameUrl: "/bos/aanwezigheid/aanwezigheid-overzicht.jsf",
      },
      {
        label: "Cijfer",
        link: "/home",
        frameUrl: "/bos/resultaat/cijfer/cijfer-overzicht.jsf",
      },
      {
        label: "Beoordelingsmal",
        link: "/home",
        frameUrl: "/bos/resultaat/beoordelingsmal/beoordelingsmal-overzicht.jsf",
      },
      {
        label: "Predikaten",
        link: "/home",
        frameUrl: "/bos/resultaat/predikaat/overzicht.jsf",
      },
      {
        label: "Toegekende predikaten",
        link: "/home",
        frameUrl: "/bos/resultaat/predikaat/te-verwerken.jsf",
      },
      {
        label: "Voortgang",
        link: "/home",
        frameUrl: "/bos/resultaat/predikaat/voortgang.jsf",
      },
    ],
  },
  {
    label: "Financieel",
    icon: <AttachMoneyIcon fontSize="small" />,
    id: 9,
    pages: [
      {
        label: "Begrotingen",
        link: "/home",
        frameUrl: "/bos/resultaat/predikaat/voortgang.jsf",
      },
      {
        label: "Opties",
        link: "/home",
        frameUrl: "/bos/verplichtingen/optie-overzicht.jsf",
      },
      {
        label: "Verplichtingen",
        link: "/home",
        frameUrl: "/bos/verplichtingen/verplichtingen-overzicht.jsf",
      },
      {
        label: "Omzet",
        link: "/home",
        frameUrl: "/bos/secure/financieel/omzet/omzet-overzicht.jsf",
      },
      {
        label: "Uursoorten",
        link: "/home",
        frameUrl: "/bos/secure/financieel/uursoort/uursoort-overzicht.jsf",
      },
      {
        label: "Urenregistratie export",
        link: "/home",
        frameUrl: "/bos/secure/financieel/urenexport/uurregistratie-export-overzicht.jsf",
      },
      {
        label: "Urenbatch",
        link: "/home",
        frameUrl: "/bos/secure/financieel/urenexportbatch/urenexportbatch-overzicht.jsf",
      },
    ],
  },
];

export default menuList;
