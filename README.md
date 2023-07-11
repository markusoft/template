# What is Template
Template is a collection of useful UI/UX and helper functions accumulated through decades of passionate web development. Created by developers for developers because we understand your needs.

# Easy Peasy Summary

| Function | Usage | Output | Description |
|----------|-------|--------|-------------|
| Constants|
| BASE_URL | BASE_URL | http://your-domain.com | Base URL of your website |
| Number Helpers ||||
| Number.pad(size) | Number(3).pad(3) | 003 | Adds zero padding to numbers |
| String Helpers ||||
| String.trim() | ' Sample Text '.trim() | Sample Text | Removes trailing and leading white spaces |
| String.trimAll() | ' Sample Text '.trimAll() | SampleText | Removes all white spaces  |
| String.capitalize() | 'sample text'.capitalize() | Sample text | Capitalize first letter of a word or phrase |
| String.capitalizeAll() | 'sample-text'.cleanCapitalizeAll() | Sample Text | Capitalize all words in a phrase |
| String.cleanCapitalizeAll() | 'sample text'.cleanCapitalizeAll() | SampleTex | Capitalize and remove dashes and underscores |
| String.deCapitalize() | 'Sample Text'.deCapitalize() | sample Text | De-capitalize first letter of a word or phrase |
| String.deCapitalizeAll() | 'Sample Text'.deCapitalizeAll() | sample text | De-capitalize all words in a phrase |
| String Case Conversions||||
| String.toDash() | 'sample text'.toDash() | sample-text | Convert spaces and underscores to dash |
| String.toUnderscore() | 'sample text'.toUnderscore() | sample_text | Convert spaces and dashes to underscore |
| String.toSnake() | 'sample text'.toSnake() | sample_text | Convert spaces and dashes to underscore |
| String.toPascalCase() | 'sample text'.toPascalCase() | SampleText | Convert string to pascal case |
| String.toCamelCase() | 'sample text'.toCamelCase()  | sampleText | Convert string to camel case |
| String.changeCase('camel') | 'Sample Text'.changeCase('dash') | sample-text | Convert string to specified case |
| Array Helpers ||||
| Array.random() | ['a','b','c','d','e'].random() | 'a' | Retrieves a random element from array |
| Array.random(items) | ['a','b','c','d','e'].random(2) | ['b','e'] | Retrieves random elements from array |
| Array.joinLast(', ', 'and') | ['a','b','c'].joinLast(', ', 'and') | a, b and c | Join array with custom last conjunction |
| Local Storage Helpers ||||
| Storage.setObject('key', value) | Storage.setObject('key', json) |  | Store JSON object on local storage |
| Storage.getObject('key') | Storage.getObject('key') | {'json': 'object'} | Retrieve JSON object on local storage |
| Template ||||
| Template.getConfig('item') | Template.getConfig('prefix') | -tpl | Retrieves configuration item |
| Template.getCssVar('--css-var') | Template.getCssVar('--font-size') | 14px | Retrieves CSS variable |
| Template Event Listeners ||||
| Template.on(type, selector, callback, options) |  |  | Add event listener to element |
| Template.don(type, selector, callback, options) |  |  | Add event listener to document |
| Template.addEventListener(type, selector, callback, options) |  |  | Add event listener |
| Search, Sort and Filter ||||
| Template.filter(parent, settings) | Template.filter('#tbody', {filter:'tr', search: 'Mark', searchAttributes: ['innerText']} | searched rows | Search table rows |
| Template.filter(parent, settings) | Template.filter('#ul', {filter:'li', search: 'Mark', searchAttributes: ['innerText']} | searched lists | Search list items |
| Template.sort(parent, children, sortAndOrder) | Template.sort('#tbody", 'tr', {'innerText': 'asc'}) | ascending table rows | Sort table rows |
| Template.sort(parent, children, sortAndOrder) | Template.sort('#ul", 'li', {'innerText': 'desc'}) | descending list items | Sort list elements |
| JSON and Forms ||||
| Template.flattenJson(json) | Template.flattenJson({'a': {'b': 'c'}}) | {'a.b': 'c'} | Flatten JSON to single array with dot notation keys |
| Template.formToJson(form) | Template.formToJson('#form') | {'form': 'value'} | Convert form values to JSON |
| Template.jsonToForm(json, form) | Template.jsonToForm(json, '#form') | populated form | Populate form with json values |
| Form Validations ||||
| Template.valid(value, validations) | Template.valid(3, 'integer') | true | Check if a value is valid |
| Template.validate('#form', rules) | Template.validate('#form', {{username: {'rules': ['required', 'email']}}}) | true | Form validation |
| Template.liveValidation('#form', rules, callbacks) | Template.liveValidation('#form', rules, {onError: function()}) |  | Live form validation |
| Template.getValidationErrors() | Template.getValidationErrors() | {username: {'email': 'Must be valid email'}} | Retrieve validation errors |
| Fakers ||||
| Template.fake('anything') | Template.fake('email') | markangelo.gmail.com | Generate fake email |
| Template.fake('anything') | Template.fake('lorem') | lorem ipsum dolor | Generate lorem ipsum text |
| Template.faker() | Template.faker() | Populate a form with fake contents | Hold alt + shift and click |
| Blockers and Loaders ||||
| Template.block(settings) | Template.block() |  | Blocks UI |
| Template.loader(settings) | Template.loader() |  | Blocks UI with a loader |
| Template.unblock('#id') | Template.unblock() |  | Unblocks UI |
| Modals and Dialogs ||||
| Template.dialog(settings) | Template.dialog({'message': 'Are you sure?'}).open() |  | Open confirm dialog modal |
| Template.overlay('#id', settings) | Template.overlay('#login').open() |  | Overlays a dom element |
| Template.modal(settings) | Template.modal({'content': 'Any Content'}).open() |  | Opens a custom modal |
| Reveal ||||
| Template.reveal(id, settings) | Template.reveal('#id', {animation: 'fade-in'}) |  | Animate object on reveal |
| Template.childrenReveal(id, settings) | Template.childrenReveal('#ul") |  | Animate children on reveal |
| Infinite Scroll ||||
| Template.infiniteScroll(selector, settings) | Template.infiniteScroll('#ul', {onBottom: function()}) |  | Add items when bottom is reached for infinite scroll |
| SVG Map ||||
| Template.svgMap(selector, settings) | Template.svgMap('#svg', {max: 1}) |  | Creates an SVG map |

# Installation



# Configuration

	TemplateConfig = {
		license: '',
		name: 'Template',
		prefix: 'tpl-',
		animations: {
			fadeIn: {opacity: [0, 1]},
			fadeOut: {opacity: [1, 0]},
			zoomIn: {transform: ['scale(.5)', 'scale{1}']},
			zoomOut: {transform: ['scale(1)', 'scale{.5}']},
			slideIn: {left: ['100%', '0']},
			slideOut: {left: ['0', '100%']},
			flip: {transform: ['rotateY(0deg)', 'rotateY(180deg)']}
		},
		block: {},
		loader: {},
		dialog: {},
		modal: {},
		overlay: {},
		modalHeaders: {
			custom: function(opt) {
				return `<button class="${opt.prefix}btn ${opt.prefix}modal-cancel"  aria-label="${opt.cancel}"><span>${opt.cancel}</span></button><div class="${opt.prefix}modal-title">${opt.title}</div><button class="${opt.prefix}btn ${opt.prefix}modal-ok" aria-label="${opt.ok}"><span>${opt.ok}</span></button>`;
			},
			static: `<div>Modal Header</div>`
		},
		modalFooters: {
			custom: function(opt) {
				return `<button class="${opt.prefix}btn ${opt.prefix}modal-cancel" aria-label="${opt.cancel}"><span>${opt.cancel}</span></button><button class="${opt.prefix}btn ${opt.prefix}modal-ok" aria-label="${opt.ok}"><span>${opt.ok}</span></button>`;
			},
			static: '<div>Modal Footer</div>'
		},
		validationRules: {
			alpha: function(val){ return val.match(/^([a-z])+$/i) ? true : false; },
			max: function(val, max){ return val.length <= max; }
		},
		validationMessages: {
			alpha: function(val){ return `${val} should only contain letters`; },
			max: function(val, max){ return `${val} should not exceed ${max} characters`; },
			static: 'Invalid Input'
		},
		fake: {
			mobile: function(){ return Math.floor(Math.random() * 1000000000); }
		},
		fakers: {
			firstNames: ['Mark', 'Angelo'],
			lastNames: ['Angulo', 'Dalit', 'Reyes'],
			domains: ['aol', 'gmail', 'outlook', 'yahoo'],
			password: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$',
			nouns: ['time', 'year', 'people', 'way', 'day', 'man'],
			adjectives: ['new', 'good', 'high', 'old', 'great']
		}
	};
	
# Constants

	BASE_URL
	
# Number Helpers
Add zero padding to a number
	
	Number.pad(size);
	
# String Helpers
