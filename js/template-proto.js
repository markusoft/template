/* 
 * =============================================================================
 * Author: Mark Angelo Angulo
 * =============================================================================
 */

document.addEventListener('DOMContentLoaded', function (){

    TemplateProto = (function() {
        
        const moduleResources = './';
        
        /* 
         * ---------------------------------------------------------------------
         * Private Members
         * ---------------------------------------------------------------------
         */
        
        let init = function() {
            bindings();
        };
        
        let bindings = function() {
            
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