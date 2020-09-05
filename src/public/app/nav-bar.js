let navlinks=$(".navbar-nav .nav-link");

//on clicking a tab that event attribute is picked and 
//content is loaded acc to that tab
navlinks.click((ev)=>{
    let componentUrl = `/components/${
        $(ev.target).attr("data-components")}.html`;
    $("#content").load(componentUrl);
});