
// constants
Template.baseUrl;               // base url

// Number Helpers
(Number).pad(size);             // add zero padding to a number                     // (3).pad(3)                           // 003

// String Helpers
String.trim();                  // removes trailing and leading white spaces        // ' Sample Text '.trim()               // Sample Text
String.trimAll();               // removes all white spaces                         // ' Sample Text '.trimAll()            // SampleText
String.capitalize();            // capitalize first letter of a word or phrase      // 'sample text'.capitalize()           // Sample text
String.capitalizeAll();         // capitalize all words in a phrase                 // 'sample-text'.cleanCapitalizeAll()   // Sample Text
String.cleanCapitalizeAll();    // capitalize and remove dashes and underscores     // 'sample text'.cleanCapitalizeAll()   // SampleText
String.deCapitalize();          // de-capitalize first letter of a word or phrase   // 'Sample Text'.deCapitalize();        // sample Text
String.deCapitalizeAll();       // de-capitalize all words in a phrase              // 'Sample Text'.deCapitalizeAll();     // sample text

// Convert string from one case to another
String.toDash();                // convert spaces and underscores to dash           // 'sample text'.toDash()               // sample-text
String.toUnderscore();          // convert spaces and dashes to underscore          // 'sample text'.toUnderscore()         // sample_text
String.toSnake();               // convert spaces and dashes to underscore          // 'sample text'.toSnake()              // sample_text
String.toPascalCase();          // convert string to pascal case                    // 'sample text'.toPascalCase()         // SampleText
String.toCamelCase();           // convert string to camel case                     // 'sample text'.toCamelCase()          // sampleText
String.changeCase('camel');     // convert string to specified case                 // 'Sample Text'.changeCase('dash');    // sample-text

// Array
Array.random();                 // retrieves a random element from array
Array.joinLast(', ', 'and');    // join array with custom last conjunction          // ['a','b','c'].joinLast(', ', 'and'); // a, b and c

// Local Storage
Storage.setObject('key', value);                        // store JSON object on local storage       // Storage.setObject('key', json);
Storage.getObject('key');                               // retrieve JSON object on local storage    // Storage.getObject($key);

// Custom Classes
Template.on(type, selector, callback, options);         // add event listener to element
Template.don(type, selector, callback, options);        // add event listener to document
Template.addEventListener(type, selector, callback, options);    // add event listener
Template.getCssVar('--css-var');                        // retrieve css variable                    // Template.getCssVar(--text-color);
Template.draggable(dom);                                // make dom element draggable                   

Template.sort(parent, children, sortAndOrder);          // sort elements                            // Template.sort('#tbody", 'tr', {'innerText': 'asc', 'data.id': 'desc'});
Template.filter(parent, children, settings);            // filter elements                          // Template.filter('#tboyd', 'tr', {search: 'John', searchAttributes: ['innerText', 'data.first-name']}

Template.flattenJson(json, 'underscore');               // flatten JSON to single array with dot notation keys
Template.formToJson(form);                              // convert form to json
Template.jsonToForm(json, form);                        // populate form with json

Template.fake(anything);                                    // generates fake content                   // Template.fake('email');
Template.faker();                                            // hold alt + shift then click form to populate

// block and loader
Template.block();               // blocks ui
Template.loader();              // blocks ui with a loader
Template.unblock();             // unblock ui

// modals and dialogs
Template.dialog();                         // open confirm dialog modal
Template.overlay('#some-id');              // overlay dom as modal
Template.modal();                          // open modal

// carousel
Template.carousel(id, settings);           // creates a carousel            // Template.carousel('#ul', {slides: 'li'});

Template.valid(value, validations);             // check if a value is valid
Template.validate(json, validationObject);      // form validation
Template.validate('#form', validationObject);   // json validation  
Template.liveValidation('#form', rules, callbacks);     // form live validation
Template.getValidationErrors();                 // retrieve validation errors

Template.getStatus();                      // retrieve status success or failed                     // {message: 'Failed', errors{attribute1: 'Error Message'}}

Template.lazyLoad('img');                   // lazy load images                 // Template.lazyLoad('.tpl-lazy');

// reveal
Template.reveal(id, settings);              // animate object on reveal         // Template.reveal('#id', {animation: 'fade-in'});
Template.childrenReveal(id, settings);      // animate children reveal          // Template.childrenReveal('#ul");

// infinite scroll
Template.infiniteScroll(selector, settings);                        // infinite scroll      // Template.infinteScroll('ul',{onBottom: function(ul){}});

Template.svgMap(selector, settings);                                // svg map

/* use cases */
Template.on('click', '#my-button', function(e){                     // add event listener
    e.preventDefault();
});
Template.don('custom-event', '.new-buttons', function(e){           // add custom event
    console.log(e.currentTarget);
});
Template.don('custom-event', function(e){                           // catch custom event
    console.log(e.target);
});

Template.lazyLoad('.tpl-lazy',{                                     // lazy load images
    beforeLoad: function(){                                         // callback before loading
        return false;                                               // return false to cancel loading
    },
    onLoad: function(){},                                           // callback when loading
    onFinishLoading: function(){}                                   // callback after loading
});

Template.infiniteScroll('ul', {
    children: 'li',                                                  // children to be observed
    observerSettings: {},                                           // intersection observer settings
    onTop: function(ul){},                                           // scroll to first item
    onBottom: function(ul){                                          // scroll to last item
        ul.append();                                                 // append new elements
    }
});

Template.reveal('#section', {
    animation: function(section) {                                 // animate function
        section.animate({
            opacity: [0, 1],
            transform: ['translateY(2rem)', 'translateY(0rem)']
        }, { 
            duration: 1000,
            iterations: 1,
            easing: "ease-out"
        });
    },
    beforeShow: function(section) {                                // callback before showing element (called once)                    
        console.log(section);
    },
    onShow: function(section){                                     // callback when element is shown (called everytime the element shows)
        console.log(section);
    },
    onHide: function(section){                                     // callback when element is hidden (called everytime the elemeent is hidden)
        console.log(section);
    }
});

Template.childrenReveal('#section', {
    children: 'li',                                                // child element to be animated
    duration: 100,                                                 // interval for every child animation
    animation: function(section) {                                 // animate function
        section.animate({
            opacity: [0, 1],
            transform: ['translateY(2rem)', 'translateY(0rem)']
        }, { 
            duration: 1000,
            iterations: 1,
            easing: "ease-out"
        });
    },
    beforeShow: function(parent) {},                              // callback before showing element (called once)
    onShow: function(parent){},                                   // callback when element is shown (called everytime the element shows)
    onChildShow: function(child) {                                 // callback when a child is shown (called everytime a child is shown)
        console.log(child);
    },
    onHide: function(parent){}                                     // callback when element is hidden (called everytime the elemeent is hidden)
});

// form to json
Template.formToJson(form, 'camel', {        // convert form to json
    firstName: function(value) {
        return value.capitalizeAll();
    }
});

// json to form
Template.jsonToForm(json, form, 'snake', {  // populate form with json
    phone: function(value) {
        return Template.phoneFormat(value);
    }
});

// filter
Template.filter('#tbody', 'tr', {
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
        'data.status': 'pending',
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
        },
    },
    orCustom: {                                     // Function custom function using OR
        'data.first-name': function(attribute) {    // attribute = attribute value
            return attribute.startsWith('M');       // first name starts with "M" OR
        },
        'data.last-name': function(attribute) {
            return attribute.startsWith('A');       // last name starts with "A"
        },
    },
    custom: function(child) {                       // Function custom function
        const text = child.innerText;               // child will be the element being filtered
        return text === 'Your Text';                // return true = show element, false = hide element
    }
});

// block and loader use cases
Template.block().unblock();     // chaining 

const blocker = Template.loader();
blocker.unblock();              // save to a variable

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
Templage.unblock('#element-id');

Template.loader({
    block: '#element-id',                           // id or dom element to block
    message: 'Loading',                             // message
    spinner: '<i class="fa fa-spinner"></i>',       // html|icon custom spinner
    addClass: {                                     // individual classes
        block: 'my-preloader',
        message: 'my-message, nice-message',
        spinner: ['my-spinner', 'nice-spinner']
    },
    styles: {                                       // any css, will be applied to blocking element
        color: 'white',
        backgroundColor: 'blue'
    },
    messageStyles: {},                              // any css, will be applied to the message element
    spinnerStyles: {}                               // any css, will be applied to the spinner element
});
Template.loader().changeMessage('New Message').open();  // chaining
Templage.unblock('#element-id');

Template.blockOrLoader({
    block: '#some-id',                  // id or dom element to block
    id = 'additional-id',               // add id to the blocking element
    addClass = 'my-block',              // add class the blocking element
    addClass: ['block-1', 'block-2'],   // array classes
    autoClose: 2000,                    // auto-close in milliseconds
    enterAnimation = 'fadeIn',          // predefined|custom animation
    exitAnimation = function(){         // predefined|custom animation
        this.backdrop
            .animate({
                opacity: [1, 0]
            }, {
                duration: 200,
                iterations: 1,
                easing: 'ease-out'
            });
    },
    animationDuration = 200,            // animation duration in milliseconds
    styles: {                           // any css, will be applied to blocking element
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

// modal use cases
Template.modal().open();                   // method chaining
const myModal = Template.modal();          // store to a variable
myModal.close();

Template.dialog({                          // open confirm dialog modal
    closable = false,                      // closable
    closeButton = false,                   // modal has close button
    header = 'Confirm Dialog',             // header text or html
    message = 'Are you sure?',             // content message
    ok = 'Yes',                            // ok button text
    cancel = 'No',                         // cancel button text
    onOk: function () {                    // callback when ok is clicked
        
    },
    onCancel: function () {                // callback when cancel is clicked
        this.close();                      // close modal
    }
}).open();                                 // open dialog

Template.overlay('#some-id', {             // overlay content as modal
    display: 'block',                      // default element display, change to flex or grid depending on your design
    header: 'My Modal'
}).open();

Template.modal({                            // open a modal
    content: 'Content'                      // ok|cancel|custom - modal content
});

Template.dialogOrModalOrOverlay({           // dialog|modal|overlay complete settings
    id = false,                             // add id
    addClass = false,                       // String|Array add class
    addClass = {                            // Add classes to individual modal parts
        backdrop: 'my-modal-backdrop',
        modalContainer: 'my-modal-container',
        closeBtn: 'my-modal-close-btn',
        header: 'my-modal-header',
        body: 'my-modal-body',
        footer: 'my-modal-footer'
    },
    autoClose = false,                      // auto close in milliseconds
    closable = true,                        // close modal when clicking outside
    draggable = true,                       // draggable
    closeButton = true,                     // modal has close button
    backdrop = true,                        // modal has backdrop
    header = false,                         // modal has header
    footer = false,                         // ok|cancel|custom - modal has footer, ok = single button, cancel = two buttons, custom = create your own
    enterAnimation = 'fadeIn',              // predefined|custom animation
    enterAnimation = function(modal){            // custom animation
                                            // modal parts you can animate usually modalContainer
//        this.elem;                        // overlay element
//        this.backdrop;                    // backdrop
//        this.modalContainer;              // modal container
//        this.closeBtn;                    // close button
//        this.header;                      // modal header
//        this.body;                        // modal body
//        this.footer;                      // modal footer
                                            // and anyting inside them
        modal.animate({
            left: ['100%', '50%']
        }, {
            duration: 300
        });
    },
    exitAnimation = fadeOut,                // predefined|custom animation
    animationDuration = 200,                // animation duration in milliseconds
    styles = {},                            // any css, will be applied to the modal container
    backdropStyles = {},                    // any css, will be applied to the div element
    closeStyles = {},                       // any css, will be applied to the close button
    headerStyles = {},                      // any css, will be applied to the modal header
    bodyStyles = {},                        // any css, will be applied to the modal body
    footerStyles = {},                      // any css, will be applied to the modal footer
    ok = 'Ok',                              // ok button text
    cancel = 'Cancel',                      // cancel button text
    beforeOpen = function(){
        // called before modal opens
        // return false modal open
    },
    onOpen = function(){
        // called when modal opens
        // return false to cancel opening modal
    },
    beforeClose = function(){
        // called before modal closes
        // return false to cancel closing modal
    },
    onClose = function(){
        // called when modal closes
        // return false to cancel closing modal
    },
    onOk  = function(){
        // called when modal-ok is clicked
    },
    onCancel = function(){
        // called when modal-cancel is clicked
        // usually close modal after cancel
        this.close();
    }
});

Template.fake('email');
['email', 'text', 'firstName', 'lastName', 'domain', 'mobile', 'password', 'lorem', 'date', 'time', 'color']; // create your own on config


//Template.valid('sample', ['alpha', 'min:3', 'max:54'], {} = {
Template.valid('mark@email.com', {
        rename: 'Username',
        rules: ['required', 'email', 'min:8'],
        custom: {
            pci: function(val){ return val.match(/^(?=^.{6,99}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%*-_=+.])(?!.*?(.)\1{1,})^.*$/) ? true : false; }
        },
        messages: {
            required: function(val){ return `${val} is a must!`; },
            min: function(val, min){ return `${val} should be atleast ${min} characters`; },
            pci: function(val){ return `${val} must contain atleast 8 characters, an uppercase a number and a special character`; }
        }
    },
{} = {
    alpha: 'alpha',                         // returns false if not alphabetical characters
    alphadash: 'alphadash',                 // returns false if not alphabetical characters, dash or underscore
    alphanum: 'alphanum',                   // returns false if not alphabetical characters or numbers
    array: 'array',                         // returns false if not an array
    base64: 'base64',                       // returns false if not base64 format
    boolean: 'boolean',                     // returns false if not true or false
    decimal: 'decimal',                     // returns false if not a decimal number
    differs: 'differs:password',            // returns false if same value with or same value as the string itself
    email: 'email',                         // returns false if not a valid email
    greater: 'greater:8',                   // returns false if less than the given value
    in: 'in:Apple,Banana,Orange',           // returns false if the value is not within the array
    integer: 'integer',                     // returns false if not an integer
    lesser: 'lesser:8',                     // returns false if greater than the given value
    matches: 'matches:password',            // returns false if not same value with or not same as the string itself
    max: 'max:8',                           // returns false if number of characters are less than the given value
    min: 'min:8',                           // returns false if number of characters are more than the given value
    natural: 'natural',                     // returns false if not a natural number
    not: 'not:username',                    // returns false if the same value or same as the string itself
    number: 'number',                       // returns false if not a number
    phone: 'phone',                         // returns false if not a valid phone number
    regex: 'regex',                         // returns false if patters dont match
    required: 'required',                   // returns false if value is empty
    sometimes: 'sometimes',                 // validate when present
    url: 'url',                             // returns false if not a valid url
    with: 'with:username,email',            // required with another field
    without: 'without:phone,email'          // required without the other field
});

Template.validate('#form', {
    email: {
        rename: 'Username',
        rules: ['required', 'email', 'min:8']
    },
    password: {
        rename: 'Password',
        rules: 'required|min:8|pci',
        custom: {
            pci: function(val){ return val.match(/^(?=^.{6,99}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%*-_=+.])(?!.*?(.)\1{1,})^.*$/) ? true : false; }
        },
        messages: {
            required: function(val){ return `${val} is a must!`; },
            min: function(val, min){ return `${val} should be atleast ${min} characters`; },
            pci: function(val){ return `${val} must contain atleast 8 characters, an uppercase a number and a special character`; }
        }
    }
});

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
        onNoValidation: function(elem) {
            input.style.border = '';
    }
});

 let svgMap = Template.svgMap('#svg-map', {
    max: 1,
    readonly: true,
    onSelect: function(path){
        return false; // return false will cancel select
    },
    onDeSelect: function(path){
        return false; // return false will cancel deselect
    },
    onMax: function(){
        
    }
 })
.changeMax(3)
.readOnly()
.disable()
.enable()
.select(['Item'])
.clear();

svgMap.getValues();             // retrieve selected path ids
svgMap.getSelectedPaths();      // retrieve selected paths

let carousel = Template.carousel('#div', {
    slides: 'li',                           // child elements to be slides
    display: 1,                             // number of slides shown per page
    autoPlay: false,                        // auto next
    autoPlayDuration: 5000,                 // auto next in milliseconds
    buttons: true,                          // add previous and next buttons
    navigation: true,                       // add navigation buttons
    styles: {},                             // carousel styles
    previousButtonStyles: {},               // previous button styles
    nextButtonStyles: {},                   // next button styles
    navigationStyles: {},                   // navigation styles
    navigationButtonStyles: {},             // navigation buttons styles
    nextEnterAnimation: function(slide) {
        slide.animate({                     // nex slide enter animation
            opacity: [0, 1], 
            transform: ['translateX(100%)', 'translateX(0%)']}, 
        {
            duration: duration, 
            iterations: 1, 
            easing: 'ease-out'
        });
    },
    nextExitAnimation: function(slide) {    // next slide exit animation
        slide.animate({
            opacity: [1, 0], 
            transform: ['translateX(0%)', 'translateX(-100%)']}, 
        {
            duration: duration, 
            iterations: 1, 
            easing: 'ease-out'
        }).onfinish = function(e) {
            slide.style.display = 'none';
            slide.style.position = '';
        };
    },
    previousEnterAnimation: false,          // previous slide enter animation
    previousExitAnimation: false,           // previous slide exit animation
    animationDuration: 400,                 // animation duration
    onFirst: function(carousel, slide){},   // callback for first slide
    onNext: function(){},                   // callback for next operation
    onPrevious: function(){},               // callback for previous operation
    onGoto: function(){},                   // callback on goto operation
    onChange: function(){},                 // callback on change operation
    onLast: function(carousel, slide){      // callback for last slide
        carousel.append('new slides');
        this.redraw();
    }
});
carousel.play(5000);                        // auto play carousel
carousel.stop();                            // stop auto play
carousel.redraw();                          // redraws buttons and navigations
carousel.destroy();                         // destroys buttons and navigations

Template.hierarchy(json, {
    root: 'ul',
    child: 'li',
    children: ['categories', 'child-categories', 'grand-child-categories'],
    markup: function(data) {
        return `<div>${data['name']}</div>`;
    }
});

Lazy.animate('#div', {
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

Lazy.multiform('#form',
{
    items: `li`,
    addClass: false,
    header: true,
    buttons: true,
    navigations: true,
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
    submit: 'Submit',
    beforeNext: function(){},
    onNext: function(){},
    beforePrevious: function(){},
    onPrevious: function(){},
    beforeChange: function(){},
    onChange: function(){},
    onSubmit: function(){},
    parts: [
        {
            title: 'Part 1',
            items: [0,1,2,3,4],
            enterAnimation: false,
            exitAnimation: false,
            animationDuration: 200,
            styles: {},
            headerStyles: {},
            previousButtonStyles:{},
            nextButtonStyles:{},
            navigationStyles: {},
            navigationButtonStyles:{},
            next: 'Next',
            previous: 'Previous',
            beforeNext: function (){},
            onNext: function (){},
            beforePrevious: function (){},
            onPrevious: function (){},
            onShow: function (){},
            onHide: function (){}
        },
        {
            title: 'Part 2',
            items: [5,6,7,8,9]
        },
        {
            title: 'Part 3',
            items: [10,11,12,13,14],
            next: 'Submit'
        }
    ]
});