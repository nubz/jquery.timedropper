(function($){
    
    $.fn.timedropper = function(method){
      
        var self = this;
      
        var settings = $.extend({
              'increment': 30,
              'el_id': 'td-wrapper',
              'listclass': 'td-default',
              'width' : '60px'
            }, method);
      
        var methods = {
                
                init: function(){
                    self
                        .css('width', settings.width)
                        .wrap('<div id="' + settings.el_id + '" />')
                        .on('click', methods.drawlist);
                },
                
                leading_zero: function(num){
                    if(num < 10)
                        return '0' + num;
                    return num;
                },
            
                default_css: function(){
                    if(settings.listclass == 'td-default')
                    {
                    var $el = $('ul.td-default');
                    $el.css('overflow', 'auto')
                        .css('height', '100px')
                        .css('width', settings.width)
                        .css('border', '1px solid #999');
                    $el.find('li')
                        .css('cursor', 'pointer')
                        .css('padding', '2px 6px')
                        .hover(
                            function(){
                                $(this).css('background','#eee');
                            },
                            function(){
                                $(this).css('background', 'white'); 
                            });
                    
                    }
                },
                
                drawlist: function(){
                    $('ul.' + settings.listclass).remove();
                    var timelist = [];
                    for(var i = 0; i < 24; i++){
                        var hour = methods.leading_zero(i);
                        for(j = 0; j < 60; j+=settings.increment){
                            var minutes = methods.leading_zero(j);
                            timelist.push('<li>' + hour + ':' + minutes + '</li>');
                        }
                    }
                    
                    $('#' + settings.el_id)
                        .append('<ul class="' + settings.listclass + '">' + timelist.join('\n') + '</ul>')
                        .find('ul.' + settings.listclass)
                        .delegate('li', 'click', function(){
                            self.val($(this).text()).trigger('change');
                            $(this).parent().remove();
                        })
                        .mouseleave( function(){
                            $(this).remove();  
                        });
                     methods.default_css();                    
                }
                
            };
            
       if(methods[method])
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        else if(typeof method === 'object' || !method)
            return methods.init.apply(this, arguments);
        else
            $.error('Method ' + method + ' does not exist on jQuery.timedropper');        
      
    };
    
})(jQuery);
