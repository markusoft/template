# What is Template
Template is a collection of useful UI/UX and helper functions accumulated through decades of passionate web development. Created by developers for developers because we understand your needs.

# Easy Peasy Summary

| Function | Usage | Output | Description |
|----------|-------|--------|-------------|
| Constants||||
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
| Template.fake('anything') | Template.fake('email') | markangelo@gmail.com | Generate fake email |
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
| Lazy Loading ||||
| Template.lazyLoad(img) | Template.lazyLoad('.tpl-img') |  | Only loads images when shown also known as lazy loading  |
| Reveal ||||
| Template.reveal(id, settings) | Template.reveal('#id', {animation: 'fade-in'}) |  | Animate object on reveal |
| Template.childrenReveal(id, settings) | Template.childrenReveal('#ul") |  | Animate children on reveal |
| Infinite Scroll ||||
| Template.infiniteScroll(selector, settings) | Template.infiniteScroll('#ul', {onBottom: function()}) |  | Add items when bottom is reached for infinite scroll |
| SVG Map ||||
| Template.svgMap(selector, settings) | Template.svgMap('#svg', {max: 1}) |  | Creates an SVG map |

# Table of Contents
- [What is Template](#what-is-template)
- [Easy Peasy Summary](#easy-peasy-summary)
- [Installation](#installation)
- [Configuration](#configuration)
- [Constants](#constants)

# Installation
Download the library and add it to your hmtl file

	<script src="template.js"></script>

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
	
| Config | Value |  Description |
|--------|-------|--------------|
| license |  | A license is subjected for a single domain |
| name | Lazy | You can use your company name as the template name |
| prefix | tpl- | Prefix use for classes |
| animations | animations: {fadeIn: {opacity: [0, 1]}} | Built-in animations |
| block | {'content': 'Loading'} | Default block configurations |
| loader | {'message': 'Loading' } | Default loader configurations |
| dialog | {'message': 'Are you sure?'} | Default dialog configurations |
| modal | {'content': 'Modal Content'} | Default modal configurations |
| overlay | {'closeButton': false} | Default overlay configurations |
| modalHeaders | {default: '<div>Modal Header</div>'} | Custom modal headers |
| modalFooters | {custom: function(opt){`<button class="${opt.prefix}modal-ok">Ok</button>`}} | Custom modal footers |
| paginate | {itemsPerPage: 5} | Default pagination configurations |
| validationRules | {max: function(val, max){ return val.length <= max; }} | Validation rules |
| validationMessages | {max: function(val, max){ return `${val} should not exceed ${max} characters`; }} | Validation messages |
| fake | {mobile: function(){ return Math.floor(Math.random() * 1000000000); }} | Fake generators |
| fakers | {firstNames: ['Mark', 'Angelo']} | Fake values |
	
# Constants
The base URL is the starting point or root of a website's address

	BASE_URL
	
# Number Helpers
Add zero padding to a number
	
	Number.pad(size);
	
# String Helpers

# On
Add event listener to a dom element
	
	Template.on('click', '#my-button', function(event){
		event.preventDefault();
	});
	
# Don
Add event listener to the document
	
	// add custom event
	Template.don('custom-event', '.new-buttons', function(e){
		console.log(e.currentTarget);
	});
	
	// catch custom event
	Template.don('custom-event', function(e){                           
		console.log(e.target);
	});

# Lazy Loading
Load images only when shown also known as lazy loading

	<img class="tpl-lazy" src="placeholder.webp" data-src="actual-image.webp" alt="lazy-load-image />

	Template.lazyLoad('.tpl-lazy',{                                     // lazy load images
		beforeLoad: function(){                                         // callback before loading
			return false;                                               // return false to cancel loading
		},
		onLoad: function(){},                                           // callback when loading
		onFinishLoading: function(){}                                   // callback after loading
	});
	
| Config | Value |  Description |
|--------|-------|--------------|
| beforeLoad | function(){ return false; } | Callback before loading, return false to cancel lazy loading |
| onLoad | function(){} | Callback on load |
| onFinishLoading | function(){} | Callback on loading finish |

# Infinite Scroll
Load items indefinitely

	Template.infiniteScroll(selector, settings);

	Template.infiniteScroll('ul', {
		children: 'li',
		observerSettings: {},
		onTop: function(ul){},
		onBottom: function(ul){
			ul.append(li);
		}
	});
	
	Template.infiniteScroll('tbody', {
		children: 'tr',
		observerSettings: {},
		onTop: function(ul){},
		onBottom: function(tbody){
			tbody.append(tr);
		}
	});
	
| Config | Value |  Description |
|--------|-------|--------------|
| selector | #id | Target element |
| children | li | Scrollable child elements |
| observerSettings | {rootMargin: '10px', threshold: [0.25, 0.5, 0.75]} | IntersectionObserver additional settings |
| onTop | function(){} | Callback when top child is shown |
| onBottom | function(target){ target.append(newChild) } | Callback when bottom child is shown |

# Reveal
Animate a dom element when revealed

	Template.reveal(selector, settings);

	Template.reveal('#section', {
		animation: function(section) {
			section.animate({
				opacity: [0, 1],
				transform: ['translateY(2rem)', 'translateY(0rem)']
			}, { 
				duration: 1000,
				iterations: 1,
				easing: "ease-out"
			});
		},
		beforeShow: function(section) {               
			console.log(section);
		},
		onShow: function(section){
			console.log(section);
		},
		onHide: function(section){
			console.log(section);
		}
	});
	
| Config | Value |  Description |
|--------|-------|--------------|
| selector | #id | Target element |
| animation | fade-in | Custom animation |
| beforeShow | function(target){} | Callback before the target shows |
| onShow | function(target){} | Callback when the target shows |
| onHide | function(target){} | Callback when the target is hidden |

# Children Reveal
Animate the children of a dom element when revealed

	Template.childrenReveal(selector, settings);

	Template.childrenReveal('#section', {
		children: 'li',
		duration: 100,
		animation: function(section) {
			section.animate({
				opacity: [0, 1],
				transform: ['translateY(2rem)', 'translateY(0rem)']
			}, { 
				duration: 1000,
				iterations: 1,
				easing: "ease-out"
			});
		},
		beforeShow: function(parent) {},
		onShow: function(parent){},
		onChildShow: function(child) {
			console.log(child);
		},
		onHide: function(parent){}
	});

| Config | Value |  Description |
|--------|-------|--------------|
| selector | #id | Target element |
| children | li | Children selector |
| animation | fade-in | Custom animation |
| beforeShow | function(target){} | Callback before the target shows |
| onShow | function(target){} | Callback when the target shows |
| onChildShow | function(child){} | Callback when a child is shown |
| onHide | function(target){} | Callback when the target is hidden |

# Form to JSON
Saves form values to a json file

	Template.formToJson(selector, case, mutator);

	Template.formToJson('#form', 'camel', {
		firstName: function(value) {
			return value.capitalizeAll();
		}
	});

| Config | Value |  Description |
|--------|-------|--------------|
| selector | #id | Target element |
| case | dash,underscore,camel,pascal | Form name cases |
| mutator | {firstName: function(value) {return value.capitalizeAll();}} | Process the value before retrieving |

# JSON to Form
Populate a form with json values

	Template.jsonToForm(json, selector, case, mutator);

	Template.jsonToForm(json, form, 'snake', {
		phone: function(value) {
			return Template.phoneFormat(value);
		}
	});

| Config | Value |  Description |
|--------|-------|--------------|
| json | {username: 'Username'} | JSON object |
| selector | #form | Target form |
| case | dash,underscore,camel,pascal | Form name cases |
| mutator | {firstName: function(value) {return value.capitalizeAll();}} | Process the value before inserting |

# Search and Filter
Search and Filter any dom elements

	Template.filter(selector, settings);

	Template.filter('#tbody', {
		filter = 'tr',                          // filter elements
		caseSensitiveSearch = false,            // toggle search case sensitive
		caseSensitiveFilter = false,            // toggle filter case sensitive
		caseSensitiveLike = false,              // toggle like case sensitive
		search = false,                         // String|Array search term
		andSearch = 'Mark',                     // String|Array search term using AND
		orSearch = [                            // String|Array search term using OR
			'Angelo',                           // first name OR last name LIKE "Mark" OR "Angelo" OR "Anthony"
			'Anthony'
		],
		searchAttributes = [                    // String|Array attributes to be searched
			'innerText',                        // Search innerText
			'data.first-name',                  // Search first name
			'data.last-name'                    // Search last name
		],
		filters = {},                           // Object filters
		andFilters = {                          // Object filters using AND
			'data.status': 'active'             // String|Array key = attribute, value = filter value
		},
		orFilters = {                           // Object filters using OR
			'data.status': [                    // String|Array key = attribute, value = filter value
				'active',
				'pending'
			],
			'data.status': 'pending'
		},
		likes = {},                             // Object finds in string LIKE
		andLikes = {                            // Object finds in string LIKE using AND
			'data.first-name': 'ar',            // String|Array LIKE filters
			'data.last-name': 'ma'              // first name LIKE "ar" and last name LIKE "ma"
		},
		orLikes = {                             // Object finds in string LIKE using OR
			'data.first-name': ['ar', 'ma'],    // String|Array LIKE filters
			'data.last-name': 'an'              // first name LIKE "ar" OR "ma", OR last name LIKE "an"                      
		},
		matches = {},                           // Object match string regex
		andMatches = {                          // Object match string regex using AND
			'data.first-name': /^M[\w]+/gi,     // first name starts with "M" case insensitive AND
			'data.last-name': /^A[\w]+/gi       // last name starts with "A" case insensitive
		},
		orMatches = {                           // Object match string regex using AND
			'data.first-name': /^M[\w]+/gi,     // first name starts with "M" case insensitive OR
			'data.last-name': /^A[\w]+/gi       // last name starts with "A" case insensitive
		},
		andCustom = {                                   // Function custom function using AND
			'data.first-name': function(attribute) {    // attribute = attribute value
				return attribute.startsWith('M');       // first name starts with "M" AND
			},
			'data.last-name': function(attribute) {
				return attribute.startsWith('A');       // last name starts with "A"
			}
		},
		orCustom: {                                     // Function custom function using OR
			'data.first-name': function(attribute) {    // attribute = attribute value
				return attribute.startsWith('M');       // first name starts with "M" OR
			},
			'data.last-name': function(attribute) {
				return attribute.startsWith('A');       // last name starts with "A"
			}
		},
		custom: function(child) {                       // Function custom function
			const text = child.innerText;               // child will be the element being filtered
			return text === 'Your Text';                // return true = show element, false = hide element
		}
	});


| Config | Value |  Description |
|--------|-------|--------------|
| selector | #ul | Target element |
| filter | li | Child elements to be filtered |
| caseSensitiveSearch | false | Case sensitive search |
| caseSensitiveFilter | false | Case sensitive filter |
| caseSensitiveLike | false | Case sensitive like |
| search | string or array | Search strings |
| andSearch | string or array | And search strings |
| orSearch | string or array | Or search strings |
| searchAttributes | [innerText', 'data.first-name'] | Child attributes to be searched |
| filters | {data.status: 'active'} | Object filters key = attribute, value = filter value|
| andFilters | {data.status: 'active'} | And filters |
| orFilters | {data.status: 'active'} | Or filters |
| likes | { 'data.first-name': 'ar'} | Object finds in string LIKE |
| andLikes | 'data.first-name': 'ar'} | And likes |
| orLikes | 'data.first-name': 'ar'} | Or likes |
| matches | {'data.first-name': /^M[\w]+/gi} | Regex match |
| andMatches | {'data.first-name': /^M[\w]+/gi} | And matches |
| orMatches | {'data.first-name': /^M[\w]+/gi} | Or matches |
| andCustom | {'data.first-name': function(attribute) {return attribute.startsWith('M');} | And custom |
| orCustom | {'data.first-name': function(attribute) {return attribute.startsWith('M');} | Or custom |
| custom | function(child) { const text = child.innerText; return text === 'Your Text';} | Create your own filter return true = show element, false = hide element |

# Block
Block the UI

	Template.block();							// blocks the document body
	Template.block(settings);					
	
	Template.block({
		block: '#element-id',                   // id or dom element to block
		content: 'Text/HTML',                   // additional content
		addClass: {                             // individual classes
			block: 'my-blocker',
			content: ['my-content', 'nice-content']
		},
		styles: {                               // any css, will be applied to blocking element
			backgroundColor: 'blue'
		},
		contentStyles: {                        // any css, will be applied to the content element
			color: 'white'
		}
	});
	
| Config | Value |  Description |
|--------|-------|--------------|
| block | #id | Block a target element |
| content | 'Loading' | Add content to block |
| addClass | {block: 'my-blocker'} | Add classes to the blocker |
| styles | {backgroundColor: 'blue'} | Add styles to the blocker |
| contentStyles | {color: white} | Add styles to the content |