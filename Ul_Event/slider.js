let thumb = document.getElementsByClassName('.thumb')[0];
thumb.onmousedown = function(event){
    let shiftX = event.clientX - thumb.getBoundingClientRect().left;

    document.onmousemove = function(event){
        let newLeft = event.clientX - slider.getBoundingClientRect().left - shiftX;
        let leftEdge = 0;
        let rightEdge = slider.offsetWidth - thumb.offsetWidth;
      
        thumb.style.left = Math.min(Math.max(leftEdge, newLeft), rightEdge) + 'px';
    }

    thumb.onmouseup = function(){
        document.onmousemove = null;
        thumb.onmouseup = null;
    }
}

/*
if no shift:
(1) event.clientX 
(1.1) slider.getBoundingClientRect().left 
(1.2) thumb.style.left 

        (1)
<——————————————————>
 (1.1)  +--+        +--+
<—————>||--|--------|--|---|
        +--+        +--+
        <——————————>
            (1.2)
*/
