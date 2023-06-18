//
//
//
    import { isNumber,isInputAsNumeric } from '../generic/common_numeric.js'; //view from this module.
//
//
//

    const CS_SMALL_BUY="buy";
    const CS_SMALL_SELL="sell";
    
    //var input_X=document.getElementById('id_XAndYinput_X');
    //var input_Y=document.getElementById('id_XAndY_input_Y');
    //var btn_calculate=document.getElementById('id_XAndY_button_calculate');
    //var p_result=document.getElementById('id_XAndY_P_Result');
    //var p_result_incremental_rate=document.getElementById('id_XAndY_P_Result_Incremental_rate');
    //btn_calculate.addEventListener('click',calculateXAndY);

    var select_buy_or_sell=document.getElementById('id_ig_form_select_buysell');
    var option_buy=document.getElementById('id_ig_form_option_buy');
    var option_sell=document.getElementById('id_ig_form_option_sell');

    var input_order_price=document.getElementById('id_XAndYinput_X');
    var input_asking_percentage=document.getElementById('id_XAndY_input_Y');
    var input_stopping_percentage=document.getElementById('id_XAndY_input_Z');

    var p_stopping_point=document.getElementById('id_form_ig_p_stopping_point');
    var p_asking_point=document.getElementById('id_form_ig_p_asking_point');
    var p_stopping_price=document.getElementById('id_form_ig_p_stopping_price');
    var p_asking_price=document.getElementById('id_form_ig_p_asking_price');

    var p_result=document.getElementById('id_XAndY_P_Result');  

    var btn_calculate=document.getElementById('id_XAndY_button_calculate');
    btn_calculate.addEventListener('click',calculateAskingAndStoping());

    /***
    var input_order_price=document.getElementById('id_XAndYinput_X');
    var input_asking_percentage=document.getElementById('id_XAndY_input_Y');
    var input_stopping_percentage=document.getElementById('id_XAndY_input_z');

    var p_stoping_point=document.getElementById('id_form_ig_p_stopping_point');
    var p_asking_point=document.getElementById('id_form_ig_p_asking_point');
    var p_stoping_price=document.getElementById('id_form_ig_p_stopping_price');
    var p_asking_price=document.getElementById('id_form_ig_p_asking_price');
***/
//
//
//
/***
    function calculateXAndY(){

        var value_X=input_X.value;
        var value_Y=input_Y.value;

        if (isValidInput(value_X,value_Y)){
            p_result.textContent="Your asking price is  " + String(GetAskingPrice(Number(value_X),Number(value_Y)));
            //p_result.textContent="Your asking price is  " + String(GetEPSByRate(value_X,value_Y)) + " %";
            //p_result_incremental_rate.textContent="Incremental rate is " + String(calculateIncrementalRateBetweenXAndY(value_X,value_Y))+" %";  
        }else
        {
            p_result.textContent="input numeric value.";
        }


    }
***/

    function calculateAskingAndStoping(){


        var value_select_or_sell=select_buy_or_sell.value;
        
        var value_order_price=input_order_price.value;
        var value_asking_percentage=input_asking_percentage.value;
        var value_stopping_percentage=input_stopping_percentage.value;

        //start check long or short
        //buy_or_sell="";
        if(value_select_or_sell==CS_SMALL_BUY){
            buy_or_sell=CS_SMALL_BUY;
            p_result.textContent("buy");
        }
        else if(value_select_or_sell==CS_SMALL_SELL){
            buy_or_sell=CS_SMALL_SELL;
            p_result.textContent("sell");
        }else
        {
            p_result.textContent="select Buy or Sell"
            p_result.style.color="red";
            return;
        }
    

        //buy_or_sell=CS_SMALL_BUY;

        //end check long or short

        if (isValidInput(value_order_price,value_asking_percentage,value_stopping_percentage)){
            /***p_result.textContent="Your asking price is  " + String(GetAskingPrice(Number(value_X),Number(value_Y)));***/
            //p_result.textContent="Your asking price is  " + String(GetEPSByRate(value_X,value_Y)) + " %";
            //p_result_incremental_rate.textContent="Incremental rate is " + String(calculateIncrementalRateBetweenXAndY(value_X,value_Y))+" %";

            //p_asking_price.textContent=string(getAskingPrice(Number(value_order_price),Number(value_asking_percentage)));
            //p_stopping_price.textContent=string(getStoppingPrice(Number(value_order_price),Number(value_stoppinging_percentage)));

            p_asking_price.textContent="Asking Price is "+":"+String(getAskingPrice(Number(value_order_price),Number(value_asking_percentage),buy_or_sell))+"";
            p_stopping_price.textContent="Stoppinging Price is "+":"+String(getStoppingPrice(Number(value_order_price),Number(value_stopping_percentage),buy_or_sell))+"";


            p_result.textContent="***ok***";
            p_result.style.color="green";

            if(value_select_or_sell==CS_SMALL_BUY)
            {
                p_result.textContent="buy";
            }else
            {
                p_result.textContent="sell";
            }

        }else
        {
            p_result.textContent="***input numeric value.***";
            p_result.style.color="red";
        }

        //

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