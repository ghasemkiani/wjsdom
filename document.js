//	@ghasemkiani/wjsdom/document

const {JSDOM} = require("jsdom");

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {serializable} = require("@ghasemkiani/commonbase/serializable");
const document = require("@ghasemkiani/wdom/document");

class WDocument extends cutil.mixin(document.WDocument, serializable) {
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
}
cutil.extend(WDocument.prototype, {
	defaultMime: "application/xml",
});

module.exports = {WDocument};
