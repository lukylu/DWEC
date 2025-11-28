targets.forEach((article, index) => {
		const defaultText = `Imagen ${index + 1} - descripción por defecto`;

		let text = prompt(`Introduce el texto que aparecerá bajo la imagen ${index + 1}:`, '');
		if (text === null) {
			text = defaultText;
		} else {
			text = text.trim();
			if (text === '') text = defaultText;
		}
});