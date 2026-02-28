import type { Translations } from './types';

export const pl: Translations = {
  lang: 'pl',
  altLang: 'en',
  altPath: '/',
  meta: {
    title: 'Paweł Przytuła - Full Stack Developer',
    description: 'Full Stack Developer specjalizujący się w systemach rozproszonych, .NET/Blazor, Angular i Flutter. Poznań, Polska.',
  },
  nav: {
    about: 'O mnie',
    stack: 'Technologie',
    experience: 'Doświadczenie',
    projects: 'Projekty',
    approach: 'Podejście',
    education: 'Edukacja',
    toggleMenu: 'Przełącz menu',
  },
  hero: {
    greeting: 'Cześć, jestem',
    name: 'Paweł Przytuła',
    role: 'Full Stack Developer',
    bio: 'Specjalizuję się w <strong>systemach rozproszonych</strong>, <strong>.NET / Blazor</strong>, <strong>ASP.NET Core MVC</strong>, <strong>Angular</strong> i <strong>Flutter</strong>. Mieszkam w <strong>Poznaniu</strong>.',
    scrollDown: 'przewiń w dół',
  },
  sections: {
    stack: { label: 'Technologie', title: 'Z czym pracuję' },
    experience: { label: 'Doświadczenie', title: 'Historia pracy' },
    projects: { label: 'Projekty', title: 'Wybrane realizacje' },
    approach: { label: 'Jak pracuję', title: 'Proces deweloperski' },
    education: { label: 'Edukacja', title: 'Wykształcenie' },
  },
  approach: {
    withinSprint: 'W ramach sprintu',
    beyondSprint: 'Poza sprintem',
    phases: [
      { name: 'Planowanie', items: ['Zakres i kryteria akceptacji', 'Story points (Fibonacci)', 'Priorytetyzacja'] },
      { name: 'Rozwój', items: ['Implementacja', 'Zgłoszenie blokera na daily', 'Przełączenie zadania do odblokowania', 'Powrót i zakończenie'] },
      { name: 'Jakość', items: ['Testy manualne i smoke', 'Testy jednostkowe / integracyjne'] },
      { name: 'Dostarczenie', items: ['PR + weryfikacja CI', 'Code review', 'Podbicie wersji i changelog', 'Deploy / release mobilny'] },
    ],
    items: [
      { title: 'Analiza zgłoszenia i logów', desc: 'Gdy pojawia się zgłoszenie, śledzę je przez logi i zachowanie systemu, żeby znaleźć rzeczywistą przyczynę zanim napiszę choćby linie kodu.' },
      { title: 'Klasyfikacja problemu', desc: 'Rozróżniam błędy, brakujące funkcjonalności i możliwości usprawnień – i opisuję każdy z nich jasno, żeby zespół mógł podjąć świadomą decyzję o priorytecie.' },
      { title: 'Wkład do backlogu', desc: 'Wszystko, co warto zaadresować, zostaje opisane i dodane do backlogu na następną dyskusję sprintową – nie zostaje jako notatka mentalna czy komentarz w kodzie.' },
    ],
  },
  education: {
    degree: 'Inżynier Informatyki',
    school: 'Wyższa Szkoła Bankowa w Poznaniu',
    period: '2018 - 2022',
    beyondWork: 'Poza pracą',
    interests: [
      'Open source - kontrybucje do Blazor School i narzędzi produkcyjnych',
      'Nauka gry na pianinie',
    ],
  },
  projects: {
    criteriaLabel: 'Kryteria akceptacji:',
    viewOnGithub: 'Zobacz na GitHub',
  },
  footer: 'Zbudowane z',
  techStack: [
    {
      category: 'Główne',
      items: [
        { name: 'Flutter', icon: 'logos:flutter' },
        { name: 'Dart', icon: 'logos:dart' },
        { name: 'C#', icon: 'devicon:csharp' },
        { name: '.NET Core', icon: 'devicon:dotnetcore' },
        { name: 'Blazor Server', icon: 'devicon:blazor' },
      ],
    },
    {
      category: 'Web i Mobile',
      items: [
        { name: 'Angular', icon: 'logos:angular-icon' },
        { name: 'ASP.NET MVC', icon: 'devicon:dot-net' },
        { name: 'MAUI', icon: 'devicon:dotnetcore' },
        { name: 'TypeScript', icon: 'logos:typescript-icon' },
      ],
    },
    {
      category: 'Bazy danych',
      items: [
        { name: 'MSSQL', icon: 'devicon:microsoftsqlserver' },
        { name: 'PostgreSQL', icon: 'logos:postgresql' },
        { name: 'MySQL', icon: 'logos:mysql-icon' },
        { name: 'MongoDB', icon: 'logos:mongodb-icon' },
        { name: 'EF Core', icon: 'devicon:dot-net' },
      ],
    },
    {
      category: 'DevOps i narzędzia',
      items: [
        { name: 'Azure DevOps', icon: 'devicon:azuredevops' },
        { name: 'Docker', icon: 'logos:docker-icon' },
        { name: 'Git', icon: 'logos:git-icon' },
        { name: 'BitBucket', icon: 'logos:bitbucket' },
        { name: 'Jira', icon: 'logos:jira' },
        { name: 'Confluence', icon: 'logos:confluence' },
      ],
    },
    {
      category: 'Raportowanie i UI',
      items: [
        { name: 'DevExpress', icon: 'simple-icons:devexpress' },
        { name: 'Grafana', icon: 'logos:grafana' },
        { name: 'Power BI', icon: 'powerbi' },
        { name: 'SAP Web Intelligence', icon: 'logos:sap' },
      ],
    },
    {
      category: 'Low-Code',
      items: [
        { name: 'PowerApps', icon: 'powerapps' },
        { name: 'Power Automate', icon: 'powerautomate' },
      ],
    },
  ],
  projectsList: [
    {
      title: 'Flutter Field Operations App',
      type: 'Komercyjny',
      stack: ['Flutter', 'Dart', 'Blazor Server', 'ASP.NET Core'],
      description: 'Aplikacja mobilna dla pracowników terenowych pracujących w rozproszonych zespołach. Zaimplementowałem raportowanie usterek z wieloetapową nawigacją, workflow oparty na naklejkach, skanowanie biletów z historią ostatnich skanów, obsługę załączników i walidację interakcji PDF. Backend obsługiwał jednocześnie klientów Android i Flutter.',
      highlights: ['Raportowanie usterek', 'Historia skanów', 'Walidacja PDF', 'Multi-platforma'],
      link: null,
    },
    {
      title: 'Real-time GPS Tracking Dashboard',
      type: 'Komercyjny',
      stack: ['Blazor Server', 'ASP.NET Core', 'EF Core', 'PostgreSQL'],
      description: 'Dashboard śledzenia pojazdów w czasie rzeczywistym z zarządzaniem trasami, integrujący się ze sprzętowym GPS po TCP. Obsługiwałem dane kierowców i pojazdów, aktualizacje pozycji na żywo oraz migracje EF Core dla ewoluujących modeli danych. Zaprojektowany pod wysoką częstotliwość zdarzeń z urządzeń embedded.',
      highlights: ['Pozycje GPS na żywo', 'Dane kierowców/pojazdów', 'Migracje EF Core', 'Integracja TCP'],
      link: null,
    },
    {
      title: 'MDM Load Testing Simulator',
      type: 'Komercyjny',
      stack: ['.NET', 'C#', 'PostgreSQL', 'Kubernetes', 'Grafana', 'Prometheus'],
      description: 'Zbudowałem symulator emulujący 15 000 równoległych agentów Android MDM w celu walidacji stabilności platformy przed wdrożeniem produkcyjnym. Każde wirtualne urządzenie wykonuje konfigurowalny cykl życia: rejestracje, okresowe odpytywanie komend z jitterem, raportowanie heartbeat, wykonywanie komend i rzeczywiste pobieranie APK generujące autentyczne obciążenie sieciowe. Zaprojektowałem cztery scenariusze testowe – burst rejestracji, 4‑godzinne obciążenie bazowe, masowa dystrybucja APK (50 MB x 15k urządzeń) i burst komend – monitorowane w czasie rzeczywistym przez dashboardy Grafana zasilane przez Prometheus i postgres-exporter.',
      highlights: ['15k wirtualnych urządzeń', 'Obciążenie dystrybucji APK', '4 scenariusze testowe', 'Monitoring Grafana'],
      criteria: ['p50 < 500 ms', 'CPU < 80%', 'DB queries < 1 s', 'zero deadlocków'],
      link: null,
    },
    {
      title: 'Multi-platform POS & Reporting Backend',
      type: 'Komercyjny',
      stack: ['ASP.NET Core', 'Android', 'Flutter', 'DevExpress'],
      description: 'Backend systemu sprzedaży biletów i zarządzania pracownikami obsługiwał jednocześnie klientów Android i Flutter. Dodałem moduły notatek dyscyplinarnych i raportów rozbieżności, usprawniłem zapytania zakresów dat dla autouzupełniania zmian, rozszerzyłem metody wstawiania o zwracanie wygenerowanych ID oraz rozbudowałem obsługę ExplanationReport ze strukturalnym logowaniem.',
      highlights: ['Klienci Android + Flutter', 'Notatki dyscyplinarne', 'Autouzupełnianie zmian', 'Raporty DevExpress'],
      link: null,
    },
    {
      title: 'CopyCost',
      type: 'Prywatny',
      stack: ['.NET 7', 'MAUI', 'Blazor', 'MudBlazor', 'EF Core'],
      description: 'Osobiste narzędzie desktopowe Windows do śledzenia i podsumowywania płatności dla copywriterów. Obsługuje wielu klientów i kategorie tekstów z cenami za 1000 znaków, miesięczne podsumowania płatności i wykresy wizualne. Zbudowane jako hybrydowa aplikacja MAUI Blazor z lokalną persystencją EF Core i UI MudBlazor.',
      highlights: ['Zarządzanie klientami i kategoriami', 'Podsumowania miesięczne', 'Wykresy płatności', 'Hybryd MAUI Blazor'],
      link: 'https://github.com/pawelel/CopyCost',
    },
    {
      title: 'Facility Asset Management System',
      type: 'Prywatny',
      stack: ['ASP.NET Core', 'Blazor Server', 'EF Core', 'MediatR', 'MudBlazor', 'MSSQL'],
      description: 'Pełnowymiarowy system do zarządzania zasobami obiektów przemysłowych, urządzeniami, strefami i komunikatami serwisowymi. Zamodelowałem bogatą domenę obejmującą zasoby, kategorie, sytuacje, współrzędne i parametry inspekcji. Backend REST API z UI Blazor Server, MediatR do obsługi komend, tabele temporalne do pełnej historii audytu oraz strukturalne logowanie Serilog.',
      highlights: ['Bogaty model domenowy', 'MediatR CQRS', 'Tabele temporalne', 'Blazor Server'],
      link: 'https://github.com/pawelel/Sc3Hosted',
    },
    {
      title: 'MCP Server for Outline Wiki',
      type: 'Open Source',
      stack: ['TypeScript', 'Node.js', 'MCP'],
      description: 'Open-source serwer Model Context Protocol umożliwiający asystentom AI interakcje z usługami dokumentacji Outline. Zaimplementowałem odporną logikę ponawiania HTTP z obsługą nagłówka Retry-After, backoff rate-limit, sanityzację URL, bezpieczeństwo klucza API oraz kompleksowy zestaw testów pokrywający przypadki brzegowe.',
      highlights: ['Obsługa rate limit', 'Wsparcie Retry-After', 'Sanityzacja URL', 'Pokrycie testami'],
      link: 'https://github.com/pawelel/mcp-outline',
    },
  ],
  experienceList: [
    {
      role: 'Software Developer',
      company: 'Antumo P.S.A. (rebrand z M2T)',
      period: '2024 - obecnie',
      items: [
        'Rozwój rozproszonego systemu operacji kolejowych (ASP.NET Core MVC, Blazor Server, Flutter)',
        'Skalowanie backendu do obsługi 30 000+ nowych zdarzeń dziennie przez optymalizacje DB i zapytań',
        'Budowa zaawansowanych raportów i widoków z komponentami DevExpress',
        'Tworzenie niestandardowych tag helperów MVC i integracja własnych narzędzi CSS',
        'Integracja urządzeń GPS Teltonika i implementacja śledzenia pociągów w czasie rzeczywistym w Blazor Server',
        'Tworzenie narzędzi do testów wydajnościowych i symulatorów pojazdów GPS',
      ],
    },
    {
      role: 'Junior Developer',
      company: 'M2T Prosta Spółka Akcyjna',
      period: '2023',
      items: [
        'Rozwój aplikacji webowych i mobilnych z ASP.NET Zero',
        'Optymalizacja procesów dokumentowych i narzędzi audytowych',
      ],
    },
    {
      role: 'Konsultant Biznesowy',
      company: 'ARP Ideas sp. z o.o.',
      period: '2022',
      items: [
        'Budowa aplikacji PowerApps i Power Automate',
        'Analiza i dokumentacja User Stories',
      ],
    },
    {
      role: 'Associate Consultant / Senior IT/OT Specialist',
      company: 'HCL Poland',
      period: '2016 - 2022',
      items: [
        'Rozwój aplikacji Blazor do narzędzi wewnętrznych',
        'Automatyzacja procesów raportowania SAP',
        'Wsparcie systemów IT/OT dla linii produkcyjnych Volkswagen',
      ],
    },
  ],
};
