var noti = {
    notification: "",// Hold the html content to display

    a:"fi",//Default animation fadeIn

    setAnimation_ : function(animationName){
        this.a = animationName;
    },// Set animation 

    time: 5000,// Default time 

    i: function (title, content) {// For information
        this.notification = this.subDiv(title, content, "n-i");
        this.show();
    },
    w : function(title,content){// For warning
        this.notification = this.subDiv(title, content, "n-w");
        this.show();
    },
    e: function(title,content){// For error
        this.notification = this.subDiv(title, content, "n-e");
        this.show();
    },
    s:function(title,content){// For success
        this.notification = this.subDiv(title, content, "n-s");
        this.show();
    },

    mainDiv :function(){ // Add sub div in main div
        //var div = this.subDiv(title, content, class_);
        var mainDiv = '<div class="noti"></div>';
        return mainDiv;
    
    },

    subDiv:function(title,content,class_){
                var html_ = 
                    '<div class="'
                    +class_
                    +'">'
                    +'<i class="fa fa-check-circle"></i>'
                    +'<span> '+ title+'</span>'
                    + '<i class="fa fa-times-circle f-r" onclick="closeNotification(this);"></i>'
                    +'<p>'
                    +content
                    + '</p></div>';
                return html_;
    },

    show: function (animation_, time_) {
        if (animation_ === undefined) {
            animation_ = this.a;
        }
        if (time_ === undefined) {
            time_ = this.time;
        }
        var body = $('body');
        var noti = $(body).find('.noti');
        if (noti.length <= 0) {
            var mainDiv = $(this.mainDiv());
            $(mainDiv).append(this.notification);
            $('body').append(mainDiv);
        }
        else {
            noti.append(this.notification);
        }
       
        var className = $(this.notification).attr('class');
        var div = $(document.getElementsByClassName(className));
        $(div).fadeIn(500);
        $(div).fadeOut(time_, function () {
            $(div).remove();
        });
        
        
    }

}
var closeNotification = function (icon) {
    var noti = $(icon).parent();
    
    $(noti).slideUp(500,function(){
    $(noti).remove();});
}




