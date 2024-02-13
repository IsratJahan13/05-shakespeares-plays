const section1 = document.getElementById("eka");
const section2 = document.getElementById("toka");
const section3 = document.getElementById("kolmas");
let links = document.links;

const linkStyle = () => {
  // for(let i=0; i<links.length; i++) {
  //   // links[i].classList.add('linkit');
  //   document.getElementsByTagName("a")[i].className = "linkit";
  // }
  for(let link of links){
    link.className = "linkit";
  }
}

//linkkien joidenhref attributti loppuu merkkeihin " .pdf", perään lisätään fontawsome iconi  <i class="fa-solid fa-file-pdf"></i>
const pdfLinks = () => {
  for(let link of links){
    let thisHrefLast = link.href.slice(link.href.length - 4);
    console.log(thisHrefLast);
    if(thisHrefLast.toLowerCase() == ".pdf") {
      link.insertAdjacentHTML(
        "afterend", 
        `<i class="fa-solid fa-file-pdf"></i>`
        )
    }
  }
};

//linkkien joiden href attributti alkaa merkeillä "mailto" eteen css sääntö fa-envelope lisätään linkkeihin, joiden href attribuutti alkaa merkeillä "mailto", lisätään ikoni <i class="fa-solid fa-envelope"></i>
const emailLinks = () => {
  for(let link of links) {
    let thisHrefLast =link.href.substring(0, 6);
    console.log(thisHrefLast);
    if(thisHrefLast == "mailto") {
      link.insertAdjacentHTML(
        "beforebegin",
        `<i class="fa-solid fa-envelope"></i>`
      );
    }
  }
};

//etsitaan linkit, joiden hostname ei ole location.hostname ja lisätään niihin linkkeihen ikoni "external link" a-tagin eteen
const outerLinks = () => {
  for(let link of links) {
    console.log("link.hostname" + link.hostname);
    console.log("window.location.hostname" + window.location.hostname);
    if(link.hostname !== window.location.hostname) {
      link.insertAdjacentHTML(
        "beforebegin",
        `<i class="fa-solid fa-arrow-up-right-from-square"></i>`
      )
    }
  }
};


//testaa palauttako koodi oikeaa dataa
console.log(section1);
console.log(links);

// Rivit vierekkain
const sideBySide = () => {
  section1.getElementsByTagName("ul")[0].className = "rinnakkain";
};

// section toka: joka toinen rivi (even) harmaaksi
const evenGray = () => {
  section2.getElementsByTagName("table")[0].className = "table-1";
};

// section kolmas: joka ensimmäinen rivi (odd) harmaaksi
const oddGray = () => {
  section3.getElementsByTagName("table")[0].className = "table-2";
};

const executeFunction = () => {
  linkStyle();
  sideBySide();
  evenGray();
  oddGray();
  pdfLinks();
  emailLinks();
  outerLinks();
};
//window.onload = executeFunction;



/*   */