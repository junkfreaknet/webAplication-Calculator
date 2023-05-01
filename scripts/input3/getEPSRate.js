//
//
//
    import { isNumber,isInputAsNumeric } from '../generic/common_numeric.js'; //view from this module.
//
//
//
    var input_X=document.getElementById('id_XAndYinput_X');
    var input_Y=document.getElementById('id_XAndY_input_Y');
    var btn_calculate=document.getElementById('id_XAndY_button_calculate');
    var p_result=document.getElementById('id_XAndY_P_Result');
    var p_result_incremental_rate=document.getElementById('id_XAndY_P_Result_Incremental_rate');

    btn_calculate.addEventListener('click',calculateXAndY);
    

//
//
//
    function calculateXAndY(){

        var value_X=input_X.value;
        var value_Y=input_Y.value;

        if (isValidInput(value_X,value_Y)){
            p_result.textContent="EPS Rate is  " + String(GetEPSByRate(Number(value_X),Number(value_Y))) + " %";
            //p_result_incremental_rate.textContent="Incremental rate is " + String(calculateIncrementalRateBetweenXAndY(value_X,value_Y))+" %";  
        }else
        {
            p_result.textContent="input numeric value.";
        }


    }
//
//
//
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
//
//
//
    function GetEPSByRate(x,y){

        //x is a stock price
        //y is a earning of a stock

        let rv=0;

        rv=(y/x)*100;
        
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