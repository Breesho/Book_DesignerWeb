$(document).ready(function () {

    const sr = ScrollReveal({
        desktop: true,
        mobile: false,
        reset: false

    });
    sr.reveal("section.accueil div.presentation div.basindex", {
        origin: 'right',
        distance: '100%',
        duration: 3000
    });
    sr.reveal("section.accueil div.presentation div.hautindex", {
        origin: 'left',
        distance: '100%',
        duration: 3000
    });
    sr.reveal("section.accueil div.presentation h1 span", {
        opacity: 0,
        duration: 3000
    });
    sr.reveal("section.pagelogos div.logoeva div.imglogo div.conteneurimg div.hautlogo, section.pagelogos div.logovisio div.imglogo div.conteneurimg div.hautlogo, section.pagelogos div.logodreamworld div.imglogo div.conteneurimg div.hautlogo, section.pagelogos div.logotechube div.imglogo div.conteneurimg div.hautlogo, section.pagelogos div.logolotus div.imglogo div.conteneurimg div.hautlogo, section.pagelogos div.logocutwood div.imglogo div.conteneurimg div.hautlogo, section.pagelogos div.logorisingmount div.imglogo div.conteneurimg div.hautlogo", {
        distance: '100%',
        origin: 'left',
        duration: 3000
    });
    sr.reveal("section.pagelogos div.logoeva div.imglogo div.conteneurimg div.baslogo, section.pagelogos div.logovisio div.imglogo div.conteneurimg div.baslogo, section.pagelogos div.logodreamworld div.imglogo div.conteneurimg div.baslogo, section.pagelogos div.logotechube div.imglogo div.conteneurimg div.baslogo, section.pagelogos div.logolotus div.imglogo div.conteneurimg div.baslogo, section.pagelogos div.logocutwood div.imglogo div.conteneurimg div.baslogo, section.pagelogos div.logorisingmount div.imglogo div.conteneurimg div.baslogo", {
        distance: '100%',
        origin: 'right',
        duration: 3000
    });  
    sr.reveal("section.pagelogos div.logoeva div.imglogo div.conteneurimg figure, section.pagelogos div.logovisio div.imglogo div.conteneurimg figure, section.pagelogos div.logodreamworld div.imglogo div.conteneurimg figure, section.pagelogos div.logotechube div.imglogo div.conteneurimg figure, section.pagelogos div.logolotus div.imglogo div.conteneurimg figure, section.pagelogos div.logocutwood div.imglogo div.conteneurimg figure, section.pagelogos div.logorisingmount div.imglogo div.conteneurimg figure", {
        distance: '50%',
        origin: 'bottom',
        opacity:0,
        duration: 3000
    });
    sr.reveal("section.pagelogos div.logoeva div.textlogo div.conteneurtext p strong, section.pagelogos div.logovisio div.textlogo div.conteneurtext p strong, section.pagelogos div.logodreamworld div.textlogo div.conteneurtext p strong, section.pagelogos div.logotechube div.textlogo div.conteneurtext p strong, section.pagelogos div.logolotus div.textlogo div.conteneurtext p strong, section.pagelogos div.logocutwood div.textlogo div.conteneurtext p strong, section.pagelogos div.logorisingmount div.textlogo div.conteneurtext p strong", {
        opacity:0,
        duration: 2000
    }); 
    sr.reveal("  section.siteweb div.siteeva div.imgsite div.conteneurimg a, section.siteweb div.sitebediff div.imgsite div.conteneurimg a, section.siteweb div.sitevisio div.imgsite div.conteneurimg a ", {
        distance: '100%',
        origin: 'left',
        opacity:0,
        duration: 3000
    });
    sr.reveal("section.siteweb div.siterising div.imgsite div.conteneurimg a, section.siteweb div.sitelotus div.imgsite div.conteneurimg a", {
        distance: '100%',
        origin: 'right',
        opacity:0,
        duration: 3000
    }); 
    sr.reveal("section.siteweb div.siteeva div.textlogo div.conteneurtext i, section.siteweb div.sitevisio div.textlogo div.conteneurtext i, section.siteweb div.sitelotus div.textlogo div.conteneurtext i, section.siteweb div.siterising div.textlogo div.conteneurtext i, section.siteweb div.sitebediff div.textlogo div.conteneurtext i", {
        distance: '100%',
        origin: 'bottom',
        interval:500,
        opacity:0,
        duration: 2000
    });
  
});
