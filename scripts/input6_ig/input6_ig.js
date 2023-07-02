//
//
//
    import { isNumber,isInputAsNumeric } from '../generic/common_numeric.js'; //view from this module.
//
//
//

    const CS_SMALL_BUY="buy";
    const CS_SMALL_SELL="sell";

    var select_buy_or_sell=document.getElementById('id_ig_form_select_buysell');
    //var option_buy=document.getElementById('id_ig_form_option_buy');
    //var option_sell=document.getElementById('id_ig_form_option_sell');

    var input_order_price=document.getElementById('id_XAndYinput_X');
    var input_asking_percentage=document.getElementById('id_XAndY_input_Y');
    var input_stopping_percentage=document.getElementById('id_XAndY_input_Z');

    var p_stopping_point=document.getElementById('id_form_ig_p_stopping_point');
    var p_asking_point=document.getElementById('id_form_ig_p_asking_point');
    var p_stopping_price=document.getElementById('id_form_ig_p_stopping_price');
    var p_asking_price=document.getElementById('id_form_ig_p_asking_price');

    var p_result=document.getElementById('id_XAndY_P_Result');  

    var btn_calculate=document.getElementById('id_XAndY_button_calculate');
    btn_calculate.addEventListener('click',calcAskStop);



    //p_result.textContent="test drive.";
//
//
//
//
//
    function calcAskStop(){

        if(select_buy_or_sell.value==CS_SMALL_BUY){

        }else
        if(select_buy_or_sell.value==CS_SMALL_SELL){

        }else{
            p_result.textContent="select buy or sell.";
            p_result.style.color="red";
            return;
        }

        if(isValidInput(input_order_price.value,input_asking_percentage.value,input_stopping_percentage.value)){

            p_asking_price.textContent="Asking price is:"+String(getAskingPrice(Number(input_order_price.value),Number(input_asking_percentage.value),select_buy_or_sell.value));
            p_stopping_price.textContent="Stopping price is:"+String(getStoppingPrice(Number(input_order_price.value),Number(input_stopping_percentage.value),select_buy_or_sell.value));            

            p_asking_point.textContent="Asking point is: "+String(getAsPoint(Number(input_order_price.value),Number(input_asking_percentage.value)))+" pts";
            p_stopping_point.textContent="Stopping point is: "+String(getAsPoint(Number(input_order_price.value),Number(input_stopping_percentage.value)))+" pts";

            p_asking_point.style.color="green";
            p_stopping_point.style.color="green";

            p_result.style.color="green";
            p_result.textContent="***"+select_buy_or_sell.value+"***...OK";
        }else{
            p_result.textContent="***input numeric value.***";
            p_result.style.color="red";
        }


    }

//
//
//
function isValidInput(x,y,z){


    let rv=true;

    if(isInputAsNumeric(x)){}else
    {
        rv=false;
        return rv;
    }

    if(isInputAsNumeric(y)){}else
    {
        rv=false;
        return rv;
    }

    if(isInputAsNumeric(z)){}else
    {
        rv=false;
        return rv;
    }

    return rv;

}

function getAskingPrice(order_price,rate,buy_or_sell){

    let rv=0;

    if(buy_or_sell==CS_SMALL_BUY){
        rv=order_price+((order_price/100)*rate);
    }else{
        rv=order_price-((order_price/100)*rate);
    }
    return rv;

}
function getStoppingPrice(order_price,rate,buy_or_sell){

    let rv=0;

    if(buy_or_sell==CS_SMALL_BUY){
        rv=order_price-((order_price/100)*rate);
    }else{
        rv=order_price+((order_price/100)*rate);
    }
    return rv;

}

function getAsPoint(order_price,rate){

    let rv=0;

    rv=(order_price/100)*rate;    
    return rv;

}
/*
    function isValidInput(x,y){

        let rv=true;

        if(isInputAsNumeric(x)){}else
        {
            rv=false;
            return rv;
        }

        if(isInputAsNumeric(y)){}else
        {
            rv=false;
            return rv;
        }

        return rv;

    }
*/
//
//
//
    /*function GetEPSByRate(x,y){

        //x is a stock price
        //y is a earning of a stock

        let rv=0;

        rv=(y/x)*100;
        
        return rv;
    }*/
    /*
    function GetAskingPrice(x,y){
        //x is unit cost of stock
        //y is a asking incremental number by percentage

        let rv=0;

        rv=x+((x/100)*y);

        return rv;
    }
    */
/*
    function calculateOldValue(x,y){

        return x-y;
    }


    function calculateIncrementalRateBetweenXAndY(x,y){

        let rv=0;
    
        let value_Old=calculateOldValue(x,y);

        rv=(y/value_Old)*100;

        return rv;
    }
*/    