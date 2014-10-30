/*! v1.1 by @gr33k01 */

var activeDialogue = {

    config: {
        modalSelector: '.modal',
        fireElement: 'a[data-fire]',
        closeElement: '.modal',
        nextButtonSelector: '.modal-next',
        prevButtonSelector: '.modal-prev',
    },

    // Consistent element order
    collection: [],
    
    // Prevent click + drag off modal closure.
    mouseDownHere: false,

    init: function(config) {
        // Allow overriding the default settings
        $.extend(activeDialogue.config, config);

        var modalSelector = activeDialogue.config.modalSelector;
        var fireElement = activeDialogue.config.fireElement;
        var close = activeDialogue.config.closeElement;
        var nextBtn = activeDialogue.config.nextButtonSelector;
        var prevBtn = activeDialogue.config.prevButtonSelector;

        // Collection of dialogue  elements
        var elements = (function() {
            var a = [];
            $(modalSelector).each(function() {
                a.push(this);
            });
            return a;
        }());

        activeDialogue.collection = elements;

        $(fireElement).on('click', activeDialogue.fire);
        $(close).on('mousedown', activeDialogue.close);
        $(close).on('mouseup', activeDialogue.close);
        $(nextBtn).on('click', activeDialogue.next);
        $(prevBtn).on('click', activeDialogue.previous);
    },

    fire: function(activeTarget) {
        // Allow only one active modal
        $(activeDialogue.config.modalSelector).css('display', 'none');

        $('.modal').each(function() {
            if (activeTarget.currentTarget.dataset['fire'] == this.id){
              $(this).css('display', 'initial');
              $('body').addClass('active-modal');
              return false;
            }
        });
    },

    open: function(id) {
        // Allow only one active modal
        $(activeDialogue.config.modalSelector).css('display', 'none');
        $('#' + id).css('display', 'initial');
        $('body').addClass('active-modal');
    },

    close: function(e) {
      
        // Return if child of selector is clicked
        if (e.target !== this) {
          
          // Prevent click + drag off modal closure.
          activeDialogue.config.mouseDownHere = false; 
          return;
        }
      
        // Prevent click + drag off modal closure.
        if(!activeDialogue.config.mouseDownHere){
           activeDialogue.config.mouseDownHere = true;
           return;
        }
      
        activeDialogue.config.mouseDownHere = false;
      
        $(activeDialogue.config.modalSelector).css('display', 'none');
        $('body').removeClass('active-modal');
    },

    next: function(e) {
        var index = activeDialogue.collection.indexOf(e.currentTarget.offsetParent) + 1;

        if (index >= activeDialogue.collection.length) index = 0;
        activeDialogue.open(activeDialogue.collection[index].id);
    },

    previous: function(e) {

        var index = activeDialogue.collection.indexOf(e.currentTarget.offsetParent) - 1;

        if (index < 0) index = activeDialogue.collection.length - 1;
        activeDialogue.open(activeDialogue.collection[index].id);
    }
}