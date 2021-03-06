class Icon {
	constructor(tooltip, iconUrl) {
		// icon div
		this.dom = $('<div class="tooltip"></div>');
		// icon image
		var img = $(`<img src="${iconUrl}" />`);
		this.dom.append(img);
		this.tooltip = $(`<span class="tooltiptext">${tooltip}</span>`);
		this.dom.append(this.tooltip);
	}

	setSize(width_p, height_p) {
		this.dom.css('width', `${width_p}%`);
		this.dom.css('height', `${height_p}%`);

		return this;
	}

	setPos(left_p, top_p) {
		this.dom.css('left', `${left_p}%`);
		this.dom.css('top', `${top_p}%`);

		return this;
	}

	click(callback) {
		this.dom.click(callback);

		return this;
	}

	remove() {
		this.dom.remove();
		delete this;
	}
}
