//
//
//
    import { isNumber,isInputAsNumeric } from '../generic/common_numeric.js'; //view from this module.
//
//
//
    //var input_X=document.getElementById('id_XAndYinput_X');
    //var input_Y=document.getElementById('id_XAndY_input_Y');
    //var btn_calculate=document.getElementById('id_XAndY_button_calculate');
    var p_result=document.getElementById('id_XAndY_P_Result');
    //var p_result_incremental_rate=document.getElementById('id_XAndY_P_Result_Incremental_rate');
    //btn_calculate.addEventListener('click',calculateXAndY);

    var input_order_price=document.getElementById('id_XAndYinput_X');
    var input_asking_percentage=document.getElementById('id_XAndY_input_Y');
    var input_stopping_percentage=document.getElementById('id_XAndY_input_z');

    var p_stoping_point=document.getElementById('id_form_ig_p_stopping_point');
    var p_asking_point=document.getElementById('id_form_ig_p_asking_point');
    var p_stoping_price=document.getElementById('id_form_ig_p_stopping_price');
    var p_asking_price=document.getElementById('id_form_ig_p_asking_price');
    
    btn_calculate.addEventListener('click',calculateAskingAndStoping);

    console.log("reach to end.");
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

        var value_order_price=input_order_price.value;
        var value_asking_percentage=input_asking_percentage.value;
        var value_stopping_percentage=input_stopping_percentage.value;

        p_result.textContent="=====";

        if (isValidInput(value_order_price,value_asking_percentage,value_stopping_percentage)){
            /***p_result.textContent="Your asking price is  " + String(GetAskingPrice(Number(value_X),Number(value_Y)));***/
            //p_result.textContent="Your asking price is  " + String(GetEPSByRate(value_X,value_Y)) + " %";
            //p_result_incremental_rate.textContent="Incremental rate is " + String(calculateIncrementalRateBetweenXAndY(value_X,value_Y))+" %";
            p_result.textContent="ok,ok,ok";

        }else
        {
            p_result.textContent="input numeric value.";
        }
    }
//
//
//
function isValidInput(x,y,z){

    console.log("is valie input?");
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
    function GetAskingPrice(x,y){
        //x is unit cost of stock
        //y is a asking incremental number by percentage

        let rv=0;

        rv=x+((x/100)*y);

        return rv;
    }
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