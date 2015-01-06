
	/**********
	* Name : Inplace Title Plugin 
	* Author : Mojtaba Kianifar
	* Version : 1.0
	**********/
	
(function($, window, document, undefined){

    function Inplace(element, options){
        this.$element = $(element);
        this.options = options;
        this.title = this.$element.text();
        this.$input = null;
        this.has_actions = false;
		
		this.$element.bind('complete', this.options.oncomplete);
		
        this.init()
    }

    Inplace.prototype = {

        init : function () {

            this.$element.wrapInner('<span class="dp-inplace-value"></span>');
			this.$edit = $('<button class="dp-edit-handel">').prependTo(this.$element);
            this.$value = this.$element.find('.dp-inplace-value');

            this.$input = $('<input type="text">').appendTo(this.$element).hide();
            this.$save = $("<button class='dp-action-save'></button>").appendTo(this.$element).hide();
            this.$cancel = $("<button class='dp-action-cancel'></button>").appendTo(this.$element).hide();

            this.$cancel.bind("click", $.proxy(function (e) {
                e.stopPropagation();
                this.cancel();
            }, this));

            this.$save.bind("click", $.proxy(function (e) {
                e.stopPropagation();
                this.save();
            }, this));

            this.$edit.bind("click", $.proxy(function () {
                this._showActions();
            }, this));

            this.$input.bind("keypress", $.proxy(function (e) {
                if( e.which == 13){
                    this.save();
                }
            }, this))
        },
        _showActions: function(){
            var value = this.title == '&nbsp;' ? '' : this.title;
            this.$input.val(value).show().focus();
            this.$save.show();
            this.$cancel.show();
            this.$value.hide();

        },
        _hideActions: function(){
            this.$input.hide();
            this.$save.hide();
            this.$cancel.hide();
            this.$value.show();
        },

        cancel : function () {
            this._hideActions();
        },

        save : function () {
            this.title = this.$input.val() == '' ? '&nbsp;' : this.$input.val();
            this.$value.html(this.title);
            this._hideActions();
			this.$element.trigger('complete');
			
        }	
    };
	
    $.fn.inplace = function(options){
        if( typeof options == 'string'){
            var plugin = this.data('inplace');
            if(plugin){
                var r = plugin[options].apply(plugin, Array.prototype.slice.call( arguments, 1 ) );
                if(r) return r
            }
            return this
        }

        options = $.extend({}, $.fn.inplace.defaults, options);

        return this.each(function(){
            var plugin = $.data(this, 'inplace');
            if( ! plugin ){
                plugin = new Inplace(this, options);
                $.data(this, 'inplace', plugin);
            }
        });
    };
    $.fn.inplace.defaults = {
		oncomplete: null,
    };

})(jQuery, window, document);