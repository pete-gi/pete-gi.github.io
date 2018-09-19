const lang = {
    state: {
        pl: {
            nav: {
                home: 'Główna',
                about: 'O mnie',
                skills: 'Umiejętności',
                portfolio: 'Portfolio',
                experience: 'Doświadczenie',
            },
            home: {
                name: 'Imię i nazwisko',
                birth: 'Data urodzenia',
                place: 'Miejsce zamieszkania',
                job: 'Zawód',
                cv: 'Sprawdź moje CV'
            },
            about: [
                'Cześć, jestem Piotr, web developer i wanna-be frontend developer.',
                'Można powiedzieć, że wychowałem się na RWD, przez ponad 4 lata pracy nie zrobiłem ani jednej nieresponsywnej strony.',
                'Jak widać, moja strona jest prosta, szybka i (mam nadzieję) czytelna. Żadnego przerostu formy nad treścią. Lubię minimalizm, proste rozwiązania, funkcjonalność i pierogi ruskie. Jestem fanbojem Vue.',
                'Tworzeniem stron internetowych zainteresowałem się około roku 2004 - tabele, iframe\'y, te sprawy. Sam się uczyłem, sam zdobywałem wiedzę. W branży pracuję od 2014 roku.',
                'Jestem na bieżąco z wieloma informacjami ze świata frontendu. Wiem gdy wychodzi nowa wersja Angulara czy Reacta, wiem kiedy popularność zdobywa kolejny framework JS, dowiaduję się o statystykach użytkowania narzędzi developerskich na świecie, czytam o nadchodzących możliwościach HTML/CSS/JS. Lubię być w miarę na bieżąco.',
                'Programowanie to dla mnie nie tylko praca, ale i hobby i pasja. Poświęcam temu masę czasu.',
                'Chcę tworzyć duże rzeczy i skupiać się na frontendzie. Staram się unikać jQuery mimo tego wszystkiego co zrobiło dla dzisiejszego webdevu (thx jquery).'
            ],
            portfolioCard: [
                'HTML/CSS/JS',
                'Vue.js',
                'Concrete5 CMS',
                'PHP',
                'Laravel',
                'jQuery'
            ],
            portfolio: [
                {
                    img: 'karchercenter-pestar.pl',
                    name: 'Karcher Center Pestar',
                    desc: 'Profesjonalne urządzenia do czyszczenia'
                }, {
                    img: 'polbram.eu',
                    name: 'Polbram',
                    desc: 'Producent bram, którego od czasu do czasu można usłyszeć w reklamach'
                }, {
                    img: 'quiza.pl',
                    name: 'Quiza',
                    desc: 'Najsłodszy importer bananów w Polsce'
                }, {
                    img: 'wrozbita-maciej.pl',
                    name: 'Wróżbita Maciej Skrzątek',
                    desc: 'Któż nie zna najsławniejszego kłam... wróżbity w kraju?'
                }, {
                    img: 'gabinetakuku.pl',
                    name: 'Gabinet Akuku',
                    desc: 'Grupa fizjoterapeutów zajmujących się kompleksową fizjoterapią dzieci'
                }, {
                    img: 'lapampa.pl',
                    name: 'La Pampa',
                    desc: 'Strona internetowa dla najbardziej soczystej restauracji w Gdańsku'
                }, {
                    img: 'grupapaszowa.pl',
                    name: 'Agrohurt',
                    desc: 'Zaopatrzenie w artykuły rolnicze'
                }, {
                    img: 'pianpol.pl',
                    name: 'Pianpol',
                    desc: 'Producent pianek. To naprawdę gruba sprawa.'
                }, {
                    img: 'lagunasmaku.pl',
                    name: 'Laguna Smaku',
                    desc: 'Restauracja w Sopocie, położona przy samym molo'
                }, {
                    img: 'drukarniabaltycka.com.pl',
                    name: 'Drukarnia Bałtycka',
                    desc: 'Drukarnia. Kto nie wie czym jest drukarnia?'
                }, {
                    img: 'superhallo.pl',
                    name: 'Super Hallo Taxi',
                    desc: 'Jedna z największych korporacji taxówkarskich w Polsce'
                }, {
                    img: 'vistylo.pl',
                    name: 'Vistylo',
                    desc: 'Producentem osłon grzejnikowych, paneli ażurowych, frontów meblowych i innych form meblarskich'
                }, {
                    img: 'biurowiec-koszalin.pl',
                    name: 'Biurowiec Drewexim',
                    desc: 'Wynajem lokali usługowych w Koszalinie'
                }, {
                    img: 'bachabg.com.pl',
                    name: 'Bacha',
                    desc: 'Kompleksowe wyposażenie gastronomiczne'
                }, {
                    img: 'boma.elblag.pl',
                    name: 'BOMA',
                    desc: 'Zakłady meblowe z wieloletnim doświadczeniem'
                }, {
                    img: 'dodatkikrawieckie.pl',
                    name: 'Dodatki krawieckie Badziak',
                    desc: 'Producent wszelakiej maści dodatków do odzieży'
                }, {
                    img: 'erjotpolska.pl',
                    name: 'PHU ERJOT',
                    desc: 'Producent i dystrybutor chemii technicznej'
                }, {
                    img: 'gm-f.pl',
                    name: 'GM-F',
                    desc: 'Bezpośredni importer i dystrybutor tulei ślizgowych dla branży maszynowej'
                }, {
                    img: 'muzyczna.lodz.pl',
                    name: 'Szkoła Muzyczna',
                    desc: 'Zespół Szkół Muzycznych w Łodzi'
                }, {
                    img: 'spkunowo.com',
                    name: 'Szkoła Podstawowa w Kunowie',
                    desc: 'Szkoła jak szkoła, co tu dużo mówić'
                }, {
                    img: 'teatrkomedia.com',
                    name: 'Teatr Komedia',
                    desc: 'Prężnie działający teatr komediowy we Wrocławiu'
                }, {
                    img: 'unitedcultures.pl',
                    name: 'United Cultures',
                    desc: 'Profesjonalne szkolenia w biznesie'
                }, {
                    img: 'samochody-z-usa.pl',
                    name: 'California Motors',
                    desc: 'Importer samochodów z USA i Kanady'
                }, {
                    img: 'internet-media.pl',
                    name: 'Internet Media Polska',
                    desc: 'Strony internetowe na całą Polskę'
                }, {
                    img: 'doplaty-do-odszkodowan.pl',
                    name: 'Dopłaty do odszkodowań',
                    desc: 'Firma pomocna w uzyskiwaniu odszkodowań za wypadki samochodowe'
                }
            ],
            experience: {
                over4years: ['Ponad 4', 'lata doświadczenia'],
                over800websites: ['Ponad 800', 'stron internetowych'],
                oneDev: ['Tylko jeden', 'web developer'],
                instructor: 'Nauczyciel',
                tu: 'Politechnika Koszalińska',
                inz: 'Studia inżynierskie',
                im: [
                    'Tworzenie stron internetowych w oparciu o projekt graficzny',
                    'Zarządzanie i instruktaże dotyczące obsługi CMS Concrete i Wordpress',
                    'Tworzenie i rozwój oprogramowania firmowego'
                ],
                sda: [
                    'Przeprowadzenie bloku zajęć w szkole programowania, temat <i>"Narzędzia programistyczne"</i>:<ul><li>NPM</li><li>Webpack</li><li>Grunt</li></ul>'
                ],
                pk: [
                    'Ukończenie kierunku <i>"Edukacja techniczno-informatyczna"</i> ze specjalnością <i>"Technologie internetowe i mobilne"</i>',
                    'Zdobycie wiedzy na temat HTML, CSS i JavaScript'
                ]
            }
        },
        en: {
            nav: {
                home: 'Home',
                about: 'About',
                skills: 'Skills',
                portfolio: 'Portfolio',
                experience: 'Experience',
            },
            home: {
                name: 'Name',
                birth: 'Date of birth',
                place: 'Place',
                job: 'Job',
                cv: 'Check out my Resume'
            },
            about: [
                'Hi, I\'m Piotr, web developer and wanna-be frontend developer.',
                'It can be said that I grew up on RWD, for over 4 years of work I did not make a single non-responsive website.',
                'As you can see, my site is simple, fast and readable (I hope). I like minimalism, simple solutions, functionality and dumplings. I\'m a fan of Vue.js.',
                'I became interested in creating websites around 2004 - tables, iframes, these type of things. I learned and gained knowledge by myself. I\'ve been working in web development industry since 2014.',
                'I\'m up to date with many news from the frontend world. I know when a new version of Angular or React comes out, when another JS framework gains popularity, I read about the usage of development tools in the world and the upcoming possibilities of HTML/CSS/ JS. I\'d like to be up to date.',
                'Web development is not just a job, but also my hobby and passion.',
                'I want to create big things and focus on the frontend. I\'m trying to avoid jQuery despite everything it has done for today\'s web devvelopment (thx jquery).'
            ],
            portfolioCard: [
                'HTML/CSS/JS',
                'Vue.js',
                'Concrete5 CMS',
                'PHP',
                'Laravel',
                'jQuery'
            ],
            portfolio: [
                {
                    img: 'karchercenter-pestar.pl',
                    name: 'Karcher Center Pestar',
                    desc: 'Profesjonalne urządzenia do czyszczenia'
                }, {
                    img: 'polbram.eu',
                    name: 'Polbram',
                    desc: 'Producent bram, którego od czasu do czasu można usłyszeć w reklamach'
                }, {
                    img: 'quiza.pl',
                    name: 'Quiza',
                    desc: 'Najsłodszy importer bananów w Polsce'
                }, {
                    img: 'wrozbita-maciej.pl',
                    name: 'Wróżbita Maciej Skrzątek',
                    desc: 'Któż nie zna najsławniejszego kłam... wróżbity w kraju?'
                }, {
                    img: 'gabinetakuku.pl',
                    name: 'Gabinet Akuku',
                    desc: 'Grupa fizjoterapeutów zajmujących się kompleksową fizjoterapią dzieci'
                }, {
                    img: 'lapampa.pl',
                    name: 'La Pampa',
                    desc: 'Strona internetowa dla najbardziej soczystej restauracji w Gdańsku'
                }, {
                    img: 'grupapaszowa.pl',
                    name: 'Agrohurt',
                    desc: 'Zaopatrzenie w artykuły rolnicze'
                }, {
                    img: 'pianpol.pl',
                    name: 'Pianpol',
                    desc: 'Producent pianek. To naprawdę gruba sprawa.'
                }, {
                    img: 'lagunasmaku.pl',
                    name: 'Laguna Smaku',
                    desc: 'Restauracja w Sopocie, położona przy samym molo'
                }, {
                    img: 'drukarniabaltycka.com.pl',
                    name: 'Drukarnia Bałtycka',
                    desc: 'Drukarnia. Kto nie wie czym jest drukarnia?'
                }, {
                    img: 'superhallo.pl',
                    name: 'Super Hallo Taxi',
                    desc: 'Jedna z największych korporacji taxówkarskich w Polsce'
                }, {
                    img: 'vistylo.pl',
                    name: 'Vistylo',
                    desc: 'Producentem osłon grzejnikowych, paneli ażurowych, frontów meblowych i innych form meblarskich'
                }, {
                    img: 'biurowiec-koszalin.pl',
                    name: 'Biurowiec Drewexim',
                    desc: 'Wynajem lokali usługowych w Koszalinie'
                }, {
                    img: 'bachabg.com.pl',
                    name: 'Bacha',
                    desc: 'Kompleksowe wyposażenie gastronomiczne'
                }, {
                    img: 'boma.elblag.pl',
                    name: 'BOMA',
                    desc: 'Zakłady meblowe z wieloletnim doświadczeniem'
                }, {
                    img: 'dodatkikrawieckie.pl',
                    name: 'Dodatki krawieckie Badziak',
                    desc: 'Producent wszelakiej maści dodatków do odzieży'
                }, {
                    img: 'erjotpolska.pl',
                    name: 'PHU ERJOT',
                    desc: 'Producent i dystrybutor chemii technicznej'
                }, {
                    img: 'gm-f.pl',
                    name: 'GM-F',
                    desc: 'Bezpośredni importer i dystrybutor tulei ślizgowych dla branży maszynowej'
                }, {
                    img: 'muzyczna.lodz.pl',
                    name: 'Szkoła Muzyczna',
                    desc: 'Zespół Szkół Muzycznych w Łodzi'
                }, {
                    img: 'spkunowo.com',
                    name: 'Szkoła Podstawowa w Kunowie',
                    desc: 'Szkoła jak szkoła, co tu dużo mówić'
                }, {
                    img: 'teatrkomedia.com',
                    name: 'Teatr Komedia',
                    desc: 'Prężnie działający teatr komediowy we Wrocławiu'
                }, {
                    img: 'unitedcultures.pl',
                    name: 'United Cultures',
                    desc: 'Profesjonalne szkolenia w biznesie'
                }, {
                    img: 'samochody-z-usa.pl',
                    name: 'California Motors',
                    desc: 'Importer samochodów z USA i Kanady'
                }, {
                    img: 'internet-media.pl',
                    name: 'Internet Media Polska',
                    desc: 'Strony internetowe na całą Polskę'
                }, {
                    img: 'doplaty-do-odszkodowan.pl',
                    name: 'Dopłaty do odszkodowań',
                    desc: 'Firma pomocna w uzyskiwaniu odszkodowań za wypadki samochodowe'
                }
            ],
            experience: {
                over4years: ['Over 4', 'years of experience'],
                over800websites: ['Over 800', 'websites'],
                oneDev: ['Only one', 'web developer'],
                instructor: 'Instructor',
                tu: 'Koszalin University of Technology',
                inz: 'Bachelor of Science',
                im: [
                    'Creating websites having only graphic design',
                    'Managing content managment systems like Concrete and Wordpress',
                    'Creation and development of company software'
                ],
                sda: [
                    'Teacher in the subject of <i>"Frontend development tools"</i>:<ul><li>NPM</li><li>Webpack</li><li>Grunt</li></ul>'
                ],
                pk: [
                    'Branch of study: <i>"Technical and informatic education"</i>'+
                    '<br>Speciality: <i>"Internet and mobile technologies"</i>',
                    'Learned about HTML, CSS and JavaScript'
                ]
            }
        }
    }
}

export default lang;