// SWITCH THEMES
const html = document.documentElement;
const toggleBtn = document.getElementById("toggleThemes");
const emojiSpan = toggleBtn.querySelector(".emoji");

const setTheme = (theme) => {
	html.setAttribute("data-theme", theme);
	emojiSpan.textContent = theme === "dark" ? "🌙" : "☀️";
};

const getSystemTheme = () => {
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
};

const initTheme = () => {
	const savedTheme = sessionStorage.getItem("theme");

	if (savedTheme) {
		// Gunakan tema tersimpan
		html.setAttribute("data-theme-system", "manual");
		setTheme(savedTheme);
	} else {
		// Deteksi sistem
		const systemTheme = getSystemTheme();
		html.setAttribute("data-theme-system", "auto");
		setTheme(systemTheme);
	}
};

toggleBtn.addEventListener("click", () => {
	const currentTheme = html.getAttribute("data-theme");
	const newTheme = currentTheme === "dark" ? "light" : "dark";

	// Set tema dan tandai manual
	html.setAttribute("data-theme-system", "manual");
	setTheme(newTheme);
	sessionStorage.setItem("theme", newTheme);
});

// Inisialisasi saat load
initTheme();

// === ADD CLASS EMOJI === //
const emojiRegex = /(\p{Extended_Pictographic})/gu;

document
	.querySelectorAll("p, li, h1, h2, h3, h4, h5, h6, span, strong, b, em, del")
	.forEach((el) => {
		const walker = document.createTreeWalker(
			el,
			NodeFilter.SHOW_TEXT,
			null,
			false
		);

		let node;
		const nodesToUpdate = [];

		while ((node = walker.nextNode())) {
			const parent = node.parentNode;
			if (parent && parent.classList && parent.classList.contains("emoji")) {
				continue;
			}

			if (emojiRegex.test(node.nodeValue)) {
				nodesToUpdate.push(node);
			}
		}

		nodesToUpdate.forEach((textNode) => {
			const parent = textNode.parentNode;
			const fragments = textNode.nodeValue.split(emojiRegex);
			const fragment = document.createDocumentFragment();

			fragments.forEach((part) => {
				if (emojiRegex.test(part)) {
					const span = document.createElement("span");
					span.className = "emoji";
					span.textContent = part;
					fragment.appendChild(span);
				} else {
					fragment.appendChild(document.createTextNode(part));
				}
			});

			parent.replaceChild(fragment, textNode);
		});
	});
