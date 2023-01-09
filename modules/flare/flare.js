

class Flare {
	constructor(){
		this.keyWords = []
		this.comments = []
		this.classNames = {
			"keywords": "flare-keywords",
			"comments": "flare-comments",
			"numbers": "flare-numbers",
			"consts": "flare-consts",
			"single-string": "flare-strings",
			"double-string": "flare-strings",
			"attributes": "flare-attributes",
			"call": "flare-call",
			"operators": "flare-operators"
		}
	}


	regex(){
		this.single = /"(.*?)"/g;
		this.double = /'(.*?)'/g;

		this.consts = /\b([A-Z]+[a-z0-9A-Z_]+)\b/g;
		this.keywords = /\b(import|defobject|return|let|try|if|for|while|elif|else|case|switch|default|catch|def|break|while|switch|for|continue|break)\b/g;

		this.operators = /\b(as|in|or|null|true|false)\b/g;
		this.numbers = /\b([0-9_]+)/g;
		    
		this.call = /\b([a-zA-Z0-9_]+)\(/g;
		this.attribute = /\b\.([a-zA-Z0-9_]+)/g;

		this.comments  = /(\/\*.*\*\/)\b/g;
		this.inlineComments = /(\/\/.*)/g;
	}

	light(element){
		this.regex()

		var code = element.innerHTML,

	    gen = code.replace(this.single,`<span class=\"${this.classNames['double-string']}\">'$1'</span>`),
	    gen = code.replace(this.single,'<span class=\"string\">"$1"</span>'),
	    gen = gen.replace(this.keywords, `<span class="${this.classNames['keywords']}">$1</span>`),

	    gen = gen.replace(this.numbers,`<span class="${this.classNames['numbers']}">$1</span>`),
	    gen = gen.replace(this.operators, `<span class="${this.classNames['operators']}">$1</span>`),

	    gen = gen.replace(this.call,`<span class="${this.classNames['call']}">$1</span>(`),
	    gen = gen.replace(this.attribute, `.<span class="${this.classNames['attributes']}">$1</span>`),
	    
	    gen = gen.replace(this.consts, `<span class="${this.classNames['consts']}">$1</span>`),

	    gen = gen.replace(this.comments,`<span class="${this.classNames['comments']}">$1</span>`),
	    gen = gen.replace(this.inlineComments, `<span class="${this.classNames['comments']}">$1</span>`),
	    gen = gen.replace(this.double,`<span class="${this.classNames['double-string']}">"$1"</span>`)

   		element.innerHTML = gen;
	}
}



