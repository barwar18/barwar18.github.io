function scrollToTargetAdjusted(target){
    var element = document.getElementById(target);
    var headerOffset = document.getElementById('sectionJumper').offsetHeight;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}

async function injectHTML(filePath,elem, item) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            return;
        }
        const text = await response.text();
        // console.log(elem);
        elem.innerHTML = text;
    } catch (err) {
        console.error(err.message);
    }
}

function fillFooter() {
    // console.log("Running");
    document.getElementsByClassName("footer")[0].innerHTML = '<div class = "row mt-1 py-5 centered"><div class = "col-sm-12"><footer><p>Copyright © 2026 by Warwick Barker. All rights reserved.</p></footer></div></div>';
}

async function activateNavItem(item) {
    document.querySelector("a[href='"+item+"']").classList.add("active");
}

async function createNavMenu(item=0, extraId = 0) {
    await injectHTML("./navcode.html",
        document.querySelector(".navdiv"), item
    );

    if (item != 0) {
        await activateNavItem(item);
    }
    
    if (extraId != 0) {
        addActiveNav(extraId);
    }
}

function addActiveNav(id) {
    document.getElementById(id).classList.add("active");
}

fillFooter();



