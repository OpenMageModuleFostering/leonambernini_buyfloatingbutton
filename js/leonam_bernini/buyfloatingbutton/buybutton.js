/* 
    Created on : 06/11/2014, 04:35:27
    Author     : Leonam Bernini (leonamb19@gmail.com)
*/
window.onload = function()
{
    var $prices            = document.getElementsByClassName('price');
    var $btnOpenCloseBox   = document.getElementById("open-close-box-floating");
    var $addToCartFloating = document.getElementById('add-to-cart-floating');
    
    var i, priceId, elementTemp, elementFloatingTemp;
    
    for (i = 0; i < $prices.length; i++ ) {
        priceId             = ( $prices[i].id != '' && $prices[i].id != null && $prices[i].id != 'undefined' ) ? $prices[i].id : $prices[i].parentNode.id;
        elementTemp         = document.getElementById(priceId);
        elementFloatingTemp = document.getElementById(priceId + '-floating');
        
        if ( ( typeof(elementTemp) !== undefined && elementTemp !== null ) &&
             ( typeof(elementFloatingTemp) !== undefined && elementFloatingTemp !== null ) ){
            
            elementTemp.addEventListener("DOMSubtreeModified", function (e) {
                if( this.innerHTML !== null && this.innerHTML !== '' ){
                    var temp = document.getElementById(this.id+'-floating');
                    if( typeof(temp) !== undefined && temp !== null ){
                        temp.innerHTML = this.innerHTML;
                    }
                }
            }, false);
            
        }   
        
    }
    
    var hideShowBuyFloatingButton = function()
    {
        var elementTop;
        var doc       = document.documentElement;
        var scroll    = ( window.pageYOffset || doc.scrollTop ) - ( doc.clientTop || 0 );
        var element   = document.getElementsByClassName('btn-cart')[0]; 
        var box       = $addToCartFloating; 
        var rect      = element.getBoundingClientRect();
        var scrollTop = document.documentElement.scrollTop?
                        document.documentElement.scrollTop:document.body.scrollTop;
        elementTop = rect.top+scrollTop;
        
        if( scroll >= elementTop -50 ){
            box.style.display = 'block';
        }else{
            box.style.display = 'none';
        }
    }
    hideShowBuyFloatingButton();
    window.onscroll = function(){ hideShowBuyFloatingButton(); }
    
    if ( typeof($btnOpenCloseBox) !== undefined && $btnOpenCloseBox !== null ){
        $btnOpenCloseBox.onclick = function()
        {
            var $box = $addToCartFloating;

            if ( $box.className.search(/\badd-to-cart-floating-closed\b/gi) !== -1 ){
                $box.className = $box.className.replace(/\badd-to-cart-floating-closed\b/gi, '');
            }else{
                $box.className += ' add-to-cart-floating-closed ';
            }
        }
    }
}