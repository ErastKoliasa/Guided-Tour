const tabs = document.querySelectorAll('.places__nav__tab');
const contents = document.querySelectorAll('.places__card');

for (let i = 0; i < tabs.length; i += 1) {
  tabs[i].addEventListener("click", () => {
		for (let t = 0; t < tabs.length; t++) {
			tabs[t].classList.remove("nav__tab__active");
    }

    tabs[i].classList.add("nav__tab__active");

		for (let c = 0; c < contents.length; c++) {
			contents[c].classList.remove("content__tab__active");
		}

    contents[i].classList.add("content__tab__active");
  });
};