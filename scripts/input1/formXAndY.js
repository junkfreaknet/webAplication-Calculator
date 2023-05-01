//
//
//
    import { isNumber,isInputAsNumeric } from '../generic/common_numeric.js'; //import by this module.
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

        const value_X=input_X.value;
        const value_Y=input_Y.value;

        var c_result;

        if (isValidInput(value_X,value_Y)){
            p_result.textContent="Incremental value is " + String(calculateIncrementalBetweenXAndY(value_X,value_Y));
            p_result_incremental_rate.textContent="Incremental rate is " + String(calculateIncrementalRateBetweenXAndY(value_X,value_Y))+" %";
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

    function calculateIncrementalBetweenXAndY(x,y){

        let rv=0;

        rv=Number(y)-Number(x);

        return rv;
    }
    function calculateIncrementalRateBetweenXAndY(x,y){

        let rv=0;
        rv=calculateIncrementalBetweenXAndY(x,y)/(Number(x)/100);
        
        return rv;
    }
    