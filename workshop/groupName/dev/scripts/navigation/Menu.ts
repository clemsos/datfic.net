import scrollToWithAnimation from 'scrollto-with-animation'

export default class Menu {
    constructor() {
        const menu = <HTMLElement> document.querySelector(".menu");
        const sections = document.querySelectorAll("main section");

        for(let i =0; i < sections.length; i++) {
            const section = <HTMLElement> sections[i];

            const menuButtonElement = document.createElement("div");
            menuButtonElement.className = `menu-button ${section.className}`;
            menuButtonElement.dataset.sectionCible = section.className;
            menuButtonElement.innerHTML = <string> section.dataset.name;

            menu.appendChild(menuButtonElement);

            console.log(section.className);
        }



        // document.addEventListener('click', function () {
        //
        //     scrollToWithAnimation(
        //         document.querySelector("main"), // element to scroll with (most of times you want to scroll with whole <body>)
        //         0, // target scrollY (0 means top of the page)
        //         10000, // duration in ms
        //         'easeInOutCirc',
        //         function() { // callback function that runs after the animation (optional)
        //             console.log('done!')
        //         }
        //     );
        // });
    }
}
