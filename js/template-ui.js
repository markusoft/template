/* 
 * =============================================================================
 * Author: Mark Angelo Angulo
 * =============================================================================
 */

document.addEventListener('DOMContentLoaded', function (){

    TemplateUi = (function() {
        
        const ASSETS = './assets/';
        const MODULE_ASSETS = './';
        const MOBILE = window.matchMedia("(max-width: 767px)");
//        const PREFIX = Lazy.getConfig('prefix');
        const PREFIX = 'tpl-';
        
        /* 
         * ---------------------------------------------------------------------
         * Private Members
         * ---------------------------------------------------------------------
         */
        
        let init = function() {
            bindings();
            initMenus();
            initModals();
            initBlockers();
            initAnimations();
            initForm();
            ssf();
            initInfiniteScroll();
            initSvgs();
            initCarousels();
            changeColor();
        };
        
        let bindings = function() {
            Lazy.don('click', '#btn-clear-json-text', e => {
                document.querySelector('#json-text').value = '';
            });
        };
        
        let initAnimations = function() {
            
            [].forEach.call(document.querySelectorAll('#animation-controls > button'), button => {
                button.addEventListener('click', () => {
                    let animation = button.querySelector(':scope > span').innerText;
                    Lazy.animate('#animate', {
                        animation: animation,
                        duration: 800
                    });
                });
            });
            
//            Lazy.don('click', '#btn-fade-in', () => {
//                Lazy.animate('#animate', {animation: 'disappear-right'});
//            });
        };
        
        let initCarousels = function(){
            let carousel = Lazy.carousel('#list-carousel', {
                slides: 'li'
            });
            
            Lazy.don('click', '#btn-carousel-play', () => {
                Lazy.modal({
                    closable: false,
                    closeButton: false,
                    title: 'Auto Play',
                    content: 'Auto play in 5 seconds',
                    bodyStyles: {
                        padding: '1rem'
                    },
                    footer: 'ok',
                    onOk: function() {
                        carousel.play(5000);
                        this.close();
                    }
                }).open();
            });
            
            Lazy.don('click', '#btn-carousel-stop', () => {
                Lazy.modal({
                    closable: false,
                    closeButton: false,
                    title: 'Stop Auto Play',
                    content: 'Turn off auto play',
                    bodyStyles: {
                        padding: '1rem'
                    },
                    footer: 'ok',
                    onOk: function() {
                        carousel.stop();
                        this.close();
                    }
                }).open();
            });
            
            Lazy.don('click', '#btn-carousel-next', () => {
                carousel.next();
            });
            
            Lazy.don('click', '#btn-carousel-previous', () => {
                carousel.previous();
            });
            
            Lazy.don('click', '#btn-carousel-goto', () => {
                carousel.goto(3);
            });
            
            Lazy.don('click', '#btn-carousel-destroy', () => {
                carousel.destroy();
            });
            
            Lazy.don('click', '#btn-carousel-redraw', () => {
                
                let li = document.createElement('li');
                let img = document.createElement('img');
                img.src = ASSETS + "img/placeholders/rectangle.svg";
                img.height = 100;
                img.width = 200;
                img.alt = 'Banner';
                let strong = document.createElement('strong');
                li.append(strong);
                li.append(img);
                let ul = document.querySelector('#list-carousel');
                let length = document.querySelectorAll('#list-carousel > li').length;
                
                for( let i=0; i<2; i++) {
                    length++;
                    let newBanner = li.cloneNode(true);
                    newBanner.querySelector('strong').innerText = 'Banner ' + length;
                    ul.append(newBanner);
                }

                carousel.redraw();
            });
        };
        
        let initSvgs = function(){
          
            let painSvg = Lazy.svgMap('#svg-painman', {
                max: 1,
                onMax: function() {
                    Lazy.modal({
                        closeButton: false,
                        header: 'title',
                        title: 'Max Selected',
                        content: '<div style="padding: 1rem">Max selection reached</div>',
                        footer: 'ok',
                        onOk: function() {
                            this.close();
                        }
                    }).open();
                }
            });
            
            let mapSvg = Lazy.svgMap('#svg-philippines', {
                max: 5,
                onMax: function() {
                    Lazy.modal({
                        closeButton: false,
                        header: 'title',
                        title: 'Max Selected',
                        content: '<div style="padding: 1rem">Max selection reached</div>',
                        footer: 'ok',
                        onOk: function() {
                            this.close();
                        }
                    }).open();
                }
            });
            
            Lazy.don('click', '#btn-svg-readonly', e => {
                painSvg.readOnly();
                mapSvg.readOnly();
            });
            
            Lazy.don('click', '#btn-svg-enable', e => {
                painSvg.enable();
                mapSvg.enable();
            });
            
            Lazy.don('click', '#btn-svg-max', e => {
                painSvg.changeMax(3);
                mapSvg.changeMax(3);
            });
            
            Lazy.don('click', '#btn-svg-select', e => {
                painSvg.select('head');
                mapSvg.select(['benguet', 'ilocos-sur', 'zambales']);
            });
            
            Lazy.don('click', '#btn-svg-clear', e => {
                painSvg.clear();
                mapSvg.clear();
            });
            
        };
        
        let buildValidation = function(form, rules){

            let validator = function(){};
            validator.validate = function() {
                
                [].forEach.call(document.querySelectorAll(`${form} .${PREFIX}form-item`), container => {
                    container.classList.remove(`${PREFIX}form-error`);
                    container.classList.add(`${PREFIX}form-success`);
                });
                
                [].forEach.call(document.querySelectorAll(`${form} .${PREFIX}form-input-error`), errorMessage => {
                    errorMessage.remove();
                });
                
                let valid = Lazy.validate(form, rules);
                if( ! valid ) {
                    
                    let errors = Lazy.getValidationErrors();
                    for(let key in errors) {
                        
                        let input = document.querySelector(`${form} [name="${key}"]`);
                        var message = Object.values(errors[key])[0] ;
                        
                        let error = document.createElement('div');
                        error.innerText = message;
                        error.className = `${PREFIX}form-input-error`;

                        input.closest(`.${PREFIX}form-item`).classList.remove(`${PREFIX}form-success`);
                        input.closest(`.${PREFIX}form-item`).classList.add(`${PREFIX}form-error`);
                        input.closest(`.${PREFIX}form-input`).append(error);
                    }
                    
                    return false;
                }
                
                return true;
            };
            
            validator.clear = function() {
                let htmlForm = document.querySelector(form);
                if(htmlForm) {
                    htmlForm.reset();
                    [].forEach.call(document.querySelectorAll(`${form} .${PREFIX}form-item`), container => {
                        container.classList.remove(`${PREFIX}form-error`);
                        container.classList.remove(`${PREFIX}form-success`);
                    });
                    
                    [].forEach.call(document.querySelectorAll(`${form} .${PREFIX}form-input-error`), errorMessage => {
                        errorMessage.remove();
                    });
                }
            };
            
            return validator;
        };
        
        let initInfiniteScroll = function() {
            
            let addToList = function() {
                let list = document.querySelector('#list-infinite-scroll');
                for(let i=0; i< 21; i++ ) {
                    let li = document.createElement('li');
                    li.innerText = Lazy.fake('firstName') + ' ' + Lazy.fake('lastName');
                    list.append(li);
                }
            };
            
            let addToTable = function() {
                let tbody = document.querySelector('#table-infinite-scroll > tbody');
                for(let i=0; i< 21; i++ ) {
                    let tr = document.createElement('tr');
                    let nameTd = document.createElement('td');
                    nameTd.innerText = Lazy.fake('firstName') + ' ' + Lazy.fake('lastName');
                    let ageTd = document.createElement('td');
                    ageTd.innerText = Math.round(Math.random() * 100) ;
                    let genders = ['Male', 'Female'];
                    let genderTd = document.createElement('td');
                    genderTd.innerText = genders.random();
                    let occupations = ['Engineer', 'Consultant', 'IT', 'Doctor', 'Lawyer'];
                    let occupationTd = document.createElement('td');
                    occupationTd.innerText = occupations.random();
                    tr.append(nameTd);
                    tr.append(ageTd);
                    tr.append(genderTd);
                    tr.append(occupationTd);
                    tbody.append(tr);
                }
            };
            
            let addToArticle = function() {
                let articles = document.querySelector('#articles-infinite-scroll');
                for(let i=0; i< 21; i++ ) {
                    let article = document.createElement('article');
                    let h2 = document.createElement('h2');
                    h2.innerText = Lazy.fake('text');
                    let p = document.createElement('p');
                    p.innerText = Lazy.fake('lorem');
                    article.append(h2);
                    article.append(p);
                    articles.append(article);
                }
            };

            Lazy.infiniteScroll('#list-infinite-scroll', {
                children: 'li',
                observerSettings: {},
                onTop: function(ul){
//                    alert('back to top');
                },                                           
                onBottom: function(ul){
                    addToList();
                }
            });
            
            Lazy.infiniteScroll('#table-infinite-scroll tbody', {
                children: 'tr',
                observerSettings: {},
                onTop: function(tbody){
//                    alert('back to top');
                },                                           
                onBottom: function(ul){
                    addToTable();
                }
            });
            
            Lazy.infiniteScroll('#articles-infinite-scroll', {
                children: 'article',
                observerSettings: {},
                onTop: function(ul){
//                    alert('back to top');
                },                                           
                onBottom: function(ul){
                    addToArticle();
                }
            });
        };
        
        let initForm = function() {

            let multiform;

            let rules = {
                text: {
                    rename: 'Text',
                    rules: ['required', 'min:8']
                },
                number: {
                    rename: 'Number',
                    rules: 'required|integer'
                },
                email: {
                    rename: 'Email',
                    rules: ['required', 'email']
                },
                password: {
                    rename: 'Password',
                    rules: ['required', 'min:8']
                },
                url: {
                    rename: 'URL',
                    rules: 'required|url'
                },
                tel: {
                    rename: 'Phone',
                    rules: 'required|min:8'
                },
                search: {
                    rename: 'Search',
                    rules: 'required'
                },
                date: {
                    rename: 'Date',
                    rules: 'required'
                },
                time: {
                    rename: 'Time',
                    rules: 'required'
                },
                textarea: {
                    rename: 'Text Area',
                    rules: 'required'
                },
                select: {
                    rename: 'Select',
                    rules: 'required'
                },
                'multiple-select': {
                    rename: 'Multiple Select',
                    rules: 'required'
                },
                list: {
                    rename: 'List',
                    rules: 'required'
                },
                gender: {
                    rename: 'Gender',
                    rules: 'required'
                },
                shift: {
                    rename: 'Shift',
                    rules: 'required'
                }
            };

            
            // submit validator
            let validator = buildValidation('#form-basic', rules);
            
            Lazy.don('click', '#btn-tpl-form', e => {
                let form = document.querySelector('#form-basic');
                form.classList.remove('tpl-form-top');
                form.classList.add('tpl-form');
            });
            
            // live validation
            Lazy.don('click', '#btn-live-validation', e => {
                Lazy.liveValidation('#form-basic', rules, {
                    onValid: function(input) {
                        let formItem = input.closest(`.${PREFIX}form-item`);
                        [].forEach.call(formItem.querySelectorAll(`.${PREFIX}form-input-success`), successDivs => {
                           successDivs.remove(); 
                        });
                        [].forEach.call(formItem.querySelectorAll(`.${PREFIX}form-input-error`), errorDivs => {
                           errorDivs.remove(); 
                        });

                        formItem.classList.remove(`${PREFIX}form-success`);
                        formItem.classList.remove(`${PREFIX}form-error`);
                    },
                    onError: function(input, errors) {
                        var message = Object.values(errors)[0] ;

                        let error = document.createElement('div');
                        error.innerText = message;
                        error.className = `${PREFIX}form-input-error`;

                        let formItem = input.closest(`.${PREFIX}form-item`);
                        [].forEach.call(formItem.querySelectorAll(`.${PREFIX}form-input-success`), successDivs => {
                           successDivs.remove(); 
                        });
                        [].forEach.call(formItem.querySelectorAll(`.${PREFIX}form-input-error`), errorDivs => {
                           errorDivs.remove(); 
                        });

                        formItem.classList.remove(`${PREFIX}form-success`);
                        formItem.classList.remove(`${PREFIX}form-error`);
                        formItem.classList.add(`${PREFIX}form-error`);
                        input.closest(`.${PREFIX}form-input`).append(error);
                    }
                });
            });
            
            Lazy.don('click', '#btn-validate', e => {
                if( ! validator.validate() ) { return; }
            });
            
            Lazy.don('click', '#btn-tpl-form-top', e => {
                let form = document.querySelector('#form-basic');
                form.classList.remove('tpl-form');
                form.classList.add('tpl-form-top');
            });
            
            Lazy.don('click', '#btn-json-to-form', e => {
                let jsonText = document.querySelector('#json-text');
                let value = jsonText.value.trim();
                let jsonModal = Lazy.modal({
                    closable: false,
                    closeButton: false,
                    title: 'Invalid JSON',
                    content: '<div style="padding: 1rem">Invalid JSON text',
                    footer: 'ok',
                    onOk: function() {
                        this.close();
                    }
                });
                
                if ( value !== '') {
                    try {
                        let json = JSON.parse(value);
                        Lazy.jsonToForm(json, '#form-basic');
                    } catch (error) {
                        jsonModal.open();
                    }
                } else {
                     jsonModal.open();
                }
                
            });
            
            Lazy.don('click', '#btn-form-to-json', e => {
                let jsonText = document.querySelector('#json-text');
                jsonText.value = '';
                let json = Lazy.formToJson('#form-basic');
                jsonText.value = JSON.stringify(json, null, 2);
            });
            
            Lazy.don('click', '#btn-faker', e => {
                Lazy.faker();
                Lazy.modal({
                    closable: false,
                    closeButton: false,
                    title: 'Faker',
                    content: '<div style="padding: 1rem">Hold shift + alt and click the form to populate it',
                    footer: 'ok',
                    onOk: function() {
                        this.close();
                    }
                }).open();
            });
            
            Lazy.don('click', '#btn-multiform', () => {
                multiform = Lazy.multiform('#form-basic', {
                    items: 'li',
                    header: 'Bazooka!',
                    beforeChange: function(){
                        console.log('beforeChange');
                    },
                    parts: [{
                        title: 'Part 1',
                        items: [0, 1, 2, 3, 4],
                        enterAnimation: false,
                        exitAnimation: false,
                        animationDuration: 200,
                        styles: {},
                        headerStyles: {},
                        footerStyles: {},
                        next: 'Next',
                        previous: 'Previous',
                    },{
                        title: 'Part 2',
                        items: [5, 6, 7, 8, 9],
                    },{
                        title: 'Part 3',
                        items: [10, 11, 12, 13, 14],
                    },{
                        title: 'Part 4',
                        items: [15, 16],
                        next: 'Submit'
                    }]
                });
            });
            
            Lazy.don('click', '#btn-multiform-previous', () => {
                if(multiform) {
                    multiform.previous();
                }
            });
            
            Lazy.don('click', '#btn-multiform-next', () => {
               if(multiform) {
                    multiform.next();
               }
            });
            
            Lazy.don('click', '#btn-multiform-goto', () => {
               if(multiform) {
                    multiform.goto(2);
               }
            });
            
            Lazy.don('click', '#btn-multiform-destroy', () => {
                if(multiform) {
                    multiform.destroy();
                    multiform = null;
               }
            });
            
        };
        
        let ssf = function() {
            
            Lazy.don('click', '#table-ssf th', e => {
                e.target.classList.toggle('descending');
                let order = e.target.classList.contains('descending') ? 'desc' : 'asc';
                let index = e.target.cellIndex;
                let sorters = {};
                sorters[`children.${index}.innerText`] = order;
                Lazy.sort('#table-ssf > tbody', 'tr', sorters);
            });
            
            Lazy.don('click', '#btn-ascending', e => {
                // Delaying the function execute
                Lazy.sort('#list-ssf', 'li', {innerText: 'asc'});
                Lazy.sort('#articles-ssf', 'article', {innerText: 'asc'});
                Lazy.sort('#table-ssf > tbody', 'tr', {innerText: 'asc'});
            });
            
            Lazy.don('click', '#btn-descending', e => {
                // Delaying the function execute
                Lazy.sort('#list-ssf', 'li', {innerText: 'desc'});
                Lazy.sort('#articles-ssf', 'article', {innerText: 'desc'});
                Lazy.sort('#table-ssf > tbody', 'tr', {innerText: 'desc'});
            });
            
            Lazy.don('keydown', '#txt-search', e => {
                // Delaying the function execute
                if (this.timer) {
                    window.clearTimeout(this.timer);
                }
                this.timer = window.setTimeout(function() {
                    let search = e.target.value;
                    Lazy.filter('#list-ssf', 'li', {search: search, searchAttributes: ['innerText']});
                    Lazy.filter('#table-ssf > tbody', 'tr', {search: search, searchAttributes: ['innerText']});
                    Lazy.filter('#articles-ssf', 'article', {search: search, searchAttributes: ['innerText']});
                }, 500);
            });
            
        };
        
        let initModals = function() {
            
            Lazy.don('click', '#btn-dialog', () => {
                Lazy.dialog({
                    title: 'Modal Dialog',
                    message: 'Do you agree?',
                    onOk: function() {
                        alert('Agreed!');
                        this.close();
                    },
                    onCancel: function() {
                        this.close();
                    }
                }).open();
            });
            
            Lazy.don('click', '#btn-overlay', () => {
                Lazy.overlay('#svg-maps', {
                    display: 'flex'
                }).open();
            });
            
            Lazy.don('click', '#btn-modal', () => {
                Lazy.modal({
                    content: '<div style="padding: 1rem">Im a custom content</div>',
                    footer: 'cancel',
                    onOk: function(){
                        alert('Ok');
                        this.close();
                    },
                    onCancel: function(){
                        this.close();
                    }
                }).open();
            });
            
        };
        
        let initBlockers = function() {
            
            Lazy.don('click', '#btn-block', () => {
                Lazy.block();
                setTimeout(function(){
                    Lazy.unblock();
                }, 2000);
            });
            
            Lazy.don('click', '#btn-block-element', () => {
                Lazy.block({
                    block: '#blockers'
                });
                setTimeout(function(){
                    Lazy.unblock('#blockers');
                }, 2000);
            });
            
            Lazy.don('click', '#btn-loader', () => {
                Lazy.loader();
                setTimeout(function(){
                    Lazy.unblock();
                }, 2000);
            });
            
            Lazy.don('click', '#btn-loader-element', () => {
                Lazy.loader({
                    block: '#blockers'
                });
                setTimeout(function(){
                    Lazy.unblock('#blockers');
                }, 2000);
            });
        };
        
        let initMenus = function() {

            Lazy.don('click', '#list-menus a', e => {
               e.preventDefault(); 
            });
            
            Lazy.don('click', '#list-preview a', e => {
               e.preventDefault(); 
            });
            
            let listPreview = document.querySelector('#list-preview');
            Lazy.don('click', '#list-menus li', e => {
                let span = e.target.querySelector(':scope > div > a > span');
                let newClass = span.innerText.substring(1);
                let menuClass = listPreview.classList[listPreview.classList.length - 1];
                if( menuClass !== 'tpl-menu' ) {
                    listPreview.classList.remove(menuClass);
                    listPreview.classList.add(newClass);
                }
            });
        };
        
        changeColor = function() {
            
            let userColor = localStorage.getItem('color');
            const userGlass = localStorage.getItem('glass');
            const userBorderRadius = localStorage.getItem('border-radius');
            const colors = Array.from(document.querySelectorAll('#site-color-picker input[name="color"]')).map(input => input.value);
            const bodyClasses = document.querySelector('body').classList;
            
            // dark mode
            if( userColor === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
                userColor = 'dark';
            }
            
            if( userColor !== null ) {
                document.querySelector(`#site-color-picker input[name="color"][value="${userColor}"]`).checked = true;
                for( let i = 0; i < colors.length; i++ ){ bodyClasses.remove(colors[i]); }
                bodyClasses.add(userColor);
            }
            
            Lazy.on('change', '#site-color-picker input[name="color"]', function(e){
                for( let i = 0; i < colors.length; i++ ) { bodyClasses.remove(colors[i]); }
                bodyClasses.add(e.target.value);
                localStorage.setItem('color', e.target.value);
            });
            
            Lazy.on('change', '#site-color-picker input[type="checkbox"]', function(e){
                let value = e.target.value;
                if( e.target.checked ) {
                    localStorage.setItem(value, 'true');
                } else {
                    localStorage.removeItem(value);
                }
                bodyClasses.toggle(value);
            });
            
            setTimeout(function(){
                let siteColorPicker = document.querySelector('#site-color-picker');
                siteColorPicker.animate({ opacity: [1, 0]}, { duration: 1000 }).onfinish = function(e) {
                    siteColorPicker.style.display = 'none';
                };
                siteColorPicker.style.opacity = 0;
            }, 6000);
            
        };
        
        let publicFunction = function() {
            return 'I am a public function';
        };

        init();
        
        /* 
         * ---------------------------------------------------------------------
         * Public Members
         * ---------------------------------------------------------------------
         */

        return {
            publicFunction: () => publicFunction()
        };
        
    }());
    
});