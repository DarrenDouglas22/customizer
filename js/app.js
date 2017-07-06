$(document).ready(function(){


        // function to get image preview on the t-shirt we don't need to upload it on the server using this function
        var countImg = 1;
    function readURL(input) {
        if (input.files && input.files[0]) { // if there is a file from input
            var reader = new FileReader(); // read file

            reader.onload = function (e) { // on load
                // add image to imagesContainer - e.target.result : image's source on local
                 $('#imagesContainer').prepend("<div class='images' style='z-index:9" + countImg + "'><i class='icon-remove text-error'></i><img src='" + e.target.result + "' alt='' ></div>");
                 // make images draggable and resizable using jquery UI functions
                 $('#imagesContainer').find('img').resizable();
                 $('#imagesContainer').find('.images').draggable();

                countImg ++;
                //$('#blah').css('background', 'transparent url('+e.target.result +') left top no-repeat');
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    // load images
    $("#imgInp").on('change',function(){
        readURL(this); // call our function readURL
    });

    //flip animation
    var btn = document.getElementById('flip_content');
    var content = document.getElementById('.flipper');
    btn.onclick = function() {
      var src = $(this).find('Tshirtsrc').attr('src');
      document.querySelector('.flipper').classList.toggle('flip');
    }

    // delete front pictures
    $(document).on('click', '.images .icon-remove', function(){
        // user should confirm suppression
        $(this).parent().remove();
        /*if(confirm('Please confirm?')){
            // if confirmed get parent and delete image
            $(this).parent().remove();
        }*/
    })

        // delete back pictures
    $(document).on('click', '.backImages .icon-remove', function(){
        // user should confirm suppression
        $(this).parent().remove();
        /*if(confirm('Please confirm?')){
            // if confirmed get parent and delete image
            $(this).parent().remove();
        }*/
    })



    /*//change T-shirt
    $('.tshirts a').click(function(){
        //get clicked T-shirt src
        var src = $(this).find('img').attr('src');
        //apply it on the original image to be edited
        $('#Tshirtsrc').attr('src', src);
        $('#backTshirtsrc').attr('src', src);
        

        return false;
    });*/

        //change T-shirt
    $('.tshirts input').click(function(){
        //get clicked T-shirt src
        var src = $(this).attr('src');
        //apply it on the original image to be edited

        if (src === "img/white.png") {
            $('#Tshirtsrc').attr('src', 'img/t-shirts/woolly0.jpg');
            $('#backTshirtsrc').attr('src', 'img/t-shirts/woolly0.jpg');
        }
        else if (src === "img/olive.png") {
            $('#Tshirtsrc').attr('src', 'img/t-shirts/woolly1.jpg');
            $('#backTshirtsrc').attr('src', 'img/t-shirts/woolly1.jpg');
        }
        else {
            $('#Tshirtsrc').attr('src', 'img/t-shirts/woolly2.jpg');
            $('#backTshirtsrc').attr('src', 'img/t-shirts/woolly2.jpg');
        }
        

        return false;
    });


        //change previewed front design
        $('.designs a').click(function(){
        //clear the design container
        $('#imagesContainer').empty();
        //get clicked design src
        var src = $(this).find('img').attr('src');
        //apply it on the original image to be edited
        $('#imagesContainer').prepend("<div class='images' style='z-index:9" + 1 + "'><img src='" + src + "' alt='' ></div>");
        return false;
    });

        //change previewed back design
        $('.backDesigns a').click(function(){
        //clear the design container
        $('#backImagesContainer').empty();
        //get clicked design src
        var src = $(this).find('img').attr('src');
        //apply it on the original image to be edited
        $('#backImagesContainer').prepend("<div class='backImages' style='text-align: center; z-index:9" + 1 + "'><img src='" + src + "' alt='' ></div>");
        return false;
    });
// TEXT EDITS
    /*
    // Update text on Tshirt -- applly event on keyup
    $('#designtext').keyup(function(){
        var text = $(this).val().replace(/\r\n|\r|\n/g,"<br />");
        $('.text p').html(text);
    });

     // update texts on keyup event - this works on cloned texts and textarea
     $( document ).on('keyup', '.designtext', function(){
        // get text from text area and replace breakline with br tag
        var text = $(this).val().replace(/\r\n|\r|\n/g,"<br />");
        //get the data-id from text
        var id = $(this).data('id');
        //update text on T-shirt
        $('.text' + id + " p").html(text);
    });

    // initial Current Text element to be edited
    var textElement = $('.designtext1 p');
     // events

    // Actions to be apllayed on Texts
    $(document).on('click', '.action', function(){
        //get what action to use
        var action = $(this).data('action');
        // set the current element to be edited
        var currentEl = $(this);
        // find text element wich is 'P'
        textElement = $(this).parent().find('p');
        // test Action if Rmove
        if(action == 'remove'){
            // test if this is the original text (the text we clone) - if yes we can delete it , because we use it to add new texts
            
            // if no - we users should confirm action (delete)
            if(confirm('Please confirm?')){
                // action confirmed - now get the data-id of the parrent element (div class='text') ti use it to remove textaprea
                var inputId =  currentEl.parent().data('id');
                // remove input (textarea)
                $(".designtext" + inputId).remove();
                // remove text on T-shirt
                currentEl.parent().remove();
            }
           // if action is Edit
        }else{
            //add annmation on options available for this element (font size, font, color)
            $('.slider , .pick-a-color-markup, .dropup').addClass('animated bounce');
            // delete annimation after 2s
            setTimeout(function() {
                 $('.slider , .pick-a-color-markup, .dropup').removeClass('animated bounce');
            }, 2000);
        }
    });
    */

    // apply style on file's input

    $('#imgInp').customFileInput({
        // put button 'browse' on right
        button_position : 'right'
    });

    // Preview option (Modal)

    $('#myModal').on('shown', function () {
        //clone current design to Modal (show preview)
        $('.designContainer').clone().prependTo('.modal-body').find('i').remove();
        $('.modal-body').find('.ui-icon').css('display', 'none');
    });

    $('#myModal').on('hidden', function () {
        //initialize modal preview on hidden event
      $('.modal-body').html(' ');
    })



    // export as DESIGN

   $('.export').click(function(){
        //hide options
        $('#printable').find('i').css('display', 'none');
        $('#printable').find('.ui-icon').css('display', 'none');
        //get printable section
         var exportCanvas = document.getElementById('printable');
         //get convas container
         var canvasContainer = document.getElementById('convascontent');
            //export canvas to convascontainer
            html2canvas(exportCanvas, {
                //when finished fucntion
            onrendered: function(canvas) {
                // initialize canvas container (if we generate another canvas)
                $('#convascontent').html(' ');
                // append canvas to container
                canvasContainer.appendChild(canvas);
                //add id attribute to the canvas
                $('#convascontent').find('canvas').attr('id','mycanvas');
                // display options again
                $('#printable').find('i').css('display', 'block');
                $('#printable').find('.ui-icon').css('display', 'block');
                //document.getElementsByTagName("UL")

            }
        });
   // return false;
   });

   //export options
   $('.exportas').click(function(){
        // get type to export
        var to = $(this).data('type');
       // alert(to);
       // get our canvas
       var oCanvas = document.getElementById("mycanvas");
    // support variable
    var bRes = false;
        if(to == 'png'){
            // export to png
            bRes = Canvas2Image.saveAsPNG(oCanvas);
        }
        if(to == 'jpg'){
            // maybe in some old browsers it works only on Firefox
            bRes = Canvas2Image.saveAsJPEG(oCanvas);
        }if(to == 'bmp'){
            Res = Canvas2Image.saveAsBMP(oCanvas);
        }
        // if browser doesn't support mimetype alert user
        if (!bRes) {
            alert("Sorry, this browser is not capable of saving " + strType + " files!");
            return false;
        }
   });



});
