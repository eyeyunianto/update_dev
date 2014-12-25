function black_input(data){
  $(data).on('click',function(e){
      e.preventDefault();
      $(data).val("");
      $(data).css('color','#444444');
  });
}

function error_handling(id,data){
  $(id).css('color','#c92036');
  $(id).val(data);
  black_input(id);
}

function limitCharacter(textToLimit, wordLimit,status)
{
    var finalText = "";
    if(textToLimit==null){
        return textToLimit;
    }else{
        var numberOfWords = textToLimit.length;
        //console.log(numberOfWords,wordLimit)
        var i=0;
        if(numberOfWords > wordLimit)
        {
            if(status){
                $('#read_more').show();
            }
            for(i=0; i< wordLimit; i++)
            finalText = finalText+ textToLimit[i];
            return finalText+"...";
        }
        return textToLimit;
    }
}
function ReadData(sKey) {
    if(sKey){
        var sValue = window.localStorage.getItem(sKey);
        return sValue ? JSON.parse(sValue) : sValue;
    }else{
        console.log(sKey)
    }
}

function WriteData(sKey, oData) {
    if(oData){
        var sValue = JSON.stringify(oData);
        window.localStorage.setItem(sKey, sValue);
    }else{
        console.log(oData)
    }
}
function preload_img(data){
    //console.log(data);
    $(data).preload({
        placeholder:'images/bg.png',
        notFound:'images/bg.png'
    });
}

function preload_img_slider(data){
    //console.log(data);
    $(data).preload({
        notFound:'images/bg.png'
    });
}

function preload_empty(data){
    //console.log(data);
    $(data).preload({
        placeholder:'images/bg.png'
    });
}

function preload_other(data){
    //console.log(data);
    $(data).preload({
        placeholder:'images/logo.png',
        notFound:'images/logo.png'
    });
}

function preload_ava(data){
    //console.log(data);
    $(data).preload({
        placeholder:'images/icon/avatar.png',
        notFound:'images/icon/avatar.png'
    });
}


