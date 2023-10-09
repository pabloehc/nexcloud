/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@nextcloud/dialogs/dist/index.es.js":
/*!**********************************************************!*\
  !*** ./node_modules/@nextcloud/dialogs/dist/index.es.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilePicker: () => (/* binding */ FilePicker),
/* harmony export */   FilePickerBuilder: () => (/* binding */ FilePickerBuilder),
/* harmony export */   FilePickerType: () => (/* binding */ FilePickerType),
/* harmony export */   TOAST_ARIA_LIVE_ASSERTIVE: () => (/* binding */ TOAST_ARIA_LIVE_ASSERTIVE),
/* harmony export */   TOAST_ARIA_LIVE_OFF: () => (/* binding */ TOAST_ARIA_LIVE_OFF),
/* harmony export */   TOAST_ARIA_LIVE_POLITE: () => (/* binding */ TOAST_ARIA_LIVE_POLITE),
/* harmony export */   TOAST_DEFAULT_TIMEOUT: () => (/* binding */ TOAST_DEFAULT_TIMEOUT),
/* harmony export */   TOAST_PERMANENT_TIMEOUT: () => (/* binding */ TOAST_PERMANENT_TIMEOUT),
/* harmony export */   TOAST_UNDO_TIMEOUT: () => (/* binding */ TOAST_UNDO_TIMEOUT),
/* harmony export */   getFilePickerBuilder: () => (/* binding */ getFilePickerBuilder),
/* harmony export */   showError: () => (/* binding */ showError),
/* harmony export */   showInfo: () => (/* binding */ showInfo),
/* harmony export */   showMessage: () => (/* binding */ showMessage),
/* harmony export */   showSuccess: () => (/* binding */ showSuccess),
/* harmony export */   showUndo: () => (/* binding */ showUndo),
/* harmony export */   showWarning: () => (/* binding */ showWarning)
/* harmony export */ });
/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");
(function() {
    const env = {"TRANSLATIONS":[{"locale":"ar","json":{"charset":"utf-8","headers":{"Last-Translator":"S1 SYSTEMS | BP <info@s1.sa>, 2020","Language-Team":"Arabic (https://www.transifex.com/nextcloud/teams/64236/ar/)","Content-Type":"text/plain; charset=UTF-8","Language":"ar","Plural-Forms":"nplurals=6; plural=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nS1 SYSTEMS | BP <info@s1.sa>, 2020\n"},"msgstr":["Last-Translator: S1 SYSTEMS | BP <info@s1.sa>, 2020\nLanguage-Team: Arabic (https://www.transifex.com/nextcloud/teams/64236/ar/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ar\nPlural-Forms: nplurals=6; plural=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:191"},"msgstr":["تراجع"]}}}}},{"locale":"ast","json":{"charset":"utf-8","headers":{"Last-Translator":"enolp <enolp@softastur.org>, 2020","Language-Team":"Asturian (https://www.transifex.com/nextcloud/teams/64236/ast/)","Content-Type":"text/plain; charset=UTF-8","Language":"ast","Plural-Forms":"nplurals=2; plural=(n != 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nenolp <enolp@softastur.org>, 2020\n"},"msgstr":["Last-Translator: enolp <enolp@softastur.org>, 2020\nLanguage-Team: Asturian (https://www.transifex.com/nextcloud/teams/64236/ast/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ast\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:187"},"msgstr":["Desfacer"]}}}}},{"locale":"br","json":{"charset":"utf-8","headers":{"Last-Translator":"Kervoas-Le Nabat Ewen <ewenkervoas@free.fr>, 2020","Language-Team":"Breton (https://www.transifex.com/nextcloud/teams/64236/br/)","Content-Type":"text/plain; charset=UTF-8","Language":"br","Plural-Forms":"nplurals=5; plural=((n%10 == 1) && (n%100 != 11) && (n%100 !=71) && (n%100 !=91) ? 0 :(n%10 == 2) && (n%100 != 12) && (n%100 !=72) && (n%100 !=92) ? 1 :(n%10 ==3 || n%10==4 || n%10==9) && (n%100 < 10 || n% 100 > 19) && (n%100 < 70 || n%100 > 79) && (n%100 < 90 || n%100 > 99) ? 2 :(n != 0 && n % 1000000 == 0) ? 3 : 4);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nKervoas-Le Nabat Ewen <ewenkervoas@free.fr>, 2020\n"},"msgstr":["Last-Translator: Kervoas-Le Nabat Ewen <ewenkervoas@free.fr>, 2020\nLanguage-Team: Breton (https://www.transifex.com/nextcloud/teams/64236/br/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: br\nPlural-Forms: nplurals=5; plural=((n%10 == 1) && (n%100 != 11) && (n%100 !=71) && (n%100 !=91) ? 0 :(n%10 == 2) && (n%100 != 12) && (n%100 !=72) && (n%100 !=92) ? 1 :(n%10 ==3 || n%10==4 || n%10==9) && (n%100 < 10 || n% 100 > 19) && (n%100 < 70 || n%100 > 79) && (n%100 < 90 || n%100 > 99) ? 2 :(n != 0 && n % 1000000 == 0) ? 3 : 4);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:187"},"msgstr":["Disober"]}}}}},{"locale":"ca","json":{"charset":"utf-8","headers":{"Last-Translator":"Marc Riera <marcriera@softcatala.org>, 2020","Language-Team":"Catalan (https://www.transifex.com/nextcloud/teams/64236/ca/)","Content-Type":"text/plain; charset=UTF-8","Language":"ca","Plural-Forms":"nplurals=2; plural=(n != 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nMarc Riera <marcriera@softcatala.org>, 2020\n"},"msgstr":["Last-Translator: Marc Riera <marcriera@softcatala.org>, 2020\nLanguage-Team: Catalan (https://www.transifex.com/nextcloud/teams/64236/ca/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ca\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:187"},"msgstr":["Desfés"]}}}}},{"locale":"cs","json":{"charset":"utf-8","headers":{"Last-Translator":"Pavel Borecki <pavel.borecki@gmail.com>, 2020","Language-Team":"Czech (https://www.transifex.com/nextcloud/teams/64236/cs/)","Content-Type":"text/plain; charset=UTF-8","Language":"cs","Plural-Forms":"nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nPavel Borecki <pavel.borecki@gmail.com>, 2020\n"},"msgstr":["Last-Translator: Pavel Borecki <pavel.borecki@gmail.com>, 2020\nLanguage-Team: Czech (https://www.transifex.com/nextcloud/teams/64236/cs/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: cs\nPlural-Forms: nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:187"},"msgstr":["Zpět"]}}}}},{"locale":"cs_CZ","json":{"charset":"utf-8","headers":{"Last-Translator":"Pavel Borecki <pavel.borecki@gmail.com>, 2020","Language-Team":"Czech (Czech Republic) (https://www.transifex.com/nextcloud/teams/64236/cs_CZ/)","Content-Type":"text/plain; charset=UTF-8","Language":"cs_CZ","Plural-Forms":"nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nPavel Borecki <pavel.borecki@gmail.com>, 2020\n"},"msgstr":["Last-Translator: Pavel Borecki <pavel.borecki@gmail.com>, 2020\nLanguage-Team: Czech (Czech Republic) (https://www.transifex.com/nextcloud/teams/64236/cs_CZ/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: cs_CZ\nPlural-Forms: nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:187"},"msgstr":["Zpět"]}}}}},{"locale":"da","json":{"charset":"utf-8","headers":{"Last-Translator":"Martin Bonde <Martin@maboni.dk>, 2020","Language-Team":"Danish (https://www.transifex.com/nextcloud/teams/64236/da/)","Content-Type":"text/plain; charset=UTF-8","Language":"da","Plural-Forms":"nplurals=2; plural=(n != 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nMartin Bonde <Martin@maboni.dk>, 2020\n"},"msgstr":["Last-Translator: Martin Bonde <Martin@maboni.dk>, 2020\nLanguage-Team: Danish (https://www.transifex.com/nextcloud/teams/64236/da/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: da\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:192"},"msgstr":["Fortryd"]}}}}},{"locale":"de","json":{"charset":"utf-8","headers":{"Last-Translator":"Mark Ziegler <mark.ziegler@rakekniven.de>, 2020","Language-Team":"German (https://www.transifex.com/nextcloud/teams/64236/de/)","Content-Type":"text/plain; charset=UTF-8","Language":"de","Plural-Forms":"nplurals=2; plural=(n != 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nMark Ziegler <mark.ziegler@rakekniven.de>, 2020\n"},"msgstr":["Last-Translator: Mark Ziegler <mark.ziegler@rakekniven.de>, 2020\nLanguage-Team: German (https://www.transifex.com/nextcloud/teams/64236/de/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: de\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:187"},"msgstr":["Rückgängig"]}}}}},{"locale":"de_DE","json":{"charset":"utf-8","headers":{"Last-Translator":"Gustav Gyges, 2021","Language-Team":"German (Germany) (https://www.transifex.com/nextcloud/teams/64236/de_DE/)","Content-Type":"text/plain; charset=UTF-8","Language":"de_DE","Plural-Forms":"nplurals=2; plural=(n != 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nGustav Gyges, 2021\n"},"msgstr":["Last-Translator: Gustav Gyges, 2021\nLanguage-Team: German (Germany) (https://www.transifex.com/nextcloud/teams/64236/de_DE/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: de_DE\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:192"},"msgstr":["Rückgängig machen"]}}}}},{"locale":"el","json":{"charset":"utf-8","headers":{"Last-Translator":"ByteGet, 2020","Language-Team":"Greek (https://www.transifex.com/nextcloud/teams/64236/el/)","Content-Type":"text/plain; charset=UTF-8","Language":"el","Plural-Forms":"nplurals=2; plural=(n != 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nByteGet, 2020\n"},"msgstr":["Last-Translator: ByteGet, 2020\nLanguage-Team: Greek (https://www.transifex.com/nextcloud/teams/64236/el/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: el\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:187"},"msgstr":["Αναίρεση"]}}}}},{"locale":"en_GB","json":{"charset":"utf-8","headers":{"Last-Translator":"Jeff Gunn <planemastr1@gmail.com>, 2021","Language-Team":"English (United Kingdom) (https://www.transifex.com/nextcloud/teams/64236/en_GB/)","Content-Type":"text/plain; charset=UTF-8","Language":"en_GB","Plural-Forms":"nplurals=2; plural=(n != 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nJeff Gunn <planemastr1@gmail.com>, 2021\n"},"msgstr":["Last-Translator: Jeff Gunn <planemastr1@gmail.com>, 2021\nLanguage-Team: English (United Kingdom) (https://www.transifex.com/nextcloud/teams/64236/en_GB/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: en_GB\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:192"},"msgstr":["Undo"]}}}}},{"locale":"eo","json":{"charset":"utf-8","headers":{"Last-Translator":"Va Milushnikov <va.milushnikov@gmail.com>, 2020","Language-Team":"Esperanto (https://www.transifex.com/nextcloud/teams/64236/eo/)","Content-Type":"text/plain; charset=UTF-8","Language":"eo","Plural-Forms":"nplurals=2; plural=(n != 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nVa Milushnikov <va.milushnikov@gmail.com>, 2020\n"},"msgstr":["Last-Translator: Va Milushnikov <va.milushnikov@gmail.com>, 2020\nLanguage-Team: Esperanto (https://www.transifex.com/nextcloud/teams/64236/eo/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: eo\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:191"},"msgstr":["Malfari"]}}}}},{"locale":"es","json":{"charset":"utf-8","headers":{"Last-Translator":"Gabriel Anca <gabrielancacorral@gmail.com>, 2020","Language-Team":"Spanish (https://www.transifex.com/nextcloud/teams/64236/es/)","Content-Type":"text/plain; charset=UTF-8","Language":"es","Plural-Forms":"nplurals=2; plural=(n != 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nGabriel Anca <gabrielancacorral@gmail.com>, 2020\n"},"msgstr":["Last-Translator: Gabriel Anca <gabrielancacorral@gmail.com>, 2020\nLanguage-Team: Spanish (https://www.transifex.com/nextcloud/teams/64236/es/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:192"},"msgstr":["Deshacer"]}}}}},{"locale":"es_AR","json":{"charset":"utf-8","headers":{"Last-Translator":"Matias Iglesias, 2022","Language-Team":"Spanish (Argentina) (https://www.transifex.com/nextcloud/teams/64236/es_AR/)","Content-Type":"text/plain; charset=UTF-8","Language":"es_AR","Plural-Forms":"nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nMatias Iglesias, 2022\n"},"msgstr":["Last-Translator: Matias Iglesias, 2022\nLanguage-Team: Spanish (Argentina) (https://www.transifex.com/nextcloud/teams/64236/es_AR/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_AR\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:223"},"msgstr":["Deshacer"]}}}}},{"locale":"eu","json":{"charset":"utf-8","headers":{"Last-Translator":"Unai Tolosa Pontesta <utolosa002@gmail.com>, 2021","Language-Team":"Basque (https://www.transifex.com/nextcloud/teams/64236/eu/)","Content-Type":"text/plain; charset=UTF-8","Language":"eu","Plural-Forms":"nplurals=2; plural=(n != 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nUnai Tolosa Pontesta <utolosa002@gmail.com>, 2021\n"},"msgstr":["Last-Translator: Unai Tolosa Pontesta <utolosa002@gmail.com>, 2021\nLanguage-Team: Basque (https://www.transifex.com/nextcloud/teams/64236/eu/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: eu\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:192"},"msgstr":["Desegin"]}}}}},{"locale":"fa","json":{"charset":"utf-8","headers":{"Last-Translator":"Mostafa Ahangarha <ahangarha@riseup.net>, 2020","Language-Team":"Persian (https://www.transifex.com/nextcloud/teams/64236/fa/)","Content-Type":"text/plain; charset=UTF-8","Language":"fa","Plural-Forms":"nplurals=2; plural=(n > 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nMostafa Ahangarha <ahangarha@riseup.net>, 2020\n"},"msgstr":["Last-Translator: Mostafa Ahangarha <ahangarha@riseup.net>, 2020\nLanguage-Team: Persian (https://www.transifex.com/nextcloud/teams/64236/fa/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: fa\nPlural-Forms: nplurals=2; plural=(n > 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:192"},"msgstr":["بازگردانی"]}}}}},{"locale":"fi_FI","json":{"charset":"utf-8","headers":{"Last-Translator":"teemue, 2020","Language-Team":"Finnish (Finland) (https://www.transifex.com/nextcloud/teams/64236/fi_FI/)","Content-Type":"text/plain; charset=UTF-8","Language":"fi_FI","Plural-Forms":"nplurals=2; plural=(n != 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nteemue, 2020\n"},"msgstr":["Last-Translator: teemue, 2020\nLanguage-Team: Finnish (Finland) (https://www.transifex.com/nextcloud/teams/64236/fi_FI/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: fi_FI\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:191"},"msgstr":["Kumoa"]}}}}},{"locale":"fr","json":{"charset":"utf-8","headers":{"Last-Translator":"John Molakvoæ <skjnldsv@protonmail.com>, 2020","Language-Team":"French (https://www.transifex.com/nextcloud/teams/64236/fr/)","Content-Type":"text/plain; charset=UTF-8","Language":"fr","Plural-Forms":"nplurals=2; plural=(n > 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2020\n"},"msgstr":["Last-Translator: John Molakvoæ <skjnldsv@protonmail.com>, 2020\nLanguage-Team: French (https://www.transifex.com/nextcloud/teams/64236/fr/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: fr\nPlural-Forms: nplurals=2; plural=(n > 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:187"},"msgstr":["Annuler"]}}}}},{"locale":"gl","json":{"charset":"utf-8","headers":{"Last-Translator":"Miguel Anxo Bouzada <mbouzada@gmail.com>, 2020","Language-Team":"Galician (https://www.transifex.com/nextcloud/teams/64236/gl/)","Content-Type":"text/plain; charset=UTF-8","Language":"gl","Plural-Forms":"nplurals=2; plural=(n != 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nMiguel Anxo Bouzada <mbouzada@gmail.com>, 2020\n"},"msgstr":["Last-Translator: Miguel Anxo Bouzada <mbouzada@gmail.com>, 2020\nLanguage-Team: Galician (https://www.transifex.com/nextcloud/teams/64236/gl/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: gl\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:187"},"msgstr":["Desfacer"]}}}}},{"locale":"he","json":{"charset":"utf-8","headers":{"Last-Translator":"Yaron Shahrabani <sh.yaron@gmail.com>, 2020","Language-Team":"Hebrew (https://www.transifex.com/nextcloud/teams/64236/he/)","Content-Type":"text/plain; charset=UTF-8","Language":"he","Plural-Forms":"nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n == 2 && n % 1 == 0) ? 1: (n % 10 == 0 && n % 1 == 0 && n > 10) ? 2 : 3;"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nYaron Shahrabani <sh.yaron@gmail.com>, 2020\n"},"msgstr":["Last-Translator: Yaron Shahrabani <sh.yaron@gmail.com>, 2020\nLanguage-Team: Hebrew (https://www.transifex.com/nextcloud/teams/64236/he/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: he\nPlural-Forms: nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n == 2 && n % 1 == 0) ? 1: (n % 10 == 0 && n % 1 == 0 && n > 10) ? 2 : 3;\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:187"},"msgstr":["ביטול"]}}}}},{"locale":"hu_HU","json":{"charset":"utf-8","headers":{"Last-Translator":"Balázs Meskó <meskobalazs@mailbox.org>, 2021","Language-Team":"Hungarian (Hungary) (https://www.transifex.com/nextcloud/teams/64236/hu_HU/)","Content-Type":"text/plain; charset=UTF-8","Language":"hu_HU","Plural-Forms":"nplurals=2; plural=(n != 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nBalázs Meskó <meskobalazs@mailbox.org>, 2021\n"},"msgstr":["Last-Translator: Balázs Meskó <meskobalazs@mailbox.org>, 2021\nLanguage-Team: Hungarian (Hungary) (https://www.transifex.com/nextcloud/teams/64236/hu_HU/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: hu_HU\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:191"},"msgstr":["Visszavonás"]}}}}},{"locale":"id","json":{"charset":"utf-8","headers":{"Last-Translator":"agus sutrisno <agussutrisno@smamsa.sch.id>, 2020","Language-Team":"Indonesian (https://www.transifex.com/nextcloud/teams/64236/id/)","Content-Type":"text/plain; charset=UTF-8","Language":"id","Plural-Forms":"nplurals=1; plural=0;"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nagus sutrisno <agussutrisno@smamsa.sch.id>, 2020\n"},"msgstr":["Last-Translator: agus sutrisno <agussutrisno@smamsa.sch.id>, 2020\nLanguage-Team: Indonesian (https://www.transifex.com/nextcloud/teams/64236/id/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: id\nPlural-Forms: nplurals=1; plural=0;\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:192"},"msgstr":["Tidak jadi"]}}}}},{"locale":"is","json":{"charset":"utf-8","headers":{"Last-Translator":"Sveinn í Felli <sv1@fellsnet.is>, 2020","Language-Team":"Icelandic (https://www.transifex.com/nextcloud/teams/64236/is/)","Content-Type":"text/plain; charset=UTF-8","Language":"is","Plural-Forms":"nplurals=2; plural=(n % 10 != 1 || n % 100 == 11);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nSveinn í Felli <sv1@fellsnet.is>, 2020\n"},"msgstr":["Last-Translator: Sveinn í Felli <sv1@fellsnet.is>, 2020\nLanguage-Team: Icelandic (https://www.transifex.com/nextcloud/teams/64236/is/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: is\nPlural-Forms: nplurals=2; plural=(n % 10 != 1 || n % 100 == 11);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:192"},"msgstr":["Afturkalla"]}}}}},{"locale":"it","json":{"charset":"utf-8","headers":{"Last-Translator":"Vincenzo Reale <vinx.reale@gmail.com>, 2020","Language-Team":"Italian (https://www.transifex.com/nextcloud/teams/64236/it/)","Content-Type":"text/plain; charset=UTF-8","Language":"it","Plural-Forms":"nplurals=2; plural=(n != 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nVincenzo Reale <vinx.reale@gmail.com>, 2020\n"},"msgstr":["Last-Translator: Vincenzo Reale <vinx.reale@gmail.com>, 2020\nLanguage-Team: Italian (https://www.transifex.com/nextcloud/teams/64236/it/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: it\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:187"},"msgstr":["Annulla"]}}}}},{"locale":"ja_JP","json":{"charset":"utf-8","headers":{"Last-Translator":"323484, 2020","Language-Team":"Japanese (Japan) (https://www.transifex.com/nextcloud/teams/64236/ja_JP/)","Content-Type":"text/plain; charset=UTF-8","Language":"ja_JP","Plural-Forms":"nplurals=1; plural=0;"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\n323484, 2020\n"},"msgstr":["Last-Translator: 323484, 2020\nLanguage-Team: Japanese (Japan) (https://www.transifex.com/nextcloud/teams/64236/ja_JP/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ja_JP\nPlural-Forms: nplurals=1; plural=0;\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:187"},"msgstr":["元に戻す"]}}}}},{"locale":"kab","json":{"charset":"utf-8","headers":{"Last-Translator":"ZiriSut, 2021","Language-Team":"Kabyle (https://www.transifex.com/nextcloud/teams/64236/kab/)","Content-Type":"text/plain; charset=UTF-8","Language":"kab","Plural-Forms":"nplurals=2; plural=(n != 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nZiriSut, 2021\n"},"msgstr":["Last-Translator: ZiriSut, 2021\nLanguage-Team: Kabyle (https://www.transifex.com/nextcloud/teams/64236/kab/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: kab\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:192"},"msgstr":["Sefsex"]}}}}},{"locale":"ko","json":{"charset":"utf-8","headers":{"Last-Translator":"Brandon Han, 2021","Language-Team":"Korean (https://www.transifex.com/nextcloud/teams/64236/ko/)","Content-Type":"text/plain; charset=UTF-8","Language":"ko","Plural-Forms":"nplurals=1; plural=0;"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nBrandon Han, 2021\n"},"msgstr":["Last-Translator: Brandon Han, 2021\nLanguage-Team: Korean (https://www.transifex.com/nextcloud/teams/64236/ko/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ko\nPlural-Forms: nplurals=1; plural=0;\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:192"},"msgstr":["되돌리기"]}}}}},{"locale":"lt_LT","json":{"charset":"utf-8","headers":{"Last-Translator":"Moo, 2020","Language-Team":"Lithuanian (Lithuania) (https://www.transifex.com/nextcloud/teams/64236/lt_LT/)","Content-Type":"text/plain; charset=UTF-8","Language":"lt_LT","Plural-Forms":"nplurals=4; plural=(n % 10 == 1 && (n % 100 > 19 || n % 100 < 11) ? 0 : (n % 10 >= 2 && n % 10 <=9) && (n % 100 > 19 || n % 100 < 11) ? 1 : n % 1 != 0 ? 2: 3);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nMoo, 2020\n"},"msgstr":["Last-Translator: Moo, 2020\nLanguage-Team: Lithuanian (Lithuania) (https://www.transifex.com/nextcloud/teams/64236/lt_LT/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: lt_LT\nPlural-Forms: nplurals=4; plural=(n % 10 == 1 && (n % 100 > 19 || n % 100 < 11) ? 0 : (n % 10 >= 2 && n % 10 <=9) && (n % 100 > 19 || n % 100 < 11) ? 1 : n % 1 != 0 ? 2: 3);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:187"},"msgstr":["Atšaukti"]}}}}},{"locale":"mk","json":{"charset":"utf-8","headers":{"Last-Translator":"Сашко Тодоров, 2020","Language-Team":"Macedonian (https://www.transifex.com/nextcloud/teams/64236/mk/)","Content-Type":"text/plain; charset=UTF-8","Language":"mk","Plural-Forms":"nplurals=2; plural=(n % 10 == 1 && n % 100 != 11) ? 0 : 1;"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nСашко Тодоров, 2020\n"},"msgstr":["Last-Translator: Сашко Тодоров, 2020\nLanguage-Team: Macedonian (https://www.transifex.com/nextcloud/teams/64236/mk/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: mk\nPlural-Forms: nplurals=2; plural=(n % 10 == 1 && n % 100 != 11) ? 0 : 1;\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:187"},"msgstr":["Врати"]}}}}},{"locale":"mn","json":{"charset":"utf-8","headers":{"Last-Translator":"BATKHUYAG Ganbold <gbatkhuyag@gmail.com>, 2022","Language-Team":"Mongolian (https://www.transifex.com/nextcloud/teams/64236/mn/)","Content-Type":"text/plain; charset=UTF-8","Language":"mn","Plural-Forms":"nplurals=2; plural=(n != 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nBATKHUYAG Ganbold <gbatkhuyag@gmail.com>, 2022\n"},"msgstr":["Last-Translator: BATKHUYAG Ganbold <gbatkhuyag@gmail.com>, 2022\nLanguage-Team: Mongolian (https://www.transifex.com/nextcloud/teams/64236/mn/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: mn\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:192"},"msgstr":["Буцаах"]}}}}},{"locale":"mr","json":{"charset":"utf-8","headers":{"Last-Translator":"Vinit Dhabre <VINIT@ymail.com>, 2021","Language-Team":"Marathi (https://www.transifex.com/nextcloud/teams/64236/mr/)","Content-Type":"text/plain; charset=UTF-8","Language":"mr","Plural-Forms":"nplurals=2; plural=(n != 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nVinit Dhabre <VINIT@ymail.com>, 2021\n"},"msgstr":["Last-Translator: Vinit Dhabre <VINIT@ymail.com>, 2021\nLanguage-Team: Marathi (https://www.transifex.com/nextcloud/teams/64236/mr/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: mr\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:192"},"msgstr":["पूर्ववत करा"]}}}}},{"locale":"my","json":{"charset":"utf-8","headers":{"Last-Translator":"Htike Aung Kyaw <htikeagkyaw@gmail.com>, 2021","Language-Team":"Burmese (https://www.transifex.com/nextcloud/teams/64236/my/)","Content-Type":"text/plain; charset=UTF-8","Language":"my","Plural-Forms":"nplurals=1; plural=0;"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nHtike Aung Kyaw <htikeagkyaw@gmail.com>, 2021\n"},"msgstr":["Last-Translator: Htike Aung Kyaw <htikeagkyaw@gmail.com>, 2021\nLanguage-Team: Burmese (https://www.transifex.com/nextcloud/teams/64236/my/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: my\nPlural-Forms: nplurals=1; plural=0;\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:192"},"msgstr":["နဂိုအတိုင်းပြန်ထားရန်"]}}}}},{"locale":"nb_NO","json":{"charset":"utf-8","headers":{"Last-Translator":"sverre.vikan <sverre.vikan@gmail.com>, 2020","Language-Team":"Norwegian Bokmål (Norway) (https://www.transifex.com/nextcloud/teams/64236/nb_NO/)","Content-Type":"text/plain; charset=UTF-8","Language":"nb_NO","Plural-Forms":"nplurals=2; plural=(n != 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nsverre.vikan <sverre.vikan@gmail.com>, 2020\n"},"msgstr":["Last-Translator: sverre.vikan <sverre.vikan@gmail.com>, 2020\nLanguage-Team: Norwegian Bokmål (Norway) (https://www.transifex.com/nextcloud/teams/64236/nb_NO/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: nb_NO\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:192"},"msgstr":["Angre"]}}}}},{"locale":"nl","json":{"charset":"utf-8","headers":{"Last-Translator":"Robin Slot, 2020","Language-Team":"Dutch (https://www.transifex.com/nextcloud/teams/64236/nl/)","Content-Type":"text/plain; charset=UTF-8","Language":"nl","Plural-Forms":"nplurals=2; plural=(n != 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nRobin Slot, 2020\n"},"msgstr":["Last-Translator: Robin Slot, 2020\nLanguage-Team: Dutch (https://www.transifex.com/nextcloud/teams/64236/nl/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: nl\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:191"},"msgstr":["Ongedaan maken"]}}}}},{"locale":"oc","json":{"charset":"utf-8","headers":{"Last-Translator":"Quentin PAGÈS, 2020","Language-Team":"Occitan (post 1500) (https://www.transifex.com/nextcloud/teams/64236/oc/)","Content-Type":"text/plain; charset=UTF-8","Language":"oc","Plural-Forms":"nplurals=2; plural=(n > 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nQuentin PAGÈS, 2020\n"},"msgstr":["Last-Translator: Quentin PAGÈS, 2020\nLanguage-Team: Occitan (post 1500) (https://www.transifex.com/nextcloud/teams/64236/oc/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: oc\nPlural-Forms: nplurals=2; plural=(n > 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:187"},"msgstr":["Anullar"]}}}}},{"locale":"pl","json":{"charset":"utf-8","headers":{"Last-Translator":"Robert Szmurło <robert.szmurlo@ee.pw.edu.pl>, 2020","Language-Team":"Polish (https://www.transifex.com/nextcloud/teams/64236/pl/)","Content-Type":"text/plain; charset=UTF-8","Language":"pl","Plural-Forms":"nplurals=4; plural=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nRobert Szmurło <robert.szmurlo@ee.pw.edu.pl>, 2020\n"},"msgstr":["Last-Translator: Robert Szmurło <robert.szmurlo@ee.pw.edu.pl>, 2020\nLanguage-Team: Polish (https://www.transifex.com/nextcloud/teams/64236/pl/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: pl\nPlural-Forms: nplurals=4; plural=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:187"},"msgstr":["Cofnij"]}}}}},{"locale":"pt_BR","json":{"charset":"utf-8","headers":{"Last-Translator":"Paulo Schopf, 2020","Language-Team":"Portuguese (Brazil) (https://www.transifex.com/nextcloud/teams/64236/pt_BR/)","Content-Type":"text/plain; charset=UTF-8","Language":"pt_BR","Plural-Forms":"nplurals=2; plural=(n > 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nPaulo Schopf, 2020\n"},"msgstr":["Last-Translator: Paulo Schopf, 2020\nLanguage-Team: Portuguese (Brazil) (https://www.transifex.com/nextcloud/teams/64236/pt_BR/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: pt_BR\nPlural-Forms: nplurals=2; plural=(n > 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:187"},"msgstr":["Desfazer"]}}}}},{"locale":"ro","json":{"charset":"utf-8","headers":{"Last-Translator":"Mădălin Vasiliu <contact@madalinvasiliu.com>, 2022","Language-Team":"Romanian (https://www.transifex.com/nextcloud/teams/64236/ro/)","Content-Type":"text/plain; charset=UTF-8","Language":"ro","Plural-Forms":"nplurals=3; plural=(n==1?0:(((n%100>19)||((n%100==0)&&(n!=0)))?2:1));"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nMădălin Vasiliu <contact@madalinvasiliu.com>, 2022\n"},"msgstr":["Last-Translator: Mădălin Vasiliu <contact@madalinvasiliu.com>, 2022\nLanguage-Team: Romanian (https://www.transifex.com/nextcloud/teams/64236/ro/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ro\nPlural-Forms: nplurals=3; plural=(n==1?0:(((n%100>19)||((n%100==0)&&(n!=0)))?2:1));\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:193"},"msgstr":["Anulează"]}}}}},{"locale":"ru","json":{"charset":"utf-8","headers":{"Last-Translator":"Andrey Atapin <atab@kirovedu.ru>, 2020","Language-Team":"Russian (https://www.transifex.com/nextcloud/teams/64236/ru/)","Content-Type":"text/plain; charset=UTF-8","Language":"ru","Plural-Forms":"nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nAndrey Atapin <atab@kirovedu.ru>, 2020\n"},"msgstr":["Last-Translator: Andrey Atapin <atab@kirovedu.ru>, 2020\nLanguage-Team: Russian (https://www.transifex.com/nextcloud/teams/64236/ru/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ru\nPlural-Forms: nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:187"},"msgstr":["Отменить"]}}}}},{"locale":"si","json":{"charset":"utf-8","headers":{"Last-Translator":"Hela Basa, 2021","Language-Team":"Sinhala (https://www.transifex.com/nextcloud/teams/64236/si/)","Content-Type":"text/plain; charset=UTF-8","Language":"si","Plural-Forms":"nplurals=2; plural=(n != 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nHela Basa, 2021\n"},"msgstr":["Last-Translator: Hela Basa, 2021\nLanguage-Team: Sinhala (https://www.transifex.com/nextcloud/teams/64236/si/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: si\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:192"},"msgstr":["පෙරසේ"]}}}}},{"locale":"sk_SK","json":{"charset":"utf-8","headers":{"Last-Translator":"vladimirjendrol <vlado@jendrol.sk>, 2020","Language-Team":"Slovak (Slovakia) (https://www.transifex.com/nextcloud/teams/64236/sk_SK/)","Content-Type":"text/plain; charset=UTF-8","Language":"sk_SK","Plural-Forms":"nplurals=4; plural=(n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nvladimirjendrol <vlado@jendrol.sk>, 2020\n"},"msgstr":["Last-Translator: vladimirjendrol <vlado@jendrol.sk>, 2020\nLanguage-Team: Slovak (Slovakia) (https://www.transifex.com/nextcloud/teams/64236/sk_SK/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sk_SK\nPlural-Forms: nplurals=4; plural=(n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:192"},"msgstr":["Späť"]}}}}},{"locale":"sl","json":{"charset":"utf-8","headers":{"Last-Translator":"Matej Urbančič <>, 2020","Language-Team":"Slovenian (https://www.transifex.com/nextcloud/teams/64236/sl/)","Content-Type":"text/plain; charset=UTF-8","Language":"sl","Plural-Forms":"nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nMatej Urbančič <>, 2020\n"},"msgstr":["Last-Translator: Matej Urbančič <>, 2020\nLanguage-Team: Slovenian (https://www.transifex.com/nextcloud/teams/64236/sl/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sl\nPlural-Forms: nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:191"},"msgstr":["Razveljavi"]}}}}},{"locale":"sr","json":{"charset":"utf-8","headers":{"Last-Translator":"aleksandar jevtic, 2022","Language-Team":"Serbian (https://www.transifex.com/nextcloud/teams/64236/sr/)","Content-Type":"text/plain; charset=UTF-8","Language":"sr","Plural-Forms":"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\naleksandar jevtic, 2022\n"},"msgstr":["Last-Translator: aleksandar jevtic, 2022\nLanguage-Team: Serbian (https://www.transifex.com/nextcloud/teams/64236/sr/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sr\nPlural-Forms: nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:223"},"msgstr":["Poništi"]}}}}},{"locale":"sv","json":{"charset":"utf-8","headers":{"Last-Translator":"Victor Nyberg <v70123@gmail.com>, 2021","Language-Team":"Swedish (https://www.transifex.com/nextcloud/teams/64236/sv/)","Content-Type":"text/plain; charset=UTF-8","Language":"sv","Plural-Forms":"nplurals=2; plural=(n != 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nVictor Nyberg <v70123@gmail.com>, 2021\n"},"msgstr":["Last-Translator: Victor Nyberg <v70123@gmail.com>, 2021\nLanguage-Team: Swedish (https://www.transifex.com/nextcloud/teams/64236/sv/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sv\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:191"},"msgstr":["Ångra"]}}}}},{"locale":"ta","json":{"charset":"utf-8","headers":{"Last-Translator":"ஒளியன் Oliyan, 2022","Language-Team":"Tamil (https://www.transifex.com/nextcloud/teams/64236/ta/)","Content-Type":"text/plain; charset=UTF-8","Language":"ta","Plural-Forms":"nplurals=2; plural=(n != 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nஒளியன் Oliyan, 2022\n"},"msgstr":["Last-Translator: ஒளியன் Oliyan, 2022\nLanguage-Team: Tamil (https://www.transifex.com/nextcloud/teams/64236/ta/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ta\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:192"},"msgstr":["செயல்தவிர்"]}}}}},{"locale":"th_TH","json":{"charset":"utf-8","headers":{"Last-Translator":"Phongpanot Phairat <ppnplus@protonmail.com>, 2021","Language-Team":"Thai (Thailand) (https://www.transifex.com/nextcloud/teams/64236/th_TH/)","Content-Type":"text/plain; charset=UTF-8","Language":"th_TH","Plural-Forms":"nplurals=1; plural=0;"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nPhongpanot Phairat <ppnplus@protonmail.com>, 2021\n"},"msgstr":["Last-Translator: Phongpanot Phairat <ppnplus@protonmail.com>, 2021\nLanguage-Team: Thai (Thailand) (https://www.transifex.com/nextcloud/teams/64236/th_TH/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: th_TH\nPlural-Forms: nplurals=1; plural=0;\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:192"},"msgstr":["เลิกทำ"]}}}}},{"locale":"tr","json":{"charset":"utf-8","headers":{"Last-Translator":"Kaya Zeren <kayazeren@gmail.com>, 2020","Language-Team":"Turkish (https://www.transifex.com/nextcloud/teams/64236/tr/)","Content-Type":"text/plain; charset=UTF-8","Language":"tr","Plural-Forms":"nplurals=2; plural=(n > 1);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nKaya Zeren <kayazeren@gmail.com>, 2020\n"},"msgstr":["Last-Translator: Kaya Zeren <kayazeren@gmail.com>, 2020\nLanguage-Team: Turkish (https://www.transifex.com/nextcloud/teams/64236/tr/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: tr\nPlural-Forms: nplurals=2; plural=(n > 1);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:191"},"msgstr":["Geri al"]}}}}},{"locale":"uk","json":{"charset":"utf-8","headers":{"Last-Translator":"Oleksandr Panasyuk, 2021","Language-Team":"Ukrainian (https://www.transifex.com/nextcloud/teams/64236/uk/)","Content-Type":"text/plain; charset=UTF-8","Language":"uk","Plural-Forms":"nplurals=4; plural=(n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nOleksandr Panasyuk, 2021\n"},"msgstr":["Last-Translator: Oleksandr Panasyuk, 2021\nLanguage-Team: Ukrainian (https://www.transifex.com/nextcloud/teams/64236/uk/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: uk\nPlural-Forms: nplurals=4; plural=(n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:192"},"msgstr":["Скасувати дію"]}}}}},{"locale":"vi","json":{"charset":"utf-8","headers":{"Last-Translator":"Luu Thang <luuthang@vif.vn>, 2021","Language-Team":"Vietnamese (https://www.transifex.com/nextcloud/teams/64236/vi/)","Content-Type":"text/plain; charset=UTF-8","Language":"vi","Plural-Forms":"nplurals=1; plural=0;"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nLuu Thang <luuthang@vif.vn>, 2021\n"},"msgstr":["Last-Translator: Luu Thang <luuthang@vif.vn>, 2021\nLanguage-Team: Vietnamese (https://www.transifex.com/nextcloud/teams/64236/vi/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: vi\nPlural-Forms: nplurals=1; plural=0;\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:192"},"msgstr":["Hoàn tác"]}}}}},{"locale":"zh_CN","json":{"charset":"utf-8","headers":{"Last-Translator":"Henry Ji, 2022","Language-Team":"Chinese (China) (https://www.transifex.com/nextcloud/teams/64236/zh_CN/)","Content-Type":"text/plain; charset=UTF-8","Language":"zh_CN","Plural-Forms":"nplurals=1; plural=0;"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nHenry Ji, 2022\n"},"msgstr":["Last-Translator: Henry Ji, 2022\nLanguage-Team: Chinese (China) (https://www.transifex.com/nextcloud/teams/64236/zh_CN/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: zh_CN\nPlural-Forms: nplurals=1; plural=0;\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:192"},"msgstr":[" 撤消"]}}}}},{"locale":"zh_HK","json":{"charset":"utf-8","headers":{"Last-Translator":"Cha Wong <cafetango@gmail.com>, 2021","Language-Team":"Chinese (Hong Kong) (https://www.transifex.com/nextcloud/teams/64236/zh_HK/)","Content-Type":"text/plain; charset=UTF-8","Language":"zh_HK","Plural-Forms":"nplurals=1; plural=0;"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nCha Wong <cafetango@gmail.com>, 2021\n"},"msgstr":["Last-Translator: Cha Wong <cafetango@gmail.com>, 2021\nLanguage-Team: Chinese (Hong Kong) (https://www.transifex.com/nextcloud/teams/64236/zh_HK/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: zh_HK\nPlural-Forms: nplurals=1; plural=0;\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:191"},"msgstr":["還原"]}}}}},{"locale":"zh_TW","json":{"charset":"utf-8","headers":{"Last-Translator":"Natashia Maxins <railroad1987@gmail.com>, 2020","Language-Team":"Chinese (Taiwan) (https://www.transifex.com/nextcloud/teams/64236/zh_TW/)","Content-Type":"text/plain; charset=UTF-8","Language":"zh_TW","Plural-Forms":"nplurals=1; plural=0;"},"translations":{"":{"":{"msgid":"","comments":{"translator":"\nTranslators:\nNatashia Maxins <railroad1987@gmail.com>, 2020\n"},"msgstr":["Last-Translator: Natashia Maxins <railroad1987@gmail.com>, 2020\nLanguage-Team: Chinese (Taiwan) (https://www.transifex.com/nextcloud/teams/64236/zh_TW/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: zh_TW\nPlural-Forms: nplurals=1; plural=0;\n"]},"Undo":{"msgid":"Undo","comments":{"reference":"lib/toast.ts:192"},"msgstr":["復原"]}}}}}]};
    try {
        if (process) {
            process.env = Object.assign({}, process.env);
            Object.assign(process.env, env);
            return;
        }
    } catch (e) {} // avoid ReferenceError: process is not defined
    globalThis.process = { env:env };
})();

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$l =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var shared$4 = {exports: {}};

var global$k = global$l;

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty$4 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$4(global$k, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$k[key] = value;
  } return value;
};

var global$j = global$l;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$j[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.24.1',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var fails$l = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$k = fails$l;

var functionBindNative = !fails$k(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var bind$6 = FunctionPrototype$2.bind;
var call$i = FunctionPrototype$2.call;
var uncurryThis$n = NATIVE_BIND$3 && bind$6.bind(call$i, call$i);

var functionUncurryThis = NATIVE_BIND$3 ? function (fn) {
  return fn && uncurryThis$n(fn);
} : function (fn) {
  return fn && function () {
    return call$i.apply(fn, arguments);
  };
};

var $TypeError$c = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$6 = function (it) {
  if (it == undefined) throw $TypeError$c("Can't call method on " + it);
  return it;
};

var requireObjectCoercible$5 = requireObjectCoercible$6;

var $Object$3 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$4 = function (argument) {
  return $Object$3(requireObjectCoercible$5(argument));
};

var uncurryThis$m = functionUncurryThis;
var toObject$3 = toObject$4;

var hasOwnProperty$1 = uncurryThis$m({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty$1(toObject$3(it), key);
};

var uncurryThis$l = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$9 = uncurryThis$l(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$9(++id + postfix, 36);
};

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$j = function (argument) {
  return typeof argument == 'function';
};

var global$i = global$l;
var isCallable$i = isCallable$j;

var aFunction = function (argument) {
  return isCallable$i(argument) ? argument : undefined;
};

var getBuiltIn$8 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$i[namespace]) : global$i[namespace] && global$i[namespace][method];
};

var getBuiltIn$7 = getBuiltIn$8;

var engineUserAgent = getBuiltIn$7('navigator', 'userAgent') || '';

var global$h = global$l;
var userAgent$3 = engineUserAgent;

var process$4 = global$h.process;
var Deno$1 = global$h.Deno;
var versions = process$4 && process$4.versions || Deno$1 && Deno$1.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent$3) {
  match = userAgent$3.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$3.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

var V8_VERSION$2 = engineV8Version;
var fails$j = fails$l;

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$j(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
});

var NATIVE_SYMBOL$1 = nativeSymbol;

var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var global$g = global$l;
var shared$3 = shared$4.exports;
var hasOwn$9 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var WellKnownSymbolsStore = shared$3('wks');
var Symbol$2 = global$g.Symbol;
var symbolFor = Symbol$2 && Symbol$2['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$1;

var wellKnownSymbol$f = function (name) {
  if (!hasOwn$9(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn$9(Symbol$2, name)) {
      WellKnownSymbolsStore[name] = Symbol$2[name];
    } else if (USE_SYMBOL_AS_UID$1 && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};

var wellKnownSymbol$e = wellKnownSymbol$f;

var TO_STRING_TAG$2 = wellKnownSymbol$e('toStringTag');
var test = {};

test[TO_STRING_TAG$2] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var objectDefineProperty = {};

var fails$i = fails$l;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$i(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var isCallable$h = isCallable$j;

var isObject$a = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$h(it);
};

var global$f = global$l;
var isObject$9 = isObject$a;

var document$3 = global$f.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$9(document$3) && isObject$9(document$3.createElement);

var documentCreateElement$1 = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};

var DESCRIPTORS$a = descriptors;
var fails$h = fails$l;
var createElement$1 = documentCreateElement$1;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$a && !fails$h(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$9 = descriptors;
var fails$g = fails$l;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$9 && fails$g(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var isObject$8 = isObject$a;

var $String$3 = String;
var $TypeError$b = TypeError;

// `Assert: Type(argument) is Object`
var anObject$f = function (argument) {
  if (isObject$8(argument)) return argument;
  throw $TypeError$b($String$3(argument) + ' is not an object');
};

var NATIVE_BIND$2 = functionBindNative;

var call$h = Function.prototype.call;

var functionCall = NATIVE_BIND$2 ? call$h.bind(call$h) : function () {
  return call$h.apply(call$h, arguments);
};

var uncurryThis$k = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$k({}.isPrototypeOf);

var getBuiltIn$6 = getBuiltIn$8;
var isCallable$g = isCallable$j;
var isPrototypeOf$3 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var $Object$2 = Object;

var isSymbol$3 = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$6('Symbol');
  return isCallable$g($Symbol) && isPrototypeOf$3($Symbol.prototype, $Object$2(it));
};

var $String$2 = String;

var tryToString$4 = function (argument) {
  try {
    return $String$2(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$f = isCallable$j;
var tryToString$3 = tryToString$4;

var $TypeError$a = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$7 = function (argument) {
  if (isCallable$f(argument)) return argument;
  throw $TypeError$a(tryToString$3(argument) + ' is not a function');
};

var aCallable$6 = aCallable$7;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$5 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable$6(func);
};

var call$g = functionCall;
var isCallable$e = isCallable$j;
var isObject$7 = isObject$a;

var $TypeError$9 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$e(fn = input.toString) && !isObject$7(val = call$g(fn, input))) return val;
  if (isCallable$e(fn = input.valueOf) && !isObject$7(val = call$g(fn, input))) return val;
  if (pref !== 'string' && isCallable$e(fn = input.toString) && !isObject$7(val = call$g(fn, input))) return val;
  throw $TypeError$9("Can't convert object to primitive value");
};

var call$f = functionCall;
var isObject$6 = isObject$a;
var isSymbol$2 = isSymbol$3;
var getMethod$4 = getMethod$5;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$d = wellKnownSymbol$f;

var $TypeError$8 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$d('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$6(input) || isSymbol$2(input)) return input;
  var exoticToPrim = getMethod$4(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$f(exoticToPrim, input, pref);
    if (!isObject$6(result) || isSymbol$2(result)) return result;
    throw $TypeError$8("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol$1 = isSymbol$3;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol$1(key) ? key : key + '';
};

var DESCRIPTORS$8 = descriptors;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$e = anObject$f;
var toPropertyKey$2 = toPropertyKey$3;

var $TypeError$7 = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$8 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$e(O);
  P = toPropertyKey$2(P);
  anObject$e(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$e(O);
  P = toPropertyKey$2(P);
  anObject$e(Attributes);
  if (IE8_DOM_DEFINE$1) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$7('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var makeBuiltIn$2 = {exports: {}};

var DESCRIPTORS$7 = descriptors;
var hasOwn$8 = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$7 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$8(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$7 || (DESCRIPTORS$7 && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$j = functionUncurryThis;
var isCallable$d = isCallable$j;
var store$1 = sharedStore;

var functionToString = uncurryThis$j(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$d(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$4 = store$1.inspectSource;

var global$e = global$l;
var isCallable$c = isCallable$j;
var inspectSource$3 = inspectSource$4;

var WeakMap$1 = global$e.WeakMap;

var nativeWeakMap = isCallable$c(WeakMap$1) && /native code/.test(inspectSource$3(WeakMap$1));

var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var DESCRIPTORS$6 = descriptors;
var definePropertyModule$5 = objectDefineProperty;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;

var createNonEnumerableProperty$3 = DESCRIPTORS$6 ? function (object, key, value) {
  return definePropertyModule$5.f(object, key, createPropertyDescriptor$2(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var shared$2 = shared$4.exports;
var uid = uid$2;

var keys = shared$2('keys');

var sharedKey$2 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$d = global$l;
var uncurryThis$i = functionUncurryThis;
var isObject$5 = isObject$a;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$3;
var hasOwn$7 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$1 = sharedKey$2;
var hiddenKeys$3 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$2 = global$d.TypeError;
var WeakMap = global$d.WeakMap;
var set$1, get$2, has;

var enforce = function (it) {
  return has(it) ? get$2(it) : set$1(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$5(it) || (state = get$2(it)).type !== TYPE) {
      throw TypeError$2('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  var store = shared$1.state || (shared$1.state = new WeakMap());
  var wmget = uncurryThis$i(store.get);
  var wmhas = uncurryThis$i(store.has);
  var wmset = uncurryThis$i(store.set);
  set$1 = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get$2 = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey$1('state');
  hiddenKeys$3[STATE] = true;
  set$1 = function (it, metadata) {
    if (hasOwn$7(it, STATE)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$2(it, STATE, metadata);
    return metadata;
  };
  get$2 = function (it) {
    return hasOwn$7(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$7(it, STATE);
  };
}

var internalState = {
  set: set$1,
  get: get$2,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var fails$f = fails$l;
var isCallable$b = isCallable$j;
var hasOwn$6 = hasOwnProperty_1;
var DESCRIPTORS$5 = descriptors;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var inspectSource$2 = inspectSource$4;
var InternalStateModule$1 = internalState;

var enforceInternalState = InternalStateModule$1.enforce;
var getInternalState$1 = InternalStateModule$1.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty$3 = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS$5 && !fails$f(function () {
  return defineProperty$3(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$6(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS$5) defineProperty$3(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$6(options, 'arity') && value.length !== options.arity) {
    defineProperty$3(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$6(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$5) defineProperty$3(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn$6(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$1(function toString() {
  return isCallable$b(this) && getInternalState$1(this).source || inspectSource$2(this);
}, 'toString');

var isCallable$a = isCallable$j;
var definePropertyModule$4 = objectDefineProperty;
var makeBuiltIn = makeBuiltIn$2.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$6 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$a(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$4.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var uncurryThis$h = functionUncurryThis;

var toString$8 = uncurryThis$h({}.toString);
var stringSlice$5 = uncurryThis$h(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice$5(toString$8(it), 8, -1);
};

var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$9 = isCallable$j;
var classofRaw = classofRaw$1;
var wellKnownSymbol$c = wellKnownSymbol$f;

var TO_STRING_TAG$1 = wellKnownSymbol$c('toStringTag');
var $Object$1 = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$9 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$1)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable$9(O.callee) ? 'Arguments' : result;
};

var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$8 = classof$9;

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
var objectToString$1 = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
  return '[object ' + classof$8(this) + ']';
};

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var defineBuiltIn$5 = defineBuiltIn$6;
var toString$7 = objectToString$1;

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn$5(Object.prototype, 'toString', toString$7, { unsafe: true });
}

var objectGetOwnPropertyDescriptor = {};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$2(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var uncurryThis$g = functionUncurryThis;
var fails$e = fails$l;
var classof$7 = classofRaw$1;

var $Object = Object;
var split = uncurryThis$g(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$e(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$7(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$2 = indexedObject;
var requireObjectCoercible$4 = requireObjectCoercible$6;

var toIndexedObject$4 = function (it) {
  return IndexedObject$2(requireObjectCoercible$4(it));
};

var DESCRIPTORS$4 = descriptors;
var call$e = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;
var toIndexedObject$3 = toIndexedObject$4;
var toPropertyKey$1 = toPropertyKey$3;
var hasOwn$5 = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine;

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$4 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$3(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$5(O, P)) return createPropertyDescriptor$1(!call$e(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor$1 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$1 : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$4 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

var max$2 = Math.max;
var min$3 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$2 = function (index, length) {
  var integer = toIntegerOrInfinity$3(index);
  return integer < 0 ? max$2(integer + length, 0) : min$3(integer, length);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

var min$2 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$3 = function (argument) {
  return argument > 0 ? min$2(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$2 = toLength$3;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$4 = function (obj) {
  return toLength$2(obj.length);
};

var toIndexedObject$2 = toIndexedObject$4;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$3 = lengthOfArrayLike$4;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$3 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$2($this);
    var length = lengthOfArrayLike$3(O);
    var index = toAbsoluteIndex$1(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$3(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$3(false)
};

var uncurryThis$f = functionUncurryThis;
var hasOwn$4 = hasOwnProperty_1;
var toIndexedObject$1 = toIndexedObject$4;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var push$3 = uncurryThis$f([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$1(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$4(hiddenKeys$2, key) && hasOwn$4(O, key) && push$3(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$4(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$3(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$5 = getBuiltIn$8;
var uncurryThis$e = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$d = anObject$f;

var concat$2 = uncurryThis$e([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$5('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$d(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$3 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$3 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$3.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$3(target, key) && !(exceptions && hasOwn$3(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$d = fails$l;
var isCallable$8 = isCallable$j;

var replacement = /#|\.prototype\./;

var isForced$2 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$8(detection) ? fails$d(detection)
    : !!detection;
};

var normalize = isForced$2.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = 'N';
var POLYFILL = isForced$2.POLYFILL = 'P';

var isForced_1 = isForced$2;

var global$c = global$l;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$3;
var defineBuiltIn$4 = defineBuiltIn$6;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced$1 = isForced_1;

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$c;
  } else if (STATIC) {
    target = global$c[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$c[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$1(sourceProperty, 'sham', true);
    }
    defineBuiltIn$4(target, key, sourceProperty, options);
  }
};

var classof$6 = classofRaw$1;
var global$b = global$l;

var engineIsNode = classof$6(global$b.process) == 'process';

var isCallable$7 = isCallable$j;

var $String$1 = String;
var $TypeError$6 = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$7(argument)) return argument;
  throw $TypeError$6("Can't set " + $String$1(argument) + ' as a prototype');
};

var uncurryThis$d = functionUncurryThis;
var anObject$c = anObject$f;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis$d(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject$c(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var defineProperty$2 = objectDefineProperty.f;
var hasOwn$2 = hasOwnProperty_1;
var wellKnownSymbol$b = wellKnownSymbol$f;

var TO_STRING_TAG = wellKnownSymbol$b('toStringTag');

var setToStringTag$1 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$2(target, TO_STRING_TAG)) {
    defineProperty$2(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};

var getBuiltIn$4 = getBuiltIn$8;
var definePropertyModule$2 = objectDefineProperty;
var wellKnownSymbol$a = wellKnownSymbol$f;
var DESCRIPTORS$3 = descriptors;

var SPECIES$5 = wellKnownSymbol$a('species');

var setSpecies$1 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$4(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule$2.f;

  if (DESCRIPTORS$3 && Constructor && !Constructor[SPECIES$5]) {
    defineProperty(Constructor, SPECIES$5, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var isPrototypeOf$2 = objectIsPrototypeOf;

var $TypeError$5 = TypeError;

var anInstance$1 = function (it, Prototype) {
  if (isPrototypeOf$2(Prototype, it)) return it;
  throw $TypeError$5('Incorrect invocation');
};

var uncurryThis$c = functionUncurryThis;
var fails$c = fails$l;
var isCallable$6 = isCallable$j;
var classof$5 = classof$9;
var getBuiltIn$3 = getBuiltIn$8;
var inspectSource$1 = inspectSource$4;

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn$3('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$2 = uncurryThis$c(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$6(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$6(argument)) return false;
  switch (classof$5(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$2 = !construct || fails$c(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isConstructor$1 = isConstructor$2;
var tryToString$2 = tryToString$4;

var $TypeError$4 = TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$1 = function (argument) {
  if (isConstructor$1(argument)) return argument;
  throw $TypeError$4(tryToString$2(argument) + ' is not a constructor');
};

var anObject$b = anObject$f;
var aConstructor = aConstructor$1;
var wellKnownSymbol$9 = wellKnownSymbol$f;

var SPECIES$4 = wellKnownSymbol$9('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$2 = function (O, defaultConstructor) {
  var C = anObject$b(O).constructor;
  var S;
  return C === undefined || (S = anObject$b(C)[SPECIES$4]) == undefined ? defaultConstructor : aConstructor(S);
};

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$3 = FunctionPrototype.apply;
var call$d = FunctionPrototype.call;

// eslint-disable-next-line es-x/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$d.bind(apply$3) : function () {
  return call$d.apply(apply$3, arguments);
});

var uncurryThis$b = functionUncurryThis;
var aCallable$5 = aCallable$7;
var NATIVE_BIND = functionBindNative;

var bind$5 = uncurryThis$b(uncurryThis$b.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$5(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$5(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var getBuiltIn$2 = getBuiltIn$8;

var html$2 = getBuiltIn$2('document', 'documentElement');

var uncurryThis$a = functionUncurryThis;

var arraySlice$2 = uncurryThis$a([].slice);

var $TypeError$3 = TypeError;

var validateArgumentsLength$1 = function (passed, required) {
  if (passed < required) throw $TypeError$3('Not enough arguments');
  return passed;
};

var userAgent$2 = engineUserAgent;

var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

var global$a = global$l;
var apply$2 = functionApply;
var bind$4 = functionBindContext;
var isCallable$5 = isCallable$j;
var hasOwn$1 = hasOwnProperty_1;
var fails$b = fails$l;
var html$1 = html$2;
var arraySlice$1 = arraySlice$2;
var createElement = documentCreateElement$1;
var validateArgumentsLength = validateArgumentsLength$1;
var IS_IOS$1 = engineIsIos;
var IS_NODE$3 = engineIsNode;

var set = global$a.setImmediate;
var clear = global$a.clearImmediate;
var process$3 = global$a.process;
var Dispatch = global$a.Dispatch;
var Function$1 = global$a.Function;
var MessageChannel = global$a.MessageChannel;
var String$1 = global$a.String;
var counter = 0;
var queue$1 = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global$a.location;
} catch (error) { /* empty */ }

var run = function (id) {
  if (hasOwn$1(queue$1, id)) {
    var fn = queue$1[id];
    delete queue$1[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global$a.postMessage(String$1(id), location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable$5(handler) ? handler : Function$1(handler);
    var args = arraySlice$1(arguments, 1);
    queue$1[++counter] = function () {
      apply$2(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue$1[id];
  };
  // Node.js 0.8-
  if (IS_NODE$3) {
    defer = function (id) {
      process$3.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS$1) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind$4(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global$a.addEventListener &&
    isCallable$5(global$a.postMessage) &&
    !global$a.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails$b(post)
  ) {
    defer = post;
    global$a.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html$1.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html$1.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

var task$1 = {
  set: set,
  clear: clear
};

var userAgent$1 = engineUserAgent;
var global$9 = global$l;

var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && global$9.Pebble !== undefined;

var userAgent = engineUserAgent;

var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);

var global$8 = global$l;
var bind$3 = functionBindContext;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var macrotask = task$1.set;
var IS_IOS = engineIsIos;
var IS_IOS_PEBBLE = engineIsIosPebble;
var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
var IS_NODE$2 = engineIsNode;

var MutationObserver = global$8.MutationObserver || global$8.WebKitMutationObserver;
var document$2 = global$8.document;
var process$2 = global$8.process;
var Promise$1 = global$8.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global$8, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify$1, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE$2 && (parent = process$2.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify$1();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify$1 = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise$1.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise$1;
    then = bind$3(promise.then, promise);
    notify$1 = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE$2) {
    notify$1 = function () {
      process$2.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // strange IE + webpack dev server bug - use .bind(global)
    macrotask = bind$3(macrotask, global$8);
    notify$1 = function () {
      macrotask(flush);
    };
  }
}

var microtask$1 = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify$1();
  } last = task;
};

var global$7 = global$l;

var hostReportErrors$1 = function (a, b) {
  var console = global$7.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};

var perform$3 = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var Queue$1 = function () {
  this.head = null;
  this.tail = null;
};

Queue$1.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    if (this.head) this.tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      this.head = entry.next;
      if (this.tail === entry) this.tail = null;
      return entry.item;
    }
  }
};

var queue = Queue$1;

var global$6 = global$l;

var promiseNativeConstructor = global$6.Promise;

var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

var IS_DENO$1 = engineIsDeno;
var IS_NODE$1 = engineIsNode;

var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1
  && typeof window == 'object'
  && typeof document == 'object';

var global$5 = global$l;
var NativePromiseConstructor$3 = promiseNativeConstructor;
var isCallable$4 = isCallable$j;
var isForced = isForced_1;
var inspectSource = inspectSource$4;
var wellKnownSymbol$8 = wellKnownSymbol$f;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var V8_VERSION$1 = engineV8Version;

NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
var SPECIES$3 = wellKnownSymbol$8('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$4(global$5.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR$5 = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$3);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$3);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION$1 === 66) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION$1 || V8_VERSION$1 < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor$3(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES$3] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
});

var promiseConstructorDetection = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
  SUBCLASSING: SUBCLASSING
};

var newPromiseCapability$2 = {};

var aCallable$4 = aCallable$7;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$4(resolve);
  this.reject = aCallable$4(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
newPromiseCapability$2.f = function (C) {
  return new PromiseCapability(C);
};

var $$b = _export;
var IS_NODE = engineIsNode;
var global$4 = global$l;
var call$c = functionCall;
var defineBuiltIn$3 = defineBuiltIn$6;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$1;
var setSpecies = setSpecies$1;
var aCallable$3 = aCallable$7;
var isCallable$3 = isCallable$j;
var isObject$4 = isObject$a;
var anInstance = anInstance$1;
var speciesConstructor$1 = speciesConstructor$2;
var task = task$1.set;
var microtask = microtask$1;
var hostReportErrors = hostReportErrors$1;
var perform$2 = perform$3;
var Queue = queue;
var InternalStateModule = internalState;
var NativePromiseConstructor$2 = promiseNativeConstructor;
var PromiseConstructorDetection = promiseConstructorDetection;
var newPromiseCapabilityModule$3 = newPromiseCapability$2;

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype$1 = NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
var PromiseConstructor = NativePromiseConstructor$2;
var PromisePrototype = NativePromisePrototype$1;
var TypeError$1 = global$4.TypeError;
var document$1 = global$4.document;
var process$1 = global$4.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$3.f;
var newGenericPromiseCapability = newPromiseCapability$1;

var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$4.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject$4(it) && isCallable$3(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError$1('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call$c(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$1.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global$4.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$4['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call$c(task, global$4, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$2(function () {
        if (IS_NODE) {
          process$1.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call$c(task, global$4, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process$1.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind$2 = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call$c(then, value,
            bind$2(internalResolve, wrapper, state),
            bind$2(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR$4) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable$3(executor);
    call$c(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind$2(internalResolve, state), bind$2(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn$3(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability$1(speciesConstructor$1(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable$3(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$3(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process$1.domain : undefined;
    if (state.state == PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind$2(internalResolve, state);
    this.reject = bind$2(internalReject, state);
  };

  newPromiseCapabilityModule$3.f = newPromiseCapability$1 = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (isCallable$3(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
    nativeThen = NativePromisePrototype$1.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn$3(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call$c(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype$1.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype$1, PromisePrototype);
    }
  }
}

$$b({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false);
setSpecies(PROMISE);

var iterators = {};

var wellKnownSymbol$7 = wellKnownSymbol$f;
var Iterators$1 = iterators;

var ITERATOR$2 = wellKnownSymbol$7('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$2] === it);
};

var classof$4 = classof$9;
var getMethod$3 = getMethod$5;
var Iterators = iterators;
var wellKnownSymbol$6 = wellKnownSymbol$f;

var ITERATOR$1 = wellKnownSymbol$6('iterator');

var getIteratorMethod$2 = function (it) {
  if (it != undefined) return getMethod$3(it, ITERATOR$1)
    || getMethod$3(it, '@@iterator')
    || Iterators[classof$4(it)];
};

var call$b = functionCall;
var aCallable$2 = aCallable$7;
var anObject$a = anObject$f;
var tryToString$1 = tryToString$4;
var getIteratorMethod$1 = getIteratorMethod$2;

var $TypeError$2 = TypeError;

var getIterator$1 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable$2(iteratorMethod)) return anObject$a(call$b(iteratorMethod, argument));
  throw $TypeError$2(tryToString$1(argument) + ' is not iterable');
};

var call$a = functionCall;
var anObject$9 = anObject$f;
var getMethod$2 = getMethod$5;

var iteratorClose$1 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$9(iterator);
  try {
    innerResult = getMethod$2(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$a(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$9(innerResult);
  return value;
};

var bind$1 = functionBindContext;
var call$9 = functionCall;
var anObject$8 = anObject$f;
var tryToString = tryToString$4;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike$2 = lengthOfArrayLike$4;
var isPrototypeOf$1 = objectIsPrototypeOf;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;
var iteratorClose = iteratorClose$1;

var $TypeError$1 = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

var iterate$2 = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$1(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$8(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw $TypeError$1(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$2(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$1(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$9(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf$1(ResultPrototype, result)) return result;
  } return new Result(false);
};

var wellKnownSymbol$5 = wellKnownSymbol$f;

var ITERATOR = wellKnownSymbol$5('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es-x/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

var NativePromiseConstructor$1 = promiseNativeConstructor;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor$1.all(iterable).then(undefined, function () { /* empty */ });
});

var $$a = _export;
var call$8 = functionCall;
var aCallable$1 = aCallable$7;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$1 = perform$3;
var iterate$1 = iterate$2;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$$a({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$2.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$1(function () {
      var $promiseResolve = aCallable$1(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$1(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$8($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$9 = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor = promiseNativeConstructor;
var getBuiltIn$1 = getBuiltIn$8;
var isCallable$2 = isCallable$j;
var defineBuiltIn$2 = defineBuiltIn$6;

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$$9({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (isCallable$2(NativePromiseConstructor)) {
  var method = getBuiltIn$1('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn$2(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}

var $$8 = _export;
var call$7 = functionCall;
var aCallable = aCallable$7;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var perform = perform$3;
var iterate = iterate$2;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$$8({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$1.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call$7($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$7 = _export;
var call$6 = functionCall;
var newPromiseCapabilityModule = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$$7({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call$6(capability.reject, undefined, r);
    return capability.promise;
  }
});

var anObject$7 = anObject$f;
var isObject$3 = isObject$a;
var newPromiseCapability = newPromiseCapability$2;

var promiseResolve$1 = function (C, x) {
  anObject$7(C);
  if (isObject$3(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var $$6 = _export;
var getBuiltIn = getBuiltIn$8;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve = promiseResolve$1;

getBuiltIn('Promise');

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$$6({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(this, x);
  }
});

var FilePickerType;

(function (FilePickerType) {
  FilePickerType[FilePickerType["Choose"] = 1] = "Choose";
  FilePickerType[FilePickerType["Move"] = 2] = "Move";
  FilePickerType[FilePickerType["Copy"] = 3] = "Copy";
  FilePickerType[FilePickerType["CopyMove"] = 4] = "CopyMove";
})(FilePickerType || (FilePickerType = {}));

var FilePicker =
/** @class */
function () {
  function FilePicker(title, multiSelect, mimeTypeFilter, modal, type, directoriesAllowed, path) {
    this.title = title;
    this.multiSelect = multiSelect;
    this.mimeTypeFiler = mimeTypeFilter;
    this.modal = modal;
    this.type = type;
    this.directoriesAllowed = directoriesAllowed;
    this.path = path;
  }

  FilePicker.prototype.pick = function () {
    var _this = this;

    return new Promise(function (res, rej) {
      OC.dialogs.filepicker(_this.title, res, _this.multiSelect, _this.mimeTypeFiler, _this.modal, _this.type, _this.path, {
        allowDirectoryChooser: _this.directoriesAllowed
      });
    });
  };

  return FilePicker;
}();

var FilePickerBuilder =
/** @class */
function () {
  function FilePickerBuilder(title) {
    this.multiSelect = false;
    this.mimeTypeFiler = [];
    this.modal = true;
    this.type = FilePickerType.Choose;
    this.directoriesAllowed = false;
    this.title = title;
  }

  FilePickerBuilder.prototype.setMultiSelect = function (ms) {
    this.multiSelect = ms;
    return this;
  };

  FilePickerBuilder.prototype.addMimeTypeFilter = function (filter) {
    this.mimeTypeFiler.push(filter);
    return this;
  };

  FilePickerBuilder.prototype.setMimeTypeFilter = function (filter) {
    this.mimeTypeFiler = filter;
    return this;
  };

  FilePickerBuilder.prototype.setModal = function (modal) {
    this.modal = modal;
    return this;
  };

  FilePickerBuilder.prototype.setType = function (type) {
    this.type = type;
    return this;
  };

  FilePickerBuilder.prototype.allowDirectories = function (allow) {
    if (allow === void 0) {
      allow = true;
    }

    this.directoriesAllowed = allow;
    return this;
  };

  FilePickerBuilder.prototype.startAt = function (path) {
    this.path = path;
    return this;
  };

  FilePickerBuilder.prototype.build = function () {
    return new FilePicker(this.title, this.multiSelect, this.mimeTypeFiler, this.modal, this.type, this.directoriesAllowed, this.path);
  };

  return FilePickerBuilder;
}();
function getFilePickerBuilder(title) {
  return new FilePickerBuilder(title);
}

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS$2 = descriptors;
var uncurryThis$9 = functionUncurryThis;
var call$5 = functionCall;
var fails$a = fails$l;
var objectKeys$1 = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$2 = toObject$4;
var IndexedObject$1 = indexedObject;

// eslint-disable-next-line es-x/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
var defineProperty$1 = Object.defineProperty;
var concat$1 = uncurryThis$9([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$a(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$2 && $assign({ b: 1 }, $assign(defineProperty$1({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$1(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es-x/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys$1($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$2(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject$1(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat$1(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$2 || call$5(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $$5 = _export;
var assign = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es-x/no-object-assign -- required for testing
$$5({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});

var classof$3 = classof$9;

var $String = String;

var toString$6 = function (argument) {
  if (classof$3(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

var anObject$6 = anObject$f;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$6(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};

var call$4 = functionCall;
var hasOwn = hasOwnProperty_1;
var isPrototypeOf = objectIsPrototypeOf;
var regExpFlags = regexpFlags$1;

var RegExpPrototype$2 = RegExp.prototype;

var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype$2) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype$2, R)
    ? call$4(regExpFlags, R) : flags;
};

var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
var defineBuiltIn$1 = defineBuiltIn$6;
var anObject$5 = anObject$f;
var $toString = toString$6;
var fails$9 = fails$l;
var getRegExpFlags = regexpGetFlags;

var TO_STRING = 'toString';
var RegExpPrototype$1 = RegExp.prototype;
var n$ToString = RegExpPrototype$1[TO_STRING];

var NOT_GENERIC = fails$9(function () { return n$ToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME$1 && n$ToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn$1(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject$5(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

var fails$8 = fails$l;
var global$3 = global$l;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$3.RegExp;

var UNSUPPORTED_Y$2 = fails$8(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y$2 || fails$8(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$8(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y$2
};

var objectDefineProperties = {};

var DESCRIPTORS$1 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$1 = objectDefineProperty;
var anObject$4 = anObject$f;
var toIndexedObject = toIndexedObject$4;
var objectKeys = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$1 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$4(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);
  return O;
};

var anObject$3 = anObject$f;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html = html$2;
var documentCreateElement = documentCreateElement$1;
var sharedKey = sharedKey$2;

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$3(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var fails$7 = fails$l;
var global$2 = global$l;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$2.RegExp;

var regexpUnsupportedDotAll = fails$7(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$6 = fails$l;
var global$1 = global$l;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$1.RegExp;

var regexpUnsupportedNcg = fails$6(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$3 = functionCall;
var uncurryThis$8 = functionUncurryThis;
var toString$5 = toString$6;
var regexpFlags = regexpFlags$1;
var stickyHelpers$1 = regexpStickyHelpers;
var shared = shared$4.exports;
var create = objectCreate;
var getInternalState = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$3 = uncurryThis$8(''.charAt);
var indexOf = uncurryThis$8(''.indexOf);
var replace$2 = uncurryThis$8(''.replace);
var stringSlice$4 = uncurryThis$8(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$3(nativeExec, re1, 'a');
  call$3(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString$5(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$3(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = call$3(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$2(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$4(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$3(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call$3(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$4(match.input, charsAdded);
        match[0] = stringSlice$4(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call$3(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$3 = patchedExec;

var $$4 = _export;
var exec$1 = regexpExec$3;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$4({ target: 'RegExp', proto: true, forced: /./.exec !== exec$1 }, {
  exec: exec$1
});

// TODO: Remove from `core-js@4` since it's moved to entry points

var uncurryThis$7 = functionUncurryThis;
var defineBuiltIn = defineBuiltIn$6;
var regexpExec$2 = regexpExec$3;
var fails$5 = fails$l;
var wellKnownSymbol$4 = wellKnownSymbol$f;
var createNonEnumerableProperty = createNonEnumerableProperty$3;

var SPECIES$2 = wellKnownSymbol$4('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$4(KEY);

  var DELEGATES_TO_SYMBOL = !fails$5(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$5(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES$2] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis$7(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$7(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec$2 || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

var uncurryThis$6 = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString$4 = toString$6;
var requireObjectCoercible$3 = requireObjectCoercible$6;

var charAt$2 = uncurryThis$6(''.charAt);
var charCodeAt = uncurryThis$6(''.charCodeAt);
var stringSlice$3 = uncurryThis$6(''.slice);

var createMethod$2 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$4(requireObjectCoercible$3($this));
    var position = toIntegerOrInfinity$1(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$2(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice$3(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$2(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$2(true)
};

var charAt$1 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$2 = function (S, index, unicode) {
  return index + (unicode ? charAt$1(S, index).length : 1);
};

var uncurryThis$5 = functionUncurryThis;
var toObject$1 = toObject$4;

var floor = Math.floor;
var charAt = uncurryThis$5(''.charAt);
var replace$1 = uncurryThis$5(''.replace);
var stringSlice$2 = uncurryThis$5(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject$1(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace$1(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice$2(str, 0, position);
      case "'": return stringSlice$2(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice$2(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var call$2 = functionCall;
var anObject$2 = anObject$f;
var isCallable$1 = isCallable$j;
var classof$2 = classofRaw$1;
var regexpExec$1 = regexpExec$3;

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$1(exec)) {
    var result = call$2(exec, R, S);
    if (result !== null) anObject$2(result);
    return result;
  }
  if (classof$2(R) === 'RegExp') return call$2(regexpExec$1, R, S);
  throw $TypeError('RegExp#exec called on incompatible receiver');
};

var apply$1 = functionApply;
var call$1 = functionCall;
var uncurryThis$4 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var fails$4 = fails$l;
var anObject$1 = anObject$f;
var isCallable = isCallable$j;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var toLength$1 = toLength$3;
var toString$3 = toString$6;
var requireObjectCoercible$2 = requireObjectCoercible$6;
var advanceStringIndex$1 = advanceStringIndex$2;
var getMethod$1 = getMethod$5;
var getSubstitution = getSubstitution$1;
var regExpExec = regexpExecAbstract;
var wellKnownSymbol$3 = wellKnownSymbol$f;

var REPLACE = wellKnownSymbol$3('replace');
var max$1 = Math.max;
var min$1 = Math.min;
var concat = uncurryThis$4([].concat);
var push$2 = uncurryThis$4([].push);
var stringIndexOf = uncurryThis$4(''.indexOf);
var stringSlice$1 = uncurryThis$4(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$4(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic$1('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible$2(this);
      var replacer = searchValue == undefined ? undefined : getMethod$1(searchValue, REPLACE);
      return replacer
        ? call$1(replacer, searchValue, O, replaceValue)
        : call$1(nativeReplace, toString$3(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$1(this);
      var S = toString$3(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString$3(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push$2(results, result);
        if (!global) break;

        var matchStr = toString$3(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$1(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString$3(result[0]);
        var position = max$1(min$1(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push$2(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push$2(replacerArgs, namedCaptures);
          var replacement = toString$3(apply$1(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice$1(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice$1(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

var fails$3 = fails$l;

var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$3(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};

/* eslint-disable es-x/no-array-prototype-indexof -- required for testing */
var $$3 = _export;
var uncurryThis$3 = functionUncurryThis;
var $IndexOf = arrayIncludes.indexOf;
var arrayMethodIsStrict = arrayMethodIsStrict$1;

var un$IndexOf = uncurryThis$3([].indexOf);

var NEGATIVE_ZERO = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$$3({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? un$IndexOf(this, searchElement, fromIndex) || 0
      : $IndexOf(this, searchElement, fromIndex);
  }
});

var isObject$2 = isObject$a;
var classof$1 = classofRaw$1;
var wellKnownSymbol$2 = wellKnownSymbol$f;

var MATCH = wellKnownSymbol$2('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject$2(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof$1(it) == 'RegExp');
};

var toPropertyKey = toPropertyKey$3;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$3;

var createProperty$1 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};

var toAbsoluteIndex = toAbsoluteIndex$2;
var lengthOfArrayLike$1 = lengthOfArrayLike$4;
var createProperty = createProperty$1;

var $Array$1 = Array;
var max = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$1(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array$1(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};

var apply = functionApply;
var call = functionCall;
var uncurryThis$2 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var isRegExp = isRegexp;
var anObject = anObject$f;
var requireObjectCoercible$1 = requireObjectCoercible$6;
var speciesConstructor = speciesConstructor$2;
var advanceStringIndex = advanceStringIndex$2;
var toLength = toLength$3;
var toString$2 = toString$6;
var getMethod = getMethod$5;
var arraySlice = arraySliceSimple;
var callRegExpExec = regexpExecAbstract;
var regexpExec = regexpExec$3;
var stickyHelpers = regexpStickyHelpers;
var fails$2 = fails$l;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis$2(/./.exec);
var push$1 = uncurryThis$2($push);
var stringSlice = uncurryThis$2(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$2(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString$2(requireObjectCoercible$1(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          push$1(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push$1(output, '');
      } else push$1(output, stringSlice(string, lastLastIndex));
      return output.length > lim ? arraySlice(output, 0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible$1(this);
      var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString$2(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString$2(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push$1(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push$1(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push$1(A, stringSlice(S, p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

// a string of all valid unicode whitespaces
var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$1 = functionUncurryThis;
var requireObjectCoercible = requireObjectCoercible$6;
var toString$1 = toString$6;
var whitespaces$1 = whitespaces$2;

var replace = uncurryThis$1(''.replace);
var whitespace = '[' + whitespaces$1 + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod$1 = function (TYPE) {
  return function ($this) {
    var string = toString$1(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod$1(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod$1(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod$1(3)
};

var PROPER_FUNCTION_NAME = functionName.PROPER;
var fails$1 = fails$l;
var whitespaces = whitespaces$2;

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
var stringTrimForced = function (METHOD_NAME) {
  return fails$1(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};

var $$2 = _export;
var $trim = stringTrim.trim;
var forcedStringTrimMethod = stringTrimForced;

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$$2({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});

var toastify = {exports: {}};

(function (module) {
  (function (root, factory) {
    if (module.exports) {
      module.exports = factory();
    } else {
      root.Toastify = factory();
    }
  })(commonjsGlobal, function (global) {
    // Object initialization
    var Toastify = function Toastify(options) {
      // Returning a new init object
      return new Toastify.lib.init(options);
    },
        // Library version
    version = "1.12.0"; // Set the default global options


    Toastify.defaults = {
      oldestFirst: true,
      text: "Toastify is awesome!",
      node: undefined,
      duration: 3000,
      selector: undefined,
      callback: function callback() {},
      destination: undefined,
      newWindow: false,
      close: false,
      gravity: "toastify-top",
      positionLeft: false,
      position: '',
      backgroundColor: '',
      avatar: "",
      className: "",
      stopOnFocus: true,
      onClick: function onClick() {},
      offset: {
        x: 0,
        y: 0
      },
      escapeMarkup: true,
      ariaLive: 'polite',
      style: {
        background: ''
      }
    }; // Defining the prototype of the object

    Toastify.lib = Toastify.prototype = {
      toastify: version,
      constructor: Toastify,
      // Initializing the object with required parameters
      init: function init(options) {
        // Verifying and validating the input object
        if (!options) {
          options = {};
        } // Creating the options object


        this.options = {};
        this.toastElement = null; // Validating the options

        this.options.text = options.text || Toastify.defaults.text; // Display message

        this.options.node = options.node || Toastify.defaults.node; // Display content as node

        this.options.duration = options.duration === 0 ? 0 : options.duration || Toastify.defaults.duration; // Display duration

        this.options.selector = options.selector || Toastify.defaults.selector; // Parent selector

        this.options.callback = options.callback || Toastify.defaults.callback; // Callback after display

        this.options.destination = options.destination || Toastify.defaults.destination; // On-click destination

        this.options.newWindow = options.newWindow || Toastify.defaults.newWindow; // Open destination in new window

        this.options.close = options.close || Toastify.defaults.close; // Show toast close icon

        this.options.gravity = options.gravity === "bottom" ? "toastify-bottom" : Toastify.defaults.gravity; // toast position - top or bottom

        this.options.positionLeft = options.positionLeft || Toastify.defaults.positionLeft; // toast position - left or right

        this.options.position = options.position || Toastify.defaults.position; // toast position - left or right

        this.options.backgroundColor = options.backgroundColor || Toastify.defaults.backgroundColor; // toast background color

        this.options.avatar = options.avatar || Toastify.defaults.avatar; // img element src - url or a path

        this.options.className = options.className || Toastify.defaults.className; // additional class names for the toast

        this.options.stopOnFocus = options.stopOnFocus === undefined ? Toastify.defaults.stopOnFocus : options.stopOnFocus; // stop timeout on focus

        this.options.onClick = options.onClick || Toastify.defaults.onClick; // Callback after click

        this.options.offset = options.offset || Toastify.defaults.offset; // toast offset

        this.options.escapeMarkup = options.escapeMarkup !== undefined ? options.escapeMarkup : Toastify.defaults.escapeMarkup;
        this.options.ariaLive = options.ariaLive || Toastify.defaults.ariaLive;
        this.options.style = options.style || Toastify.defaults.style;

        if (options.backgroundColor) {
          this.options.style.background = options.backgroundColor;
        } // Returning the current object for chaining functions


        return this;
      },
      // Building the DOM element
      buildToast: function buildToast() {
        // Validating if the options are defined
        if (!this.options) {
          throw "Toastify is not initialized";
        } // Creating the DOM object


        var divElement = document.createElement("div");
        divElement.className = "toastify on " + this.options.className; // Positioning toast to left or right or center

        if (!!this.options.position) {
          divElement.className += " toastify-" + this.options.position;
        } else {
          // To be depreciated in further versions
          if (this.options.positionLeft === true) {
            divElement.className += " toastify-left";
            console.warn('Property `positionLeft` will be depreciated in further versions. Please use `position` instead.');
          } else {
            // Default position
            divElement.className += " toastify-right";
          }
        } // Assigning gravity of element


        divElement.className += " " + this.options.gravity;

        if (this.options.backgroundColor) {
          // This is being deprecated in favor of using the style HTML DOM property
          console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');
        } // Loop through our style object and apply styles to divElement


        for (var property in this.options.style) {
          divElement.style[property] = this.options.style[property];
        } // Announce the toast to screen readers


        if (this.options.ariaLive) {
          divElement.setAttribute('aria-live', this.options.ariaLive);
        } // Adding the toast message/node


        if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) {
          // If we have a valid node, we insert it
          divElement.appendChild(this.options.node);
        } else {
          if (this.options.escapeMarkup) {
            divElement.innerText = this.options.text;
          } else {
            divElement.innerHTML = this.options.text;
          }

          if (this.options.avatar !== "") {
            var avatarElement = document.createElement("img");
            avatarElement.src = this.options.avatar;
            avatarElement.className = "toastify-avatar";

            if (this.options.position == "left" || this.options.positionLeft === true) {
              // Adding close icon on the left of content
              divElement.appendChild(avatarElement);
            } else {
              // Adding close icon on the right of content
              divElement.insertAdjacentElement("afterbegin", avatarElement);
            }
          }
        } // Adding a close icon to the toast


        if (this.options.close === true) {
          // Create a span for close element
          var closeElement = document.createElement("button");
          closeElement.type = "button";
          closeElement.setAttribute("aria-label", "Close");
          closeElement.className = "toast-close";
          closeElement.innerHTML = "&#10006;"; // Triggering the removal of toast from DOM on close click

          closeElement.addEventListener("click", function (event) {
            event.stopPropagation();
            this.removeElement(this.toastElement);
            window.clearTimeout(this.toastElement.timeOutValue);
          }.bind(this)); //Calculating screen width

          var width = window.innerWidth > 0 ? window.innerWidth : screen.width; // Adding the close icon to the toast element
          // Display on the right if screen width is less than or equal to 360px

          if ((this.options.position == "left" || this.options.positionLeft === true) && width > 360) {
            // Adding close icon on the left of content
            divElement.insertAdjacentElement("afterbegin", closeElement);
          } else {
            // Adding close icon on the right of content
            divElement.appendChild(closeElement);
          }
        } // Clear timeout while toast is focused


        if (this.options.stopOnFocus && this.options.duration > 0) {
          var self = this; // stop countdown

          divElement.addEventListener("mouseover", function (event) {
            window.clearTimeout(divElement.timeOutValue);
          }); // add back the timeout

          divElement.addEventListener("mouseleave", function () {
            divElement.timeOutValue = window.setTimeout(function () {
              // Remove the toast from DOM
              self.removeElement(divElement);
            }, self.options.duration);
          });
        } // Adding an on-click destination path


        if (typeof this.options.destination !== "undefined") {
          divElement.addEventListener("click", function (event) {
            event.stopPropagation();

            if (this.options.newWindow === true) {
              window.open(this.options.destination, "_blank");
            } else {
              window.location = this.options.destination;
            }
          }.bind(this));
        }

        if (typeof this.options.onClick === "function" && typeof this.options.destination === "undefined") {
          divElement.addEventListener("click", function (event) {
            event.stopPropagation();
            this.options.onClick();
          }.bind(this));
        } // Adding offset


        if (_typeof(this.options.offset) === "object") {
          var x = getAxisOffsetAValue("x", this.options);
          var y = getAxisOffsetAValue("y", this.options);
          var xOffset = this.options.position == "left" ? x : "-" + x;
          var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;
          divElement.style.transform = "translate(" + xOffset + "," + yOffset + ")";
        } // Returning the generated element


        return divElement;
      },
      // Displaying the toast
      showToast: function showToast() {
        // Creating the DOM object for the toast
        this.toastElement = this.buildToast(); // Getting the root element to with the toast needs to be added

        var rootElement;

        if (typeof this.options.selector === "string") {
          rootElement = document.getElementById(this.options.selector);
        } else if (this.options.selector instanceof HTMLElement || typeof ShadowRoot !== 'undefined' && this.options.selector instanceof ShadowRoot) {
          rootElement = this.options.selector;
        } else {
          rootElement = document.body;
        } // Validating if root element is present in DOM


        if (!rootElement) {
          throw "Root element is not defined";
        } // Adding the DOM element


        var elementToInsert = Toastify.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;
        rootElement.insertBefore(this.toastElement, elementToInsert); // Repositioning the toasts in case multiple toasts are present

        Toastify.reposition();

        if (this.options.duration > 0) {
          this.toastElement.timeOutValue = window.setTimeout(function () {
            // Remove the toast from DOM
            this.removeElement(this.toastElement);
          }.bind(this), this.options.duration); // Binding `this` for function invocation
        } // Supporting function chaining


        return this;
      },
      hideToast: function hideToast() {
        if (this.toastElement.timeOutValue) {
          clearTimeout(this.toastElement.timeOutValue);
        }

        this.removeElement(this.toastElement);
      },
      // Removing the element from the DOM
      removeElement: function removeElement(toastElement) {
        // Hiding the element
        // toastElement.classList.remove("on");
        toastElement.className = toastElement.className.replace(" on", ""); // Removing the element from DOM after transition end

        window.setTimeout(function () {
          // remove options node if any
          if (this.options.node && this.options.node.parentNode) {
            this.options.node.parentNode.removeChild(this.options.node);
          } // Remove the element from the DOM, only when the parent node was not removed before.


          if (toastElement.parentNode) {
            toastElement.parentNode.removeChild(toastElement);
          } // Calling the callback function


          this.options.callback.call(toastElement); // Repositioning the toasts again

          Toastify.reposition();
        }.bind(this), 400); // Binding `this` for function invocation
      }
    }; // Positioning the toasts on the DOM

    Toastify.reposition = function () {
      // Top margins with gravity
      var topLeftOffsetSize = {
        top: 15,
        bottom: 15
      };
      var topRightOffsetSize = {
        top: 15,
        bottom: 15
      };
      var offsetSize = {
        top: 15,
        bottom: 15
      }; // Get all toast messages on the DOM

      var allToasts = document.getElementsByClassName("toastify");
      var classUsed; // Modifying the position of each toast element

      for (var i = 0; i < allToasts.length; i++) {
        // Getting the applied gravity
        if (containsClass(allToasts[i], "toastify-top") === true) {
          classUsed = "toastify-top";
        } else {
          classUsed = "toastify-bottom";
        }

        var height = allToasts[i].offsetHeight;
        classUsed = classUsed.substr(9, classUsed.length - 1); // Spacing between toasts

        var offset = 15;
        var width = window.innerWidth > 0 ? window.innerWidth : screen.width; // Show toast in center if screen with less than or equal to 360px

        if (width <= 360) {
          // Setting the position
          allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";
          offsetSize[classUsed] += height + offset;
        } else {
          if (containsClass(allToasts[i], "toastify-left") === true) {
            // Setting the position
            allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";
            topLeftOffsetSize[classUsed] += height + offset;
          } else {
            // Setting the position
            allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";
            topRightOffsetSize[classUsed] += height + offset;
          }
        }
      } // Supporting function chaining


      return this;
    }; // Helper function to get offset.


    function getAxisOffsetAValue(axis, options) {
      if (options.offset[axis]) {
        if (isNaN(options.offset[axis])) {
          return options.offset[axis];
        } else {
          return options.offset[axis] + 'px';
        }
      }

      return '0px';
    }

    function containsClass(elem, yourClass) {
      if (!elem || typeof yourClass !== "string") {
        return false;
      } else if (elem.className && elem.className.trim().split(/\s+/gi).indexOf(yourClass) > -1) {
        return true;
      } else {
        return false;
      }
    } // Setting up the prototype for the init object


    Toastify.lib.init.prototype = Toastify.lib; // Returning the Toastify function to be assigned to the window object/module

    return Toastify;
  });
})(toastify);

var Toastify = toastify.exports;

var classof = classofRaw$1;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es-x/no-array-isarray -- safe
var isArray$2 = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};

var isArray$1 = isArray$2;
var isConstructor = isConstructor$2;
var isObject$1 = isObject$a;
var wellKnownSymbol$1 = wellKnownSymbol$f;

var SPECIES$1 = wellKnownSymbol$1('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesConstructor$1 = function (originalArray) {
  var C;
  if (isArray$1(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray$1(C.prototype))) C = undefined;
    else if (isObject$1(C)) {
      C = C[SPECIES$1];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1;

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate$1 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var bind = functionBindContext;
var uncurryThis = functionUncurryThis;
var IndexedObject = indexedObject;
var toObject = toObject$4;
var lengthOfArrayLike = lengthOfArrayLike$4;
var arraySpeciesCreate = arraySpeciesCreate$1;

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};

var fails = fails$l;
var wellKnownSymbol = wellKnownSymbol$f;
var V8_VERSION = engineV8Version;

var SPECIES = wellKnownSymbol('species');

var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$1 = _export;
var $map = arrayIteration.map;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1;

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$$1({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var gettext$1 = {};

var $ = _export;
var DESCRIPTORS = descriptors;
var defineProperty = objectDefineProperty.f;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {
  defineProperty: defineProperty
});

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol$1 = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get$1(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var lodash_get = get$1;

var plurals$1 = {
    ach: {
        name: 'Acholi',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n > 1)',
        pluralsFunc: function(n) {
            return (n > 1);
        }
    },
    af: {
        name: 'Afrikaans',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    ak: {
        name: 'Akan',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n > 1)',
        pluralsFunc: function(n) {
            return (n > 1);
        }
    },
    am: {
        name: 'Amharic',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n > 1)',
        pluralsFunc: function(n) {
            return (n > 1);
        }
    },
    an: {
        name: 'Aragonese',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    ar: {
        name: 'Arabic',
        examples: [{
            plural: 0,
            sample: 0
        }, {
            plural: 1,
            sample: 1
        }, {
            plural: 2,
            sample: 2
        }, {
            plural: 3,
            sample: 3
        }, {
            plural: 4,
            sample: 11
        }, {
            plural: 5,
            sample: 100
        }],
        nplurals: 6,
        pluralsText: 'nplurals = 6; plural = (n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5)',
        pluralsFunc: function(n) {
            return (n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
        }
    },
    arn: {
        name: 'Mapudungun',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n > 1)',
        pluralsFunc: function(n) {
            return (n > 1);
        }
    },
    ast: {
        name: 'Asturian',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    ay: {
        name: 'Aymará',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    az: {
        name: 'Azerbaijani',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    be: {
        name: 'Belarusian',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }, {
            plural: 2,
            sample: 5
        }],
        nplurals: 3,
        pluralsText: 'nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)',
        pluralsFunc: function(n) {
            return (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    bg: {
        name: 'Bulgarian',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    bn: {
        name: 'Bengali',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    bo: {
        name: 'Tibetan',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    br: {
        name: 'Breton',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n > 1)',
        pluralsFunc: function(n) {
            return (n > 1);
        }
    },
    brx: {
        name: 'Bodo',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    bs: {
        name: 'Bosnian',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }, {
            plural: 2,
            sample: 5
        }],
        nplurals: 3,
        pluralsText: 'nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)',
        pluralsFunc: function(n) {
            return (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    ca: {
        name: 'Catalan',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    cgg: {
        name: 'Chiga',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    cs: {
        name: 'Czech',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }, {
            plural: 2,
            sample: 5
        }],
        nplurals: 3,
        pluralsText: 'nplurals = 3; plural = (n === 1 ? 0 : (n >= 2 && n <= 4) ? 1 : 2)',
        pluralsFunc: function(n) {
            return (n === 1 ? 0 : (n >= 2 && n <= 4) ? 1 : 2);
        }
    },
    csb: {
        name: 'Kashubian',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }, {
            plural: 2,
            sample: 5
        }],
        nplurals: 3,
        pluralsText: 'nplurals = 3; plural = (n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)',
        pluralsFunc: function(n) {
            return (n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    cy: {
        name: 'Welsh',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }, {
            plural: 2,
            sample: 3
        }, {
            plural: 3,
            sample: 8
        }],
        nplurals: 4,
        pluralsText: 'nplurals = 4; plural = (n === 1 ? 0 : n === 2 ? 1 : (n !== 8 && n !== 11) ? 2 : 3)',
        pluralsFunc: function(n) {
            return (n === 1 ? 0 : n === 2 ? 1 : (n !== 8 && n !== 11) ? 2 : 3);
        }
    },
    da: {
        name: 'Danish',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    de: {
        name: 'German',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    doi: {
        name: 'Dogri',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    dz: {
        name: 'Dzongkha',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    el: {
        name: 'Greek',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    en: {
        name: 'English',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    eo: {
        name: 'Esperanto',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    es: {
        name: 'Spanish',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    et: {
        name: 'Estonian',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    eu: {
        name: 'Basque',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    fa: {
        name: 'Persian',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    ff: {
        name: 'Fulah',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    fi: {
        name: 'Finnish',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    fil: {
        name: 'Filipino',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n > 1)',
        pluralsFunc: function(n) {
            return (n > 1);
        }
    },
    fo: {
        name: 'Faroese',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    fr: {
        name: 'French',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n > 1)',
        pluralsFunc: function(n) {
            return (n > 1);
        }
    },
    fur: {
        name: 'Friulian',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    fy: {
        name: 'Frisian',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    ga: {
        name: 'Irish',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }, {
            plural: 2,
            sample: 3
        }, {
            plural: 3,
            sample: 7
        }, {
            plural: 4,
            sample: 11
        }],
        nplurals: 5,
        pluralsText: 'nplurals = 5; plural = (n === 1 ? 0 : n === 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4)',
        pluralsFunc: function(n) {
            return (n === 1 ? 0 : n === 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
        }
    },
    gd: {
        name: 'Scottish Gaelic',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }, {
            plural: 2,
            sample: 3
        }, {
            plural: 3,
            sample: 20
        }],
        nplurals: 4,
        pluralsText: 'nplurals = 4; plural = ((n === 1 || n === 11) ? 0 : (n === 2 || n === 12) ? 1 : (n > 2 && n < 20) ? 2 : 3)',
        pluralsFunc: function(n) {
            return ((n === 1 || n === 11) ? 0 : (n === 2 || n === 12) ? 1 : (n > 2 && n < 20) ? 2 : 3);
        }
    },
    gl: {
        name: 'Galician',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    gu: {
        name: 'Gujarati',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    gun: {
        name: 'Gun',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n > 1)',
        pluralsFunc: function(n) {
            return (n > 1);
        }
    },
    ha: {
        name: 'Hausa',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    he: {
        name: 'Hebrew',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    hi: {
        name: 'Hindi',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    hne: {
        name: 'Chhattisgarhi',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    hr: {
        name: 'Croatian',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }, {
            plural: 2,
            sample: 5
        }],
        nplurals: 3,
        pluralsText: 'nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)',
        pluralsFunc: function(n) {
            return (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    hu: {
        name: 'Hungarian',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    hy: {
        name: 'Armenian',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    id: {
        name: 'Indonesian',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    is: {
        name: 'Icelandic',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n % 10 !== 1 || n % 100 === 11)',
        pluralsFunc: function(n) {
            return (n % 10 !== 1 || n % 100 === 11);
        }
    },
    it: {
        name: 'Italian',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    ja: {
        name: 'Japanese',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    jbo: {
        name: 'Lojban',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    jv: {
        name: 'Javanese',
        examples: [{
            plural: 0,
            sample: 0
        }, {
            plural: 1,
            sample: 1
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 0)',
        pluralsFunc: function(n) {
            return (n !== 0);
        }
    },
    ka: {
        name: 'Georgian',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    kk: {
        name: 'Kazakh',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    km: {
        name: 'Khmer',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    kn: {
        name: 'Kannada',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    ko: {
        name: 'Korean',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    ku: {
        name: 'Kurdish',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    kw: {
        name: 'Cornish',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }, {
            plural: 2,
            sample: 3
        }, {
            plural: 3,
            sample: 4
        }],
        nplurals: 4,
        pluralsText: 'nplurals = 4; plural = (n === 1 ? 0 : n === 2 ? 1 : n === 3 ? 2 : 3)',
        pluralsFunc: function(n) {
            return (n === 1 ? 0 : n === 2 ? 1 : n === 3 ? 2 : 3);
        }
    },
    ky: {
        name: 'Kyrgyz',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    lb: {
        name: 'Letzeburgesch',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    ln: {
        name: 'Lingala',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n > 1)',
        pluralsFunc: function(n) {
            return (n > 1);
        }
    },
    lo: {
        name: 'Lao',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    lt: {
        name: 'Lithuanian',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }, {
            plural: 2,
            sample: 10
        }],
        nplurals: 3,
        pluralsText: 'nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)',
        pluralsFunc: function(n) {
            return (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    lv: {
        name: 'Latvian',
        examples: [{
            plural: 2,
            sample: 0
        }, {
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 3,
        pluralsText: 'nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n !== 0 ? 1 : 2)',
        pluralsFunc: function(n) {
            return (n % 10 === 1 && n % 100 !== 11 ? 0 : n !== 0 ? 1 : 2);
        }
    },
    mai: {
        name: 'Maithili',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    mfe: {
        name: 'Mauritian Creole',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n > 1)',
        pluralsFunc: function(n) {
            return (n > 1);
        }
    },
    mg: {
        name: 'Malagasy',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n > 1)',
        pluralsFunc: function(n) {
            return (n > 1);
        }
    },
    mi: {
        name: 'Maori',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n > 1)',
        pluralsFunc: function(n) {
            return (n > 1);
        }
    },
    mk: {
        name: 'Macedonian',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n === 1 || n % 10 === 1 ? 0 : 1)',
        pluralsFunc: function(n) {
            return (n === 1 || n % 10 === 1 ? 0 : 1);
        }
    },
    ml: {
        name: 'Malayalam',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    mn: {
        name: 'Mongolian',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    mni: {
        name: 'Manipuri',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    mnk: {
        name: 'Mandinka',
        examples: [{
            plural: 0,
            sample: 0
        }, {
            plural: 1,
            sample: 1
        }, {
            plural: 2,
            sample: 2
        }],
        nplurals: 3,
        pluralsText: 'nplurals = 3; plural = (n === 0 ? 0 : n === 1 ? 1 : 2)',
        pluralsFunc: function(n) {
            return (n === 0 ? 0 : n === 1 ? 1 : 2);
        }
    },
    mr: {
        name: 'Marathi',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    ms: {
        name: 'Malay',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    mt: {
        name: 'Maltese',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }, {
            plural: 2,
            sample: 11
        }, {
            plural: 3,
            sample: 20
        }],
        nplurals: 4,
        pluralsText: 'nplurals = 4; plural = (n === 1 ? 0 : n === 0 || ( n % 100 > 1 && n % 100 < 11) ? 1 : (n % 100 > 10 && n % 100 < 20 ) ? 2 : 3)',
        pluralsFunc: function(n) {
            return (n === 1 ? 0 : n === 0 || (n % 100 > 1 && n % 100 < 11) ? 1 : (n % 100 > 10 && n % 100 < 20) ? 2 : 3);
        }
    },
    my: {
        name: 'Burmese',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    nah: {
        name: 'Nahuatl',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    nap: {
        name: 'Neapolitan',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    nb: {
        name: 'Norwegian Bokmal',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    ne: {
        name: 'Nepali',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    nl: {
        name: 'Dutch',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    nn: {
        name: 'Norwegian Nynorsk',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    no: {
        name: 'Norwegian',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    nso: {
        name: 'Northern Sotho',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    oc: {
        name: 'Occitan',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n > 1)',
        pluralsFunc: function(n) {
            return (n > 1);
        }
    },
    or: {
        name: 'Oriya',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    pa: {
        name: 'Punjabi',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    pap: {
        name: 'Papiamento',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    pl: {
        name: 'Polish',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }, {
            plural: 2,
            sample: 5
        }],
        nplurals: 3,
        pluralsText: 'nplurals = 3; plural = (n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)',
        pluralsFunc: function(n) {
            return (n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    pms: {
        name: 'Piemontese',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    ps: {
        name: 'Pashto',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    pt: {
        name: 'Portuguese',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    rm: {
        name: 'Romansh',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    ro: {
        name: 'Romanian',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }, {
            plural: 2,
            sample: 20
        }],
        nplurals: 3,
        pluralsText: 'nplurals = 3; plural = (n === 1 ? 0 : (n === 0 || (n % 100 > 0 && n % 100 < 20)) ? 1 : 2)',
        pluralsFunc: function(n) {
            return (n === 1 ? 0 : (n === 0 || (n % 100 > 0 && n % 100 < 20)) ? 1 : 2);
        }
    },
    ru: {
        name: 'Russian',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }, {
            plural: 2,
            sample: 5
        }],
        nplurals: 3,
        pluralsText: 'nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)',
        pluralsFunc: function(n) {
            return (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    rw: {
        name: 'Kinyarwanda',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    sah: {
        name: 'Yakut',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    sat: {
        name: 'Santali',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    sco: {
        name: 'Scots',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    sd: {
        name: 'Sindhi',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    se: {
        name: 'Northern Sami',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    si: {
        name: 'Sinhala',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    sk: {
        name: 'Slovak',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }, {
            plural: 2,
            sample: 5
        }],
        nplurals: 3,
        pluralsText: 'nplurals = 3; plural = (n === 1 ? 0 : (n >= 2 && n <= 4) ? 1 : 2)',
        pluralsFunc: function(n) {
            return (n === 1 ? 0 : (n >= 2 && n <= 4) ? 1 : 2);
        }
    },
    sl: {
        name: 'Slovenian',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }, {
            plural: 2,
            sample: 3
        }, {
            plural: 3,
            sample: 5
        }],
        nplurals: 4,
        pluralsText: 'nplurals = 4; plural = (n % 100 === 1 ? 0 : n % 100 === 2 ? 1 : n % 100 === 3 || n % 100 === 4 ? 2 : 3)',
        pluralsFunc: function(n) {
            return (n % 100 === 1 ? 0 : n % 100 === 2 ? 1 : n % 100 === 3 || n % 100 === 4 ? 2 : 3);
        }
    },
    so: {
        name: 'Somali',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    son: {
        name: 'Songhay',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    sq: {
        name: 'Albanian',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    sr: {
        name: 'Serbian',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }, {
            plural: 2,
            sample: 5
        }],
        nplurals: 3,
        pluralsText: 'nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)',
        pluralsFunc: function(n) {
            return (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    su: {
        name: 'Sundanese',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    sv: {
        name: 'Swedish',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    sw: {
        name: 'Swahili',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    ta: {
        name: 'Tamil',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    te: {
        name: 'Telugu',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    tg: {
        name: 'Tajik',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n > 1)',
        pluralsFunc: function(n) {
            return (n > 1);
        }
    },
    th: {
        name: 'Thai',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    ti: {
        name: 'Tigrinya',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n > 1)',
        pluralsFunc: function(n) {
            return (n > 1);
        }
    },
    tk: {
        name: 'Turkmen',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    tr: {
        name: 'Turkish',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n > 1)',
        pluralsFunc: function(n) {
            return (n > 1);
        }
    },
    tt: {
        name: 'Tatar',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    ug: {
        name: 'Uyghur',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    uk: {
        name: 'Ukrainian',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }, {
            plural: 2,
            sample: 5
        }],
        nplurals: 3,
        pluralsText: 'nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)',
        pluralsFunc: function(n) {
            return (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    ur: {
        name: 'Urdu',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    uz: {
        name: 'Uzbek',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n > 1)',
        pluralsFunc: function(n) {
            return (n > 1);
        }
    },
    vi: {
        name: 'Vietnamese',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    wa: {
        name: 'Walloon',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n > 1)',
        pluralsFunc: function(n) {
            return (n > 1);
        }
    },
    wo: {
        name: 'Wolof',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    },
    yo: {
        name: 'Yoruba',
        examples: [{
            plural: 0,
            sample: 1
        }, {
            plural: 1,
            sample: 2
        }],
        nplurals: 2,
        pluralsText: 'nplurals = 2; plural = (n !== 1)',
        pluralsFunc: function(n) {
            return (n !== 1);
        }
    },
    zh: {
        name: 'Chinese',
        examples: [{
            plural: 0,
            sample: 1
        }],
        nplurals: 1,
        pluralsText: 'nplurals = 1; plural = 0',
        pluralsFunc: function() {
            return 0;
        }
    }
};

var get = lodash_get;
var plurals = plurals$1;

var gettext = Gettext;

/**
 * Creates and returns a new Gettext instance.
 *
 * @constructor
 * @param  {Object}  [options]             A set of options
 * @param  {String}  options.sourceLocale  The locale that the source code and its
 *                                         texts are written in. Translations for
 *                                         this locale is not necessary.
 * @param  {Boolean} options.debug         Whether to output debug info into the
 *                                         console.
 * @return {Object}  A Gettext instance
 */
function Gettext(options) {
    options = options || {};

    this.catalogs = {};
    this.locale = '';
    this.domain = 'messages';

    this.listeners = [];

    // Set source locale
    this.sourceLocale = '';
    if (options.sourceLocale) {
        if (typeof options.sourceLocale === 'string') {
            this.sourceLocale = options.sourceLocale;
        }
        else {
            this.warn('The `sourceLocale` option should be a string');
        }
    }

    // Set debug flag
    this.debug = 'debug' in options && options.debug === true;
}

/**
 * Adds an event listener.
 *
 * @param  {String}   eventName  An event name
 * @param  {Function} callback   An event handler function
 */
Gettext.prototype.on = function(eventName, callback) {
    this.listeners.push({
        eventName: eventName,
        callback: callback
    });
};

/**
 * Removes an event listener.
 *
 * @param  {String}   eventName  An event name
 * @param  {Function} callback   A previously registered event handler function
 */
Gettext.prototype.off = function(eventName, callback) {
    this.listeners = this.listeners.filter(function(listener) {
        return (
            listener.eventName === eventName &&
            listener.callback === callback
        ) === false;
    });
};

/**
 * Emits an event to all registered event listener.
 *
 * @private
 * @param  {String} eventName  An event name
 * @param  {any}    eventData  Data to pass to event listeners
 */
Gettext.prototype.emit = function(eventName, eventData) {
    for (var i = 0; i < this.listeners.length; i++) {
        var listener = this.listeners[i];
        if (listener.eventName === eventName) {
            listener.callback(eventData);
        }
    }
};

/**
 * Logs a warning to the console if debug mode is enabled.
 *
 * @ignore
 * @param  {String} message  A warning message
 */
Gettext.prototype.warn = function(message) {
    if (this.debug) {
        console.warn(message);
    }

    this.emit('error', new Error(message));
};

/**
 * Stores a set of translations in the set of gettext
 * catalogs.
 *
 * @example
 *     gt.addTranslations('sv-SE', 'messages', translationsObject)
 *
 * @param {String} locale        A locale string
 * @param {String} domain        A domain name
 * @param {Object} translations  An object of gettext-parser JSON shape
 */
Gettext.prototype.addTranslations = function(locale, domain, translations) {
    if (!this.catalogs[locale]) {
        this.catalogs[locale] = {};
    }

    this.catalogs[locale][domain] = translations;
};

/**
 * Sets the locale to get translated messages for.
 *
 * @example
 *     gt.setLocale('sv-SE')
 *
 * @param {String} locale  A locale
 */
Gettext.prototype.setLocale = function(locale) {
    if (typeof locale !== 'string') {
        this.warn(
            'You called setLocale() with an argument of type ' + (typeof locale) + '. ' +
            'The locale must be a string.'
        );
        return;
    }

    if (locale.trim() === '') {
        this.warn('You called setLocale() with an empty value, which makes little sense.');
    }

    if (locale !== this.sourceLocale && !this.catalogs[locale]) {
        this.warn('You called setLocale() with "' + locale + '", but no translations for that locale has been added.');
    }

    this.locale = locale;
};

/**
 * Sets the default gettext domain.
 *
 * @example
 *     gt.setTextDomain('domainname')
 *
 * @param {String} domain  A gettext domain name
 */
Gettext.prototype.setTextDomain = function(domain) {
    if (typeof domain !== 'string') {
        this.warn(
            'You called setTextDomain() with an argument of type ' + (typeof domain) + '. ' +
            'The domain must be a string.'
        );
        return;
    }

    if (domain.trim() === '') {
        this.warn('You called setTextDomain() with an empty `domain` value.');
    }

    this.domain = domain;
};

/**
 * Translates a string using the default textdomain
 *
 * @example
 *     gt.gettext('Some text')
 *
 * @param  {String} msgid  String to be translated
 * @return {String} Translation or the original string if no translation was found
 */
Gettext.prototype.gettext = function(msgid) {
    return this.dnpgettext(this.domain, '', msgid);
};

/**
 * Translates a string using a specific domain
 *
 * @example
 *     gt.dgettext('domainname', 'Some text')
 *
 * @param  {String} domain  A gettext domain name
 * @param  {String} msgid   String to be translated
 * @return {String} Translation or the original string if no translation was found
 */
Gettext.prototype.dgettext = function(domain, msgid) {
    return this.dnpgettext(domain, '', msgid);
};

/**
 * Translates a plural string using the default textdomain
 *
 * @example
 *     gt.ngettext('One thing', 'Many things', numberOfThings)
 *
 * @param  {String} msgid        String to be translated when count is not plural
 * @param  {String} msgidPlural  String to be translated when count is plural
 * @param  {Number} count        Number count for the plural
 * @return {String} Translation or the original string if no translation was found
 */
Gettext.prototype.ngettext = function(msgid, msgidPlural, count) {
    return this.dnpgettext(this.domain, '', msgid, msgidPlural, count);
};

/**
 * Translates a plural string using a specific textdomain
 *
 * @example
 *     gt.dngettext('domainname', 'One thing', 'Many things', numberOfThings)
 *
 * @param  {String} domain       A gettext domain name
 * @param  {String} msgid        String to be translated when count is not plural
 * @param  {String} msgidPlural  String to be translated when count is plural
 * @param  {Number} count        Number count for the plural
 * @return {String} Translation or the original string if no translation was found
 */
Gettext.prototype.dngettext = function(domain, msgid, msgidPlural, count) {
    return this.dnpgettext(domain, '', msgid, msgidPlural, count);
};

/**
 * Translates a string from a specific context using the default textdomain
 *
 * @example
 *    gt.pgettext('sports', 'Back')
 *
 * @param  {String} msgctxt  Translation context
 * @param  {String} msgid    String to be translated
 * @return {String} Translation or the original string if no translation was found
 */
Gettext.prototype.pgettext = function(msgctxt, msgid) {
    return this.dnpgettext(this.domain, msgctxt, msgid);
};

/**
 * Translates a string from a specific context using s specific textdomain
 *
 * @example
 *     gt.dpgettext('domainname', 'sports', 'Back')
 *
 * @param  {String} domain   A gettext domain name
 * @param  {String} msgctxt  Translation context
 * @param  {String} msgid    String to be translated
 * @return {String} Translation or the original string if no translation was found
 */
Gettext.prototype.dpgettext = function(domain, msgctxt, msgid) {
    return this.dnpgettext(domain, msgctxt, msgid);
};

/**
 * Translates a plural string from a specific context using the default textdomain
 *
 * @example
 *     gt.npgettext('sports', 'Back', '%d backs', numberOfBacks)
 *
 * @param  {String} msgctxt      Translation context
 * @param  {String} msgid        String to be translated when count is not plural
 * @param  {String} msgidPlural  String to be translated when count is plural
 * @param  {Number} count        Number count for the plural
 * @return {String} Translation or the original string if no translation was found
 */
Gettext.prototype.npgettext = function(msgctxt, msgid, msgidPlural, count) {
    return this.dnpgettext(this.domain, msgctxt, msgid, msgidPlural, count);
};

/**
 * Translates a plural string from a specifi context using a specific textdomain
 *
 * @example
 *     gt.dnpgettext('domainname', 'sports', 'Back', '%d backs', numberOfBacks)
 *
 * @param  {String} domain       A gettext domain name
 * @param  {String} msgctxt      Translation context
 * @param  {String} msgid        String to be translated
 * @param  {String} msgidPlural  If no translation was found, return this on count!=1
 * @param  {Number} count        Number count for the plural
 * @return {String} Translation or the original string if no translation was found
 */
Gettext.prototype.dnpgettext = function(domain, msgctxt, msgid, msgidPlural, count) {
    var defaultTranslation = msgid;
    var translation;
    var index;

    msgctxt = msgctxt || '';

    if (!isNaN(count) && count !== 1) {
        defaultTranslation = msgidPlural || msgid;
    }

    translation = this._getTranslation(domain, msgctxt, msgid);

    if (translation) {
        if (typeof count === 'number') {
            var pluralsFunc = plurals[Gettext.getLanguageCode(this.locale)].pluralsFunc;
            index = pluralsFunc(count);
            if (typeof index === 'boolean') {
                index = index ? 1 : 0;
            }
        } else {
            index = 0;
        }

        return translation.msgstr[index] || defaultTranslation;
    }
    else if (!this.sourceLocale || this.locale !== this.sourceLocale) {
        this.warn('No translation was found for msgid "' + msgid + '" in msgctxt "' + msgctxt + '" and domain "' + domain + '"');
    }

    return defaultTranslation;
};

/**
 * Retrieves comments object for a translation. The comments object
 * has the shape `{ translator, extracted, reference, flag, previous }`.
 *
 * @example
 *     const comment = gt.getComment('domainname', 'sports', 'Backs')
 *
 * @private
 * @param  {String} domain   A gettext domain name
 * @param  {String} msgctxt  Translation context
 * @param  {String} msgid    String to be translated
 * @return {Object} Comments object or false if not found
 */
Gettext.prototype.getComment = function(domain, msgctxt, msgid) {
    var translation;

    translation = this._getTranslation(domain, msgctxt, msgid);
    if (translation) {
        return translation.comments || {};
    }

    return {};
};

/**
 * Retrieves translation object from the domain and context
 *
 * @private
 * @param  {String} domain   A gettext domain name
 * @param  {String} msgctxt  Translation context
 * @param  {String} msgid    String to be translated
 * @return {Object} Translation object or false if not found
 */
Gettext.prototype._getTranslation = function(domain, msgctxt, msgid) {
    msgctxt = msgctxt || '';

    return get(this.catalogs, [this.locale, domain, 'translations', msgctxt, msgid]);
};

/**
 * Returns the language code part of a locale
 *
 * @example
 *     Gettext.getLanguageCode('sv-SE')
 *     // -> "sv"
 *
 * @private
 * @param   {String} locale  A case-insensitive locale string
 * @returns {String} A language code
 */
Gettext.getLanguageCode = function(locale) {
    return locale.split(/[\-_]/)[0].toLowerCase();
};

/* C-style aliases */

/**
 * C-style alias for [setTextDomain](#gettextsettextdomaindomain)
 *
 * @see Gettext#setTextDomain
 */
Gettext.prototype.textdomain = function(domain) {
    if (this.debug) {
        console.warn('textdomain(domain) was used to set locales in node-gettext v1. ' +
            'Make sure you are using it for domains, and switch to setLocale(locale) if you are not.\n\n ' +
            'To read more about the migration from node-gettext v1 to v2, ' +
            'see https://github.com/alexanderwallin/node-gettext/#migrating-from-1x-to-2x\n\n' +
            'This warning will be removed in the final 2.0.0');
    }

    this.setTextDomain(domain);
};

/**
 * C-style alias for [setLocale](#gettextsetlocalelocale)
 *
 * @see Gettext#setLocale
 */
Gettext.prototype.setlocale = function(locale) {
    this.setLocale(locale);
};

/* Deprecated functions */

/**
 * This function will be removed in the final 2.0.0 release.
 *
 * @deprecated
 */
Gettext.prototype.addTextdomain = function() {
    console.error('addTextdomain() is deprecated.\n\n' +
        '* To add translations, use addTranslations()\n' +
        '* To set the default domain, use setTextDomain() (or its alias textdomain())\n' +
        '\n' +
        'To read more about the migration from node-gettext v1 to v2, ' +
        'see https://github.com/alexanderwallin/node-gettext/#migrating-from-1x-to-2x');
};

var dist = {};

Object.defineProperty(dist, "__esModule", {
  value: true
});
dist.getCanonicalLocale = getCanonicalLocale;
dist.getDayNames = getDayNames;
dist.getDayNamesMin = getDayNamesMin;
dist.getDayNamesShort = getDayNamesShort;
dist.getFirstDay = getFirstDay;
dist.getLanguage = getLanguage;
dist.getLocale = getLocale;
dist.getMonthNames = getMonthNames;
dist.getMonthNamesShort = getMonthNamesShort;
dist.translate = translate;
dist.translatePlural = translatePlural;





/// <reference types="@nextcloud/typings" />

/**
 * Returns the user's locale
 */
function getLocale() {
  return document.documentElement.dataset.locale || 'en';
}

function getCanonicalLocale() {
  return getLocale().replace(/_/g, '-');
}
/**
 * Returns the user's language
 */


function getLanguage() {
  return document.documentElement.lang || 'en';
}

/**
 * Translate a string
 *
 * @param {string} app the id of the app for which to translate the string
 * @param {string} text the string to translate
 * @param {object} vars map of placeholder key to value
 * @param {number} number to replace %n with
 * @param {object} [options] options object
 * @return {string}
 */
function translate(app, text, vars, count, options) {
  if (typeof OC === 'undefined') {
    console.warn('No OC found');
    return text;
  }

  return OC.L10N.translate(app, text, vars, count, options);
}
/**
 * Translate a plural string
 *
 * @param {string} app the id of the app for which to translate the string
 * @param {string} textSingular the string to translate for exactly one object
 * @param {string} textPlural the string to translate for n objects
 * @param {number} count number to determine whether to use singular or plural
 * @param {Object} vars of placeholder key to value
 * @param {object} options options object
 * @return {string}
 */


function translatePlural(app, textSingular, textPlural, count, vars, options) {
  if (typeof OC === 'undefined') {
    console.warn('No OC found');
    return textSingular;
  }

  return OC.L10N.translatePlural(app, textSingular, textPlural, count, vars, options);
}
/**
 * Get the first day of the week
 *
 * @return {number}
 */


function getFirstDay() {
  if (typeof window.firstDay === 'undefined') {
    console.warn('No firstDay found');
    return 1;
  }

  return window.firstDay;
}
/**
 * Get a list of day names (full names)
 *
 * @return {string[]}
 */


function getDayNames() {
  if (typeof window.dayNames === 'undefined') {
    console.warn('No dayNames found');
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  }

  return window.dayNames;
}
/**
 * Get a list of day names (short names)
 *
 * @return {string[]}
 */


function getDayNamesShort() {
  if (typeof window.dayNamesShort === 'undefined') {
    console.warn('No dayNamesShort found');
    return ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
  }

  return window.dayNamesShort;
}
/**
 * Get a list of day names (minified names)
 *
 * @return {string[]}
 */


function getDayNamesMin() {
  if (typeof window.dayNamesMin === 'undefined') {
    console.warn('No dayNamesMin found');
    return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  }

  return window.dayNamesMin;
}
/**
 * Get a list of month names (full names)
 *
 * @return {string[]}
 */


function getMonthNames() {
  if (typeof window.monthNames === 'undefined') {
    console.warn('No monthNames found');
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  }

  return window.monthNames;
}
/**
 * Get a list of month names (short names)
 *
 * @return {string[]}
 */


function getMonthNamesShort() {
  if (typeof window.monthNamesShort === 'undefined') {
    console.warn('No monthNamesShort found');
    return ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
  }

  return window.monthNamesShort;
}

Object.defineProperty(gettext$1, "__esModule", {
  value: true
});
var getGettextBuilder_1 = gettext$1.getGettextBuilder = getGettextBuilder;











var _nodeGettext = _interopRequireDefault(gettext);

var _ = dist;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var GettextBuilder = /*#__PURE__*/function () {
  function GettextBuilder() {
    _classCallCheck(this, GettextBuilder);

    this.translations = {};
    this.debug = false;
  }

  _createClass(GettextBuilder, [{
    key: "setLanguage",
    value: function setLanguage(language) {
      this.locale = language;
      return this;
    }
  }, {
    key: "detectLocale",
    value: function detectLocale() {
      return this.setLanguage((0, _.getLanguage)().replace('-', '_'));
    }
  }, {
    key: "addTranslation",
    value: function addTranslation(language, data) {
      this.translations[language] = data;
      return this;
    }
  }, {
    key: "enableDebugMode",
    value: function enableDebugMode() {
      this.debug = true;
      return this;
    }
  }, {
    key: "build",
    value: function build() {
      return new GettextWrapper(this.locale || 'en', this.translations, this.debug);
    }
  }]);

  return GettextBuilder;
}();

var GettextWrapper = /*#__PURE__*/function () {
  function GettextWrapper(locale, data, debug) {
    _classCallCheck(this, GettextWrapper);

    this.gt = new _nodeGettext.default({
      debug: debug,
      sourceLocale: 'en'
    });

    for (var key in data) {
      this.gt.addTranslations(key, 'messages', data[key]);
    }

    this.gt.setLocale(locale);
  }

  _createClass(GettextWrapper, [{
    key: "subtitudePlaceholders",
    value: function subtitudePlaceholders(translated, vars) {
      return translated.replace(/{([^{}]*)}/g, function (a, b) {
        var r = vars[b];

        if (typeof r === 'string' || typeof r === 'number') {
          return r.toString();
        } else {
          return a;
        }
      });
    }
  }, {
    key: "gettext",
    value: function gettext(original) {
      var placeholders = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.subtitudePlaceholders(this.gt.gettext(original), placeholders);
    }
  }, {
    key: "ngettext",
    value: function ngettext(singular, plural, count) {
      var placeholders = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return this.subtitudePlaceholders(this.gt.ngettext(singular, plural, count).replace(/%n/g, count.toString()), placeholders);
    }
  }]);

  return GettextWrapper;
}();

function getGettextBuilder() {
  return new GettextBuilder();
}

var gtBuilder = getGettextBuilder_1().detectLocale();
process.env.TRANSLATIONS.map(function (data) {
  return gtBuilder.addTranslation(data.locale, data.json);
});
var gt = gtBuilder.build();
gt.ngettext.bind(gt);
var t = gt.gettext.bind(gt);

var ToastType =
/** @class */
function () {
  function ToastType() {}

  ToastType.ERROR = 'toast-error';
  ToastType.WARNING = 'toast-warning';
  ToastType.INFO = 'toast-info';
  ToastType.SUCCESS = 'toast-success';
  ToastType.PERMANENT = 'toast-error';
  ToastType.UNDO = 'toast-undo';
  return ToastType;
}();

var TOAST_ARIA_LIVE_OFF = 'off';
var TOAST_ARIA_LIVE_POLITE = 'polite';
var TOAST_ARIA_LIVE_ASSERTIVE = 'assertive';

var ToastAriaLive =
/** @class */
function () {
  function ToastAriaLive() {}

  ToastAriaLive.OFF = TOAST_ARIA_LIVE_OFF;
  ToastAriaLive.POLITE = TOAST_ARIA_LIVE_POLITE;
  ToastAriaLive.ASSERTIVE = TOAST_ARIA_LIVE_ASSERTIVE;
  return ToastAriaLive;
}();

var TOAST_UNDO_TIMEOUT = 10000;
var TOAST_DEFAULT_TIMEOUT = 7000;
var TOAST_PERMANENT_TIMEOUT = -1;
/**
 * Show a toast message
 *
 * @param text Message to be shown in the toast, any HTML is removed by default
 * @param options
 */

function showMessage(data, options) {
  var _a;

  var _b;

  options = Object.assign({
    timeout: TOAST_DEFAULT_TIMEOUT,
    isHTML: false,
    type: undefined,
    // An undefined selector defaults to the body element
    selector: undefined,
    onRemove: function onRemove() {},
    onClick: undefined,
    close: true
  }, options);

  if (typeof data === 'string' && !options.isHTML) {
    // fime mae sure that text is extracted
    var element = document.createElement('div');
    element.innerHTML = data;
    data = element.innerText;
  }

  var classes = (_b = options.type) !== null && _b !== void 0 ? _b : '';

  if (typeof options.onClick === 'function') {
    classes += ' toast-with-click ';
  }

  var isNode = data instanceof Node;
  var ariaLive = ToastAriaLive.POLITE;

  if (options.ariaLive) {
    ariaLive = options.ariaLive.toString();
  } else if (options.type === ToastType.ERROR || options.type === ToastType.UNDO) {
    ariaLive = ToastAriaLive.ASSERTIVE;
  }

  var toast = Toastify((_a = {}, _a[!isNode ? 'text' : 'node'] = data, _a.duration = options.timeout, _a.callback = options.onRemove, _a.onClick = options.onClick, _a.close = options.close, _a.gravity = 'top', _a.selector = options.selector, _a.position = 'right', _a.backgroundColor = '', _a.className = 'dialogs ' + classes, _a.escapeMarkup = !options.isHTML, _a.ariaLive = ariaLive, _a));
  toast.showToast();
  return toast;
}
/**
 * Show a toast message with error styling
 *
 * @param text Message to be shown in the toast, any HTML is removed by default
 * @param options
 */

function showError(text, options) {
  return showMessage(text, __assign(__assign({}, options), {
    type: ToastType.ERROR
  }));
}
/**
 * Show a toast message with warning styling
 *
 * @param text Message to be shown in the toast, any HTML is removed by default
 * @param options
 */

function showWarning(text, options) {
  return showMessage(text, __assign(__assign({}, options), {
    type: ToastType.WARNING
  }));
}
/**
 * Show a toast message with info styling
 *
 * @param text Message to be shown in the toast, any HTML is removed by default
 * @param options
 */

function showInfo(text, options) {
  return showMessage(text, __assign(__assign({}, options), {
    type: ToastType.INFO
  }));
}
/**
 * Show a toast message with success styling
 *
 * @param text Message to be shown in the toast, any HTML is removed by default
 * @param options
 */

function showSuccess(text, options) {
  return showMessage(text, __assign(__assign({}, options), {
    type: ToastType.SUCCESS
  }));
}
/**
 * Show a toast message with undo styling
 *
 * @param text Message to be shown in the toast, any HTML is removed by default
 * @param onUndo Function that is called when the undo button is clicked
 * @param options
 */

function showUndo(text, onUndo, options) {
  // onUndo callback is mandatory
  if (!(onUndo instanceof Function)) {
    throw new Error('Please provide a valid onUndo method');
  }

  var toast;
  options = Object.assign(options || {}, {
    // force 10 seconds of timeout
    timeout: TOAST_UNDO_TIMEOUT,
    // remove close button
    close: false
  }); // Generate undo layout

  var undoContent = document.createElement('span');
  var undoButton = document.createElement('button');
  undoContent.classList.add('toast-undo-container');
  undoButton.classList.add('toast-undo-button');
  undoButton.innerText = t('Undo');
  undoContent.innerText = text;
  undoContent.appendChild(undoButton);
  undoButton.addEventListener('click', function (event) {
    event.stopPropagation();
    onUndo(event); // Hide toast

    if ((toast === null || toast === void 0 ? void 0 : toast.hideToast) instanceof Function) {
      toast.hideToast();
    }
  });
  toast = showMessage(undoContent, __assign(__assign({}, options), {
    type: ToastType.UNDO
  }));
  return toast;
}


//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/@nextcloud/initial-state/dist/index.es.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@nextcloud/initial-state/dist/index.es.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadState: () => (/* binding */ loadState)
/* harmony export */ });
/**
 * @param app app ID, e.g. "mail"
 * @param key name of the property
 * @param fallback optional parameter to use as default value
 * @throws if the key can't be found
 */
function loadState(app, key, fallback) {
    const elem = document.querySelector(`#initial-state-${app}-${key}`);
    if (elem === null) {
        if (fallback !== undefined) {
            return fallback;
        }
        throw new Error(`Could not find initial state ${key} of ${app}`);
    }
    try {
        return JSON.parse(atob(elem.value));
    }
    catch (e) {
        throw new Error(`Could not parse initial state ${key} of ${app}`);
    }
}


//# sourceMappingURL=index.es.mjs.map


/***/ }),

/***/ "./node_modules/openai/_shims/MultipartBody.mjs":
/*!******************************************************!*\
  !*** ./node_modules/openai/_shims/MultipartBody.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultipartBody: () => (/* binding */ MultipartBody)
/* harmony export */ });
/**
 * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
 */
class MultipartBody {
    constructor(body) {
        this.body = body;
    }
    get [Symbol.toStringTag]() {
        return 'MultipartBody';
    }
}
//# sourceMappingURL=MultipartBody.mjs.map

/***/ }),

/***/ "./node_modules/openai/_shims/index.mjs":
/*!**********************************************!*\
  !*** ./node_modules/openai/_shims/index.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Blob: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.Blob),
/* harmony export */   File: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.File),
/* harmony export */   FormData: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.FormData),
/* harmony export */   Headers: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.Headers),
/* harmony export */   Request: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.Request),
/* harmony export */   Response: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.Response),
/* harmony export */   auto: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.auto),
/* harmony export */   fetch: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.fetch),
/* harmony export */   fileFromPath: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.fileFromPath),
/* harmony export */   getDefaultAgent: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultAgent),
/* harmony export */   getMultipartRequestOptions: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.getMultipartRequestOptions),
/* harmony export */   isFsReadStream: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.isFsReadStream),
/* harmony export */   kind: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.kind),
/* harmony export */   setShims: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.setShims)
/* harmony export */ });
/* harmony import */ var _registry_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registry.mjs */ "./node_modules/openai/_shims/registry.mjs");
/* harmony import */ var openai_shims_auto_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openai/_shims/auto/runtime */ "./node_modules/openai/_shims/web-runtime.mjs");
/**
 * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
 */


if (!_registry_mjs__WEBPACK_IMPORTED_MODULE_0__.kind) _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.setShims(openai_shims_auto_runtime__WEBPACK_IMPORTED_MODULE_1__.getRuntime(), { auto: true });



/***/ }),

/***/ "./node_modules/openai/_shims/registry.mjs":
/*!*************************************************!*\
  !*** ./node_modules/openai/_shims/registry.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Blob: () => (/* binding */ Blob),
/* harmony export */   File: () => (/* binding */ File),
/* harmony export */   FormData: () => (/* binding */ FormData),
/* harmony export */   Headers: () => (/* binding */ Headers),
/* harmony export */   Request: () => (/* binding */ Request),
/* harmony export */   Response: () => (/* binding */ Response),
/* harmony export */   auto: () => (/* binding */ auto),
/* harmony export */   fetch: () => (/* binding */ fetch),
/* harmony export */   fileFromPath: () => (/* binding */ fileFromPath),
/* harmony export */   getDefaultAgent: () => (/* binding */ getDefaultAgent),
/* harmony export */   getMultipartRequestOptions: () => (/* binding */ getMultipartRequestOptions),
/* harmony export */   isFsReadStream: () => (/* binding */ isFsReadStream),
/* harmony export */   kind: () => (/* binding */ kind),
/* harmony export */   setShims: () => (/* binding */ setShims)
/* harmony export */ });
let auto = false;
let kind = undefined;
let fetch = undefined;
let Request = undefined;
let Response = undefined;
let Headers = undefined;
let FormData = undefined;
let Blob = undefined;
let File = undefined;
let getMultipartRequestOptions = undefined;
let getDefaultAgent = undefined;
let fileFromPath = undefined;
let isFsReadStream = undefined;
function setShims(shims, options = { auto: false }) {
    if (auto) {
        throw new Error(`you must \`import 'openai/shims/${shims.kind}'\` before importing anything else from openai`);
    }
    if (kind) {
        throw new Error(`can't \`import 'openai/shims/${shims.kind}'\` after \`import 'openai/shims/${kind}'\``);
    }
    auto = options.auto;
    kind = shims.kind;
    fetch = shims.fetch;
    Request = shims.Request;
    Response = shims.Response;
    Headers = shims.Headers;
    FormData = shims.FormData;
    Blob = shims.Blob;
    File = shims.File;
    getMultipartRequestOptions = shims.getMultipartRequestOptions;
    getDefaultAgent = shims.getDefaultAgent;
    fileFromPath = shims.fileFromPath;
    isFsReadStream = shims.isFsReadStream;
}
//# sourceMappingURL=registry.mjs.map

/***/ }),

/***/ "./node_modules/openai/_shims/web-runtime.mjs":
/*!****************************************************!*\
  !*** ./node_modules/openai/_shims/web-runtime.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRuntime: () => (/* binding */ getRuntime)
/* harmony export */ });
/* harmony import */ var _MultipartBody_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultipartBody.mjs */ "./node_modules/openai/_shims/MultipartBody.mjs");

function getRuntime({ manuallyImported } = {}) {
    const recommendation = manuallyImported ?
        `You may need to use polyfills`
        : `Add one of these imports before your first \`import … from 'openai'\`:
- \`import 'openai/shims/node'\` (if you're running on Node)
- \`import 'openai/shims/web'\` (otherwise)
`;
    let _fetch, _Request, _Response, _Headers;
    try {
        // @ts-ignore
        _fetch = fetch;
        // @ts-ignore
        _Request = Request;
        // @ts-ignore
        _Response = Response;
        // @ts-ignore
        _Headers = Headers;
    }
    catch (error) {
        throw new Error(`this environment is missing the following Web Fetch API type: ${error.message}. ${recommendation}`);
    }
    return {
        kind: 'web',
        fetch: _fetch,
        Request: _Request,
        Response: _Response,
        Headers: _Headers,
        FormData: 
        // @ts-ignore
        typeof FormData !== 'undefined' ? FormData : (class FormData {
            // @ts-ignore
            constructor() {
                throw new Error(`file uploads aren't supported in this environment yet as 'FormData' is undefined. ${recommendation}`);
            }
        }),
        Blob: typeof Blob !== 'undefined' ? Blob : (class Blob {
            constructor() {
                throw new Error(`file uploads aren't supported in this environment yet as 'Blob' is undefined. ${recommendation}`);
            }
        }),
        File: 
        // @ts-ignore
        typeof File !== 'undefined' ? File : (class File {
            // @ts-ignore
            constructor() {
                throw new Error(`file uploads aren't supported in this environment yet as 'File' is undefined. ${recommendation}`);
            }
        }),
        getMultipartRequestOptions: async (
        // @ts-ignore
        form, opts) => ({
            ...opts,
            body: new _MultipartBody_mjs__WEBPACK_IMPORTED_MODULE_0__.MultipartBody(form),
        }),
        getDefaultAgent: (url) => undefined,
        fileFromPath: () => {
            throw new Error('The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/openai/openai-node#file-uploads');
        },
        isFsReadStream: (value) => false,
    };
}
//# sourceMappingURL=web-runtime.mjs.map

/***/ }),

/***/ "./node_modules/openai/core.mjs":
/*!**************************************!*\
  !*** ./node_modules/openai/core.mjs ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIClient: () => (/* binding */ APIClient),
/* harmony export */   APIPromise: () => (/* binding */ APIPromise),
/* harmony export */   APIResource: () => (/* binding */ APIResource),
/* harmony export */   AbstractPage: () => (/* binding */ AbstractPage),
/* harmony export */   PagePromise: () => (/* binding */ PagePromise),
/* harmony export */   castToError: () => (/* binding */ castToError),
/* harmony export */   coerceBoolean: () => (/* binding */ coerceBoolean),
/* harmony export */   coerceFloat: () => (/* binding */ coerceFloat),
/* harmony export */   coerceInteger: () => (/* binding */ coerceInteger),
/* harmony export */   createForm: () => (/* reexport safe */ _uploads_mjs__WEBPACK_IMPORTED_MODULE_1__.createForm),
/* harmony export */   createResponseHeaders: () => (/* binding */ createResponseHeaders),
/* harmony export */   debug: () => (/* binding */ debug),
/* harmony export */   ensurePresent: () => (/* binding */ ensurePresent),
/* harmony export */   getHeader: () => (/* binding */ getHeader),
/* harmony export */   hasOwn: () => (/* binding */ hasOwn),
/* harmony export */   isEmptyObj: () => (/* binding */ isEmptyObj),
/* harmony export */   isHeadersProtocol: () => (/* binding */ isHeadersProtocol),
/* harmony export */   isRequestOptions: () => (/* binding */ isRequestOptions),
/* harmony export */   isRunningInBrowser: () => (/* binding */ isRunningInBrowser),
/* harmony export */   maybeCoerceBoolean: () => (/* binding */ maybeCoerceBoolean),
/* harmony export */   maybeCoerceFloat: () => (/* binding */ maybeCoerceFloat),
/* harmony export */   maybeCoerceInteger: () => (/* binding */ maybeCoerceInteger),
/* harmony export */   maybeMultipartFormRequestOptions: () => (/* reexport safe */ _uploads_mjs__WEBPACK_IMPORTED_MODULE_1__.maybeMultipartFormRequestOptions),
/* harmony export */   multipartFormRequestOptions: () => (/* reexport safe */ _uploads_mjs__WEBPACK_IMPORTED_MODULE_1__.multipartFormRequestOptions),
/* harmony export */   readEnv: () => (/* binding */ readEnv),
/* harmony export */   safeJSON: () => (/* binding */ safeJSON),
/* harmony export */   sleep: () => (/* binding */ sleep),
/* harmony export */   toBase64: () => (/* binding */ toBase64)
/* harmony export */ });
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./version.mjs */ "./node_modules/openai/version.mjs");
/* harmony import */ var _streaming_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./streaming.mjs */ "./node_modules/openai/streaming.mjs");
/* harmony import */ var _error_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.mjs */ "./node_modules/openai/error.mjs");
/* harmony import */ var _shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_shims/index.mjs */ "./node_modules/openai/_shims/index.mjs");
/* harmony import */ var _uploads_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uploads.mjs */ "./node_modules/openai/uploads.mjs");
/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AbstractPage_client;






const MAX_RETRIES = 2;
async function defaultParseResponse(props) {
    const { response } = props;
    if (props.options.stream) {
        // Note: there is an invariant here that isn't represented in the type system
        // that if you set `stream: true` the response type must also be `Stream<T>`
        return new _streaming_mjs__WEBPACK_IMPORTED_MODULE_2__.Stream(response, props.controller);
    }
    const contentType = response.headers.get('content-type');
    if (contentType === null || contentType === void 0 ? void 0 : contentType.includes('application/json')) {
        const json = await response.json();
        debug('response', response.status, response.url, response.headers, json);
        return json;
    }
    // TODO handle blob, arraybuffer, other content types, etc.
    const text = await response.text();
    debug('response', response.status, response.url, response.headers, text);
    return text;
}
/**
 * A subclass of `Promise` providing additional helper methods
 * for interacting with the SDK.
 */
class APIPromise extends Promise {
    constructor(responsePromise, parseResponse = defaultParseResponse) {
        super((resolve) => {
            // this is maybe a bit weird but this has to be a no-op to not implicitly
            // parse the response body; instead .then, .catch, .finally are overridden
            // to parse the response
            resolve(null);
        });
        this.responsePromise = responsePromise;
        this.parseResponse = parseResponse;
    }
    _thenUnwrap(transform) {
        return new APIPromise(this.responsePromise, async (props) => transform(await this.parseResponse(props)));
    }
    /**
     * Gets the raw `Response` instance instead of parsing the response
     * data.
     *
     * If you want to parse the response body but still get the `Response`
     * instance, you can use {@link withResponse()}.
     *
     * 👋 Getting the wrong TypeScript type for `Response`?
     * Try setting `"moduleResolution": "NodeNext"` if you can,
     * or add one of these imports before your first `import … from 'openai'`:
     * - `import 'openai/shims/node'` (if you're running on Node)
     * - `import 'openai/shims/web'` (otherwise)
     */
    asResponse() {
        return this.responsePromise.then((p) => p.response);
    }
    /**
     * Gets the parsed response data and the raw `Response` instance.
     *
     * If you just want to get the raw `Response` instance without parsing it,
     * you can use {@link asResponse()}.
     *
     *
     * 👋 Getting the wrong TypeScript type for `Response`?
     * Try setting `"moduleResolution": "NodeNext"` if you can,
     * or add one of these imports before your first `import … from 'openai'`:
     * - `import 'openai/shims/node'` (if you're running on Node)
     * - `import 'openai/shims/web'` (otherwise)
     */
    async withResponse() {
        const [data, response] = await Promise.all([this.parse(), this.asResponse()]);
        return { data, response };
    }
    parse() {
        if (!this.parsedPromise) {
            this.parsedPromise = this.responsePromise.then(this.parseResponse);
        }
        return this.parsedPromise;
    }
    then(onfulfilled, onrejected) {
        return this.parse().then(onfulfilled, onrejected);
    }
    catch(onrejected) {
        return this.parse().catch(onrejected);
    }
    finally(onfinally) {
        return this.parse().finally(onfinally);
    }
}
class APIClient {
    constructor({ baseURL, maxRetries, timeout = 600000, // 10 minutes
    httpAgent, fetch: overridenFetch, }) {
        this.baseURL = baseURL;
        this.maxRetries = validatePositiveInteger('maxRetries', maxRetries !== null && maxRetries !== void 0 ? maxRetries : MAX_RETRIES);
        this.timeout = validatePositiveInteger('timeout', timeout);
        this.httpAgent = httpAgent;
        this.fetch = overridenFetch !== null && overridenFetch !== void 0 ? overridenFetch : _shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__.fetch;
    }
    authHeaders(opts) {
        return {};
    }
    /**
     * Override this to add your own default headers, for example:
     *
     *  {
     *    ...super.defaultHeaders(),
     *    Authorization: 'Bearer 123',
     *  }
     */
    defaultHeaders(opts) {
        return {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': this.getUserAgent(),
            ...getPlatformHeaders(),
            ...this.authHeaders(opts),
        };
    }
    /**
     * Override this to add your own headers validation:
     */
    validateHeaders(headers, customHeaders) { }
    defaultIdempotencyKey() {
        return `stainless-node-retry-${uuid4()}`;
    }
    get(path, opts) {
        return this.methodRequest('get', path, opts);
    }
    post(path, opts) {
        return this.methodRequest('post', path, opts);
    }
    patch(path, opts) {
        return this.methodRequest('patch', path, opts);
    }
    put(path, opts) {
        return this.methodRequest('put', path, opts);
    }
    delete(path, opts) {
        return this.methodRequest('delete', path, opts);
    }
    methodRequest(method, path, opts) {
        return this.request(Promise.resolve(opts).then((opts) => ({ method, path, ...opts })));
    }
    getAPIList(path, Page, opts) {
        return this.requestAPIList(Page, { method: 'get', path, ...opts });
    }
    calculateContentLength(body) {
        if (typeof body === 'string') {
            if (typeof Buffer !== 'undefined') {
                return Buffer.byteLength(body, 'utf8').toString();
            }
            if (typeof TextEncoder !== 'undefined') {
                const encoder = new TextEncoder();
                const encoded = encoder.encode(body);
                return encoded.length.toString();
            }
        }
        return null;
    }
    buildRequest(options) {
        var _a, _b, _c, _d, _e, _f;
        const { method, path, query, headers: headers = {} } = options;
        const body = (0,_uploads_mjs__WEBPACK_IMPORTED_MODULE_1__.isMultipartBody)(options.body) ? options.body.body
            : options.body ? JSON.stringify(options.body, null, 2)
                : null;
        const contentLength = this.calculateContentLength(body);
        const url = this.buildURL(path, query);
        if ('timeout' in options)
            validatePositiveInteger('timeout', options.timeout);
        const timeout = (_a = options.timeout) !== null && _a !== void 0 ? _a : this.timeout;
        const httpAgent = (_c = (_b = options.httpAgent) !== null && _b !== void 0 ? _b : this.httpAgent) !== null && _c !== void 0 ? _c : (0,_shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultAgent)(url);
        const minAgentTimeout = timeout + 1000;
        if (typeof ((_d = httpAgent === null || httpAgent === void 0 ? void 0 : httpAgent.options) === null || _d === void 0 ? void 0 : _d.timeout) === 'number' &&
            minAgentTimeout > ((_e = httpAgent.options.timeout) !== null && _e !== void 0 ? _e : 0)) {
            // Allow any given request to bump our agent active socket timeout.
            // This may seem strange, but leaking active sockets should be rare and not particularly problematic,
            // and without mutating agent we would need to create more of them.
            // This tradeoff optimizes for performance.
            httpAgent.options.timeout = minAgentTimeout;
        }
        if (this.idempotencyHeader && method !== 'get') {
            if (!options.idempotencyKey)
                options.idempotencyKey = this.defaultIdempotencyKey();
            headers[this.idempotencyHeader] = options.idempotencyKey;
        }
        const reqHeaders = {
            ...(contentLength && { 'Content-Length': contentLength }),
            ...this.defaultHeaders(options),
            ...headers,
        };
        // let builtin fetch set the Content-Type for multipart bodies
        if ((0,_uploads_mjs__WEBPACK_IMPORTED_MODULE_1__.isMultipartBody)(options.body) && _shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__.kind !== 'node') {
            delete reqHeaders['Content-Type'];
        }
        // Strip any headers being explicitly omitted with null
        Object.keys(reqHeaders).forEach((key) => reqHeaders[key] === null && delete reqHeaders[key]);
        const req = {
            method,
            ...(body && { body: body }),
            headers: reqHeaders,
            ...(httpAgent && { agent: httpAgent }),
            // @ts-ignore node-fetch uses a custom AbortSignal type that is
            // not compatible with standard web types
            signal: (_f = options.signal) !== null && _f !== void 0 ? _f : null,
        };
        this.validateHeaders(reqHeaders, headers);
        return { req, url, timeout };
    }
    /**
     * Used as a callback for mutating the given `RequestInit` object.
     *
     * This is useful for cases where you want to add certain headers based off of
     * the request properties, e.g. `method` or `url`.
     */
    async prepareRequest(request, { url, options }) { }
    parseHeaders(headers) {
        return (!headers ? {}
            : Symbol.iterator in headers ?
                Object.fromEntries(Array.from(headers).map((header) => [...header]))
                : { ...headers });
    }
    makeStatusError(status, error, message, headers) {
        return _error_mjs__WEBPACK_IMPORTED_MODULE_3__.APIError.generate(status, error, message, headers);
    }
    request(options, remainingRetries = null) {
        return new APIPromise(this.makeRequest(options, remainingRetries));
    }
    async makeRequest(optionsInput, retriesRemaining) {
        var _a, _b, _c;
        const options = await optionsInput;
        if (retriesRemaining == null) {
            retriesRemaining = (_a = options.maxRetries) !== null && _a !== void 0 ? _a : this.maxRetries;
        }
        const { req, url, timeout } = this.buildRequest(options);
        await this.prepareRequest(req, { url, options });
        debug('request', url, options, req.headers);
        if ((_b = options.signal) === null || _b === void 0 ? void 0 : _b.aborted) {
            throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.APIUserAbortError();
        }
        const controller = new AbortController();
        const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
        if (response instanceof Error) {
            if ((_c = options.signal) === null || _c === void 0 ? void 0 : _c.aborted) {
                throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.APIUserAbortError();
            }
            if (retriesRemaining) {
                return this.retryRequest(options, retriesRemaining);
            }
            if (response.name === 'AbortError') {
                throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.APIConnectionTimeoutError();
            }
            throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.APIConnectionError({ cause: response });
        }
        const responseHeaders = createResponseHeaders(response.headers);
        if (!response.ok) {
            if (retriesRemaining && this.shouldRetry(response)) {
                return this.retryRequest(options, retriesRemaining, responseHeaders);
            }
            const errText = await response.text().catch((e) => castToError(e).message);
            const errJSON = safeJSON(errText);
            const errMessage = errJSON ? undefined : errText;
            debug('response', response.status, url, responseHeaders, errMessage);
            const err = this.makeStatusError(response.status, errJSON, errMessage, responseHeaders);
            throw err;
        }
        return { response, options, controller };
    }
    requestAPIList(Page, options) {
        const request = this.makeRequest(options, null);
        return new PagePromise(this, request, Page);
    }
    buildURL(path, query) {
        const url = isAbsoluteURL(path) ?
            new URL(path)
            : new URL(this.baseURL + (this.baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));
        const defaultQuery = this.defaultQuery();
        if (!isEmptyObj(defaultQuery)) {
            query = { ...defaultQuery, ...query };
        }
        if (query) {
            url.search = this.stringifyQuery(query);
        }
        return url.toString();
    }
    stringifyQuery(query) {
        return Object.entries(query)
            .filter(([_, value]) => typeof value !== 'undefined')
            .map(([key, value]) => {
            if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
            }
            if (value === null) {
                return `${encodeURIComponent(key)}=`;
            }
            throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.OpenAIError(`Cannot stringify type ${typeof value}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`);
        })
            .join('&');
    }
    async fetchWithTimeout(url, init, ms, controller) {
        const { signal, ...options } = init || {};
        if (signal)
            signal.addEventListener('abort', () => controller.abort());
        const timeout = setTimeout(() => controller.abort(), ms);
        return (this.getRequestClient()
            // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
            .fetch.call(undefined, url, { signal: controller.signal, ...options })
            .finally(() => {
            clearTimeout(timeout);
        }));
    }
    getRequestClient() {
        return { fetch: this.fetch };
    }
    shouldRetry(response) {
        // Note this is not a standard header.
        const shouldRetryHeader = response.headers.get('x-should-retry');
        // If the server explicitly says whether or not to retry, obey.
        if (shouldRetryHeader === 'true')
            return true;
        if (shouldRetryHeader === 'false')
            return false;
        // Retry on request timeouts.
        if (response.status === 408)
            return true;
        // Retry on lock timeouts.
        if (response.status === 409)
            return true;
        // Retry on rate limits.
        if (response.status === 429)
            return true;
        // Retry internal errors.
        if (response.status >= 500)
            return true;
        return false;
    }
    async retryRequest(options, retriesRemaining, responseHeaders) {
        var _a;
        retriesRemaining -= 1;
        // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
        let timeoutMillis;
        const retryAfterHeader = responseHeaders === null || responseHeaders === void 0 ? void 0 : responseHeaders['retry-after'];
        if (retryAfterHeader) {
            const timeoutSeconds = parseInt(retryAfterHeader);
            if (!Number.isNaN(timeoutSeconds)) {
                timeoutMillis = timeoutSeconds * 1000;
            }
            else {
                timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
            }
        }
        // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
        // just do what it says, but otherwise calculate a default
        if (!timeoutMillis ||
            !Number.isInteger(timeoutMillis) ||
            timeoutMillis <= 0 ||
            timeoutMillis > 60 * 1000) {
            const maxRetries = (_a = options.maxRetries) !== null && _a !== void 0 ? _a : this.maxRetries;
            timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
        }
        await sleep(timeoutMillis);
        return this.makeRequest(options, retriesRemaining);
    }
    calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries) {
        const initialRetryDelay = 0.5;
        const maxRetryDelay = 2;
        const numRetries = maxRetries - retriesRemaining;
        // Apply exponential backoff, but not more than the max.
        const sleepSeconds = Math.min(initialRetryDelay * Math.pow(numRetries - 1, 2), maxRetryDelay);
        // Apply some jitter, plus-or-minus half a second.
        const jitter = Math.random() - 0.5;
        return (sleepSeconds + jitter) * 1000;
    }
    getUserAgent() {
        return `${this.constructor.name}/JS ${_version_mjs__WEBPACK_IMPORTED_MODULE_4__.VERSION}`;
    }
}
class APIResource {
    constructor(client) {
        this.client = client;
        this.get = client.get.bind(client);
        this.post = client.post.bind(client);
        this.patch = client.patch.bind(client);
        this.put = client.put.bind(client);
        this.delete = client.delete.bind(client);
        this.getAPIList = client.getAPIList.bind(client);
    }
}
class AbstractPage {
    constructor(client, response, body, options) {
        _AbstractPage_client.set(this, void 0);
        __classPrivateFieldSet(this, _AbstractPage_client, client, "f");
        this.options = options;
        this.response = response;
        this.body = body;
    }
    hasNextPage() {
        const items = this.getPaginatedItems();
        if (!items.length)
            return false;
        return this.nextPageInfo() != null;
    }
    async getNextPage() {
        const nextInfo = this.nextPageInfo();
        if (!nextInfo) {
            throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.OpenAIError('No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.');
        }
        const nextOptions = { ...this.options };
        if ('params' in nextInfo) {
            nextOptions.query = { ...nextOptions.query, ...nextInfo.params };
        }
        else if ('url' in nextInfo) {
            const params = [...Object.entries(nextOptions.query || {}), ...nextInfo.url.searchParams.entries()];
            for (const [key, value] of params) {
                nextInfo.url.searchParams.set(key, value);
            }
            nextOptions.query = undefined;
            nextOptions.path = nextInfo.url.toString();
        }
        return await __classPrivateFieldGet(this, _AbstractPage_client, "f").requestAPIList(this.constructor, nextOptions);
    }
    async *iterPages() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let page = this;
        yield page;
        while (page.hasNextPage()) {
            page = await page.getNextPage();
            yield page;
        }
    }
    async *[(_AbstractPage_client = new WeakMap(), Symbol.asyncIterator)]() {
        for await (const page of this.iterPages()) {
            for (const item of page.getPaginatedItems()) {
                yield item;
            }
        }
    }
}
/**
 * This subclass of Promise will resolve to an instantiated Page once the request completes.
 *
 * It also implements AsyncIterable to allow auto-paginating iteration on an unawaited list call, eg:
 *
 *    for await (const item of client.items.list()) {
 *      console.log(item)
 *    }
 */
class PagePromise extends APIPromise {
    constructor(client, request, Page) {
        super(request, async (props) => new Page(client, props.response, await defaultParseResponse(props), props.options));
    }
    /**
     * Allow auto-paginating iteration on an unawaited list call, eg:
     *
     *    for await (const item of client.items.list()) {
     *      console.log(item)
     *    }
     */
    async *[Symbol.asyncIterator]() {
        const page = await this;
        for await (const item of page) {
            yield item;
        }
    }
}
const createResponseHeaders = (headers) => {
    return new Proxy(Object.fromEntries(
    // @ts-ignore
    headers.entries()), {
        get(target, name) {
            const key = name.toString();
            return target[key.toLowerCase()] || target[key];
        },
    });
};
// This is required so that we can determine if a given object matches the RequestOptions
// type at runtime. While this requires duplication, it is enforced by the TypeScript
// compiler such that any missing / extraneous keys will cause an error.
const requestOptionsKeys = {
    method: true,
    path: true,
    query: true,
    body: true,
    headers: true,
    maxRetries: true,
    stream: true,
    timeout: true,
    httpAgent: true,
    signal: true,
    idempotencyKey: true,
};
const isRequestOptions = (obj) => {
    return (typeof obj === 'object' &&
        obj !== null &&
        !isEmptyObj(obj) &&
        Object.keys(obj).every((k) => hasOwn(requestOptionsKeys, k)));
};
const getPlatformProperties = () => {
    if (typeof Deno !== 'undefined' && Deno.build != null) {
        return {
            'X-Stainless-Lang': 'js',
            'X-Stainless-Package-Version': _version_mjs__WEBPACK_IMPORTED_MODULE_4__.VERSION,
            'X-Stainless-OS': normalizePlatform(Deno.build.os),
            'X-Stainless-Arch': normalizeArch(Deno.build.arch),
            'X-Stainless-Runtime': 'deno',
            'X-Stainless-Runtime-Version': Deno.version,
        };
    }
    if (typeof EdgeRuntime !== 'undefined') {
        return {
            'X-Stainless-Lang': 'js',
            'X-Stainless-Package-Version': _version_mjs__WEBPACK_IMPORTED_MODULE_4__.VERSION,
            'X-Stainless-OS': 'Unknown',
            'X-Stainless-Arch': `other:${EdgeRuntime}`,
            'X-Stainless-Runtime': 'edge',
            'X-Stainless-Runtime-Version': process.version,
        };
    }
    // Check if Node.js
    if (Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]') {
        return {
            'X-Stainless-Lang': 'js',
            'X-Stainless-Package-Version': _version_mjs__WEBPACK_IMPORTED_MODULE_4__.VERSION,
            'X-Stainless-OS': normalizePlatform(process.platform),
            'X-Stainless-Arch': normalizeArch(process.arch),
            'X-Stainless-Runtime': 'node',
            'X-Stainless-Runtime-Version': process.version,
        };
    }
    const browserInfo = getBrowserInfo();
    if (browserInfo) {
        return {
            'X-Stainless-Lang': 'js',
            'X-Stainless-Package-Version': _version_mjs__WEBPACK_IMPORTED_MODULE_4__.VERSION,
            'X-Stainless-OS': 'Unknown',
            'X-Stainless-Arch': 'unknown',
            'X-Stainless-Runtime': `browser:${browserInfo.browser}`,
            'X-Stainless-Runtime-Version': browserInfo.version,
        };
    }
    // TODO add support for Cloudflare workers, etc.
    return {
        'X-Stainless-Lang': 'js',
        'X-Stainless-Package-Version': _version_mjs__WEBPACK_IMPORTED_MODULE_4__.VERSION,
        'X-Stainless-OS': 'Unknown',
        'X-Stainless-Arch': 'unknown',
        'X-Stainless-Runtime': 'unknown',
        'X-Stainless-Runtime-Version': 'unknown',
    };
};
// Note: modified from https://github.com/JS-DevTools/host-environment/blob/b1ab79ecde37db5d6e163c050e54fe7d287d7c92/src/isomorphic.browser.ts
function getBrowserInfo() {
    if (typeof navigator === 'undefined' || !navigator) {
        return null;
    }
    // NOTE: The order matters here!
    const browserPatterns = [
        { key: 'edge', pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
        { key: 'ie', pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
        { key: 'ie', pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/ },
        { key: 'chrome', pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
        { key: 'firefox', pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
        { key: 'safari', pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/ },
    ];
    // Find the FIRST matching browser
    for (const { key, pattern } of browserPatterns) {
        const match = pattern.exec(navigator.userAgent);
        if (match) {
            const major = match[1] || 0;
            const minor = match[2] || 0;
            const patch = match[3] || 0;
            return { browser: key, version: `${major}.${minor}.${patch}` };
        }
    }
    return null;
}
const normalizeArch = (arch) => {
    // Node docs:
    // - https://nodejs.org/api/process.html#processarch
    // Deno docs:
    // - https://doc.deno.land/deno/stable/~/Deno.build
    if (arch === 'x32')
        return 'x32';
    if (arch === 'x86_64' || arch === 'x64')
        return 'x64';
    if (arch === 'arm')
        return 'arm';
    if (arch === 'aarch64' || arch === 'arm64')
        return 'arm64';
    if (arch)
        return `other:${arch}`;
    return 'unknown';
};
const normalizePlatform = (platform) => {
    // Node platforms:
    // - https://nodejs.org/api/process.html#processplatform
    // Deno platforms:
    // - https://doc.deno.land/deno/stable/~/Deno.build
    // - https://github.com/denoland/deno/issues/14799
    platform = platform.toLowerCase();
    // NOTE: this iOS check is untested and may not work
    // Node does not work natively on IOS, there is a fork at
    // https://github.com/nodejs-mobile/nodejs-mobile
    // however it is unknown at the time of writing how to detect if it is running
    if (platform.includes('ios'))
        return 'iOS';
    if (platform === 'android')
        return 'Android';
    if (platform === 'darwin')
        return 'MacOS';
    if (platform === 'win32')
        return 'Windows';
    if (platform === 'freebsd')
        return 'FreeBSD';
    if (platform === 'openbsd')
        return 'OpenBSD';
    if (platform === 'linux')
        return 'Linux';
    if (platform)
        return `Other:${platform}`;
    return 'Unknown';
};
let _platformHeaders;
const getPlatformHeaders = () => {
    return (_platformHeaders !== null && _platformHeaders !== void 0 ? _platformHeaders : (_platformHeaders = getPlatformProperties()));
};
const safeJSON = (text) => {
    try {
        return JSON.parse(text);
    }
    catch (err) {
        return undefined;
    }
};
// https://stackoverflow.com/a/19709846
const startsWithSchemeRegexp = new RegExp('^(?:[a-z]+:)?//', 'i');
const isAbsoluteURL = (url) => {
    return startsWithSchemeRegexp.test(url);
};
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const validatePositiveInteger = (name, n) => {
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.OpenAIError(`${name} must be an integer`);
    }
    if (n < 0) {
        throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.OpenAIError(`${name} must be a positive integer`);
    }
    return n;
};
const castToError = (err) => {
    if (err instanceof Error)
        return err;
    return new Error(err);
};
const ensurePresent = (value) => {
    if (value == null)
        throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.OpenAIError(`Expected a value to be given but received ${value} instead.`);
    return value;
};
/**
 * Read an environment variable.
 *
 * Will return undefined if the environment variable doesn't exist or cannot be accessed.
 */
const readEnv = (env) => {
    var _a, _b, _c, _d;
    if (typeof process !== 'undefined') {
        return (_b = (_a = process.env) === null || _a === void 0 ? void 0 : _a[env]) !== null && _b !== void 0 ? _b : undefined;
    }
    if (typeof Deno !== 'undefined') {
        return (_d = (_c = Deno.env) === null || _c === void 0 ? void 0 : _c.get) === null || _d === void 0 ? void 0 : _d.call(_c, env);
    }
    return undefined;
};
const coerceInteger = (value) => {
    if (typeof value === 'number')
        return Math.round(value);
    if (typeof value === 'string')
        return parseInt(value, 10);
    throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.OpenAIError(`Could not coerce ${value} (type: ${typeof value}) into a number`);
};
const coerceFloat = (value) => {
    if (typeof value === 'number')
        return value;
    if (typeof value === 'string')
        return parseFloat(value);
    throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.OpenAIError(`Could not coerce ${value} (type: ${typeof value}) into a number`);
};
const coerceBoolean = (value) => {
    if (typeof value === 'boolean')
        return value;
    if (typeof value === 'string')
        return value === 'true';
    return Boolean(value);
};
const maybeCoerceInteger = (value) => {
    if (value === undefined) {
        return undefined;
    }
    return coerceInteger(value);
};
const maybeCoerceFloat = (value) => {
    if (value === undefined) {
        return undefined;
    }
    return coerceFloat(value);
};
const maybeCoerceBoolean = (value) => {
    if (value === undefined) {
        return undefined;
    }
    return coerceBoolean(value);
};
// https://stackoverflow.com/a/34491287
function isEmptyObj(obj) {
    if (!obj)
        return true;
    for (const _k in obj)
        return false;
    return true;
}
// https://eslint.org/docs/latest/rules/no-prototype-builtins
function hasOwn(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function debug(action, ...args) {
    if (typeof process !== 'undefined' && process.env['DEBUG'] === 'true') {
        console.log(`OpenAI:DEBUG:${action}`, ...args);
    }
}
/**
 * https://stackoverflow.com/a/2117523
 */
const uuid4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};
const isRunningInBrowser = () => {
    return (
    // @ts-ignore
    typeof window !== 'undefined' &&
        // @ts-ignore
        typeof window.document !== 'undefined' &&
        // @ts-ignore
        typeof navigator !== 'undefined');
};
const isHeadersProtocol = (headers) => {
    return typeof (headers === null || headers === void 0 ? void 0 : headers.get) === 'function';
};
const getHeader = (headers, key) => {
    const lowerKey = key.toLowerCase();
    if (isHeadersProtocol(headers))
        return headers.get(key) || headers.get(lowerKey);
    const value = headers[key] || headers[lowerKey];
    if (Array.isArray(value)) {
        if (value.length <= 1)
            return value[0];
        console.warn(`Received ${value.length} entries for the ${key} header, using the first entry.`);
        return value[0];
    }
    return value;
};
/**
 * Encodes a string to Base64 format.
 */
const toBase64 = (str) => {
    if (!str)
        return '';
    if (typeof Buffer !== 'undefined') {
        return Buffer.from(str).toString('base64');
    }
    if (typeof btoa !== 'undefined') {
        return btoa(str);
    }
    throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.OpenAIError('Cannot generate b64 string; Expected `Buffer` or `btoa` to be defined');
};
//# sourceMappingURL=core.mjs.map

/***/ }),

/***/ "./node_modules/openai/error.mjs":
/*!***************************************!*\
  !*** ./node_modules/openai/error.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIConnectionError: () => (/* binding */ APIConnectionError),
/* harmony export */   APIConnectionTimeoutError: () => (/* binding */ APIConnectionTimeoutError),
/* harmony export */   APIError: () => (/* binding */ APIError),
/* harmony export */   APIUserAbortError: () => (/* binding */ APIUserAbortError),
/* harmony export */   AuthenticationError: () => (/* binding */ AuthenticationError),
/* harmony export */   BadRequestError: () => (/* binding */ BadRequestError),
/* harmony export */   ConflictError: () => (/* binding */ ConflictError),
/* harmony export */   InternalServerError: () => (/* binding */ InternalServerError),
/* harmony export */   NotFoundError: () => (/* binding */ NotFoundError),
/* harmony export */   OpenAIError: () => (/* binding */ OpenAIError),
/* harmony export */   PermissionDeniedError: () => (/* binding */ PermissionDeniedError),
/* harmony export */   RateLimitError: () => (/* binding */ RateLimitError),
/* harmony export */   UnprocessableEntityError: () => (/* binding */ UnprocessableEntityError)
/* harmony export */ });
/* harmony import */ var _core_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.mjs */ "./node_modules/openai/core.mjs");
// File generated from our OpenAPI spec by Stainless.

class OpenAIError extends Error {
}
class APIError extends OpenAIError {
    constructor(status, error, message, headers) {
        super(`${status} ${APIError.makeMessage(error, message)}`);
        this.status = status;
        this.headers = headers;
        const data = error;
        this.error = data;
        this.code = data === null || data === void 0 ? void 0 : data['code'];
        this.param = data === null || data === void 0 ? void 0 : data['param'];
        this.type = data === null || data === void 0 ? void 0 : data['type'];
    }
    static makeMessage(error, message) {
        return ((error === null || error === void 0 ? void 0 : error.message) ?
            typeof error.message === 'string' ? error.message
                : JSON.stringify(error.message)
            : error ? JSON.stringify(error)
                : message || 'status code (no body)');
    }
    static generate(status, errorResponse, message, headers) {
        if (!status) {
            return new APIConnectionError({ cause: (0,_core_mjs__WEBPACK_IMPORTED_MODULE_0__.castToError)(errorResponse) });
        }
        const error = errorResponse === null || errorResponse === void 0 ? void 0 : errorResponse['error'];
        if (status === 400) {
            return new BadRequestError(status, error, message, headers);
        }
        if (status === 401) {
            return new AuthenticationError(status, error, message, headers);
        }
        if (status === 403) {
            return new PermissionDeniedError(status, error, message, headers);
        }
        if (status === 404) {
            return new NotFoundError(status, error, message, headers);
        }
        if (status === 409) {
            return new ConflictError(status, error, message, headers);
        }
        if (status === 422) {
            return new UnprocessableEntityError(status, error, message, headers);
        }
        if (status === 429) {
            return new RateLimitError(status, error, message, headers);
        }
        if (status >= 500) {
            return new InternalServerError(status, error, message, headers);
        }
        return new APIError(status, error, message, headers);
    }
}
class APIUserAbortError extends APIError {
    constructor({ message } = {}) {
        super(undefined, undefined, message || 'Request was aborted.', undefined);
        this.status = undefined;
    }
}
class APIConnectionError extends APIError {
    constructor({ message, cause }) {
        super(undefined, undefined, message || 'Connection error.', undefined);
        this.status = undefined;
        // in some environments the 'cause' property is already declared
        // @ts-ignore
        if (cause)
            this.cause = cause;
    }
}
class APIConnectionTimeoutError extends APIConnectionError {
    constructor({ message } = {}) {
        super({ message: message !== null && message !== void 0 ? message : 'Request timed out.' });
    }
}
class BadRequestError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 400;
    }
}
class AuthenticationError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 401;
    }
}
class PermissionDeniedError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 403;
    }
}
class NotFoundError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 404;
    }
}
class ConflictError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 409;
    }
}
class UnprocessableEntityError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 422;
    }
}
class RateLimitError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 429;
    }
}
class InternalServerError extends APIError {
}
//# sourceMappingURL=error.mjs.map

/***/ }),

/***/ "./node_modules/openai/index.mjs":
/*!***************************************!*\
  !*** ./node_modules/openai/index.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIConnectionError: () => (/* binding */ APIConnectionError),
/* harmony export */   APIConnectionTimeoutError: () => (/* binding */ APIConnectionTimeoutError),
/* harmony export */   APIError: () => (/* binding */ APIError),
/* harmony export */   APIUserAbortError: () => (/* binding */ APIUserAbortError),
/* harmony export */   AuthenticationError: () => (/* binding */ AuthenticationError),
/* harmony export */   BadRequestError: () => (/* binding */ BadRequestError),
/* harmony export */   ConflictError: () => (/* binding */ ConflictError),
/* harmony export */   InternalServerError: () => (/* binding */ InternalServerError),
/* harmony export */   NotFoundError: () => (/* binding */ NotFoundError),
/* harmony export */   OpenAI: () => (/* binding */ OpenAI),
/* harmony export */   OpenAIError: () => (/* binding */ OpenAIError),
/* harmony export */   PermissionDeniedError: () => (/* binding */ PermissionDeniedError),
/* harmony export */   RateLimitError: () => (/* binding */ RateLimitError),
/* harmony export */   UnprocessableEntityError: () => (/* binding */ UnprocessableEntityError),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fileFromPath: () => (/* binding */ fileFromPath),
/* harmony export */   toFile: () => (/* binding */ toFile)
/* harmony export */ });
/* harmony import */ var _core_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.mjs */ "./node_modules/openai/core.mjs");
/* harmony import */ var _pagination_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pagination.mjs */ "./node_modules/openai/pagination.mjs");
/* harmony import */ var _resources_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/index.mjs */ "./node_modules/openai/resources/completions.mjs");
/* harmony import */ var _resources_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources/index.mjs */ "./node_modules/openai/resources/chat/chat.mjs");
/* harmony import */ var _resources_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources/index.mjs */ "./node_modules/openai/resources/edits.mjs");
/* harmony import */ var _resources_index_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources/index.mjs */ "./node_modules/openai/resources/embeddings.mjs");
/* harmony import */ var _resources_index_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources/index.mjs */ "./node_modules/openai/resources/files.mjs");
/* harmony import */ var _resources_index_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resources/index.mjs */ "./node_modules/openai/resources/images.mjs");
/* harmony import */ var _resources_index_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resources/index.mjs */ "./node_modules/openai/resources/audio/audio.mjs");
/* harmony import */ var _resources_index_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resources/index.mjs */ "./node_modules/openai/resources/moderations.mjs");
/* harmony import */ var _resources_index_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resources/index.mjs */ "./node_modules/openai/resources/models.mjs");
/* harmony import */ var _resources_index_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resources/index.mjs */ "./node_modules/openai/resources/fine-tuning/fine-tuning.mjs");
/* harmony import */ var _resources_index_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resources/index.mjs */ "./node_modules/openai/resources/fine-tunes.mjs");
/* harmony import */ var _error_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.mjs */ "./node_modules/openai/error.mjs");
/* harmony import */ var _uploads_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./uploads.mjs */ "./node_modules/openai/uploads.mjs");
/* harmony import */ var _uploads_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./uploads.mjs */ "./node_modules/openai/_shims/index.mjs");
// File generated from our OpenAPI spec by Stainless.
var _a;





/** API Client for interfacing with the OpenAI API. */
class OpenAI extends _core_mjs__WEBPACK_IMPORTED_MODULE_0__.APIClient {
    /**
     * API Client for interfacing with the OpenAI API.
     *
     * @param {string} [opts.apiKey=process.env['OPENAI_API_KEY']] - The API Key to send to the API.
     * @param {string} [opts.baseURL] - Override the default base URL for the API.
     * @param {number} [opts.timeout=10 minutes] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
     * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
     * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
     * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
     * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
     * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
     * @param {boolean} [opts.dangerouslyAllowBrowser=false] - By default, client-side use of this library is not allowed, as it risks exposing your secret API credentials to attackers.
     * @param {string | null} [opts.organization]
     */
    constructor(_b) {
        var _c, _d, _e;
        var { apiKey = _core_mjs__WEBPACK_IMPORTED_MODULE_0__.readEnv('OPENAI_API_KEY'), organization = (_c = _core_mjs__WEBPACK_IMPORTED_MODULE_0__.readEnv('OPENAI_ORG_ID')) !== null && _c !== void 0 ? _c : null, ...opts } = _b === void 0 ? {} : _b;
        if (apiKey === undefined) {
            throw new _error_mjs__WEBPACK_IMPORTED_MODULE_1__.OpenAIError("The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'my apiKey' }).");
        }
        const options = {
            apiKey,
            organization,
            ...opts,
            baseURL: (_d = opts.baseURL) !== null && _d !== void 0 ? _d : `https://api.openai.com/v1`,
        };
        if (!options.dangerouslyAllowBrowser && _core_mjs__WEBPACK_IMPORTED_MODULE_0__.isRunningInBrowser()) {
            throw new _error_mjs__WEBPACK_IMPORTED_MODULE_1__.OpenAIError("It looks like you're running in a browser-like environment.\n\nThis is disabled by default, as it risks exposing your secret API credentials to attackers.\nIf you understand the risks and have appropriate mitigations in place,\nyou can set the `dangerouslyAllowBrowser` option to `true`, e.g.,\n\nnew OpenAI({ apiKey, dangerouslyAllowBrowser: true });\n\nhttps://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety\n");
        }
        super({
            baseURL: options.baseURL,
            timeout: (_e = options.timeout) !== null && _e !== void 0 ? _e : 600000 /* 10 minutes */,
            httpAgent: options.httpAgent,
            maxRetries: options.maxRetries,
            fetch: options.fetch,
        });
        this.completions = new _resources_index_mjs__WEBPACK_IMPORTED_MODULE_2__.Completions(this);
        this.chat = new _resources_index_mjs__WEBPACK_IMPORTED_MODULE_3__.Chat(this);
        this.edits = new _resources_index_mjs__WEBPACK_IMPORTED_MODULE_4__.Edits(this);
        this.embeddings = new _resources_index_mjs__WEBPACK_IMPORTED_MODULE_5__.Embeddings(this);
        this.files = new _resources_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Files(this);
        this.images = new _resources_index_mjs__WEBPACK_IMPORTED_MODULE_7__.Images(this);
        this.audio = new _resources_index_mjs__WEBPACK_IMPORTED_MODULE_8__.Audio(this);
        this.moderations = new _resources_index_mjs__WEBPACK_IMPORTED_MODULE_9__.Moderations(this);
        this.models = new _resources_index_mjs__WEBPACK_IMPORTED_MODULE_10__.Models(this);
        this.fineTuning = new _resources_index_mjs__WEBPACK_IMPORTED_MODULE_11__.FineTuning(this);
        this.fineTunes = new _resources_index_mjs__WEBPACK_IMPORTED_MODULE_12__.FineTunes(this);
        this._options = options;
        this.apiKey = apiKey;
        this.organization = organization;
    }
    defaultQuery() {
        return this._options.defaultQuery;
    }
    defaultHeaders(opts) {
        return {
            ...super.defaultHeaders(opts),
            'OpenAI-Organization': this.organization,
            ...this._options.defaultHeaders,
        };
    }
    authHeaders(opts) {
        return { Authorization: `Bearer ${this.apiKey}` };
    }
}
_a = OpenAI;
OpenAI.OpenAI = _a;
OpenAI.OpenAIError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.OpenAIError;
OpenAI.APIError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.APIError;
OpenAI.APIConnectionError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.APIConnectionError;
OpenAI.APIConnectionTimeoutError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.APIConnectionTimeoutError;
OpenAI.APIUserAbortError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.APIUserAbortError;
OpenAI.NotFoundError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.NotFoundError;
OpenAI.ConflictError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.ConflictError;
OpenAI.RateLimitError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.RateLimitError;
OpenAI.BadRequestError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.BadRequestError;
OpenAI.AuthenticationError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.AuthenticationError;
OpenAI.InternalServerError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.InternalServerError;
OpenAI.PermissionDeniedError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.PermissionDeniedError;
OpenAI.UnprocessableEntityError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.UnprocessableEntityError;
const { OpenAIError, APIError, APIConnectionError, APIConnectionTimeoutError, APIUserAbortError, NotFoundError, ConflictError, RateLimitError, BadRequestError, AuthenticationError, InternalServerError, PermissionDeniedError, UnprocessableEntityError, } = _error_mjs__WEBPACK_IMPORTED_MODULE_1__;
var toFile = _uploads_mjs__WEBPACK_IMPORTED_MODULE_13__.toFile;
var fileFromPath = _uploads_mjs__WEBPACK_IMPORTED_MODULE_14__.fileFromPath;
(function (OpenAI) {
    // Helper functions
    OpenAI.toFile = _uploads_mjs__WEBPACK_IMPORTED_MODULE_13__.toFile;
    OpenAI.fileFromPath = _uploads_mjs__WEBPACK_IMPORTED_MODULE_14__.fileFromPath;
    OpenAI.Page = _pagination_mjs__WEBPACK_IMPORTED_MODULE_15__.Page;
    OpenAI.CursorPage = _pagination_mjs__WEBPACK_IMPORTED_MODULE_15__.CursorPage;
    OpenAI.Completions = _resources_index_mjs__WEBPACK_IMPORTED_MODULE_2__.Completions;
    OpenAI.Chat = _resources_index_mjs__WEBPACK_IMPORTED_MODULE_3__.Chat;
    OpenAI.Edits = _resources_index_mjs__WEBPACK_IMPORTED_MODULE_4__.Edits;
    OpenAI.Embeddings = _resources_index_mjs__WEBPACK_IMPORTED_MODULE_5__.Embeddings;
    OpenAI.Files = _resources_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Files;
    OpenAI.FileObjectsPage = _resources_index_mjs__WEBPACK_IMPORTED_MODULE_6__.FileObjectsPage;
    OpenAI.Images = _resources_index_mjs__WEBPACK_IMPORTED_MODULE_7__.Images;
    OpenAI.Audio = _resources_index_mjs__WEBPACK_IMPORTED_MODULE_8__.Audio;
    OpenAI.Moderations = _resources_index_mjs__WEBPACK_IMPORTED_MODULE_9__.Moderations;
    OpenAI.Models = _resources_index_mjs__WEBPACK_IMPORTED_MODULE_10__.Models;
    OpenAI.ModelsPage = _resources_index_mjs__WEBPACK_IMPORTED_MODULE_10__.ModelsPage;
    OpenAI.FineTuning = _resources_index_mjs__WEBPACK_IMPORTED_MODULE_11__.FineTuning;
    OpenAI.FineTunes = _resources_index_mjs__WEBPACK_IMPORTED_MODULE_12__.FineTunes;
    OpenAI.FineTunesPage = _resources_index_mjs__WEBPACK_IMPORTED_MODULE_12__.FineTunesPage;
})(OpenAI || (OpenAI = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpenAI);
//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/openai/pagination.mjs":
/*!********************************************!*\
  !*** ./node_modules/openai/pagination.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CursorPage: () => (/* binding */ CursorPage),
/* harmony export */   Page: () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var _core_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.mjs */ "./node_modules/openai/core.mjs");
// File generated from our OpenAPI spec by Stainless.

/**
 * Note: no pagination actually occurs yet, this is for forwards-compatibility.
 */
class Page extends _core_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractPage {
    constructor(client, response, body, options) {
        super(client, response, body, options);
        this.object = body.object;
        this.data = body.data;
    }
    getPaginatedItems() {
        return this.data;
    }
    // @deprecated Please use `nextPageInfo()` instead
    /**
     * This page represents a response that isn't actually paginated at the API level
     * so there will never be any next page params.
     */
    nextPageParams() {
        return null;
    }
    nextPageInfo() {
        return null;
    }
}
class CursorPage extends _core_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractPage {
    constructor(client, response, body, options) {
        super(client, response, body, options);
        this.data = body.data;
    }
    getPaginatedItems() {
        return this.data;
    }
    // @deprecated Please use `nextPageInfo()` instead
    nextPageParams() {
        const info = this.nextPageInfo();
        if (!info)
            return null;
        if ('params' in info)
            return info.params;
        const params = Object.fromEntries(info.url.searchParams);
        if (!Object.keys(params).length)
            return null;
        return params;
    }
    nextPageInfo() {
        var _a, _b;
        if (!((_a = this.data) === null || _a === void 0 ? void 0 : _a.length)) {
            return null;
        }
        const next = (_b = this.data[this.data.length - 1]) === null || _b === void 0 ? void 0 : _b.id;
        if (!next)
            return null;
        return { params: { after: next } };
    }
}
//# sourceMappingURL=pagination.mjs.map

/***/ }),

/***/ "./node_modules/openai/resource.mjs":
/*!******************************************!*\
  !*** ./node_modules/openai/resource.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIResource: () => (/* binding */ APIResource)
/* harmony export */ });
// File generated from our OpenAPI spec by Stainless.
class APIResource {
    constructor(client) {
        this.client = client;
        this.get = client.get.bind(client);
        this.post = client.post.bind(client);
        this.patch = client.patch.bind(client);
        this.put = client.put.bind(client);
        this.delete = client.delete.bind(client);
        this.getAPIList = client.getAPIList.bind(client);
    }
}
//# sourceMappingURL=resource.mjs.map

/***/ }),

/***/ "./node_modules/openai/resources/audio/audio.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/openai/resources/audio/audio.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Audio: () => (/* binding */ Audio)
/* harmony export */ });
/* harmony import */ var openai_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai/resource */ "./node_modules/openai/resource.mjs");
/* harmony import */ var _transcriptions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/openai/resources/audio/transcriptions.mjs");
/* harmony import */ var _translations_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/openai/resources/audio/translations.mjs");
// File generated from our OpenAPI spec by Stainless.




class Audio extends openai_resource__WEBPACK_IMPORTED_MODULE_0__.APIResource {
    constructor() {
        super(...arguments);
        this.transcriptions = new _transcriptions_mjs__WEBPACK_IMPORTED_MODULE_1__.Transcriptions(this.client);
        this.translations = new _translations_mjs__WEBPACK_IMPORTED_MODULE_2__.Translations(this.client);
    }
}
(function (Audio) {
    Audio.Transcriptions = _transcriptions_mjs__WEBPACK_IMPORTED_MODULE_1__.Transcriptions;
    Audio.Translations = _translations_mjs__WEBPACK_IMPORTED_MODULE_2__.Translations;
})(Audio || (Audio = {}));
//# sourceMappingURL=audio.mjs.map

/***/ }),

/***/ "./node_modules/openai/resources/audio/transcriptions.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/openai/resources/audio/transcriptions.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Transcriptions: () => (/* binding */ Transcriptions)
/* harmony export */ });
/* harmony import */ var openai_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai/resource */ "./node_modules/openai/resource.mjs");
/* harmony import */ var openai_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openai/core */ "./node_modules/openai/uploads.mjs");
// File generated from our OpenAPI spec by Stainless.


class Transcriptions extends openai_resource__WEBPACK_IMPORTED_MODULE_0__.APIResource {
    /**
     * Transcribes audio into the input language.
     */
    create(body, options) {
        return this.post('/audio/transcriptions', (0,openai_core__WEBPACK_IMPORTED_MODULE_1__.multipartFormRequestOptions)({ body, ...options }));
    }
}
(function (Transcriptions) {
})(Transcriptions || (Transcriptions = {}));
//# sourceMappingURL=transcriptions.mjs.map

/***/ }),

/***/ "./node_modules/openai/resources/audio/translations.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/openai/resources/audio/translations.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Translations: () => (/* binding */ Translations)
/* harmony export */ });
/* harmony import */ var openai_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai/resource */ "./node_modules/openai/resource.mjs");
/* harmony import */ var openai_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openai/core */ "./node_modules/openai/uploads.mjs");
// File generated from our OpenAPI spec by Stainless.


class Translations extends openai_resource__WEBPACK_IMPORTED_MODULE_0__.APIResource {
    /**
     * Translates audio into English.
     */
    create(body, options) {
        return this.post('/audio/translations', (0,openai_core__WEBPACK_IMPORTED_MODULE_1__.multipartFormRequestOptions)({ body, ...options }));
    }
}
(function (Translations) {
})(Translations || (Translations = {}));
//# sourceMappingURL=translations.mjs.map

/***/ }),

/***/ "./node_modules/openai/resources/chat/chat.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/openai/resources/chat/chat.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chat: () => (/* binding */ Chat)
/* harmony export */ });
/* harmony import */ var openai_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai/resource */ "./node_modules/openai/resource.mjs");
/* harmony import */ var _completions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/openai/resources/chat/completions.mjs");
// File generated from our OpenAPI spec by Stainless.



class Chat extends openai_resource__WEBPACK_IMPORTED_MODULE_0__.APIResource {
    constructor() {
        super(...arguments);
        this.completions = new _completions_mjs__WEBPACK_IMPORTED_MODULE_1__.Completions(this.client);
    }
}
(function (Chat) {
    Chat.Completions = _completions_mjs__WEBPACK_IMPORTED_MODULE_1__.Completions;
})(Chat || (Chat = {}));
//# sourceMappingURL=chat.mjs.map

/***/ }),

/***/ "./node_modules/openai/resources/chat/completions.mjs":
/*!************************************************************!*\
  !*** ./node_modules/openai/resources/chat/completions.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Completions: () => (/* binding */ Completions)
/* harmony export */ });
/* harmony import */ var openai_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai/resource */ "./node_modules/openai/resource.mjs");
// File generated from our OpenAPI spec by Stainless.

class Completions extends openai_resource__WEBPACK_IMPORTED_MODULE_0__.APIResource {
    create(body, options) {
        var _a;
        return this.post('/chat/completions', { body, ...options, stream: (_a = body.stream) !== null && _a !== void 0 ? _a : false });
    }
}
(function (Completions) {
})(Completions || (Completions = {}));
//# sourceMappingURL=completions.mjs.map

/***/ }),

/***/ "./node_modules/openai/resources/completions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/openai/resources/completions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Completions: () => (/* binding */ Completions)
/* harmony export */ });
/* harmony import */ var openai_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai/resource */ "./node_modules/openai/resource.mjs");
// File generated from our OpenAPI spec by Stainless.

class Completions extends openai_resource__WEBPACK_IMPORTED_MODULE_0__.APIResource {
    create(body, options) {
        var _a;
        return this.post('/completions', { body, ...options, stream: (_a = body.stream) !== null && _a !== void 0 ? _a : false });
    }
}
(function (Completions) {
})(Completions || (Completions = {}));
//# sourceMappingURL=completions.mjs.map

/***/ }),

/***/ "./node_modules/openai/resources/edits.mjs":
/*!*************************************************!*\
  !*** ./node_modules/openai/resources/edits.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Edits: () => (/* binding */ Edits)
/* harmony export */ });
/* harmony import */ var openai_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai/resource */ "./node_modules/openai/resource.mjs");
// File generated from our OpenAPI spec by Stainless.

class Edits extends openai_resource__WEBPACK_IMPORTED_MODULE_0__.APIResource {
    /**
     * Creates a new edit for the provided input, instruction, and parameters.
     *
     * @deprecated The Edits API is deprecated; please use Chat Completions instead.
     *
     * https://openai.com/blog/gpt-4-api-general-availability#deprecation-of-the-edits-api
     */
    create(body, options) {
        return this.post('/edits', { body, ...options });
    }
}
(function (Edits) {
})(Edits || (Edits = {}));
//# sourceMappingURL=edits.mjs.map

/***/ }),

/***/ "./node_modules/openai/resources/embeddings.mjs":
/*!******************************************************!*\
  !*** ./node_modules/openai/resources/embeddings.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Embeddings: () => (/* binding */ Embeddings)
/* harmony export */ });
/* harmony import */ var openai_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai/resource */ "./node_modules/openai/resource.mjs");
// File generated from our OpenAPI spec by Stainless.

class Embeddings extends openai_resource__WEBPACK_IMPORTED_MODULE_0__.APIResource {
    /**
     * Creates an embedding vector representing the input text.
     */
    create(body, options) {
        return this.post('/embeddings', { body, ...options });
    }
}
(function (Embeddings) {
})(Embeddings || (Embeddings = {}));
//# sourceMappingURL=embeddings.mjs.map

/***/ }),

/***/ "./node_modules/openai/resources/files.mjs":
/*!*************************************************!*\
  !*** ./node_modules/openai/resources/files.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileObjectsPage: () => (/* binding */ FileObjectsPage),
/* harmony export */   Files: () => (/* binding */ Files)
/* harmony export */ });
/* harmony import */ var openai_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai/resource */ "./node_modules/openai/resource.mjs");
/* harmony import */ var openai_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! openai/core */ "./node_modules/openai/core.mjs");
/* harmony import */ var openai_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! openai/error */ "./node_modules/openai/error.mjs");
/* harmony import */ var openai_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openai/core */ "./node_modules/openai/uploads.mjs");
/* harmony import */ var openai_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! openai/pagination */ "./node_modules/openai/pagination.mjs");
// File generated from our OpenAPI spec by Stainless.





class Files extends openai_resource__WEBPACK_IMPORTED_MODULE_0__.APIResource {
    /**
     * Upload a file that contains document(s) to be used across various
     * endpoints/features. Currently, the size of all the files uploaded by one
     * organization can be up to 1 GB. Please contact us if you need to increase the
     * storage limit.
     */
    create(body, options) {
        return this.post('/files', (0,openai_core__WEBPACK_IMPORTED_MODULE_1__.multipartFormRequestOptions)({ body, ...options }));
    }
    /**
     * Returns information about a specific file.
     */
    retrieve(fileId, options) {
        return this.get(`/files/${fileId}`, options);
    }
    /**
     * Returns a list of files that belong to the user's organization.
     */
    list(options) {
        return this.getAPIList('/files', FileObjectsPage, options);
    }
    /**
     * Delete a file.
     */
    del(fileId, options) {
        return this.delete(`/files/${fileId}`, options);
    }
    /**
     * Returns the contents of the specified file.
     */
    retrieveContent(fileId, options) {
        return this.get(`/files/${fileId}/content`, {
            ...options,
            headers: { Accept: 'application/json', ...options === null || options === void 0 ? void 0 : options.headers },
        });
    }
    /**
     * Waits for the given file to be processed, default timeout is 30 mins.
     */
    async waitForProcessing(id, { pollInterval = 5000, maxWait = 30 * 60 * 1000 } = {}) {
        const TERMINAL_STATES = new Set(['processed', 'error', 'deleted']);
        const start = Date.now();
        let file = await this.retrieve(id);
        while (!file.status || !TERMINAL_STATES.has(file.status)) {
            await (0,openai_core__WEBPACK_IMPORTED_MODULE_2__.sleep)(pollInterval);
            file = await this.retrieve(id);
            if (Date.now() - start > maxWait) {
                throw new openai_error__WEBPACK_IMPORTED_MODULE_3__.APIConnectionTimeoutError({
                    message: `Giving up on waiting for file ${id} to finish processing after ${maxWait} milliseconds.`,
                });
            }
        }
        return file;
    }
}
/**
 * Note: no pagination actually occurs yet, this is for forwards-compatibility.
 */
class FileObjectsPage extends openai_pagination__WEBPACK_IMPORTED_MODULE_4__.Page {
}
(function (Files) {
})(Files || (Files = {}));
//# sourceMappingURL=files.mjs.map

/***/ }),

/***/ "./node_modules/openai/resources/fine-tunes.mjs":
/*!******************************************************!*\
  !*** ./node_modules/openai/resources/fine-tunes.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FineTunes: () => (/* binding */ FineTunes),
/* harmony export */   FineTunesPage: () => (/* binding */ FineTunesPage)
/* harmony export */ });
/* harmony import */ var openai_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai/resource */ "./node_modules/openai/resource.mjs");
/* harmony import */ var openai_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openai/pagination */ "./node_modules/openai/pagination.mjs");
// File generated from our OpenAPI spec by Stainless.


class FineTunes extends openai_resource__WEBPACK_IMPORTED_MODULE_0__.APIResource {
    /**
     * Creates a job that fine-tunes a specified model from a given dataset.
     *
     * Response includes details of the enqueued job including job status and the name
     * of the fine-tuned models once complete.
     *
     * [Learn more about fine-tuning](https://platform.openai.com/docs/guides/legacy-fine-tuning)
     */
    create(body, options) {
        return this.post('/fine-tunes', { body, ...options });
    }
    /**
     * Gets info about the fine-tune job.
     *
     * [Learn more about fine-tuning](https://platform.openai.com/docs/guides/legacy-fine-tuning)
     */
    retrieve(fineTuneId, options) {
        return this.get(`/fine-tunes/${fineTuneId}`, options);
    }
    /**
     * List your organization's fine-tuning jobs
     */
    list(options) {
        return this.getAPIList('/fine-tunes', FineTunesPage, options);
    }
    /**
     * Immediately cancel a fine-tune job.
     */
    cancel(fineTuneId, options) {
        return this.post(`/fine-tunes/${fineTuneId}/cancel`, options);
    }
    listEvents(fineTuneId, query, options) {
        var _a;
        return this.get(`/fine-tunes/${fineTuneId}/events`, {
            query,
            timeout: 86400000,
            ...options,
            stream: (_a = query === null || query === void 0 ? void 0 : query.stream) !== null && _a !== void 0 ? _a : false,
        });
    }
}
/**
 * Note: no pagination actually occurs yet, this is for forwards-compatibility.
 */
class FineTunesPage extends openai_pagination__WEBPACK_IMPORTED_MODULE_1__.Page {
}
(function (FineTunes) {
})(FineTunes || (FineTunes = {}));
//# sourceMappingURL=fine-tunes.mjs.map

/***/ }),

/***/ "./node_modules/openai/resources/fine-tuning/fine-tuning.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/openai/resources/fine-tuning/fine-tuning.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FineTuning: () => (/* binding */ FineTuning)
/* harmony export */ });
/* harmony import */ var openai_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai/resource */ "./node_modules/openai/resource.mjs");
/* harmony import */ var _jobs_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/openai/resources/fine-tuning/jobs.mjs");
// File generated from our OpenAPI spec by Stainless.



class FineTuning extends openai_resource__WEBPACK_IMPORTED_MODULE_0__.APIResource {
    constructor() {
        super(...arguments);
        this.jobs = new _jobs_mjs__WEBPACK_IMPORTED_MODULE_1__.Jobs(this.client);
    }
}
(function (FineTuning) {
    FineTuning.Jobs = _jobs_mjs__WEBPACK_IMPORTED_MODULE_1__.Jobs;
    FineTuning.FineTuningJobsPage = _jobs_mjs__WEBPACK_IMPORTED_MODULE_1__.FineTuningJobsPage;
    FineTuning.FineTuningJobEventsPage = _jobs_mjs__WEBPACK_IMPORTED_MODULE_1__.FineTuningJobEventsPage;
})(FineTuning || (FineTuning = {}));
//# sourceMappingURL=fine-tuning.mjs.map

/***/ }),

/***/ "./node_modules/openai/resources/fine-tuning/jobs.mjs":
/*!************************************************************!*\
  !*** ./node_modules/openai/resources/fine-tuning/jobs.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FineTuningJobEventsPage: () => (/* binding */ FineTuningJobEventsPage),
/* harmony export */   FineTuningJobsPage: () => (/* binding */ FineTuningJobsPage),
/* harmony export */   Jobs: () => (/* binding */ Jobs)
/* harmony export */ });
/* harmony import */ var openai_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai/resource */ "./node_modules/openai/resource.mjs");
/* harmony import */ var openai_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openai/core */ "./node_modules/openai/core.mjs");
/* harmony import */ var openai_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! openai/pagination */ "./node_modules/openai/pagination.mjs");
// File generated from our OpenAPI spec by Stainless.



class Jobs extends openai_resource__WEBPACK_IMPORTED_MODULE_0__.APIResource {
    /**
     * Creates a job that fine-tunes a specified model from a given dataset.
     *
     * Response includes details of the enqueued job including job status and the name
     * of the fine-tuned models once complete.
     *
     * [Learn more about fine-tuning](https://platform.openai.com/docs/guides/fine-tuning)
     */
    create(body, options) {
        return this.post('/fine_tuning/jobs', { body, ...options });
    }
    /**
     * Get info about a fine-tuning job.
     *
     * [Learn more about fine-tuning](https://platform.openai.com/docs/guides/fine-tuning)
     */
    retrieve(fineTuningJobId, options) {
        return this.get(`/fine_tuning/jobs/${fineTuningJobId}`, options);
    }
    list(query = {}, options) {
        if ((0,openai_core__WEBPACK_IMPORTED_MODULE_1__.isRequestOptions)(query)) {
            return this.list({}, query);
        }
        return this.getAPIList('/fine_tuning/jobs', FineTuningJobsPage, { query, ...options });
    }
    /**
     * Immediately cancel a fine-tune job.
     */
    cancel(fineTuningJobId, options) {
        return this.post(`/fine_tuning/jobs/${fineTuningJobId}/cancel`, options);
    }
    listEvents(fineTuningJobId, query = {}, options) {
        if ((0,openai_core__WEBPACK_IMPORTED_MODULE_1__.isRequestOptions)(query)) {
            return this.listEvents(fineTuningJobId, {}, query);
        }
        return this.getAPIList(`/fine_tuning/jobs/${fineTuningJobId}/events`, FineTuningJobEventsPage, {
            query,
            ...options,
        });
    }
}
class FineTuningJobsPage extends openai_pagination__WEBPACK_IMPORTED_MODULE_2__.CursorPage {
}
class FineTuningJobEventsPage extends openai_pagination__WEBPACK_IMPORTED_MODULE_2__.CursorPage {
}
(function (Jobs) {
})(Jobs || (Jobs = {}));
//# sourceMappingURL=jobs.mjs.map

/***/ }),

/***/ "./node_modules/openai/resources/images.mjs":
/*!**************************************************!*\
  !*** ./node_modules/openai/resources/images.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Images: () => (/* binding */ Images)
/* harmony export */ });
/* harmony import */ var openai_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai/resource */ "./node_modules/openai/resource.mjs");
/* harmony import */ var openai_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openai/core */ "./node_modules/openai/uploads.mjs");
// File generated from our OpenAPI spec by Stainless.


class Images extends openai_resource__WEBPACK_IMPORTED_MODULE_0__.APIResource {
    /**
     * Creates a variation of a given image.
     */
    createVariation(body, options) {
        return this.post('/images/variations', (0,openai_core__WEBPACK_IMPORTED_MODULE_1__.multipartFormRequestOptions)({ body, ...options }));
    }
    /**
     * Creates an edited or extended image given an original image and a prompt.
     */
    edit(body, options) {
        return this.post('/images/edits', (0,openai_core__WEBPACK_IMPORTED_MODULE_1__.multipartFormRequestOptions)({ body, ...options }));
    }
    /**
     * Creates an image given a prompt.
     */
    generate(body, options) {
        return this.post('/images/generations', { body, ...options });
    }
}
(function (Images) {
})(Images || (Images = {}));
//# sourceMappingURL=images.mjs.map

/***/ }),

/***/ "./node_modules/openai/resources/models.mjs":
/*!**************************************************!*\
  !*** ./node_modules/openai/resources/models.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Models: () => (/* binding */ Models),
/* harmony export */   ModelsPage: () => (/* binding */ ModelsPage)
/* harmony export */ });
/* harmony import */ var openai_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai/resource */ "./node_modules/openai/resource.mjs");
/* harmony import */ var openai_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openai/pagination */ "./node_modules/openai/pagination.mjs");
// File generated from our OpenAPI spec by Stainless.


class Models extends openai_resource__WEBPACK_IMPORTED_MODULE_0__.APIResource {
    /**
     * Retrieves a model instance, providing basic information about the model such as
     * the owner and permissioning.
     */
    retrieve(model, options) {
        return this.get(`/models/${model}`, options);
    }
    /**
     * Lists the currently available models, and provides basic information about each
     * one such as the owner and availability.
     */
    list(options) {
        return this.getAPIList('/models', ModelsPage, options);
    }
    /**
     * Delete a fine-tuned model. You must have the Owner role in your organization to
     * delete a model.
     */
    del(model, options) {
        return this.delete(`/models/${model}`, options);
    }
}
/**
 * Note: no pagination actually occurs yet, this is for forwards-compatibility.
 */
class ModelsPage extends openai_pagination__WEBPACK_IMPORTED_MODULE_1__.Page {
}
(function (Models) {
})(Models || (Models = {}));
//# sourceMappingURL=models.mjs.map

/***/ }),

/***/ "./node_modules/openai/resources/moderations.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/openai/resources/moderations.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Moderations: () => (/* binding */ Moderations)
/* harmony export */ });
/* harmony import */ var openai_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai/resource */ "./node_modules/openai/resource.mjs");
// File generated from our OpenAPI spec by Stainless.

class Moderations extends openai_resource__WEBPACK_IMPORTED_MODULE_0__.APIResource {
    /**
     * Classifies if text violates OpenAI's Content Policy
     */
    create(body, options) {
        return this.post('/moderations', { body, ...options });
    }
}
(function (Moderations) {
})(Moderations || (Moderations = {}));
//# sourceMappingURL=moderations.mjs.map

/***/ }),

/***/ "./node_modules/openai/streaming.mjs":
/*!*******************************************!*\
  !*** ./node_modules/openai/streaming.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Stream: () => (/* binding */ Stream)
/* harmony export */ });
/* harmony import */ var _error_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.mjs */ "./node_modules/openai/error.mjs");

class Stream {
    constructor(response, controller) {
        this.response = response;
        this.controller = controller;
        this.decoder = new SSEDecoder();
    }
    async *iterMessages() {
        if (!this.response.body) {
            this.controller.abort();
            throw new _error_mjs__WEBPACK_IMPORTED_MODULE_0__.OpenAIError(`Attempted to iterate over a response with no body`);
        }
        const lineDecoder = new LineDecoder();
        const iter = readableStreamAsyncIterable(this.response.body);
        for await (const chunk of iter) {
            for (const line of lineDecoder.decode(chunk)) {
                const sse = this.decoder.decode(line);
                if (sse)
                    yield sse;
            }
        }
        for (const line of lineDecoder.flush()) {
            const sse = this.decoder.decode(line);
            if (sse)
                yield sse;
        }
    }
    async *[Symbol.asyncIterator]() {
        let done = false;
        try {
            for await (const sse of this.iterMessages()) {
                if (done)
                    continue;
                if (sse.data.startsWith('[DONE]')) {
                    done = true;
                    continue;
                }
                if (sse.event === null) {
                    try {
                        yield JSON.parse(sse.data);
                    }
                    catch (e) {
                        console.error(`Could not parse message into JSON:`, sse.data);
                        console.error(`From chunk:`, sse.raw);
                        throw e;
                    }
                }
            }
            done = true;
        }
        catch (e) {
            // If the user calls `stream.controller.abort()`, we should exit without throwing.
            if (e instanceof Error && e.name === 'AbortError')
                return;
            throw e;
        }
        finally {
            // If the user `break`s, abort the ongoing request.
            if (!done)
                this.controller.abort();
        }
    }
}
class SSEDecoder {
    constructor() {
        this.event = null;
        this.data = [];
        this.chunks = [];
    }
    decode(line) {
        if (line.endsWith('\r')) {
            line = line.substring(0, line.length - 1);
        }
        if (!line) {
            // empty line and we didn't previously encounter any messages
            if (!this.event && !this.data.length)
                return null;
            const sse = {
                event: this.event,
                data: this.data.join('\n'),
                raw: this.chunks,
            };
            this.event = null;
            this.data = [];
            this.chunks = [];
            return sse;
        }
        this.chunks.push(line);
        if (line.startsWith(':')) {
            return null;
        }
        let [fieldname, _, value] = partition(line, ':');
        if (value.startsWith(' ')) {
            value = value.substring(1);
        }
        if (fieldname === 'event') {
            this.event = value;
        }
        else if (fieldname === 'data') {
            this.data.push(value);
        }
        return null;
    }
}
/**
 * A re-implementation of httpx's `LineDecoder` in Python that handles incrementally
 * reading lines from text.
 *
 * https://github.com/encode/httpx/blob/920333ea98118e9cf617f246905d7b202510941c/httpx/_decoders.py#L258
 */
class LineDecoder {
    constructor() {
        this.buffer = [];
        this.trailingCR = false;
    }
    decode(chunk) {
        let text = this.decodeText(chunk);
        if (this.trailingCR) {
            text = '\r' + text;
            this.trailingCR = false;
        }
        if (text.endsWith('\r')) {
            this.trailingCR = true;
            text = text.slice(0, -1);
        }
        if (!text) {
            return [];
        }
        const trailingNewline = LineDecoder.NEWLINE_CHARS.has(text[text.length - 1] || '');
        let lines = text.split(LineDecoder.NEWLINE_REGEXP);
        if (lines.length === 1 && !trailingNewline) {
            this.buffer.push(lines[0]);
            return [];
        }
        if (this.buffer.length > 0) {
            lines = [this.buffer.join('') + lines[0], ...lines.slice(1)];
            this.buffer = [];
        }
        if (!trailingNewline) {
            this.buffer = [lines.pop() || ''];
        }
        return lines;
    }
    decodeText(bytes) {
        var _a;
        if (bytes == null)
            return '';
        if (typeof bytes === 'string')
            return bytes;
        // Node:
        if (typeof Buffer !== 'undefined') {
            if (bytes instanceof Buffer) {
                return bytes.toString();
            }
            if (bytes instanceof Uint8Array) {
                return Buffer.from(bytes).toString();
            }
            throw new _error_mjs__WEBPACK_IMPORTED_MODULE_0__.OpenAIError(`Unexpected: received non-Uint8Array (${bytes.constructor.name}) stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.`);
        }
        // Browser
        if (typeof TextDecoder !== 'undefined') {
            if (bytes instanceof Uint8Array || bytes instanceof ArrayBuffer) {
                (_a = this.textDecoder) !== null && _a !== void 0 ? _a : (this.textDecoder = new TextDecoder('utf8'));
                return this.textDecoder.decode(bytes);
            }
            throw new _error_mjs__WEBPACK_IMPORTED_MODULE_0__.OpenAIError(`Unexpected: received non-Uint8Array/ArrayBuffer (${bytes.constructor.name}) in a web platform. Please report this error.`);
        }
        throw new _error_mjs__WEBPACK_IMPORTED_MODULE_0__.OpenAIError(`Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error.`);
    }
    flush() {
        if (!this.buffer.length && !this.trailingCR) {
            return [];
        }
        const lines = [this.buffer.join('')];
        this.buffer = [];
        this.trailingCR = false;
        return lines;
    }
}
// prettier-ignore
LineDecoder.NEWLINE_CHARS = new Set(['\n', '\r', '\x0b', '\x0c', '\x1c', '\x1d', '\x1e', '\x85', '\u2028', '\u2029']);
LineDecoder.NEWLINE_REGEXP = /\r\n|[\n\r\x0b\x0c\x1c\x1d\x1e\x85\u2028\u2029]/g;
function partition(str, delimiter) {
    const index = str.indexOf(delimiter);
    if (index !== -1) {
        return [str.substring(0, index), delimiter, str.substring(index + delimiter.length)];
    }
    return [str, '', ''];
}
/**
 * Most browsers don't yet have async iterable support for ReadableStream,
 * and Node has a very different way of reading bytes from its "ReadableStream".
 *
 * This polyfill was pulled from https://github.com/MattiasBuelens/web-streams-polyfill/pull/122#issuecomment-1627354490
 */
function readableStreamAsyncIterable(stream) {
    if (stream[Symbol.asyncIterator])
        return stream;
    const reader = stream.getReader();
    return {
        async next() {
            try {
                const result = await reader.read();
                if (result === null || result === void 0 ? void 0 : result.done)
                    reader.releaseLock(); // release lock when stream becomes closed
                return result;
            }
            catch (e) {
                reader.releaseLock(); // release lock when stream becomes errored
                throw e;
            }
        },
        async return() {
            const cancelPromise = reader.cancel();
            reader.releaseLock();
            await cancelPromise;
            return { done: true, value: undefined };
        },
        [Symbol.asyncIterator]() {
            return this;
        },
    };
}
//# sourceMappingURL=streaming.mjs.map

/***/ }),

/***/ "./node_modules/openai/uploads.mjs":
/*!*****************************************!*\
  !*** ./node_modules/openai/uploads.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createForm: () => (/* binding */ createForm),
/* harmony export */   fileFromPath: () => (/* reexport safe */ _shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__.fileFromPath),
/* harmony export */   isBlobLike: () => (/* binding */ isBlobLike),
/* harmony export */   isFileLike: () => (/* binding */ isFileLike),
/* harmony export */   isMultipartBody: () => (/* binding */ isMultipartBody),
/* harmony export */   isResponseLike: () => (/* binding */ isResponseLike),
/* harmony export */   isUploadable: () => (/* binding */ isUploadable),
/* harmony export */   maybeMultipartFormRequestOptions: () => (/* binding */ maybeMultipartFormRequestOptions),
/* harmony export */   multipartFormRequestOptions: () => (/* binding */ multipartFormRequestOptions),
/* harmony export */   toFile: () => (/* binding */ toFile)
/* harmony export */ });
/* harmony import */ var _shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_shims/index.mjs */ "./node_modules/openai/_shims/index.mjs");


const isResponseLike = (value) => value != null &&
    typeof value === 'object' &&
    typeof value.url === 'string' &&
    typeof value.blob === 'function';
const isFileLike = (value) => value != null &&
    typeof value === 'object' &&
    typeof value.name === 'string' &&
    typeof value.lastModified === 'number' &&
    isBlobLike(value);
/**
 * The BlobLike type omits arrayBuffer() because @types/node-fetch@^2.6.4 lacks it; but this check
 * adds the arrayBuffer() method type because it is available and used at runtime
 */
const isBlobLike = (value) => value != null &&
    typeof value === 'object' &&
    typeof value.size === 'number' &&
    typeof value.type === 'string' &&
    typeof value.text === 'function' &&
    typeof value.slice === 'function' &&
    typeof value.arrayBuffer === 'function';
const isUploadable = (value) => {
    return isFileLike(value) || isResponseLike(value) || (0,_shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__.isFsReadStream)(value);
};
/**
 * Helper for creating a {@link File} to pass to an SDK upload method from a variety of different data formats
 * @param value the raw content of the file.  Can be an {@link Uploadable}, {@link BlobLikePart}, or {@link AsyncIterable} of {@link BlobLikePart}s
 * @param {string=} name the name of the file. If omitted, toFile will try to determine a file name from bits if possible
 * @param {Object=} options additional properties
 * @param {string=} options.type the MIME type of the content
 * @param {number=} options.lastModified the last modified timestamp
 * @returns a {@link File} with the given properties
 */
async function toFile(value, name, options = {}) {
    var _a, _b, _c;
    // If it's a promise, resolve it.
    value = await value;
    if (isResponseLike(value)) {
        const blob = await value.blob();
        name || (name = (_a = new URL(value.url).pathname.split(/[\\/]/).pop()) !== null && _a !== void 0 ? _a : 'unknown_file');
        return new _shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__.File([blob], name, options);
    }
    const bits = await getBytes(value);
    name || (name = (_b = getName(value)) !== null && _b !== void 0 ? _b : 'unknown_file');
    if (!options.type) {
        const type = (_c = bits[0]) === null || _c === void 0 ? void 0 : _c.type;
        if (typeof type === 'string') {
            options = { ...options, type };
        }
    }
    return new _shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__.File(bits, name, options);
}
async function getBytes(value) {
    var _a;
    let parts = [];
    if (typeof value === 'string' ||
        ArrayBuffer.isView(value) || // includes Uint8Array, Buffer, etc.
        value instanceof ArrayBuffer) {
        parts.push(value);
    }
    else if (isBlobLike(value)) {
        parts.push(await value.arrayBuffer());
    }
    else if (isAsyncIterableIterator(value) // includes Readable, ReadableStream, etc.
    ) {
        for await (const chunk of value) {
            parts.push(chunk); // TODO, consider validating?
        }
    }
    else {
        throw new Error(`Unexpected data type: ${typeof value}; constructor: ${(_a = value === null || value === void 0 ? void 0 : value.constructor) === null || _a === void 0 ? void 0 : _a.name}; props: ${propsForError(value)}`);
    }
    return parts;
}
function propsForError(value) {
    const props = Object.getOwnPropertyNames(value);
    return `[${props.map((p) => `"${p}"`).join(', ')}]`;
}
function getName(value) {
    var _a;
    return (getStringFromMaybeBuffer(value.name) ||
        getStringFromMaybeBuffer(value.filename) ||
        (
        // For fs.ReadStream
        (_a = getStringFromMaybeBuffer(value.path)) === null || _a === void 0 ? void 0 : _a.split(/[\\/]/).pop()));
}
const getStringFromMaybeBuffer = (x) => {
    if (typeof x === 'string')
        return x;
    if (typeof Buffer !== 'undefined' && x instanceof Buffer)
        return String(x);
    return undefined;
};
const isAsyncIterableIterator = (value) => value != null && typeof value === 'object' && typeof value[Symbol.asyncIterator] === 'function';
const isMultipartBody = (body) => body && typeof body === 'object' && body.body && body[Symbol.toStringTag] === 'MultipartBody';
/**
 * Returns a multipart/form-data request if any part of the given request body contains a File / Blob value.
 * Otherwise returns the request as is.
 */
const maybeMultipartFormRequestOptions = async (opts) => {
    if (!hasUploadableValue(opts.body))
        return opts;
    const form = await createForm(opts.body);
    return (0,_shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__.getMultipartRequestOptions)(form, opts);
};
const multipartFormRequestOptions = async (opts) => {
    const form = await createForm(opts.body);
    return (0,_shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__.getMultipartRequestOptions)(form, opts);
};
const createForm = async (body) => {
    const form = new _shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__.FormData();
    await Promise.all(Object.entries(body || {}).map(([key, value]) => addFormValue(form, key, value)));
    return form;
};
const hasUploadableValue = (value) => {
    if (isUploadable(value))
        return true;
    if (Array.isArray(value))
        return value.some(hasUploadableValue);
    if (value && typeof value === 'object') {
        for (const k in value) {
            if (hasUploadableValue(value[k]))
                return true;
        }
    }
    return false;
};
const addFormValue = async (form, key, value) => {
    if (value === undefined)
        return;
    if (value == null) {
        throw new TypeError(`Received null for "${key}"; to pass null in FormData, you must use the string 'null'`);
    }
    // TODO: make nested formats configurable
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        form.append(key, String(value));
    }
    else if (isUploadable(value)) {
        const file = await toFile(value);
        form.append(key, file);
    }
    else if (Array.isArray(value)) {
        await Promise.all(value.map((entry) => addFormValue(form, key + '[]', entry)));
    }
    else if (typeof value === 'object') {
        await Promise.all(Object.entries(value).map(([name, prop]) => addFormValue(form, `${key}[${name}]`, prop)));
    }
    else {
        throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${value} instead`);
    }
};
//# sourceMappingURL=uploads.mjs.map

/***/ }),

/***/ "./node_modules/openai/version.mjs":
/*!*****************************************!*\
  !*** ./node_modules/openai/version.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
const VERSION = '4.11.1'; // x-release-please-version
//# sourceMappingURL=version.mjs.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************!*\
  !*** ./src/mainScript.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.es.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.es.js");
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! openai */ "./node_modules/openai/index.mjs");



const GPT_API_KEY = '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';
const loader = document.getElementById("loader");
loader.style.display = "none";

// we wait for the page to be fully loaded
document.addEventListener('DOMContentLoaded', event => {
  main();
});
function main() {
  // we get the data injected via the Initial Sftate mechanism
  const state = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('catgifs', 'tutorial_initial_state');
  configForm();
}
function configForm() {
  const form = document.getElementById("detailsForm");
  const loader = document.getElementById("loader");
  const reponseDiv = document.querySelector('#app-content #response');
  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    loader.style.display = "block";
    const companyName = document.getElementById("companyName").value;
    const industry = document.getElementById("industry").value;
    const mission = document.getElementById("mission").value;
    const vision = document.getElementById("vision").value;
    const extraDetails = document.getElementById("extraDetails").value;
    const prompt = buildPrompt(companyName, industry, mission, vision, extraDetails);
    const answer = await askGpt(prompt);
    loader.style.display = "none";
    setResponseText(reponseDiv, answer);
  });
  const clearFormBtn = document.getElementById("clearFormBtn");
  clearFormBtn.addEventListener("click", function () {
    form.reset();
    reponseDiv.innerHTML = "";
    loader.style.display = "none";
  });
}
function setResponseText(div, text) {
  div.innerText = text;
}
function buildPrompt(companyName, industry, mission, vision, extraDetails) {
  return `
Imagine you are a seasoned cybersecurity expert, renowned for your meticulous analysis and strategic foresight in the field. You have been hired by ${companyName}, a prominent player in the ${industry} sector. The company's mission statement is '${mission}' and its vision is '${vision}'. 

Please provide an executive report summary titled "Executive Report Summary: Cybersecurity and Software Threats in the ${industry} Industry". The report should:
- Begin with an introduction.
- Elaborate on potential cybersecurity threats, offering insights into prevalent cyber-attacks in the ${industry} sector with bullet points.
- Discuss software threats in the industry with bullet points.
- Suggest preventive measures and best practices to safeguard against these threats, ensuring alignment with the company’s mission and vision with bullet points.
- Conclude by emphasizing the importance of safeguarding both employee and customer data effectively.
Throughout the whole summary take into account the extra details ${extraDetails}
`;
}
async function askGpt(promptString) {
  const openai = new openai__WEBPACK_IMPORTED_MODULE_2__["default"]({
    apiKey: GPT_API_KEY,
    dangerouslyAllowBrowser: true
  });
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{
      "role": "user",
      "content": promptString
    }]
  });
  console.log(chatCompletion);
  return chatCompletion.choices[0].message.content;
}
})();

/******/ })()
;
//# sourceMappingURL=catgifs-mainScript.js.map