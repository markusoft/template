# What is Template
[Template](https://github.com/markusoft/template) is a collection of useful UI/UX and helper functions accumulated through decades of passionate web development. Created by developers for developers because we understand your needs. [See it in action](https://markusoft.github.io/template/)

# Easy Peasy Summary

[**Constants**](#constants)
| Constant           | Output                 | Description              |
|--------------------|------------------------|--------------------------|
| **BASE_URL**           | http://your-domain.com | Base URL of your website |

[**Number Helpers**](#number-helpers)
| Function                        | Usage                                                       | Output          | Description                                       |
|---------------------------------|-------------------------------------------------------------|-----------------|---------------------------------------------------|
| [Number.pad(size)](#pad)        | Number(3).pad(3)                                            | 003             | Adds zero padding to numbers                      |

[**String Helpers**](#string-helpers)
| Function                        | Usage                                                       | Output          | Description                                       |
|---------------------------------|-------------------------------------------------------------|-----------------|---------------------------------------------------|
| [String.trim()](#trim)                   | ' Sample Text '.trim()                                      | Sample Text     | Removes trailing and leading white spaces          |
| [String.trimAll()](#trim-all)                | ' Sample Text '.trimAll()                                   | SampleText      | Removes all white spaces                          |
| [String.capitalize()](#capitalize)             | 'sample text'.capitalize()                                  | Sample text     | Capitalizes the first letter of a word or phrase   |
| [String.capitalizeAll()](#capitalize-all)          | 'sample-text'.cleanCapitalizeAll()                          | Sample Text     | Capitalizes all words in a phrase                 |
| [String.cleanCapitalizeAll()](#clean-capitalize-all)     | 'sample text'.cleanCapitalizeAll()                          | SampleText      | Capitalizes all words and removes dashes/underscores |
| [String.deCapitalize()](#decapitalize)           | 'Sample Text'.deCapitalize()                                | sample Text     | De-capitalizes the first letter of a word or phrase |
| [String.deCapitalizeAll()](#decapitalize-all)        | 'Sample Text'.deCapitalizeAll()                             | sample text     | De-capitalizes all words in a phrase              |
| [**String Case Conversions**](#string-case-conversions) ||||
| [String.toDash()](#to-dash)                 | 'sample text'.toDash()                                      | sample-text     | Converts spaces and underscores to dash           |
| [String.toUnderscore()](#to-underscore)           | 'sample text'.toUnderscore()                                | sample_text     | Converts spaces and dashes to underscore          |
| [String.toSnake()](#to-snake)                | 'sample text'.toSnake()                                     | sample_text     | Converts spaces and dashes to underscore          |
| [String.toPascalCase()](#to-pascal)           | 'sample text'.toPascalCase()                                | SampleText      | Converts string to Pascal case                    |
| [String.toCamelCase()](#to-camel-case)            | 'sample text'.toCamelCase()                                 | sampleText      | Converts string to camel case                     |
| [String.changeCase('camel')](#change-case)      | 'Sample Text'.changeCase('dash')                            | sample-text     | Converts string to specified case                 |

[**Array Helpers**](#array-helpers)
| Function                        | Usage                                                       | Output          | Description                                       |
|---------------------------------|-------------------------------------------------------------|-----------------|---------------------------------------------------|
| [Array.random()](#random)                  | ['a','b','c','d','e'].random()                              | 'a'             | Retrieves a random element from an array          |
| [Array.random(items)](#random)             | ['a','b','c','d','e'].random(2)                             | ['b','e']       | Retrieves random elements from an array           |
| [Array.joinLast(', ', 'and')](#join-last)     | ['a','b','c'].joinLast(', ', 'and')                         | a, b and c      | Joins array with a custom last conjunction        |

[**Local Storage**](#local-storage)
| Function                        | Usage                                                       | Output          | Description                                       |
|---------------------------------|-------------------------------------------------------------|-----------------|---------------------------------------------------|
| [Storage.setObject('key', value)](#set-object) | Storage.setObject('key', json)                              |                 | Stores a JSON object in local storage             |
| [Storage.getObject('key')](#get-object)        | Storage.getObject('key')                                    | {'json': 'object'} | Retrieves a JSON object from local storage     |

[**Getters**](#getters)
| Function                        | Usage                                                       | Output          | Description                                       |
|---------------------------------|-------------------------------------------------------------|-----------------|---------------------------------------------------|
| [Template.getConfig('item')](#get-config)      | Template.getConfig('prefix')                                | -tpl            | Retrieves a configuration item                    |
| [Template.getCssVar('--css-var')](#get-css-var) | Template.getCssVar('--font-size')                           | 14px            | Retrieves a CSS variable                          |

[**Event Handlers**](#event-handlers)
| Function                        | Usage                                                       | Description                                       |
|-------------------------------------|-------------------------------------------------------------|---------------------------------------------------|
| [Template.on(type, selector, callback, options)](#on)               | Template.on('click', '#id', function(e){}, {bubbles: true})                                      | Adds an event listener to an element              |
| [Template.off(type, selector, eventHandler)](#off)             		  | Template.off('click', '#id', eventHandler)                                      | Removes an event listener to an element              |
| [Template.don(type, selector, callback, options)](#don)              | Template.don('click', '#id', function(e){}, {bubbles: true})                                                            | Adds an event listener to the document            |
| [Template.doff(type, selector, eventHandler)](#doff)              | Template.doff('click', '#id', eventHandler)                                                            | Removes an event listener to the document            |
| [Template.addEventListener(type, selector, callback, options)](#add-event-listener) | Template.addEventListener('click', '#id', function(e){}, {bubbles: true})                                                            | Adds an event listener                            |

[**Animate**](#animate)
| Constant           | Output                 | Description              |
|--------------------|------------------------|--------------------------|
| [Template.animate(selector, settings)](#animate) | Template.animate('#id', {animation: 'tada'}) | Animate elements |

[**Sort**](#sort)
| Function                        | Usage                                                       | Output          | Description                                       |
|---------------------------------|-------------------------------------------------------------|-----------------|---------------------------------------------------|
| [Template.sort(parent, children, sortAndOrder)](#sort)                 | Template.sort('#tbody', 'tr', {'innerText': 'asc'})        | ascending table rows | Sorts table rows                               |
| [Template.sort(parent, children, sortAndOrder)](#sort)                 | Template.sort('#ul', 'li', {'innerText': 'desc'})           | descending list items | Sorts list elements                              |

[**Search and Filter**](#search-and-filter)
| Function                        | Usage                                                       | Output          | Description                                       |
|---------------------------------|-------------------------------------------------------------|-----------------|---------------------------------------------------|
| [Template.filter(parent, settings)](#search-and-filter)          | Template.filter('#tbody', {filter:'tr', search: 'Mark', searchAttributes: ['innerText']} | searched rows | Searches table rows                              |
| [Template.filter(parent, settings)](#search-and-filter)          | Template.filter('#ul', {filter:'li', search: 'Mark', searchAttributes: ['innerText']} | searched lists | Searches list items                              |

[**JSON and Forms**](#json-and-forms)
| Function                        | Usage                                                       | Output          | Description                                       |
|---------------------------------|-------------------------------------------------------------|-----------------|---------------------------------------------------|
| [Template.jsonToDom(json, settings)](#json-to-dom)         | Template.jsonToDom(json, {parent: 'ul', markup: function(){}})                               | DOM               | Markup JSON object to DOM Object |
| [Template.flattenJson(json)](#flatten-json)         | Template.flattenJson({'a': {'b': 'c'}})                               | {'a.b': 'c'}               | Flatten JSON to a single layer with dot notation keys |
| [Template.unflattenJson(json)](#unflatten-json)         | Template.unflattenJson({'a.b': 'c'})                               | {'a': {'b': 'c'}}               | Unflatten JSON from single to multiple layers |
| [Template.formToJson(form)](#form-to-json)           | Template.formToJson('#form')                                           | {'form': 'value'}          | Convert form values to JSON                          |
| [Template.jsonToForm(json, form)](#json-to-form)     | Template.jsonToForm(json, '#form')                                     | Populated form             | Populate form with JSON values                       |
| [Template.formToSerialized(form)](#form-to-serialized)           | Template.formToSerialized('#form')                                           | 'form=value'         | Convert form values to serialized text                          |
| [Template.serializedToForm(json, form)](#serialized-to-form)     | Template.serializedToForm(serialized, '#form')                                     | Populated form             | Populate form with serialized text                       |
| [**Form Validations**](#form-validations)   ||||
| [Template.valid(value, validations)](#valid)  | Template.valid(3, 'integer')                                           | true                       | Check if a value is valid                            |
| [Template.validate('#form', rules)](#validate)   | Template.validate('#form', {username: {'rules': ['required', 'email']}}) | true                       | Form validation                                     |
| [Template.liveValidation('#form', rules, callbacks)](#live-validation)  | Template.liveValidation('#form', rules, {onError: function()}) |                            | Live form validation                                |
| [Template.getValidationErrors()](#get-validation-errors)      | Template.getValidationErrors()                                         | {username: {'email': 'Must be a valid email'}} | Retrieve validation errors                           |

[**Fakers**](#fakers)
| Function                        | Usage                                                       | Output          | Description                                       |
|---------------------------------|-------------------------------------------------------------|-----------------|---------------------------------------------------|
| [Template.fake('anything')](#faker)          | Template.fake('email')                                                 | markangelo@gmail.com       | Generate a fake email                                |
| [Template.fake('anything')](#faker)          | Template.fake('lorem')                                                 | lorem ipsum dolor          | Generate lorem ipsum text                            |
| [Template.faker()](#faker)                   | Template.faker()                                                        | Populate a form with fake contents | Hold Alt + Shift and click              |

[**Blockers**](#blockers)
| Function                        | Usage                                                       | Description                                       |
|---------------------------------|-------------------------------------------------------------|---------------------------------------------------|
| [Template.block(selector, settings)](#block)           | Template.block()                                                        | Blocks the UI                                       |
| [Template.loader(selector, settings)](#loader)          | Template.loader()                                                       | Blocks the UI with a loader                          |
| [Template.unblock(selector)](#unblock)            | Template.unblock()                                                      | Unblocks the UI                                     |

[**Modals and Dialogs**](#modals-and-dialogs)
| Function                                  | Usage                                                 | Description                      |
|-------------------------------------------|-------------------------------------------------------|----------------------------------|
| [Template.dialog(settings)](#dialog)       | Template.dialog({'message': 'Are you sure?'}).open()  | Open a confirm dialog modal      |
| [Template.overlay('#id', settings)](#overlay)  | Template.overlay('#login').open()                       | Overlay a DOM element         |
| [Template.modal(settings)](#modal)         | Template.modal({'content': 'Any Content'}).open()     | Open a custom modal              |

[**Lazy Loading**](#lazy-loading)
| Function                        | Usage                                                       | Description                                       |
|---------------------------------|-------------------------------------------------------------|---------------------------------------------------|
| [Template.lazyLoad(img)](#lazy-load)          | Template.lazyLoad('.tpl-img')                               | Only loads images when shown, also known as Template loading |

[**Reveals**](#reveals)
| Function                                | Usage                                            | Description                      |
|-----------------------------------------|--------------------------------------------------|----------------------------------|
| [Template.reveal(id, settings)](#reveal)      | Template.reveal('#id', {animation: 'fade-in'})   | Animate object on reveal         |
| [Template.childrenReveal(id, settings)](#reveal) | Template.childrenReveal('#ul')                  | Animate children on reveal       |

[**Infinite Scroll**](#infinite-scroll)
| Function                                                | Usage                                                    | Description                                               |
|---------------------------------------------------------|----------------------------------------------------------|-----------------------------------------------------------|
| [Template.infiniteScroll(selector, settings)](#infinite-scroll) | Template.infiniteScroll('#ul', {onBottom: function()}) | Add items when the bottom is reached for infinite scroll  |

[**Paginate**](#paginate)
| Function                                      | Usage                                                 | Description                           |
|-----------------------------------------------|-------------------------------------------------------|---------------------------------------|
| [Template.paginate(selector, settings)](#paginate) | Template.paginate('#ul', {items: 'li', itemsPerPage: 20}) | Paginate DOM element                   |

[**SVG Map**](#svg-map)
| Function                                     | Usage                                          | Description                        |
|----------------------------------------------|------------------------------------------------|------------------------------------|
| [Template.svgMap(selector, settings)](#svg-map) | Template.svgMap('#svg', {max: 1})          | Add events to SVG Map               |

[**Drag and Drop**](#drag-and-drop)
| Function                                     | Usage                                          | Description                        |
|----------------------------------------------|------------------------------------------------|------------------------------------|
| [Template.draggable(selector, settings)](#draggable) | Template.draggable('#ul > li', {dropZone: '#ul2'})          | Make anything draggable               |

# Table of Contents
- [What is Template](#what-is-template)
- [Easy Peasy Summary](#easy-peasy-summary)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Configuration](#configuration)
- [Constants](#constants)
- [Number Helpers](#number-helpers)
	- [Pad](#pad)
- [String Helpers](#string-helpers)
	- [Trim](#trim)
	- [Trim All](#trim-all)
	- [Capitalize](#capitalize)
	- [Capitalize All](#capitalize-all)
	- [Clean Capitalize All](#clean-capitalize-all)
	- [Decapitalize](#decapitalize)
	- [Decapitalize All](#decapitalize-all)
- [String Case Conversions](#string-case-conversions)
	- [To Dash](#to-dash)
	- [To Underscore](#to-underscore)
	- [To Snake](#to-snake)
	- [To Pascal](#to-pascal)
	- [To Camel](#to-camel)
	- [Change Case](#change-case)
- [Array Helpers](#array-helpers)
	- [Random](#random)
	- [Join Last](#join-last)
- [Local Storage](#local-storage)
	- [Set Object](#set-object)
	- [Get Object](#get-object)
- [Getters](#getters)
	- [Get Config](#get-config)
	- [Get Css Var](#get-css-var)
- [Event Handlers](#event-handlers)
	- [On](#on)
	- [Don](#don)
	- [Add Event Listener](#add-event-listener)
- [Animate](#animate)
- [Drag and Drop](#drag-and-drop)
	- [Draggable](#draggable)
- [Sort](#sort)
- [Search and Filter](#search-and-filter)
	- [Search](#search-and-filter)
	- [Filter](#search-and-filter)
- [JSON and Forms](#json-and-forms)
	- [JSON to DOM](#json-to-dom)
	- [Flatten JSON](#flatten-json)
	- [Form to JSON](#form-to-json)
	- [JSON to Form](#json-to-form)
	- [Form to Serialized](#form-to-serialized)
	- [Serialized to Form](#serialized-to-form)
- [Form Validations](#form-validations)
	- [Valid](#valid)
	- [Validate](#validate)
	- [Live Validation](#live-validation)
	- [Validation Rules](#validation-rules)
	- [Get Validation Errors](#get-validation-errors)
- [Fakers](#fakers)
	- [Fake](#fake)
	- [Faker](#faker)
- [Blockers](#blockers)
	- [Block](#block)
	- [Loader](#loader)
	- [Block and Loader](#block-and-loader)
	- [Unblock](#unblock)
- [Modals and Dialogs](#modals-and-dialogs)
	- [Dialog](#dialog)
	- [Overlay](#overlay)
	- [Modal](#modal)
- [Lazy Loading](#lazy-loading)
- [Reveals](#reveals)
	- [Reveal](#reveal)
	- [Children Reveal](#children-reveal)
- [Infinite Scroll](#infinite-scroll)
- [Paginate](#paginate)
- [SVG Map](#svg-map)

# Installation
Download the [library](https://github.com/markusoft/dev-tools/raw/main/Template.zip) and add it to your html file

  ```
  <script src="template.js"></script>
  ```

# Configuration
Set default library configurations

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
	
| **Config**          | Value                                                                                                       | Description                                        |
|---------------------|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| **license**         |                                                                                                             | A license is required for a single domain           |
| **name**            | Template                                                                                                    | You can use your company name as the template name  |
| **prefix**          | tpl-                                                                                                        | Prefix used for classes                             |
| **animations**      | animations: {fadeIn: {opacity: [0, 1]}}                                                                      | Built-in animations                                |
| **block**           | {'content': 'Loading'}                                                                                      | Default block configurations                       |
| **loader**          | {'message': 'Loading'}                                                                                      | Default loader configurations                      |
| **dialog**          | {'message': 'Are you sure?'}                                                                                 | Default dialog configurations                      |
| **modal**           | {'content': 'Modal Content'}                                                                                 | Default modal configurations                       |
| **overlay**         | {'closeButton': false}                                                                                       | Default overlay configurations                     |
| **modalHeaders**    | {default: '\<div>Modal Header\</div>'}                                                                         | Custom modal headers                               |
| **modalFooters**    | {custom: function(opt){`\<button class="${opt.prefix}modal-ok">Ok</button>`}}                                 | Custom modal footers                               |
| **paginate**        | {itemsPerPage: 5}                                                                                            | Default pagination configurations                   |
| **validationRules** | {max: function(val, max){ return val.length <= max; }}                                                       | Validation rules                                   |
| **validationMessages** | {max: function(val, max){ return `${val} should not exceed ${max} characters`; }}                            | Validation messages                                |
| **fake**            | {mobile: function(){ return Math.floor(Math.random() * 1000000000); }}                                       | Fake generators                                    |
| **fakers**          | {firstNames: ['Mark', 'Angelo']}                                                                             | Fake values                                        |
	
# Constants
The base URL is the starting point or root of a website's address

	BASE_URL
	
# Number Helpers

## Pad
Add zero padding to a number
	
	Number.pad(size);
	
# String Helpers

## Trim
Removes trailing and leading white spaces

	String.trim();

Sample Usage

	' Sample Text '.trim();
	'Sample Text' // output

## Trim All
Removes all white spaces

	String.trimAll();

Sample Usage

	' Sample Text '.trimAll();
	'SampleText' // output

## Capitalize
Capitalizes the first letter of a word or phrase

	String.capitalize();

Sample Usage

	'sample text'.capitalize();
	'Sample text' // output

## Capitalize All
Capitalizes all words in a phrase

	String.capitalizeAll();

Sample Usage

	'sample-text'.cleanCapitalizeAll();
	' Sample Text' // output

## Clean Capitalize All
Capitalizes all words and removes dashes/underscores

	String.cleanCapitalizeAll();

Sample Usage

	'sample text'.cleanCapitalizeAll();
	'SampleText' // output

## Decapitalize
De-capitalizes the first letter of a word or phrase

	String.deCapitalize();

Sample Usage

	'Sample Text'.deCapitalize();
	'sample Text' // output

## Decapitalize All
De-capitalizes all words in a phrase

	String.deCapitalizeAll();

Sample Usage

	'Sample Text'.deCapitalizeAll();
	'sample text' // output

# String Case Conversions

## To Dash
Converts spaces and underscores to dash

	String.toDash();

Sample Usage

	'sample text'.toDash();
	'sample-text' // output

## To Underscore
Converts spaces and dashes to underscore

	String.toUnderscore();

Sample Usage

	'sample text'.toUnderscore();
	'sample_text' // output

## To Snake
Converts spaces and dashes to underscore

	String.toSnake();

Sample Usage

	'sample text'.toSnake();
	'sample_text' // output

## To Pascal
Converts string to Pascal case

	String.toPascalCase();

Sample Usage

	'sample text'.toPascalCase();
	'SampleText' // output

## To Camel
Converts string to camel case

	String.toCamelCase();

Sample Usage

	'sample text'.toCamelCase();
	'sampleText' // output

## Change Case

	String.changeCase('camel');

Sample Usage

	'sample text'.changeCase('dash);
	'sample-text' // output
	'sample text'.changeCase('pascal);
	'SampleText' // output

# Array Helpers

## Random
Retrieves random elements from an array

	Array.random();
	Array.random(items);

Sample Usage

	['a','b','c','d','e'].random();
	'a' // output
	['a','b','c','d','e'].random(2);
	['b','e'] // output

## Join Last
Joins array with a custom last conjunction

	Array.joinLast(', ', 'and')

Sample Usage

	['a','b','c'].joinLast(', ', 'and');
	a, b and c // output

# Local Storage

## Set Object
Stores a JSON object in local storage

	Storage.setObject('key', value);

Sample Usage

	Storage.setObject('key', {'json': 'object'});

## Get Object
Retrieves a JSON object from local storage

	Storage.getObject('key');

Sample Usage

	Storage.getObject('key');

# Getters

## Get Config
Retrieves a configuration item

	Template.getConfig('item');

Sample Usage

	Template.getConfig('prefix');
	'-tpl' // output

## Get Css Var
Retrieves a CSS variable

	Template.getCssVar('--css-var');

Sample Usage

	Template.getCssVar('--font-size');
	'14px' // output

# Event Handlers

## On
Add event listener to a dom element
	
	Template.on('click', '#my-button', function(event){
	  event.preventDefault();
	});
  
## Off
Removes event listener to a dom element
	
	let eventHandler = Template.on('click', '#my-button', function(event){
	  event.preventDefault();
	});
	
	Template.off('click', '#my-button', eventHandler);
	
## Don
Add event listener to the document
	
	// add custom event
	Template.don('custom-event', '.new-buttons', function(e){
	  console.log(e.currentTarget);
	});
	
	// catch custom event
	Template.don('custom-event', function(e){                           
	  console.log(e.target);
	});
	
## Doff
Remove event listener to the document

	let eventHandler = Template.don('custom-event', '.new-buttons', function(e){
	  console.log(e.currentTarget);
	});
	
	Template.doff('custom-event', eventHandler);

## Add Event Listener
Adds an event listener

	Template.addEventListener(type, selector, callback, options);

Sample Usage

	Template.addEventListener('click', '#id', function(e){
		e.preventDefault();
	}, {bubbles: true});

# Animate
Animate an element

	Template.animate(selector, settings);
	
	Template.animate('#div', {
	  animation: 'fadeIn',
	  duration: 1000,
	  iterations: 1,
	  easing: 'ease-in-out',
	  beforeAnimate: function(elem) {
		console.log(elem);
		return false;
	  },
	  afterAnimate: function(elem) {
		console.log(elem);
	  }
	});
	
| **Config**       | Value                               | Description                        |
|------------------|-------------------------------------|------------------------------------|
| **selector**     | #id                                 | Target selector                    |
| **animation**    | fadeIn                              | Built-in animations                |
| **duration**     | 200                                 | Animation duration in milliseconds |
| **iterations**   | 1                                   | Animation iterations               |
| **easing**       | 'ease-in-out'                       | Animation easing                   |
| **beforeAnimate**| function(elem){return false;}       | Callback before animation          |
| **afterAnimate** | function(elem){}                    | Callback after animation           |

## Built-in Animations

| Name |
|------|
| appear-top |
| disappear-top |
| appear-bottom |
| disappear-bottom |
| appear-left |
| disappear-left |
| appear-right |
| disappear-right |
| fade-in |
| fade-out |
| collapse |
| expand |
| scale-to-large |
| large-to-scale |
| small-to-scale |
| scale-to-small |
| slide-fromm-top |
| slide-to-top |
| slide-fromm-left |
| slide-to-left |
| slide-fromm-right |
| slide-to-right |
| slide-fromm-bottom |
| slide-to-bottom |
| flip |
| tada |

# Drag and Drop

## Draggable
Make anything draggable

	Template.draggable(selector, settings);
	
	let draggables = Template.draggable('#id', {
	  clone: false,                                               // clone element
	  dragHandle: false,                                          // drag handle
	  dropZone: ['#list-zone-1', '#list-dad', '#table-dad'],      // drop zone
	  multiple: 'li.selected',                                    // drag multiple elements
	  disable: 'disabled',                                        // disabled element class name without the dot
	  placeholder: 'div',                                         // default placeholder div
	  nestable: ':scope li > *:first-child',                      // true or selector of nestable elements
	  nestableParent: 'ul',                                       // nestable parent
	  nestableElement: 'li',                                      // nestable elements
	  indention: '2rem',                                          // nest indention
	  maxDepth: false,                                            // max nest depth (Fixed the assignment operator)
	  // drag events
	  dragStart: function(event) {                                // override dragStart called on mousedown start dragging
		event.preventDefault();                                   // prevent default enables dragging
	  },
	  drag: function(event) {},                                   // override drag called while dragging the element
	  dragEnd: function(event) {},                                // override drag end called on mouseup stop dragging
	  // drop events
	  dragEnter: function(event) {},                              // override drag enter called when dragged element enters a drop zone
	  dragOver: function(event) {},                               // override drag over called everytime the dragged element is hovering on a drop zone
	  dragLeave: function(event) {},                              // override drag leave called when the dragged element leaves a drop zone
	  drop: function(event) {                                     // override drop called when the dragged element is dropped on a drop zone
		event.preventDefault();                                   // prevent default enables dropping
	  },
	  // drag callback events
	  onDragStart: function(e, drag) {},						  // callback on drag start, called on mousedown start dragging
	  onDrag: function(e, drag) {},								  // callback on drag, called while dragging the element
	  onDragEnd: function(e, drag) {},							  // callback on drag end, called on mouseup stop dragging
	  // drop callback events
	  onDragEnter: function(e, drag, drop){},					  // callback on drag enter, called when dragged element enters a drop zone
	  onDragOver: function(e, drag){},							  // callback on drag over, called everytime the dragged element is hovering on a drop zone
	  onDragLeave: function(e, drag, drop){},					  // callback on drag leave, called when the dragged element leaves a drop zone
	  onDrop: function(e, drag, drop) {}						  // callback on drop, called when the dragged element is dropped on a drop zone
	});
	
	draggables.destroy();
	
| **Config**    		| Value                                  | Description                          |
|-----------------------|----------------------------------------|--------------------------------------|
| **selector**  		| #ul > li                               | Target draggable selector         	|
| **clone**     		| false                                  | Clone draggable                      |
| **dragHandle** 		| .handle                                | Drag handle selector              	|
| **dropZone**  		| ['ul.dropzone-1', 'ul.dropzone-2']     | Dropzone selector    				|
| **multiple**			| li.selected          					 | Multiple draggable selector       	|
| **disable**   		| disabled                           	 | Disabled class name without the dot 	|
| **placeholder**   	| div                           		 | Placholder tag 						|
| **nestable**   		| true or ':scope li > *:first-child'    | Nestable selector 					|
| **nestableParent**   	| ul                           			 | Nestable parent tag 					|
| **nestableElement**   | li                           			 | Nestable child tag 					|
| **indention**   		| 2rem                           		 | Nest indention 						|
| **maxDepth**   		| 3                           			 | Max number of nests 					|


| **Config Functions**     | Value                    	 | Description                          |
|--------------------------|-----------------------------|--------------------------------------|
| **dragStart(event)**     | e => { e.preventDefault() } | Override drag start, called on mousedown start dragging, Prevent default enable dragging      |
| **drag(event)**          | function(){} 				 | Override drag, called while dragging the element                    |
| **dragEnd(event)**       | function(){} 				 | Override drag end, called on mouseup stop dragging                    |
| **dragEnter(event)**     | function(){} } 			 | Override drag enter, called when dragged element enters a drop zone                     |
| **dragOver(event)**      | function(){} } 			 | Override drag over, called everytime the dragged element is hovering on a drop zone                      |
| **dragLeave(event)**     | function(){} } 			 | Override drag leave, called when the dragged element leaves a drop zone                     |
| **drop(event)**          | e => { e.preventDefault() } | Override drop, called when the dragged element is dropped on a drop zone. Prevent default enable dropping            |


| **Callbacks**            		 | Value                     | Description                          |
|--------------------------------|---------------------------|--------------------------------------|
| **onDragStart(e, drag)**       | svgMap.changeMax(3)       | Callback on drag start      			|
| **onDrag(e, drag)**            | svgMap.readOnly()         | Callback on drag                     |
| **onDragEnd(e, drag)**         | svgMap.disable()          | Callback on drag end                 |
| **onDragEnter(e, drag, drop)** | svgMap.enable()           | Callback on drag enter a drop zone   |
| **onDragOver(e, drag)**        | svgMap.select(['Item'])   | Callback on drag over a drop zone    |
| **onDragLeave(e, drag, drop)** | svgMap.clear()            | Callback on drag leaving a drop zone |
| **onDrop(e, drag, drop)**      | svgMap.getValues()        | Callback on dropping on a drop zone  |

| **Functions**     | Value                    	 		  | Description                          |
|-------------------|-------------------------------------|--------------------------------------|
| **destroy()**     | Template.draggable('#id').destroy() | Destroys drag and drop 				 |

# Sort
Sort any DOM element

	Template.sort(parent, children, sortAndOrder);
	Template.sort(parent, children, sortAndOrder);

Sample Usage

	Template.sort('#tbody', 'tr', {'innerText': 'asc'});
	Template.sort('#ul', 'li', {'innerText': 'desc'});

# Search and Filter
Search and Filter any dom elements

	Template.filter(selector, settings);

	Template.filter('#tbody', {
	  filter: 'tr',                                     // filter elements
	  caseSensitiveSearch: false,                       // toggle search case sensitive
	  caseSensitiveFilter: false,                       // toggle filter case sensitive
	  caseSensitiveLike: false,                         // toggle like case sensitive
	  search: false,                                    // String|Array search term
	  andSearch: 'Mark',                                // String|Array search term using AND
	  orSearch: [                                       // String|Array search term using OR
		'Angelo',                                       // first name OR last name LIKE "Mark" OR "Angelo" OR "Anthony"
		'Anthony'
	  ],
	  searchAttributes: [                               // String|Array attributes to be searched
		'innerText',                                    // Search innerText
		'data.first-name',                              // Search first name
		'data.last-name'                                // Search last name
	  ],
	  filters: {},                                      // Object filters
	  andFilters: {                                     // Object filters using AND
		'data.status': 'active'                         // String|Array key = attribute, value = filter value
	  },
	  orFilters: {                                      // Object filters using OR
		'data.status': [                                // String|Array key = attribute, value = filter value
		  'active',
		  'pending'
		],
		'data.status': 'pending'
	  },
	  likes: {},                                        // Object finds in string LIKE
	  andLikes: {                                       // Object finds in string LIKE using AND
		'data.first-name': 'ar',                        // String|Array LIKE filters
		'data.last-name': 'ma'                          // first name LIKE "ar" and last name LIKE "ma"
	  },
	  orLikes: {                                        // Object finds in string LIKE using OR
		'data.first-name': ['ar', 'ma'],                // String|Array LIKE filters
		'data.last-name': 'an'                          // first name LIKE "ar" OR "ma", OR last name LIKE "an"
	  },
	  matches: {},                                      // Object match string regex
	  andMatches: {                                     // Object match string regex using AND
		'data.first-name': /^M[\w]+/gi,                 // first name starts with "M" case insensitive AND
		'data.last-name': /^A[\w]+/gi                   // last name starts with "A" case insensitive
	  },
	  orMatches: {                                      // Object match string regex using AND
		'data.first-name': /^M[\w]+/gi,                 // first name starts with "M" case insensitive OR
		'data.last-name': /^A[\w]+/gi                   // last name starts with "A" case insensitive
	  },
	  andCustom: {                                      // Function custom function using AND
		'data.first-name': function(attribute) {        // attribute = attribute value
		  return attribute.startsWith('M');             // first name starts with "M" AND
		},
		'data.last-name': function(attribute) {
		  return attribute.startsWith('A');             // last name starts with "A"
		}
	  },
	  orCustom: {                                       // Function custom function using OR
		'data.first-name': function(attribute) {        // attribute = attribute value
		  return attribute.startsWith('M');             // first name starts with "M" OR
		},
		'data.last-name': function(attribute) {
		  return attribute.startsWith('A');             // last name starts with "A"
		}
	  },
	  custom: function(child) {                         // Function custom function
		const text = child.innerText;                   // child will be the element being filtered
		return text === 'Your Text';                    // return true = show element, false = hide element
	  }
	});

| **Config**                | Value                                                                | Description                                      |
|-----------------------|----------------------------------------------------------------------|--------------------------------------------------|
| **selector**              | #ul                                                                  | Target element                                   |
| **filter**                | li                                                                   | Child elements to be filtered                     |
| **caseSensitiveSearch**   | false                                                                | Case sensitive search                             |
| **caseSensitiveFilter**   | false                                                                | Case sensitive filter                             |
| **caseSensitiveLike**     | false                                                                | Case sensitive "like" comparison                  |
| **search**                | string or array                                                      | Search strings                                    |
| **andSearch**             | string or array                                                      | And search strings                                |
| **orSearch**              | string or array                                                      | Or search strings                                 |
| **searchAttributes**      | ['innerText', 'data.first-name']                                      | Child attributes to be searched                   |
| **filters**               | {'data.status': 'active'}                                             | Object filters (key = attribute, value = filter value) |
| **andFilters**            | {'data.status': 'active'}                                             | And filters                                      |
| **orFilters**             | {'data.status': 'active'}                                             | Or filters                                       |
| **likes**                 | {'data.first-name': 'ar'}                                             | Object finds in string LIKE                        |
| **andLikes**              | {'data.first-name': 'ar'}                                             | And "like" filters                                |
| **orLikes**               | {'data.first-name': 'ar'}                                             | Or "like" filters                                 |
| **matches**               | {'data.first-name': /^M[\w]+/gi}                                      | Regex match filters                               |
| **andMatches**            | {'data.first-name': /^M[\w]+/gi}                                      | And regex match filters                           |
| **orMatches**             | {'data.first-name': /^M[\w]+/gi}                                      | Or regex match filters                            |
| **andCustom**             | {'data.first-name': function(attribute) {return attribute.startsWith('M');}} | And custom filters                            |
| **orCustom**              | {'data.first-name': function(attribute) {return attribute.startsWith('M');}} | Or custom filters                             |
| **custom**                | function(child) { const text = child.innerText; return text === 'Your Text';} | Custom filter function                         |

# JSON and Forms

## JSON to DOM
Markup JSON object to DOM object

	Template.jsonToDom(json, settings);

	Template.jsonToDom(json, {                                      // markup JSON object to DOM elements
	  parent: 'ul',                                                 // parent markup
	  markup: function(record){                                     // markup function
		let li = document.createElement('li');
		li.innerText = record.name;
		return li;
	  },
	  recursive: false                                              // recursive child elements
});
	
| **Config**   | Value                                  | Description                                  |
|----------|----------------------------------------|----------------------------------------------|
| **json** | JSON                                    | JSON object                               |
| **parent**     | string, array or function       | Parent DOM element/s                              |
| **markup**  | string, array or function | Child DOM element/s |
| **recursive**  | false or string | Recursive child elements |

Sample Usage

	let json = {categories: [{
	  "id": "1",
	  "name": "Automotive and Industrial",
	  "categories": [{
		"id": "8",
		"name": "Car Parts and Accessories"
	  },
	  {
		"id": "9",
		"name": "Machines and Robots"
	  }]
	},
	{
	  "id": "2",
	  "name": "Beauty and Health",
	  "categories": [{
		"id": "10",
		"name": "Cosmetics"
	  },
	  {
		"id": "11",
		"name": "Gym Supplements"
	  }]
	},
	{
	  "id": "3",
	  "name": "Books",
	  "categories": [{
		"id": "12",
		"name": "Educational"
	  },
	  {
		"id": "13",
		"name": "Fiction"
	  }]
	},
	{
	  "id": "4",
	  "name": "Clothing, Shoes and Jewelry",
	  "categories": [{
		"id": "14",
		"name": "Men"
	  },
	  {
		"id": "15",
		"name": "Women"
	  }]
	}
	};

	Template.jsonToDom(json['categories'], {
	  parent: 'ul',
	  markup: function(record){
		let li = document.createElement('li');
		li.innerText = record.name;
		return li;
	  },
	  recursive: 'categories'
	});
	
	// output
	<ul>
	  <li>Automotive and Industrial
		<ul>
		  <li>Car Parts and Accessories</li>
		  <li>Machines and Robots</li>
		</ul>
	  </li>
	  <li>Beauty and Health
		<ul>
		  <li>Cosmetics</li>
		  <li>Gym Supplements</li>
		</ul>
	  </li>
	  <li>Books
		<ul>
		  <li>Educational</li>
		  <li>Fiction</li>
		</ul>
	  </li>
	  <li>Clothing, Shoes and Jewelry
		<ul>
		  <li>Men</li>
		  <li>Women</li>
		</ul>
	  </li>
	</ul>
	
	Template.jsonToDom(json['categories'], {
	  parent: ['select', false],
	  markup: [
		function(record){                                       
		  let optgroup = document.createElement('optgroup');
		  optgroup.setAttribute('label', record.name);
		  return optgroup;
		},
		function(record){
		  let option = document.createElement('option');
		  option.setAttribute('value', record.id);
		  option.innerText = record.name;
		  return option;
		}
	  ],
	  recursive: ['categories', 'categories']
	});
	
	// output
	<select>
	  <optgroup label="Automotive and Industrial">
		<option value="8">Car Parts and Accessories</option>
		<option value="9">Machines and Robots</option>
	  </optgroup>
	  <optgroup label="Beauty and Health">
		<option value="10">Cosmetics</option>
		<option value="11">Gym Supplements</option>
	  </optgroup>
	  <optgroup label="Books">
		<option value="12">Educational</option>
		<option value="13">Fiction</option>
	  </optgroup>
	  <optgroup label="Clothing, Shoes and Jewelry">
		<option value="14">Men</option>
		<option value="15">Women</option>
	  </optgroup>
	</select>

## Flatten JSON
Flatten JSON to single layer with dot notation keys

	Template.flattenJSON(json);

## Unflatten JSON
Convert single layer object with dot nation keys to multilayer object

	Template.unflattenJSON(json);

## Form to JSON
Saves form values to a json file

	Template.formToJson(selector, case, mutator);

	Template.formToJson('#form', 'camel', {
	  firstName: function(value) {
	    return value.capitalizeAll();
	  }
	});

| **Config**   | Value                                  | Description                                  |
|----------|----------------------------------------|----------------------------------------------|
| **selector** | #id                                    | Target element                               |
| **case**     | dash, underscore, camel, pascal        | Form name cases                              |
| **mutator**  | {firstName: function(value) {return value.capitalizeAll();}} | Process the value before retrieving |

## JSON to Form
Populate a form with json values

	Template.jsonToForm(json, selector, case, mutator);

	Template.jsonToForm(json, form, 'snake', {
	  phone: function(value) {
	    return Template.phoneFormat(value);
	  }
	});

| **Config**   | Value                                  | Description                                  |
|----------|----------------------------------------|----------------------------------------------|
| **json**     | {username: 'Username'}                 | JSON object                                  |
| **selector** | #form                                  | Target form                                  |
| **case**     | dash, underscore, camel, pascal        | Form name cases                              |
| **mutator**   | {firstName: function(value) {return value.capitalizeAll();}} | Process the value before inserting |

## Form to Serialized
Saves form values to serialized text

	Template.formToSerialized(form, case, mutator);
	
	Template.formToSerialized('#form', 'camel', {
	  firstName: function(value) {
	    return value.capitalizeAll();
	  }
	});

| **Config**   | Value                                  | Description                                  |
|----------|----------------------------------------|----------------------------------------------|
| **selector** | #id                                    | Target element                               |
| **case**     | dash, underscore, camel, pascal        | Form name cases                              |
| **mutator**  | {firstName: function(value) {return value.capitalizeAll();}} | Process the value before retrieving |

## Serialized to Form
Populate a form with serialized text

	Template.serializedToForm(serialized, form, case, mutator);
	
	Template.serializedToForm(json, form, 'snake', {
	  phone: function(value) {
	    return Template.phoneFormat(value);
	  }
	});

| **Config**   | Value                                  | Description                                  |
|----------|----------------------------------------|----------------------------------------------|
| **serialized**     | username=Username               | Serialized text                                  |
| **selector** | #form                                  | Target form                                  |
| **case**     | dash, underscore, camel, pascal        | Form name cases                              |
| **mutator**   | {firstName: function(value) {return value.capitalizeAll();}} | Process the value before inserting |

# Form Validations
	
## Valid
Checks if a record is valid

	Template.valid(value, rules);
	
	Template.valid('mark@email.com', {
	  rename: 'Username',
	  rules: ['required', 'email', 'min:8'],
	  custom: {
		pci: function(val) {
		  return val.match(/^(?=^.{6,99}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%*-_=+.])(?!.*?(.)\1{1,})^.*$/)
			? true
			: false;
		}
	  },
	  messages: {
		required: function(val) {
		  return `${val} is a must!`;
		},
		min: function(val, min) {
		  return `${val} should be at least ${min} characters`;
		},
		pci: function(val) {
		  return `${val} must contain at least 8 characters, an uppercase letter, a number, and a special character`;
		}
	  }
	});
	
| **Config**   | Value                                                    | Description                                |
|----------|----------------------------------------------------------|--------------------------------------------|
| **rename**   | 'Username'                                               | Rename to human readable name              |
| **rules**    | ['required', 'email']                                    | Validation rules (see table below)         |
| **custom**   | {custom: function(value){ return value ? true : false; }}| Create your custom validation              |
| **messages** | {custom: function(value){return `${value} is invalid`; }}| Create your custom error message           |

## Validate
Validate a form
	
	Template.validate(selector, rules);
	
	Template.validate('#form', {
	  email: {
		rename: 'Username',
		rules: ['required', 'email', 'min:8']
	  },
	  password: {
		rename: 'Password',
		rules: 'required|min:8|pci',
		custom: {
		  pci: function(val) {
			return val.match(/^(?=^.{6,99}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%*-_=+.])(?!.*?(.)\1{1,})^.*$/)
			  ? true
			  : false;
		  }
		},
		messages: {
		  required: function(val) {
			return `${val} is a must!`;
		  },
		  min: function(val, min) {
			return `${val} should be at least ${min} characters`;
		  },
		  pci: function(val) {
			return `${val} must contain at least 8 characters, an uppercase letter, a number, and a special character`;
		  }
		}
	  }
	});
	
| Config   | Value                                                    | Description                                |
|----------|----------------------------------------------------------|--------------------------------------------|
| **selector** | #id                                                      | Target form selector                       |
| **rename**   | 'Username'                                               | Rename to human readable name              |
| **rules**    | ['required', 'email']                                    | Validation rules (see table below)         |
| **custom**   | {custom: function(value){ return value ? true : false; }}| Create your custom validation              |
| **messages** | {custom: function(value){return `${value} is invalid`; }}| Create your custom error message           |
	
## Live Validation
Form live validation

	Template.liveValidation(selector, rules, callbacks);
	
	Template.liveValidation('#form', {
	  email: {
		rename: 'Username',
		rules: ['required', 'email', 'min:8']
	  }
	},
	{
	  onValid: function(input) {
		input.style.border = '4px solid yellow';
	  },
	  onError: function(input, errors) {
		input.style.border = '4px solid red';
	  },
	  onNoValidation: function(input) {
		input.style.border = '';
	  }
	});
	
| **Config**   | Value                                                        | Description                                  |
|----------|--------------------------------------------------------------|----------------------------------------------|
| **selector** | #id                                                          | Target form selector                         |
| **rename**   | 'Username'                                                   | Rename to human readable name                |
| **rules**    | ['required', 'email']                                        | Validation rules (see table below)           |
| **custom**   | {custom: function(value){ return value ? true : false; }}    | Create your custom validation                |
| **messages** | {custom: function(value){ return `${value} is invalid`; }}   | Create your custom error message             |
	
## Validation Rules

| **Rule**       | Sample               | Description                                            |
|----------------|----------------------|--------------------------------------------------------|
| **alpha**      | 'alpha'              | Returns false if not alphabetical characters           |
| **alphadash**  | 'alphadash'          | Returns false if not alphabetical characters, dash or underscore |
| **alphanum**   | 'alphanum'           | Returns false if not alphabetical characters or numbers |
| **array**      | 'array'              | Returns false if not an array                          |
| **base64**     | 'base64'             | Returns false if not base64 format                     |
| **boolean**    | 'boolean'            | Returns false if not true or false                     |
| **decimal**    | 'decimal'            | Returns false if not a decimal number                  |
| **differs**    | 'differs:password'   | Returns false if same value with or same value as the string itself |
| **email**      | 'email'              | Returns false if not a valid email                     |
| **greater**    | 'greater:8'          | Returns false if less than the given value              |
| **in**         | 'in:Apple,Banana,Orange' | Returns false if the value is not within the array   |
| **integer**    | 'integer'            | Returns false if not an integer                        |
| **lesser**     | 'lesser:8'           | Returns false if greater than the given value           |
| **matches**    | 'matches:password'   | Returns false if not same value with or not same as the string itself |
| **max**        | 'max:8'              | Returns false if number of characters are less than the given value |
| **min**        | 'min:8'              | Returns false if number of characters are more than the given value |
| **natural**    | 'natural'            | Returns false if not a natural number                  |
| **not**        | 'not:username'       | Returns false if the same value or same as the string itself |
| **number**     | 'number'             | Returns false if not a number                          |
| **phone**      | 'phone'              | Returns false if not a valid phone number              |
| **regex**      | 'regex'              | Returns false if patterns don't match                  |
| **required**   | 'required'           | Returns false if value is empty                        |
| **sometimes**  | 'sometimes'          | Validate when present                                  |
| **url**        | 'url'                | Returns false if not a valid URL                       |
| **with**       | 'with:username,email' | Required with another field                            |
| **without**    | 'without:phone,email' | Required without the other field                       |

## Get Validation Errors
Retrieves validation errors

	Template.getValidationErrors();

# Fakers

## Fake
Generate fake content. You can modify the config file to add your own

	Template.fake(any);
	Template.fake('email');
	['email', 'text', 'firstName', 'lastName', 'domain', 'mobile', 'password', 'lorem', 'date', 'time', 'color'];
	
## Faker
Populate form with fake contents. Hold alt + shift and click the form to populate

	Template.faker();

# Blockers

## Block
Block the UI

	Template.block();							// blocks the document body
	Template.block(selector, settings);					
	
	Template.block('#element-id', {
	  content: 'Text/HTML',                          // additional content
	  addClass: {                                    // individual classes
		block: 'my-blocker',
		content: ['my-content', 'nice-content']
	  },
	  styles: {                                      // CSS styles applied to the blocking element
		backgroundColor: 'blue'
	  },
	  contentStyles: {                               // CSS styles applied to the content element
		color: 'white'
	  }
	});


| **Config**          | Value                          | Description                           |
|-----------------|--------------------------------|---------------------------------------|
| **selector**        | #id                            | Block a target element                 |
| **content**         | 'Loading'                      | Add content to block                   |
| **addClass**        | {block: 'my-blocker'}          | Add classes to the blocker             |
| **styles**          | {backgroundColor: 'blue'}      | Add styles to the blocker              |
| **contentStyles**   | {color: 'white'}               | Add styles to the content              |

## Loader
Block the UI with a loader

	Template.loader('#element-id', {
	  message: 'Loading',                                    // message
	  spinner: '<i class="fa fa-spinner"></i>',              // HTML or custom spinner icon
	  addClass: {                                            // individual classes
		block: 'my-preloader',
		message: ['my-message', 'nice-message'],
		spinner: ['my-spinner', 'nice-spinner']
	  },
	  styles: {                                              // CSS styles applied to the blocking element
		color: 'white',
		backgroundColor: 'blue'
	  },
	  messageStyles: {},                                     // CSS styles applied to the message element
	  spinnerStyles: {}                                      // CSS styles applied to the spinner element
	});
	
| **Config**          | Value                          | Description                           |
|-----------------|--------------------------------|---------------------------------------|
| **selector**        | #id                            | Block a target element                 |
| **message**         | 'Loading'                      | Loading message                        |
| **addClass**        | {block: 'my-blocker'}          | Add classes to the blocker             |
| **styles**          | {backgroundColor: 'blue'}      | Add styles to the blocker              |
| **spinnerStyles**   | {color: 'white'}               | Add styles to the spinner              |
| **messageStyles**   | {color: 'white'}               | Add styles to the message              |

## Block and Loader

	Template.blockOrLoader({
	  block: '#some-id',                            // id or DOM element to block
	  id: 'additional-id',                          // add id to the blocking element
	  addClass: ['my-block', 'block-1', 'block-2'], // array of classes to be added to the blocking element
	  autoClose: 2000,                              // auto-close in milliseconds
	  enterAnimation: 'fadeIn',                     // predefined or custom animation
	  exitAnimation: function() {                   // predefined or custom animation
		this.backdrop.animate({
		  opacity: [1, 0]
		}, {
		  duration: 200,
		  iterations: 1,
		  easing: 'ease-out'
		});
	  },
	  animationDuration: 200,                       // animation duration in milliseconds
	  styles: {                                     // CSS styles applied to the blocking element
		color: 'white',
		backgroundColor: 'blue'
	  },
	  beforeBlock: function() {
		// called before element is blocked
		// return false to cancel blockage
	  },
	  onBlock: function() {
		// called when element is blocked
		// return false to cancel blockage
	  },
	  onUnblock: function() {
		// called when element is unblocked
		// return false to cancel unblock
	  },
	  afterUnblock: function() {
		// called after element is unblocked
		// return false to cancel unblock
	  }
	});
	
| **Config**          | Value                            | Description                            |
|-----------------|----------------------------------|----------------------------------------|
| **block**           | #id                              | Block a target element                  |
| **id**              | new id                           | Add ID to the blocking element          |
| **addClass**        | 'my-block'                       | Add classes to the blocking element     |
| **autoClose**       | 2000                             | Auto close in 2 seconds                 |
| **enterAnimation**  | 'fadeIn'                         | Add Enter animation                     |
| **exitAnimation**   | function(){this.animate}         | Add exit animation                      |
| **message**         | 'Loading'                        | Loading message                         |
| **addClass**        | {block: 'my-blocker'}            | Add classes to the blocker              |
| **styles**          | {backgroundColor: 'blue'}        | Add styles to the blocker               |
| **spinnerStyles**   | {color: 'white'}                 | Add styles to the spinner               |
| **messageStyles**   | {color: 'white'}                 | Add styles to the message               |
	
## Unblock
Unblocks the UI

	Template.unblock();
	Template.unblock('#id');

# Modals and Dialogs

## Dialogs
Create a dialog modal

	Template.dialog({
	  closable: false,                         // closable
	  closeButton: false,                      // modal has close button
	  header: 'Confirm Dialog',                // header text or HTML
	  message: 'Are you sure?',                // content message
	  ok: 'Yes',                               // ok button text
	  cancel: 'No',                            // cancel button text
	  onOk: function() {                       // callback when ok is clicked

	  },
	  onCancel: function() {                   // callback when cancel is clicked
		this.close();                          // close modal
	  }
	}).open();                                 // open dialog

| **Config**       | Value                          | Description                              |
|------------------|--------------------------------|------------------------------------------|
| **closable**     | false                          | Dialog cannot be closed by right click    |
| **closeButton**  | false                          | Close button                             |
| **header**       | 'Confirm Dialog'               | Header text                              |
| **message**      | 'Are you sure?'                | Dialog message                           |
| **ok**           | 'Ok'                           | Ok button text                           |
| **cancel**       | 'Cancel'                       | Cancel button text                       |
| **onOk**         | function(){}                   | Callback function for ok                  |
| **onCancel**     | function(){this.close();}      | Callback function for cancel              |

## Overlay
Overlay DOM element as modal

	Template.overlay(selector, settings);
	
	Template.overlay('#id', {           // overlay content as modal
	  display: 'flex',                  // default element display, change to flex or grid depending on your design
	  header: 'My Modal'
	}).open();
	
| **Config**   | Value | Description                     |
|--------------|-------|---------------------------------|
| **selector** | #login | Target overlay element          |
| **display**  | flex  | Target display when shown        |

## Modal
Create a modal

	Template.modal({        // open a modal
	  content: 'Content'    // ok|cancel|custom - modal content
	}).open();
	
| **Config**  | Value |  Description  |
|-------------|-------|---------------|
| **content** | html  | Modal Content |

	Template.dialogOrModalOrOverlay({
	  id: false,                                       // add id
	  addClass: false,                                 // String or array of classes to be added
	  addClass: {                                      // Add classes to individual modal parts
		backdrop: 'my-modal-backdrop',
		modalContainer: 'my-modal-container',
		closeBtn: 'my-modal-close-btn',
		header: 'my-modal-header',
		body: 'my-modal-body',
		footer: 'my-modal-footer'
	  },
	  autoClose: false,                                // auto close in milliseconds
	  closable: true,                                  // close modal when clicking outside
	  draggable: true,                                 // draggable
	  closeButton: true,                               // modal has close button
	  backdrop: true,                                  // modal has backdrop
	  header: false,                                   // modal has header
	  footer: false,                                   // ok | cancel | custom - modal has footer (ok = single button, cancel = two buttons, custom = create your own)
	  enterAnimation: 'fadeIn',                        // predefined or custom animation
	  enterAnimation: function(modal) {                // custom animation
		// modal parts you can animate usually modalContainer
		// this.elem;                                 // overlay element
		// this.backdrop;                             // backdrop
		// this.modalContainer;                       // modal container
		// this.closeBtn;                             // close button
		// this.header;                               // modal header
		// this.body;                                 // modal body
		// this.footer;                               // modal footer
		// and anything inside them
		modal.animate({
		  left: ['100%', '50%']
		}, {
		  duration: 300
		});
	  },
	  exitAnimation: fadeOut,                          // predefined or custom animation
	  animationDuration: 200,                          // animation duration in milliseconds
	  styles: {},                                      // any CSS styles to be applied to the modal container
	  backdropStyles: {},                              // any CSS styles to be applied to the div element
	  closeStyles: {},                                 // any CSS styles to be applied to the close button
	  headerStyles: {},                                // any CSS styles to be applied to the modal header
	  bodyStyles: {},                                  // any CSS styles to be applied to the modal body
	  footerStyles: {},                                // any CSS styles to be applied to the modal footer
	  ok: 'Ok',                                        // ok button text
	  cancel: 'Cancel',                                // cancel button text
	  beforeOpen: function() {
		// called before modal opens
		// return false to cancel opening modal
	  },
	  onOpen: function() {
		// called when modal opens
		// return false to cancel opening modal
	  },
	  beforeClose: function() {
		// called before modal closes
		// return false to cancel closing modal
	  },
	  onClose: function() {
		// called when modal closes
		// return false to cancel closing modal
	  },
	  onOk: function() {
		// called when modal-ok is clicked
	  },
	  onCancel: function() {
		// called when modal-cancel is clicked
		// usually close modal after cancel
		this.close();
	  }
	});

| **Config**           | Value                                 | Description                                     |
|----------------------|---------------------------------------|-------------------------------------------------|
| **content**          | html                                  | Modal Content                                   |
| **id**               | my-modal                              | Add an ID to the modal                          |
| **addClass**         | {backdrop: 'my-backdrop', header: 'my-header'} | Add classes                             |
| **autoClose**        | 200                                   | Autoclose modal in milliseconds                |
| **closable**         | false                                 | Cannot close by right click                     |
| **draggable**        | false                                 | Draggable                                       |
| **closeButton**      | false                                 | Close button                                    |
| **backdrop**         | true                                  | Backdrop                                        |
| **header**           | title                                 | Modal header to be used                         |
| **footer**           | false                                 | Modal footer to be used                         |
| **enterAnimation**   | fadeIn                                | Modal enter animation                           |
| **exitAnimation**    | fadeOut                               | Modal exit animation                            |
| **animationDuration**| 200                                   | Animation duration in milliseconds             |
| **styles**           | {border: '1px solid red'}             | Style the modal container                       |
| **backdropStyles**   | {color: 'blue'}                       | Style the backdrop                              |
| **closeStyles**      | {color: 'white'}                      | Style the close button                          |
| **headerStyles**     | {color: 'black'}                      | Style the header                                |
| **bodyStyles**       | {color: 'black'}                      | Style the body                                  |
| **footerStyles**     | {color: 'black'}                      | Style the footer                                |
| **ok**               | Ok                                    | Ok button text                                  |
| **cancel**           | Cancel                                | Cancel button text                              |
| **beforeOpen**       | function(){return false}              | Callback before opening the modal               |
| **onOpen**           | function(){}                          | Callback when the modal opens                   |
| **beforeClose**      | function(){return false}              | Callback before the modal closes                |
| **onClose**          | function(){}                          | Callback when the modal closes                  |
| **onOk**             | function(){}                          | Callback when the ok button is pressed          |
| **onCancel**         | function(){this.close();}             | Callback when the cancel button is pressed      |

# Lazy Loading
Load images only when shown also known as lazy loading

	<img class="tpl-lazy" src="placeholder.webp" data-src="actual-image.webp" alt="lazy-load-image />

	Template.lazyLoad('.tpl-lazy', {  // lazy load images
	  beforeLoad: function() {        // callback before loading
		return false;                 // return false to cancel loading
	  },
	  onLoad: function() {},          // callback when loading
	  onFinishLoading: function() {}  // callback after loading
	});
	
| **Config**           | Value                             | Description                                   |
|----------------------|-----------------------------------|-----------------------------------------------|
| **beforeLoad**       | function(){ return false; }       | Callback before loading, return false to cancel Template loading |
| **onLoad**           | function(){}                      | Callback on load                              |
| **onFinishLoading**  | function(){}                      | Callback on loading finish                    |

# Reveals

## Reveal
Animate a dom element when revealed

	Template.reveal(selector, settings);

	Template.reveal('#section', {
	  animation: function(section) {                      // animate function
		section.animate({
		  opacity: [0, 1],
		  transform: ['translateY(2rem)', 'translateY(0rem)']
		}, {
		  duration: 1000,
		  iterations: 1,
		  easing: "ease-out"
		});
	  },
	  beforeShow: function(section) {                     // callback before showing element (called once)
		console.log(section);
	  },
	  onShow: function(section) {                         // callback when element is shown (called every time the element shows)
		console.log(section);
	  },
	  onHide: function(section) {                         // callback when element is hidden (called every time the element is hidden)
		console.log(section);
	  }
	});
	
| **Config**       | Value                          | Description                                  |
|------------------|--------------------------------|----------------------------------------------|
| **selector**     | #id                            | Target element                               |
| **animation**    | fade-in                        | Custom animation                             |
| **beforeShow**   | function(target){}             | Callback before the target shows             |
| **onShow**       | function(target){}             | Callback when the target shows               |
| **onHide**       | function(target){}             | Callback when the target is hidden           |

## Children Reveal
Animate the children of a dom element when revealed

	Template.childrenReveal(selector, settings);

	Template.childrenReveal('#section', {
	  children: 'li',                           // child element to be animated
	  duration: 100,                            // interval for every child animation
	  animation: function(section) {            // animate function
		section.animate({
		  opacity: [0, 1],
		  transform: ['translateY(2rem)', 'translateY(0rem)']
		}, {
		  duration: 1000,
		  iterations: 1,
		  easing: "ease-out"
		});
	  },
	  beforeShow: function(parent) {},          // callback before showing element (called once)
	  onShow: function(parent) {},              // callback when element is shown (called every time the element shows)
	  onChildShow: function(child) {            // callback when a child is shown (called every time a child is shown)
		console.log(child);
	  },
	  onHide: function(parent) {}               // callback when element is hidden (called every time the element is hidden)
	});

| **Config**       | Value                          | Description                                  |
|------------------|--------------------------------|----------------------------------------------|
| **selector**     | #id                            | Target element                               |
| **children**     | li                             | Children selector                            |
| **animation**    | fade-in                        | Custom animation                             |
| **beforeShow**   | function(target){}             | Callback before the target shows             |
| **onShow**       | function(target){}             | Callback when the target shows               |
| **onChildShow**  | function(child){}              | Callback when a child is shown               |
| **onHide**       | function(target){}             | Callback when the target is hidden           |

# Infinite Scroll
Load items indefinitely

	Template.infiniteScroll(selector, settings);

	Template.infiniteScroll('ul', {
	  children: 'li',           // children to be observed
	  observerSettings: {},     // intersection observer settings
	  onTop: function(ul) {},   // callback when scrolling to first item
	  onBottom: function(ul) {  // callback when scrolling to last item
		ul.append();            // append new elements
	  }
	});
	
	Template.infiniteScroll('tbody', {
	  children: 'tr',              // children to be observed
	  observerSettings: {},        // intersection observer settings
	  onTop: function(tbody) {},   // callback when scrolling to first item
	  onBottom: function(tbody) {  // callback when scrolling to last item
		ul.append(tr);             // append new elements
	  }
	});
	
| **Config**             | Value                                                                 | Description                                   |
|------------------------|-----------------------------------------------------------------------|-----------------------------------------------|
| **selector**           | #id                                                                   | Target element                                |
| **children**           | li                                                                    | Scrollable child elements                     |
| **observerSettings**   | {rootMargin: '10px', threshold: [0.25, 0.5, 0.75]}                    | IntersectionObserver additional settings      |
| **onTop**              | function(){}                                                          | Callback when top child is shown              |
| **onBottom**           | function(target){ target.append(newChild) }                           | Callback when bottom child is shown           |

# Paginate
Create pagination

	Template.paginate(selector, settings);

	Lazy.paginate('#form', {
	  items: 'li',                            // page items
	  addClass: false,                        // add class to pagination
	  itemsPerPage: 1,                        // items to be shown per page
	  loop: false,                            // loop pages
	  header: false,                          // header per page
	  autoPlay: false,                        // auto play pages
	  autoPlayDuration: 5000,                 // auto play interval
	  navigation: true,                       // navigation buttons
	  submit: false,                          // show last next button
	  styles: {},                             // additional pagination styles
	  headerStyles: {},                       // header styles
	  previousButtonStyles: {},               // previous button styles
	  nextButtonStyles: {},                   // next button styles
	  navigationStyles: {},                   // navigation styles
	  navigationButtonStyles: {},             // navigation button styles
	  enterAnimation: function(item) {         // page enter animation
		item.style.display = '';
		item.animate({
		  opacity: [0, 1]
		}, {
		  duration: 400,
		  iterations: 1,
		  direction: 'normal',
		  easing: "ease-in-out"
		});
	  },
	  exitAnimation: function(item) {          // page exit animation
		item.style.display = 'none';
		item.animate({
		  opacity: [1, 0]
		}, {
		  duration: 400,
		  iterations: 1,
		  direction: 'normal',
		  easing: "ease-in-out"
		});
	  },
	  nextEnterAnimation: false,              // next enter animation override enter animation
	  nextExitAnimation: false,               // next exit animation override exit animation
	  previousEnterAnimation: false,          // previous enter animation override enter animation
	  previousExitAnimation: false,           // previous exit animation override exit animation
	  animationDuration: 400,                 // animation durations
	  next: 'Next',                           // next button text
	  previous: 'Previous',                   // previous button text
	  onFirst: function(event, data) {},       // callback for first page
	  beforeNext: function(event, data) {},    // callback before next
	  onNext: function(event, data) {},        // callback on next
	  beforePrevious: function(event, data) {},// callback before previous
	  onPrevious: function(event, data) {},    // callback on previous
	  beforeChange: function(event, data) {},  // callback before page change
	  onChange: function(event, data) {},      // callback on page change
	  onScroll: function(event, data) {},      // callback on scroll
	  onLast: function(event, data) {},        // callback for last page
	  pages: [
		{
		  title: 'Part 1',
		  items: [0, 1, 2, 3, 4],
		  enterAnimation: false,
		  exitAnimation: false,
		  animationDuration: 200,
		  styles: {},
		  headerStyles: {},
		  previousButtonStyles: {},
		  nextButtonStyles: {},
		  navigationStyles: {},
		  navigationButtonStyles: {},
		  next: 'Next',
		  previous: 'Previous',
		  beforeNext: function(event, data) {},
		  onNext: function(event, data) {},
		  beforePrevious: function(event, data) {},
		  onPrevious: function(event, data) {},
		  onShow: function(event, data) {},
		  onHide: function(event, data) {}
		},
		{
		  title: 'Part 2',
		  items: [5, 6, 7, 8, 9]
		},
		{
		  title: 'Part 3',
		  items: [10, 11, 12, 13, 14],
		  next: 'Submit',
		  onNext: function(event, data) {
			console.log('Submit Form');
		  }
		}
	  ]
	})
	.play(3000)                         // auto play pages
	.stop()                             // stop auto play
	.redraw()                           // redraws buttons and navigations
	.destroy();                         // removes pagination

| **Config**                  | Value                   | Description                                      |
|-----------------------------|-------------------------|--------------------------------------------------|
| **items**                   | 'li'                    | Page items                                       |
| **addClass**                | false                   | Add class to pagination                          |
| **itemsPerPage**            | 1                       | Items to be shown per page                       |
| **loop**                    | false                   | Loop pages                                       |
| **header**                  | false                   | Header per page                                  |
| **autoPlay**                | false                   | Auto play pages                                  |
| **autoPlayDuration**        | 5000                    | Auto play interval                               |
| **navigation**              | true                    | Navigation buttons                               |
| **submit**                  | false                   | Show last next button                            |
| **styles**                  | {}                      | Additional pagination styles                     |
| **headerStyles**            | {}                      | Header styles                                    |
| **previousButtonStyles**    | {}                      | Previous button styles                           |
| **nextButtonStyles**        | {}                      | Next button styles                               |
| **navigationStyles**        | {}                      | Navigation styles                               |
| **navigationButtonStyles**  | {}                      | Navigation button styles                         |
| **enterAnimation**          | function(item)          | Page enter animation                             |
| **exitAnimation**           | function(item)          | Page exit animation                              |
| **nextEnterAnimation**      | false                   | Next enter animation override enter animation    |
| **nextExitAnimation**       | false                   | Next exit animation override exit animation      |
| **previousEnterAnimation**  | false                   | Previous enter animation override enter animation |
| **previousExitAnimation**   | false                   | Previous exit animation override exit animation   |
| **animationDuration**       | 400                     | Animation durations                              |
| **next**                    | 'Next'                  | Next button text                                 |
| **previous**                | 'Previous'              | Previous button text                             |
| **onFirst**                 | function(event, data){} | Callback for first page                          |
| **beforeNext**              | function(event, data){} | Callback before next                             |
| **onNext**                  | function(event, data){} | Callback on next                                 |
| **beforePrevious**          | function(event, data){} | Callback before previous                         |
| **onPrevious**              | function(event, data){} | Callback on previous                             |
| **beforeChange**            | function(event, data){} | Callback before page change                      |
| **onChange**                | function(event, data){} | Callback on page change                          |
| **onScroll**                | function(event, data){} | Callback on scroll                               |
| **onLast**                  | function(event, data){} | Callback for last page                           |
	
| **Functions**     | Value                        | Description                      |
|-------------------|------------------------------|----------------------------------|
| **play(duration)**| paginated.play(3000)         | Autoplay in milliseconds         |
| **stop()**        | paginated.stop()             | Stop autoplay                    |
| **redraw()**      | paginated.redraw()           | Redraws paginations              |
| **destroy()**     | paginated.destroy()          | Remove paginations               |

	
# SVG Map
Add events to SVG Map

	Template.svgMap(selector, settings);
	
	let svgMap = Template.svgMap('#svg-map', {
	  max: 1,                                  // maximum number of selectable paths
	  readonly: true,                         // make the map read-only
	  onSelect: function(path) {               // callback when a path is selected
		return false;                          // return false will cancel the selection
	  },
	  onDeSelect: function(path) {             // callback when a path is deselected
		return false;                          // return false will cancel the deselection
	  },
	  onMax: function() {                      // callback when the maximum number of paths is reached
		// Perform actions when the maximum number of paths is reached
	  }
	})
	.changeMax(3)
	.readOnly()
	.disable()
	.enable()
	.select(['Item'])
	.clear();
	
| **Config**    | Value                                  | Description                          |
|---------------|----------------------------------------|--------------------------------------|
| **selector**  | #svg                                   | Target svg selector                   |
| **max**       | 1                                      | Max item selected                     |
| **readonly**  | false                                  | Disable selection                     |
| **onSelect**  | function(path){return false;}          | Callback for when path is selected    |
| **onDeSelect**| function(path){return false;}          | Callback for deselecting a path       |
| **onMax**     | function(){}                           | Callback when max selections are reached |


| **Functions**            | Value                     | Description                          |
|--------------------------|---------------------------|--------------------------------------|
| **changeMax(max)**       | svgMap.changeMax(3)       | Update number of max selections      |
| **readOnly()**           | svgMap.readOnly()         | Disable selection                    |
| **disable()**            | svgMap.disable()          | Disable selection                    |
| **enable()**             | svgMap.enable()           | Enable selection                     |
| **select(items)**        | svgMap.select(['Item'])   | Highlight items                      |
| **clear()**              | svgMap.clear()            | Clear selections                     |
| **getValues()**          | svgMap.getValues()        | Retrieves selected values            |
| **getSelectedPaths()**   | svgMap.getSelectedPaths() | Retrieves selected paths             |
