//	@ghasemkiani/wjsdom/document

import {JSDOM} from "jsdom";

import {cutil} from "@ghasemkiani/base";
import {WDocument as WDocumentBase} from "@ghasemkiani/wdom";

class WDocument extends WDocumentBase {
	getWindow() {
		let contentType = this.mime;
		let text = `<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml"></html>`;
		let {window} = new JSDOM(text, {contentType});
		return window;
	}
	fromString(string) {
		this._window = null;
		this._document = null;
		this._root = null;
		let contentType = this.mime;
		let text = string;
		let {window} = new JSDOM(text, {contentType});
		this.window = window;
	}
	toString() {
		let text = this.preamble;
		if(this.root) {
			text += this.root.string;
		}
		return text;
	}
}
cutil.extend(WDocument.prototype, {
	defaultMime: "application/xml",
	preamble: "<!DOCTYPE html>",
});

export {WDocument};
