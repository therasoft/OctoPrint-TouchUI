TouchUI.prototype.DOM.overwrite.modal = function() {

	if( !this.isTouch ) {
		//We need a reliable event for catching new modals for attaching a scrolling bar
		$.fn.modalBup = $.fn.modal;
		$.fn.modal = function(option, args) {
			// Update any other modifications made by others (i.e. OctoPrint itself)
			$.fn.modalBup.defaults = $.fn.modal.defaults;

			// Create modal, store into variable so we can trigger an event first before return
			var tmp = $(this).modalBup(option, args);
			$(this).trigger("modal.touchui", this);

			return tmp;
		};
		$.fn.modal.prototype = { constructor: $.fn.modal };
		$.fn.modal.Constructor = $.fn.modal;
		$.fn.modal.defaults = $.fn.modalBup.defaults;
	}

}