/*****
 *  
 *  common about numeric_S
 * 
 *****/

//export {isNumber};

    function isNumber(x){

        let rv=false;

        let is_number_simple=true;
        let is_number_signed=true;
        let is_number_decimal=true;

        let regex_number=new RegExp(/^[0-9]+$/);
        let regex_number_signed=new RegExp(/^[+-]?[0-9]+$/);
        let regex_number_decimal_signed=new RegExp(/^[-+]?[0-9]+(\.[0-9]+)?$/);
        let regex_number_decimal=new RegExp(/^[0-9]+(\.[0-9]+)?$/);

        if(regex_number.test(x)){
            return true;
        }
        if(regex_number_signed.test(x)){
            return true;
        }
        if(regex_number_decimal_signed.test(x)){
            return true;
        }
        if(regex_number_decimal.test(x)){
            return true;
        }

        return rv;

    }


    function isInputAsNumeric(x){
        
        let rv=true;

        if(isNumber(x)){}else
        {rv=false;}
        
        return rv;
        
    }    
    //at last
    //export { isNumber };
    export {isNumber,isInputAsNumeric};
    