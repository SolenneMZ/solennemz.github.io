var app = {
    init: function () {
        console.log('coucou');

        document.getElementById('home_button').addEventListener('click', function(event){
            app.showHomePage();
        });

        document.getElementById('about_button').addEventListener('click', function(event){
            app.showAboutPage();
        });

        document.getElementById('projects_button').addEventListener('click', function(event){
            app.showProjectsPage();
        });

        document.getElementById('contact_button').addEventListener('click', function(event){
            app.showContactPage();
        });

        document.querySelector('.btn-toggle').addEventListener('click', function(){
            app.setTheme();
        });
    },
    
    /**
     * Afficher la page d'accueil du site
     */
    showHomePage(){
        console.log("afficher la page Home");
        // 1: cherche la <section> active avec la classe est active-page (querySelector retourne la première occurence correspondante à la recherche)
        var activeSection = document.querySelector('section.active-page');

        // 2: IF la section active n'est pas home_section, on enlève la classe active-page de cette section, on lui ajoute hidden puis on ajoute active-page à la section home_section et on lui enlève hidden
        if (activeSection.id != 'home_section') {
            activeSection.classList.remove('active-page');
            activeSection.classList.add('hidden');

            document.getElementById('home_section').classList.add('active-page');
            document.getElementById('home_section').classList.remove('hidden');
        };
    },

    /**
     * Afficher la page À Propos du site
     */
    showAboutPage(){
        console.log("afficher la page A Propos");

        var activeSection = document.querySelector('section.active-page');
        if (activeSection.id != 'about_section') {
            activeSection.classList.remove('active-page');
            activeSection.classList.add('hidden');

            document.getElementById('about_section').classList.add('active-page');
            document.getElementById('about_section').classList.remove('hidden');
        };
    },
    
    /**
     * Afficher la page Projets du site
     */
    showProjectsPage() {
        console.log("afficher la page Projets");

        var activeSection = document.querySelector('section.active-page');
        if (activeSection.id != 'projects_section') {
            activeSection.classList.remove('active-page');
            activeSection.classList.add('hidden');

            document.getElementById('projects_section').classList.add('active-page');
            document.getElementById('projects_section').classList.remove('hidden');
        };
    },

    /**
     * Afficher la page Contact du site
     */
    showContactPage() {
        console.log("afficher la page Contact");

        var activeSection = document.querySelector('section.active-page');
        if (activeSection.id != 'contact_section') {
            activeSection.classList.remove('active-page');
            activeSection.classList.add('hidden');

            document.getElementById('contact_section').classList.add('active-page');
            document.getElementById('contact_section').classList.remove('hidden');
        };
    },

    /**
     * Changer le thème du site (Light par défaut)
     */
    setTheme() {
        console.log("il faut changer le thème du site !");
        console.log(document.body.classList.value);
        if (document.body.classList.value == 'light_theme') {
            document.body.classList.remove('light_theme');
            document.body.classList.add('dark_theme');

        } else {
            document.body.classList.remove('dark_theme');
            document.body.classList.add('light_theme');
        }
    },
};


// Une fois que le contenu du site est totalement chargé, la fonction init de app s'exécute (ajout d'events sur les éléments de la nav qui exécutent l'affichage des différentes parties du site)
document.addEventListener('DOMContentLoaded', app.init);