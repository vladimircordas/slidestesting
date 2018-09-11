$(document).ready(function() {

  $('#mainMenuToggle').on('click', function() {
    $('#mainMenu').fadeToggle(300).toggleClass('active');
  });
 

/*    
    $(window).bind('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            $('#previous').click();
        }
        else {
            console.log('Scroll down');
            $('#next').click();
        }
    });
*/
});

(function() {
  
    window.CanvasSlideshow = function( options ) {

      

      //  SCOPE
      /// ---------------------------      
      var that  =   this;


      
      //  OPTIONS
      /// ---------------------------      
      options                     = options || {};
      options.stageWidth          = options.hasOwnProperty('stageWidth') ? options.stageWidth : 1920;
      options.stageHeight         = options.hasOwnProperty('stageHeight') ? options.stageHeight : 1080;
      options.pixiSprites         = options.hasOwnProperty('sprites') ? options.sprites : [];
      options.centerSprites       = options.hasOwnProperty('centerSprites') ? options.centerSprites : false;
      options.texts               = options.hasOwnProperty('texts') ? options.texts : [];
      options.autoPlay            = options.hasOwnProperty('autoPlay') ? options.autoPlay : true;
      options.autoPlaySpeed       = options.hasOwnProperty('autoPlaySpeed') ? options.autoPlaySpeed : [10, 3];
      options.fullScreen          = options.hasOwnProperty('fullScreen') ? options.fullScreen : true;
      options.displaceScale       = options.hasOwnProperty('displaceScale') ? options.displaceScale : [200, 70];
      options.displacementImage   = options.hasOwnProperty('displacementImage') ? options.displacementImage : '';
      options.navElement          = options.hasOwnProperty('navElement')  ?  options.navElement : document.querySelectorAll( '.scene-nav' ); 
      options.displaceAutoFit     = options.hasOwnProperty('displaceAutoFit')  ?  options.displaceAutoFit : false; 
      options.wacky               = options.hasOwnProperty('wacky') ? options.wacky : false;
      options.interactive         = options.hasOwnProperty('interactive') ? options.interactive : false;
      options.interactionEvent    = options.hasOwnProperty('interactionEvent') ? options.interactionEvent : '';
      options.displaceScaleTo     = ( options.autoPlay === false ) ? [ 0, 0 ] : [ 20, 20 ];
      options.textColor           = options.hasOwnProperty('textColor') ? options.textColor : '#fff';
      options.displacementCenter  = options.hasOwnProperty('displacementCenter') ? options.displacementCenter : false;
      options.dispatchPointerOver = options.hasOwnProperty('dispatchPointerOver') ? options.dispatchPointerOver : false;
      


      //  PIXI VARIABLES
      /// ---------------------------    
      var renderer            = new PIXI.autoDetectRenderer( options.stageWidth, options.stageHeight, { transparent: true });
      var stage               = new PIXI.Container();
      var slidesContainer     = new PIXI.Container();
      var displacementSprite  = new PIXI.Sprite.fromImage( options.displacementImage );
      var displacementFilter  = new PIXI.filters.DisplacementFilter( displacementSprite );



      //  TEXTS
      /// ---------------------------    
      var style = new PIXI.TextStyle({
        fill: options.textColor,
        wordWrap: true,
        wordWrapWidth: 400,
        letterSpacing: 20,
        fontSize: 36
      });

      

      //  SLIDES ARRAY INDEX
      /// ---------------------------    
      this.currentIndex = 0;



      /// ---------------------------
      //  INITIALISE PIXI
      /// ---------------------------      
      this.initPixi = function() {

        // Add canvas to the HTML
        document.body.appendChild( renderer.view );
  

        // Add child container to the main container 
        stage.addChild( slidesContainer );
  

        // Enable Interactions
        stage.interactive = false;
        
  
        // Fit renderer to the screen
        if ( options.fullScreen === true ) {
          renderer.view.style.objectFit = 'cover';
          renderer.view.style.width     = '100%';
          renderer.view.style.height    = '100%';
          renderer.view.style.top       = '50%';
          renderer.view.style.left      = '50%';
          renderer.view.style.webkitTransform = 'translate( -50%, -50% ) scale(1.2)';
          renderer.view.style.transform = 'translate( -50%, -50% ) scale(1.2)';           
        } else {
          renderer.view.style.maxWidth  = '100%';
          renderer.view.style.top       = '50%';
          renderer.view.style.left      = '50%';
          renderer.view.style.webkitTransform = 'translate( -50%, -50% )';
          renderer.view.style.transform = 'translate( -50%, -50% )';          
        }
        
  
        displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;


        // Set the filter to stage and set some default values for the animation
        stage.filters = [displacementFilter];        

        if ( options.autoPlay === false ) {
          displacementFilter.scale.x = 0;
          displacementFilter.scale.y = 0;
        }

        if ( options.wacky === true ) {

          displacementSprite.anchor.set(0.5);
          displacementSprite.x = renderer.width / 2;
          displacementSprite.y = renderer.height / 2; 
        }

        displacementSprite.scale.x = 2;
        displacementSprite.scale.y = 2;
  
        // PIXI tries to fit the filter bounding box to the renderer so we optionally bypass
        displacementFilter.autoFit = options.displaceAutoFit;
        
        stage.addChild( displacementSprite );

      };



      /// ---------------------------
      //  LOAD SLIDES TO CANVAS
      /// ---------------------------          
      this.loadPixiSprites = function( sprites ) {
        

        var rSprites = options.sprites;
        var rTexts   = options.texts;

        for ( var i = 0; i < rSprites.length; i++ ) {
          
          var texture   = new PIXI.Texture.fromImage( sprites[i] );
          var image     = new PIXI.Sprite( texture );

          if ( rTexts ) {
            var richText = new PIXI.Text( rTexts[i], style);
            image.addChild(richText);

            richText.anchor.set(0.5);
            richText.x = image.width / 2;
            richText.y = image.height / 2;                     
          }
          
          if ( options.centerSprites === true ) {
            image.anchor.set(0.5);
            image.x = renderer.width / 2;
            image.y = renderer.height / 2;            
          }
          // image.transform.scale.x = 1.3;
          // image.transform.scale.y = 1.3;
         

          
          if ( i !== 0  ) {
            TweenMax.set( image, { alpha: 0 } );
          }

          slidesContainer.addChild( image );

        } 
        
      };
      


      /// ---------------------------
      //  DEFAULT RENDER/ANIMATION
      /// ---------------------------        
      if ( options.autoPlay === true ) {

        var ticker = new PIXI.ticker.Ticker();

        ticker.autoStart = options.autoPlay;

        ticker.add(function( delta ) {
          
          displacementSprite.x += options.autoPlaySpeed[0] * delta;
          displacementSprite.y += options.autoPlaySpeed[1];
          
          renderer.render( stage );

        });

      }  else {

          var render = new PIXI.ticker.Ticker();

          render.autoStart = true;

          render.add(function( delta ) {
            renderer.render( stage );
          });        
        
      }    
      

      /// ---------------------------
      //  TRANSITION BETWEEN SLIDES
      /// ---------------------------    
      var isPlaying   = false;  
      var slideImages = slidesContainer.children;    
      this.moveSlider = function( newIndex ) {

        isPlaying = true;


        var baseTimeline = new TimelineMax( { onComplete: function () {
          that.currentIndex = newIndex;
          isPlaying = false;
          if ( options.wacky === true ) {
            displacementSprite.scale.set( 1 );
          }          
         },onUpdate: function() {
          
            if ( options.wacky === true ) {
              displacementSprite.rotation += baseTimeline.progress() * 0.02;      
              displacementSprite.scale.set( baseTimeline.progress() * 3 );
            }
      
        } });
        
        baseTimeline.clear();
        
        if ( baseTimeline.isActive() ) {
          return;
        }        
        
        // DEMO 4
        baseTimeline
        .to(displacementFilter.scale, 0.8, { x: options.displaceScale[0], y: options.displaceScale[1], ease: Power2.easeIn  })
        .to(slideImages[that.currentIndex], 0.5, { alpha: 0, ease: Power2.easeOut }, 0.4)
        .to(slideImages[newIndex], 0.8, { alpha: 1, ease: Power2.easeOut }, 1)          
        .to(displacementFilter.scale, 0.7, { x: options.displaceScaleTo[0], y: options.displaceScaleTo[1], ease: Power1.easeOut }, 0.9 );

      };



      /// ---------------------------
      //  CLICK HANDLERS
      /// ---------------------------         
      var nav = options.navElement;
      
      for ( var i = 0; i < nav.length; i++ ) {
        
        var navItem = nav[i];

        navItem.onclick = function( event ) {

          // Make sure the previous transition has ended
          if ( isPlaying ) {
            return false;
          }     
          
          if ( this.getAttribute('data-nav') === 'next' ) {

            if ( that.currentIndex >= 0 && that.currentIndex < slideImages.length - 1 ) {
              that.moveSlider( that.currentIndex + 1 );
            } else {
              that.moveSlider( 0 );
            }

          } else {

            if ( that.currentIndex > 0 && that.currentIndex < slideImages.length ) {
              that.moveSlider( that.currentIndex - 1 );
            } else {
              that.moveSlider( spriteImages.length - 1 );
            }            

          }

          return false;

        }
        
      }
      


      /// ---------------------------
      //  INIT FUNCTIONS
      /// ---------------------------    

      this.init = function() {

        
        that.initPixi();
        that.loadPixiSprites( options.pixiSprites );

        /*
        if ( options.fullScreen === true ) {
          window.addEventListener("resize", function( event ){ 
            scaleToWindow( renderer.view );
          });
          scaleToWindow( renderer.view );  
        }
        */
        

      };



      
      /// ---------------------------
      //  INTERACTIONS
      /// ---------------------------
      function rotateSpite() {
        displacementSprite.rotation += 0.001;
        rafID = requestAnimationFrame( rotateSpite );
      }
            
      if ( options.interactive === true ) {
        
        var rafID, mouseX, mouseY;

        // Enable interactions on our slider
        slidesContainer.interactive = true;
        slidesContainer.buttonMode  = true;       

        // HOVER
        if ( options.interactionEvent === 'hover' || options.interactionEvent === 'both'  )  {
            
          slidesContainer.pointerover = function( mouseData ){
            mouseX = mouseData.data.global.x;
            mouseY = mouseData.data.global.y;   
            TweenMax.to( displacementFilter.scale, 1, { x: "+=" + Math.sin( mouseX ) * 100 + "", y: "+=" + Math.cos( mouseY ) * 100 + ""  });   
            rotateSpite();
          };      

          slidesContainer.pointerout = function( mouseData ){
            TweenMax.to( displacementFilter.scale, 1, { x: 0, y: 0 });
            cancelAnimationFrame( rafID );
          };     
          
        }
      
        // CLICK
        if ( options.interactionEvent === 'click' || options.interactionEvent === 'both'  ) {
            
          slidesContainer.pointerup = function( mouseData ){
            if ( options.dispatchPointerOver === true ) {
              TweenMax.to( displacementFilter.scale, 1, { x: 0, y: 0, onComplete: function() {
                TweenMax.to( displacementFilter.scale, 1, { x: 20, y: 20  });        
              } });            
            } else {
              TweenMax.to( displacementFilter.scale, 1, { x: 0, y: 0 });                      
              cancelAnimationFrame( rafID );
            }

          };     

          slidesContainer.pointerdown = function( mouseData ){
            mouseX = mouseData.data.global.x;
            mouseY = mouseData.data.global.y;         
            TweenMax.to( displacementFilter.scale, 1, { x: "+=" + Math.sin( mouseX ) * 1200 + "", y: "+=" + Math.cos( mouseY ) * 200 + ""  });   
          };     

        }
      
      }
      
      
      /// ---------------------------
      //  CENTER DISPLACEMENT
      /// ---------------------------
      if ( options.displacementCenter === true ) {
        displacementSprite.anchor.set(0.5);
        displacementSprite.x = renderer.view.width / 2;
        displacementSprite.y = renderer.view.height / 2;        
      }
      
      
      /// ---------------------------
      //  START 
      /// ---------------------------           
      this.init();

      
      /// ---------------------------
      //  HELPER FUNCTIONS
      /// ---------------------------
      function scaleToWindow( canvas, backgroundColor ) {
        var scaleX, scaleY, scale, center;
      
        //1. Scale the canvas to the correct size
        //Figure out the scale amount on each axis
        scaleX = window.innerWidth / canvas.offsetWidth;
        scaleY = window.innerHeight / canvas.offsetHeight;
      
        //Scale the canvas based on whichever value is less: `scaleX` or `scaleY`
        scale = Math.min(scaleX, scaleY);
        canvas.style.transformOrigin = "0 0";
        canvas.style.transform = "scale(" + scale + ")";
      
        //2. Center the canvas.
        //Decide whether to center the canvas vertically or horizontally.
        //Wide canvases should be centered vertically, and 
        //square or tall canvases should be centered horizontally
        if (canvas.offsetWidth > canvas.offsetHeight) {
          if (canvas.offsetWidth * scale < window.innerWidth) {
            center = "horizontally";
          } else {
            center = "vertically";
          }
        } else {
          if (canvas.offsetHeight * scale < window.innerHeight) {
            center = "vertically";
          } else {
            center = "horizontally";
          }
        }
      
        //Center horizontally (for square or tall canvases)
        var margin;
        if (center === "horizontally") {
          margin = (window.innerWidth - canvas.offsetWidth * scale) / 2;
          canvas.style.marginTop = 0 + "px";
          canvas.style.marginBottom = 0 + "px";
          canvas.style.marginLeft = margin + "px";
          canvas.style.marginRight = margin + "px";
        }
      
        //Center vertically (for wide canvases) 
        if (center === "vertically") {
          margin = (window.innerHeight - canvas.offsetHeight * scale) / 2;
          canvas.style.marginTop = margin + "px";
          canvas.style.marginBottom = margin + "px";
          canvas.style.marginLeft = 0 + "px";
          canvas.style.marginRight = 0 + "px";
        }
      
        //3. Remove any padding from the canvas  and body and set the canvas
        //display style to "block"
        canvas.style.paddingLeft = 0 + "px";
        canvas.style.paddingRight = 0 + "px";
        canvas.style.paddingTop = 0 + "px";
        canvas.style.paddingBottom = 0 + "px";
        canvas.style.display = "block";
      
        //4. Set the color of the HTML body background
        document.body.style.backgroundColor = backgroundColor;
      
        //Fix some quirkiness in scaling for Safari
        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf("safari") != -1) {
          if (ua.indexOf("chrome") > -1) {
            // Chrome
          } else {
            // Safari
            //canvas.style.maxHeight = "100%";
            //canvas.style.minHeight = "100%";
          }
        }
      
        //5. Return the `scale` value. This is important, because you'll nee this value 
        //for correct hit testing between the pointer and sprites
        return scale;
      } // http://bit.ly/2y1Yk2k      

      
    };

  })(); 



var objArrowBuffer;

var tlArrowR;
var tlArrowL;
var tlClose;

function init() {
  objArrowBuffer = {};
  objArrowBuffer.left = {};
  objArrowBuffer.left.status = "";
  objArrowBuffer.right = {};
  objArrowBuffer.right.status = "";

  TweenMax.set( "#work-detail-arrow-left svg", { scaleX:-1 } );

  tlArrowR = createArrowAnimation( { tl:tlArrowR, parent:"#work-detail-arrow-right " } );
  tlArrowL = createArrowAnimation( { tl:tlArrowL, parent:"#work-detail-arrow-left " } );
  tlClose = createCloseAnimation( { tl:tlClose, parent:"#work-detail-close " } );
  
  $( "#work-detail-arrow-left a" ).on( "mouseover mouseout click", onArrowHandler );
  $( "#work-detail-arrow-right a" ).on( "mouseover mouseout click", onArrowHandler );
  $( "#work-detail-close a" ).on( "mouseover mouseout click", onCloseHandler );

  TweenMax.set( "#work-detail-arrow-right svg, #work-detail-arrow-left svg", { visibility: 'visible' } );
  TweenMax.set( "#work-detail-close svg", { visibility: 'visible' } );
  
  tlArrowR.tweenFromTo( "in", "in-end" );
  tlArrowL.tweenFromTo( "in", "in-end" );
  tlClose.tweenFromTo( "in", "in-end" );
};

function createArrowAnimation( objConfig ) {
  var parent = objConfig.parent;

  TweenMax.set( parent + ".arrow-pt-3-bottom", { drawSVG:"91% 91%", opacity:0 } );
  TweenMax.set( parent + ".arrow-pt-3-top", { drawSVG:"0" } );
  TweenMax.set( parent + ".arrow-pt-1, " + parent + ".arrow-pt-2", { drawSVG:"100% 100%" } );
  TweenMax.set( parent + ".mud-container", { scale:0, transformOrigin:"50% 50%" } );
  TweenMax.set( parent + ".xplod *", { drawSVG:"100% 100%" } );

  objConfig.tl = new TimelineMax( { paused:true } )
    .to( parent + ".arrow-pt-1", .25, { drawSVG:"100% 100%", x:7, rotation:-45, transformOrigin:"100% 100%", ease:Power2.easeIn }, "in" )
    .to( parent + ".arrow-pt-2", .25, { drawSVG:"100% 100%", x:7, rotation:45, transformOrigin:"100% 0", ease:Power2.easeIn }, "in" )
    .to( parent + ".arrow-pt-3-top", .3, { drawSVG:"0% 9%", ease:Power2.easeIn }, "in" )
    .to( parent + ".arrow-pt-3-top", .7, { drawSVG:"91% 100%", ease:Power2.easeOut }, "in+=.3" )
    .set( parent + ".arrow-pt-1", { drawSVG:"0 100%", x:-8, rotation:-45, transformOrigin:"100% 100%", ease:Power2.easeIn }, "in+=.7" )
    .to( parent + ".arrow-pt-1", .3, { x:0, rotation:0, transformOrigin:"100% 100%", ease:Back.easeOut.config( 2 ) }, "in+=.7" )
    .set( parent + ".arrow-pt-2", { drawSVG:"0 100%", x:-8, rotation:45, transformOrigin:"100% 0", ease:Power2.easeIn }, "in+=.7" )
    .to( parent + ".arrow-pt-2", .3, { x:0, rotation:0, transformOrigin:"100% 0", ease:Back.easeOut.config( 2 ) }, "in+=.7" )
    .set( parent + ".arrow-pt-3-bottom", { drawSVG:"91% 100%", opacity:1 }, "in+=1.1" )
    .set( parent + ".arrow-pt-3-top", { drawSVG:"0" }, "in+=1.1" )
    .to( {}, .01, {}, "in-end" )

    .to( parent + ".mud-container", .5, { scale:1, transformOrigin:"50% 50%", ease:Back.easeOut }, "over" )
    .fromTo( parent + ".circle-path-2", .7, { rotation:0, transformOrigin:"40% 45%" }, { rotation:360, transformOrigin:"40% 45%", ease:Back.easeOut }, "over" )
    .to( parent + ".arrow *", .2, { stroke:"#000000", ease:Back.easeOut }, "over" )
    .to( parent + ".arrow-pt-1", .1, { rotation:-15, transformOrigin:"100% 100%", ease:Power4.easeOut }, "over" )
    .to( parent + ".arrow-pt-1", .5, { rotation:0, transformOrigin:"100% 100%", ease:Back.easeOut }, "over+=.1" )
    .to( parent + ".arrow-pt-2", .1, { rotation:15, transformOrigin:"100% 0", ease:Power4.easeOut }, "over" )
    .to( parent + ".arrow-pt-2", .4, { rotation:0, transformOrigin:"100% 0", ease:Back.easeOut }, "over+=.1" )
    .to( parent + ".arrow", .2, { rotation:-10, scale:1.2, transformOrigin:"50% 50%", ease:Power4.easeOut }, "over" )
    .to( parent + ".arrow", .6, { rotation:0, scale:1, transformOrigin:"50% 50%", ease:Back.easeOut }, "over+=.2" )
    .to( {}, .01, {}, "over-end" )

    .to( parent + ".arrow-pt-1", .25, { drawSVG:"100% 100%", x:7, rotation:-45, transformOrigin:"100% 100%", ease:Power2.easeIn }, "click" )
    .to( parent + ".arrow-pt-2", .25, { drawSVG:"100% 100%", x:7, rotation:45, transformOrigin:"100% 0", ease:Power2.easeIn }, "click" )
    .to( parent + ".arrow-pt-3-bottom", .3, { drawSVG:"100% 100%", ease:Power2.easeIn }, "click" )
    .to( parent + ".arrow-pt-3-top", .3, { drawSVG:"0% 9%", ease:Power2.easeIn }, "click" )
    .to( parent + ".arrow-pt-3-top", 1, { drawSVG:"91% 100%", ease:Power2.easeOut }, "click+=.3" )
    .to( parent + ".mud-container, " + parent + ".arrow", .3, { scale:1.5, transformOrigin:"50% 50%", ease:Power4.easeOut }, "click+=.3" )
    .to( parent + ".mud-container, " + parent + ".arrow", .3, { scale:1, transformOrigin:"50% 50%", ease:Power1.easeOut }, "click+=.8" )
    .set( parent + ".arrow-pt-1", { drawSVG:"0 100%", x:-8, rotation:-45, transformOrigin:"100% 100%", ease:Power2.easeIn }, "click+=1" )
    .to( parent + ".arrow-pt-1", .3, { x:0, rotation:0, transformOrigin:"100% 100%", ease:Back.easeOut.config( 2 ) }, "click+=1" )
    .set( parent + ".arrow-pt-2", { drawSVG:"0 100%", x:-8, rotation:45, transformOrigin:"100% 0", ease:Power2.easeIn }, "click+=1" )
    .to( parent + ".arrow-pt-2", .3, { x:0, rotation:0, transformOrigin:"100% 0", ease:Back.easeOut.config( 2 ) }, "click+=1" )
    .to( {}, .01, {}, "click-end" )

    .to( parent + ".circle-path-1", .5, { x:18, scale:.6, transformOrigin:"50% 50%", ease:Power4.easeIn }, "out" )
    .to( parent + ".circle-path-2", .5, { x:-18, scale:.6, transformOrigin:"50% 50%", ease:Power4.easeIn }, "out" )
    .set( parent + ".circle-path-1, " + parent + ".circle-path-2", { x:0, scale:1, transformOrigin:"50% 50%" }, "out+=.5" )
    .set( parent + ".mud-container", { scale:0, transformOrigin:"50% 50%" }, "out+=.5" )
    .to( parent + ".arrow *", .2, { stroke:"#FFFFFF", ease:Back.easeOut }, "out+=.5" )
    .to( parent + ".arrow-pt-1", .2, { rotation:-30, transformOrigin:"100% 100%", ease:Power4.easeIn }, "out+=.3" )
    .to( parent + ".arrow-pt-2", .2, { rotation:30, transformOrigin:"100% 0", ease:Power4.easeIn }, "out+=.3" )
    .to( parent + ".arrow", .2, { rotation:10, scale:1.2, transformOrigin:"50% 50%", ease:Power4.easeIn }, "out+=.3" )
    .to( parent + ".arrow", .6, { rotation:0, scale:1, transformOrigin:"50% 50%", ease:Back.easeOut }, "out+=.6" )
    .to( parent + ".arrow-pt-1", .5, { rotation:0, transformOrigin:"100% 100%", ease:Back.easeOut.config(3) }, "out+=.5" )
    .to( parent + ".arrow-pt-2", .4, { rotation:0, transformOrigin:"100% 0", ease:Back.easeOut.config(3) }, "out+=.5" )
    .set( parent + ".xplod *", { drawSVG:"100% 100%", opacity:1 }, "out+=.45" )
    .to( parent + ".xplod *", .1, { drawSVG:"0% 100%", ease:Power4.easeIn }, "out+=.45" )
    .to( parent + ".xplod *", .7, { drawSVG:"0", opacity:0, ease:Power4.easeOut }, "out+=.55" )
    .to( {}, .01, {}, "out-end" )

  return objConfig.tl;
};

function createCloseAnimation( objConfig ) {
  var parent = objConfig.parent;

  TweenMax.set( parent + ".line-x-r", { drawSVG:"0" } );
  TweenMax.set( parent + ".line-x-l", { drawSVG:"0" } );
  TweenMax.set( parent + ".mud-container", { scale:0, transformOrigin:"50% 50%" } );
  TweenMax.set( parent + ".xplod *", { drawSVG:"100% 100%" } );

  objConfig.tl = new TimelineMax( { paused:true } )

    .to( parent + ".line-x-r", .5, { drawSVG:"65% 54%", ease:Power2.easeIn }, "in" )
    .to( parent + ".line-x-l", .5, { drawSVG:"65% 54%", ease:Power2.easeIn }, "in" )
    .to( parent + ".line-x-r", .5, { drawSVG:"100% 83%", ease:Power2.easeOut }, "in+=.5" )
    .to( parent + ".line-x-l", .5, { drawSVG:"100% 83%", ease:Power2.easeOut }, "in+=.5" )
    .to( {}, .01, {}, "in-end" )

    .to( parent + ".mud-container", .5, { scale:1, transformOrigin:"50% 50%", ease:Back.easeOut }, "over" )
    .fromTo( parent + ".circle-path-2", .7, { rotation:0, transformOrigin:"40% 45%" }, { rotation:360, transformOrigin:"40% 45%", ease:Back.easeOut }, "over" )
    .to( parent + ".line-x-r", .5, { drawSVG:"65% 54%", ease:Power2.easeIn }, "over" )
    .to( parent + ".line-x-l", .5, { drawSVG:"65% 54%", ease:Power2.easeIn }, "over" )
    .to( parent + ".line-x-r", .5, { drawSVG:"0% 15.8%", ease:Power2.easeOut }, "over+=.5" )
    .to( parent + ".line-x-l", .5, { drawSVG:"0% 15.8%", ease:Power2.easeOut }, "over+=.5" )
    .to( parent + ".x-path *", .2, { stroke:"#000000", ease:Back.easeOut }, "over" )
    .to( parent + ".line-x-r", .1, { rotation:-15, transformOrigin:"50% 50%", ease:Power4.easeOut }, "over" )
    .to( parent + ".line-x-r", .5, { rotation:0, transformOrigin:"50% 50%", ease:Back.easeOut }, "over+=.1" )
    .to( parent + ".line-x-l", .1, { rotation:15, transformOrigin:"50% 50%", ease:Power4.easeOut }, "over" )
    .to( parent + ".line-x-l", .4, { rotation:0, transformOrigin:"50% 50%", ease:Back.easeOut }, "over+=.1" )
    .to( parent + ".x-path", .2, { rotation:-10, scale:1.2, transformOrigin:"50% 50%", ease:Power4.easeOut }, "over" )
    .to( parent + ".x-path", .6, { rotation:0, scale:1, transformOrigin:"50% 50%", ease:Back.easeOut }, "over+=.2" )
    .to( {}, .01, {}, "over-end" )

    .to( parent + ".circle-path-1", .5, { x:18, scale:.6, transformOrigin:"50% 50%", ease:Power4.easeIn }, "out" )
    .to( parent + ".circle-path-2", .5, { x:-18, scale:.6, transformOrigin:"50% 50%", ease:Power4.easeIn }, "out" )
    .set( parent + ".circle-path-1, " + parent + ".circle-path-2", { x:0, scale:1, transformOrigin:"50% 50%" }, "out+=.5" )
    .set( parent + ".mud-container", { scale:0, transformOrigin:"50% 50%" }, "out+=.5" )
    .to( parent + ".x-path *", .2, { stroke:"#FFFFFF", ease:Back.easeOut }, "out+=.5" )
    .to( parent + ".line-x-r", .2, { rotation:-30, transformOrigin:"50% 50%", ease:Power4.easeIn }, "out+=.3" )
    .to( parent + ".line-x-l", .2, { rotation:30, transformOrigin:"50% 50%", ease:Power4.easeIn }, "out+=.3" )
    .to( parent + ".x-path", .2, { rotation:10, scale:1.2, transformOrigin:"50% 50%", ease:Power4.easeIn }, "out+=.3" )
    .to( parent + ".x-path", .6, { rotation:0, scale:1, transformOrigin:"50% 50%", ease:Back.easeOut }, "out+=.6" )
    .to( parent + ".line-x-r", .5, { rotation:0, transformOrigin:"50% 50%", ease:Back.easeOut.config(3) }, "out+=.5" )
    .to( parent + ".line-x-l", .4, { rotation:0, transformOrigin:"50% 50%", ease:Back.easeOut.config(3) }, "out+=.5" )
    .set( parent + ".xplod *", { drawSVG:"100% 100%", opacity:1 }, "out+=.45" )
    .to( parent + ".xplod *", .1, { drawSVG:"0% 100%", ease:Power4.easeIn }, "out+=.45" )
    .to( parent + ".xplod *", .7, { drawSVG:"0", opacity:0, ease:Power4.easeOut }, "out+=.55" )
    .to( {}, .01, {}, "out-end" )

  return objConfig.tl;
};

function onArrowHandler( event ) {
  event.preventDefault();
  var itemDiv = $( event.currentTarget ).parent();
  var side = itemDiv.attr( 'id' ).split('-')[3];
  var tlSide = ( side == "left" ) ? tlArrowL : tlArrowR;

  switch( event.type ){
    case "mouseover":
      if( objArrowBuffer[ side ].status != "" ) objArrowBuffer[ side ].event = event;
      else tlSide.tweenFromTo( "over", "over-end" );
      break;
    case "mouseout":
      if( objArrowBuffer[ side ].status != "" ) objArrowBuffer[ side ].event = event;
      else tlSide.tweenFromTo( "out", "out-end" );
      break;
    case "click":
      if( tlSide.currentLabel() != "click" ) {
        objArrowBuffer[ side ].status = "feeding";
        tlSide.tweenFromTo( "click", "click-end", { onComplete:bufferAction, onCompleteParams:[ { side:side, tlSide:tlSide } ] } );
      };

      break;
    };
};

function bufferAction( objConfig ) {
  var currentSideDiv = $( "#work-detail-arrow-" + objConfig.side + " a" );
  var currentBuffer = objArrowBuffer[ objConfig.side ];

  objArrowBuffer[ objConfig.side ] = {};
  objArrowBuffer[ objConfig.side ].status = "";

  if( currentBuffer.event ){
    if( currentBuffer.event.type != "mouseover" ) currentSideDiv.trigger( currentBuffer.event );
  };
};

function onCloseHandler( event ) {
  event.preventDefault();

  switch( event.type ){
    case "mouseover":
      tlClose.tweenFromTo( "over", "over-end" );
      break;
    case "mouseout":
      tlClose.tweenTo( "out-end" );
      break;
    case "click":
      //
      break;
    };
};


init();




// LINK ROLLOVER ANIM WITH TWEENMAX
var rolloverItem = document.querySelectorAll(".menu-item");

for (i=0; i < rolloverItem.length; i++) {

  var tl = new TimelineLite ( { paused:true } ),

  mySplitText = new SplitText(rolloverItem[i], {type:"words,chars"}), 
  chars = mySplitText.chars; //an array of all the divs that wrap each character

  tl.staggerTo(chars, 0.2, {opacity:1, scale:1.2, y:-5, transformOrigin: "50% 50%", rotateZ: 30,  ease:Elastic.easeIn.config(0.4, 0.95)}, 0.05, "+=0");
  tl.staggerTo(chars, 0.2, {opacity:1, scale:1, y:0,  ease:Elastic.easeIn.config(0.4, 0.95)  }, 0.05, "+=0");

  rolloverItem[i].anim = tl;
  rolloverItem[i].addEventListener("mouseenter", function() {
      if( !this.anim.isActive() ) {
        this.anim.play(0);
      }


  });
}


$('.sectionTrigger').on('click', function(){
  $('#myWorkBody').toggleClass('active');
});

/* a Pen by Diaco m.lotfollahi  : https://diacodesign.com */

var box=document.querySelectorAll('.box'),indx=box.length-1,Anim ;

for(var i=box.length;i--;){
	box[i].anim = TweenLite.to(box[i],0.5,{yPercent:-100,paused:true});
};

document.addEventListener("mousewheel",Go);
document.addEventListener("DOMMouseScroll",Go);

var D = document.createElement('div');
Draggable.create(D,{
	trigger:".box",type:'y',minimumMovement:5,cursor:'n-resize',
	onDrag:function(){ var X=this.getDirection("start")=='up'?1:-1;  Go(X);}
});

function Go(e){
	var SD=isNaN(e)?e.wheelDelta||-e.detail:e;
	if(SD<0 && indx>0 ){
		if(!Anim||!Anim.isActive()){Anim=box[indx].anim.play();  indx--;}
	}else if(SD>0 && indx<box.length-1){
		if(!Anim||!Anim.isActive()){indx++;  Anim=box[indx].anim.reverse();}
	};
	if(isNaN(e))e.preventDefault();
};

/* a Pen by Diaco m.lotfollahi  : https://diacodesign.com */