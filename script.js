(function(){
    var script = {
 "defaultVRPointer": "laser",
 "start": "this.init()",
 "downloadEnabled": false,
 "data": {
  "name": "Player14787"
 },
 "height": "100%",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "children": [
  "this.MainViewer",
  "this.IconButton_1E1C7714_0BA4_F559_419E_A1DE0E410092",
  "this.Label_1DC2C3A8_0BAC_AD49_41A4_EB63ADDB8E60",
  "this.Container_1C01C30D_0BA4_AD4B_4190_919C514EF8DF",
  "this.IconButton_03B791AB_161B_AD87_418A_B4718DC3DB14",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 20,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "layout": "absolute",
 "borderSize": 0,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0.95
 },
 "id": "panorama_EBCB9270_E529_628B_41DC_73C0B010350D_camera",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_in",
 "duration": 500,
 "id": "FadeInEffect_B150F476_BE24_5BAB_41DB_C82B93FA23F2",
 "class": "FadeInEffect"
},
{
 "hfovMax": 30,
 "thumbnailUrl": "media/panorama_EBCB9270_E529_628B_41DC_73C0B010350D_t.jpg",
 "partial": true,
 "label": "DJI_0986",
 "id": "panorama_EBCB9270_E529_628B_41DC_73C0B010350D",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_EBCB9270_E529_628B_41DC_73C0B010350D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBCB9270_E529_628B_41DC_73C0B010350D_0/f/0/{row}_{column}.jpg",
      "colCount": 37,
      "class": "TiledImageResourceLevel",
      "width": 18944,
      "rowCount": 37,
      "tags": "ondemand",
      "height": 18944
     },
     {
      "url": "media/panorama_EBCB9270_E529_628B_41DC_73C0B010350D_0/f/1/{row}_{column}.jpg",
      "colCount": 19,
      "class": "TiledImageResourceLevel",
      "width": 9728,
      "rowCount": 19,
      "tags": "ondemand",
      "height": 9728
     },
     {
      "url": "media/panorama_EBCB9270_E529_628B_41DC_73C0B010350D_0/f/2/{row}_{column}.jpg",
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "tags": "ondemand",
      "height": 5120
     },
     {
      "url": "media/panorama_EBCB9270_E529_628B_41DC_73C0B010350D_0/f/3/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_EBCB9270_E529_628B_41DC_73C0B010350D_0/f/4/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_EBCB9270_E529_628B_41DC_73C0B010350D_0/f/5/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_EBCB9270_E529_628B_41DC_73C0B010350D_0/f/6/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 30,
 "class": "Panorama",
 "vfov": 22.5,
 "pitch": 0.95
},
{
 "easing": "quad_in",
 "duration": 400,
 "to": "left",
 "id": "effect_4D468A42_571D_AF46_41C4_8C8358C32FB0",
 "class": "SlideOutEffect"
},
{
 "easing": "quad_in",
 "duration": 400,
 "to": "left",
 "id": "effect_618C5950_7067_14DB_41DB_D2CA7B61EE3C",
 "class": "SlideOutEffect"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "easing": "quad_in",
 "duration": 400,
 "id": "effect_4C974746_571D_6541_41CE_76A308A87323",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "easing": "cubic_out",
 "duration": 500,
 "id": "FadeOutEffect_B150E476_BE24_5BAB_41DC_C6BF1067EA30",
 "class": "FadeOutEffect"
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer"
},
{
 "easing": "quad_in",
 "duration": 400,
 "id": "effect_4B8711AA_571D_FDC6_41C4_8313D8AEEDC7",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "shadowBlurRadius": 6,
 "id": "window_12809109_0B63_6D4B_4191_D2CCADDD239B",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "shadowHorizontalLength": 3,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Kontak",
 "height": 500,
 "scrollBarColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "class": "Window",
 "backgroundColor": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 5,
 "gap": 10,
 "minWidth": 20,
 "bodyPaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3.5vmin",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_128EC109_0B63_6D4B_4195_1C7A435B7050"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "titleFontFamily": "Times New Roman",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "footerHeight": 5,
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window50400"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "thumbnailUrl": "media/album_B0A96AE2_BE2F_CCAA_41CE_0E01E231D3A2_0_t.png",
 "duration": 5000,
 "id": "album_B0A96AE2_BE2F_CCAA_41CE_0E01E231D3A2_0",
 "class": "Photo",
 "width": 1536,
 "label": "Navigator",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_B0A96AE2_BE2F_CCAA_41CE_0E01E231D3A2_0.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1024
},
{
 "id": "ImageResource_B150C476_BE24_5BAB_41DC_810E026F4310",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/zoomImage_AEEF40D7_BE25_FCEA_4196_DDF35840FF25_0_0.png",
   "width": 1536,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/zoomImage_AEEF40D7_BE25_FCEA_4196_DDF35840FF25_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/zoomImage_AEEF40D7_BE25_FCEA_4196_DDF35840FF25_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ]
},
{
 "thumbnailUrl": "media/album_B0A96AE2_BE2F_CCAA_41CE_0E01E231D3A2_t.png",
 "playList": "this.album_B0A96AE2_BE2F_CCAA_41CE_0E01E231D3A2_AlbumPlayList",
 "label": "Photo Album Navigator",
 "id": "album_B0A96AE2_BE2F_CCAA_41CE_0E01E231D3A2",
 "class": "PhotoAlbum"
},
{
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_032B57ED_1618_9583_4191_37031C8AD278.mp3",
  "oggUrl": "media/audio_032B57ED_1618_9583_4191_37031C8AD278.ogg"
 },
 "data": {
  "label": "coffee-with-jazz-327479"
 },
 "id": "audio_032B57ED_1618_9583_4191_37031C8AD278",
 "autoplay": true,
 "class": "MediaAudio"
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_EBCB9270_E529_628B_41DC_73C0B010350D",
   "camera": "this.panorama_EBCB9270_E529_628B_41DC_73C0B010350D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 0)",
   "media": "this.album_B0A96AE2_BE2F_CCAA_41CE_0E01E231D3A2",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderSize": 0,
 "id": "MainViewer",
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "minHeight": 50,
 "toolTipDisplayTime": 600,
 "playbackBarLeft": 0,
 "width": "100%",
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#000000",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "minWidth": 100,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "paddingTop": 0,
 "toolTipFontSize": "3vmin",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "bold",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Times New Roman",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "pressedIconURL": "skin/IconButton_1E1C7714_0BA4_F559_419E_A1DE0E410092_pressed.png",
 "data": {
  "name": "Button27670"
 },
 "iconURL": "skin/IconButton_1E1C7714_0BA4_F559_419E_A1DE0E410092.png",
 "id": "IconButton_1E1C7714_0BA4_F559_419E_A1DE0E410092",
 "width": 77.35,
 "paddingRight": 0,
 "right": "12.14%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1E1C7714_0BA4_F559_419E_A1DE0E410092_rollover.png",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "bottom": "9.41%",
 "minWidth": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "mode": "push",
 "height": 72,
 "click": "eval('startTour()');",
 "class": "IconButton",
 "horizontalAlign": "center",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "fontFamily": "Times New Roman",
 "fontWeight": "normal",
 "textShadowColor": "#000000",
 "height": "8.575%",
 "id": "Label_1DC2C3A8_0BAC_AD49_41A4_EB63ADDB8E60",
 "paddingLeft": 0,
 "data": {
  "name": "Label20212"
 },
 "paddingRight": 0,
 "right": "0.03%",
 "backgroundOpacity": 0.52,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "minHeight": 1,
 "text": "Start Virtual Tour",
 "borderRadius": 0,
 "textShadowBlurRadius": 0,
 "propagateClick": false,
 "bottom": "0.12%",
 "backgroundColor": [],
 "borderSize": 0,
 "minWidth": 1,
 "class": "Label",
 "backgroundColorRatios": [],
 "fontSize": "7vmin",
 "horizontalAlign": "center",
 "textShadowHorizontalLength": -3,
 "textShadowOpacity": 0.79,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#000000",
 "fontStyle": "normal",
 "textShadowVerticalLength": 1,
 "paddingTop": 0,
 "textDecoration": "none",
 "width": "30.616%"
},
{
 "children": [
  "this.Container_1C01130A_0BA4_AD4E_41A0_E3223D4F092C",
  "this.Container_1C01C30A_0BA4_AD4E_417F_DAB08244B8B8"
 ],
 "id": "Container_1C01C30D_0BA4_AD4B_4190_919C514EF8DF",
 "left": "0%",
 "width": 312.6,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "top": "0%",
 "layout": "absolute",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "Container",
 "height": "100%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "--- LEFT PANEL"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "pressedIconURL": "skin/IconButton_03B791AB_161B_AD87_418A_B4718DC3DB14_pressed.png",
 "data": {
  "name": "Button46351"
 },
 "iconURL": "skin/IconButton_03B791AB_161B_AD87_418A_B4718DC3DB14.png",
 "id": "IconButton_03B791AB_161B_AD87_418A_B4718DC3DB14",
 "width": 40,
 "paddingRight": 0,
 "right": "1.62%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_03B791AB_161B_AD87_418A_B4718DC3DB14_rollover.png",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "mode": "toggle",
 "height": 40,
 "top": "1.4%",
 "click": "if(this.getGlobalAudio(this.audio_032B57ED_1618_9583_4191_37031C8AD278).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_032B57ED_1618_9583_4191_37031C8AD278); } else { var src = this.playGlobalAudio(this.audio_032B57ED_1618_9583_4191_37031C8AD278); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
 "class": "IconButton",
 "horizontalAlign": "center",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "backgroundOpacity": 0.55,
 "paddingBottom": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "bottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "minWidth": 0,
 "top": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 350,
  "class": "FadeInEffect"
 },
 "class": "UIComponent",
 "backgroundColor": [
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "UIComponent11420"
 },
 "paddingTop": 0,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "bottom": 0,
 "backgroundColorRatios": [],
 "borderSize": 0,
 "minWidth": 0,
 "top": 0,
 "class": "ZoomImage",
 "backgroundColor": [],
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "ZoomImage11421"
 },
 "paddingTop": 0,
 "visible": false,
 "scaleMode": "custom"
},
{
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "CloseButton11422"
 },
 "id": "closeButtonPopupPanorama",
 "fontStyle": "normal",
 "paddingLeft": 5,
 "pressedIconColor": "#888888",
 "paddingRight": 5,
 "right": 10,
 "iconWidth": 20,
 "backgroundOpacity": 0.3,
 "shadowSpread": 1,
 "iconHeight": 20,
 "verticalAlign": "middle",
 "paddingBottom": 5,
 "minHeight": 0,
 "fontWeight": "normal",
 "iconColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "propagateClick": false,
 "rollOverIconColor": "#666666",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "minWidth": 0,
 "top": 10,
 "label": "",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 350,
  "class": "FadeInEffect"
 },
 "class": "CloseButton",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontSize": "1.29vmin",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "horizontalAlign": "center",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 5,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "iconLineWidth": 5
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_128EC109_0B63_6D4B_4195_1C7A435B7050",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:20px;font-family:'Times New Roman', Times, serif;\">Email : 117210012@student.upnvyk.ac.id</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:20px;font-family:'Times New Roman', Times, serif;\">No. HP : +62-856-0293-9103</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText50401"
 },
 "paddingTop": 10
},
{
 "items": [
  {
   "media": "this.album_B0A96AE2_BE2F_CCAA_41CE_0E01E231D3A2_0",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.65",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.70"
    },
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_B0A96AE2_BE2F_CCAA_41CE_0E01E231D3A2_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "children": [
  "this.Container_1C01030A_0BA4_AD4E_4183_0C2F9F3BB908",
  "this.IconButton_1C01330A_0BA4_AD4E_419A_847C1E369DA4"
 ],
 "id": "Container_1C01130A_0BA4_AD4E_41A0_E3223D4F092C",
 "left": "0%",
 "width": 66,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "top": "0%",
 "layout": "absolute",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "class": "Container",
 "height": "100%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "- COLLAPSE"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "data": {
  "name": "- EXPANDED"
 },
 "height": "100%",
 "id": "Container_1C01C30A_0BA4_AD4E_417F_DAB08244B8B8",
 "width": 300,
 "paddingRight": 40,
 "right": "0%",
 "paddingLeft": 40,
 "children": [
  "this.Container_1C01930A_0BA4_AD4E_417E_417095D79B45",
  "this.Container_1C00B30D_0BA4_AD4B_415C_16F790886E3D",
  "this.Image_12B92FE7_0B9C_D4C7_4161_80E3BA8A7F16",
  "this.Image_1183A28F_0B9C_AF47_4193_DF871C0A19A5"
 ],
 "verticalAlign": "top",
 "paddingBottom": 40,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0.7,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "layout": "absolute",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "top": "0%",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 40,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_1C01030A_0BA4_AD4E_4183_0C2F9F3BB908",
 "left": "0%",
 "width": 36,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0.4,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "layout": "absolute",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "top": "0%",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container black"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 80,
 "iconURL": "skin/IconButton_1C01330A_0BA4_AD4E_419A_847C1E369DA4.png",
 "id": "IconButton_1C01330A_0BA4_AD4E_419A_847C1E369DA4",
 "left": 10,
 "width": 50,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_1C01330A_0BA4_AD4E_419A_847C1E369DA4_rollover.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "top": "40%",
 "bottom": "40%",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_1C01C30A_0BA4_AD4E_417F_DAB08244B8B8, true, 0, this.effect_4B8711AA_571D_FDC6_41C4_8313D8AEEDC7, 'showEffect', false); this.setComponentVisibility(this.Container_1C01130A_0BA4_AD4E_41A0_E3223D4F092C, false, 0, this.effect_4D468A42_571D_AF46_41C4_8C8358C32FB0, 'hideEffect', false)",
 "class": "IconButton",
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton arrow"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 80
},
{
 "children": [
  "this.Container_1C01830A_0BA4_AD4E_4194_DDC18EDD761E",
  "this.Button_1C01B30A_0BA4_AD4E_41A0_92738906F44B",
  "this.Container_1C01A30A_0BA4_AD4E_41A2_CFB483C48153",
  "this.Button_1C00530A_0BA4_AD4E_4153_37A12802740C",
  "this.Container_1C00430D_0BA4_AD4B_4198_E8E8BFC98F2D",
  "this.Button_1C00730D_0BA4_AD4B_41A2_56ED53675AC4",
  "this.Container_1C00630D_0BA4_AD4B_4191_B44241BF4BEF",
  "this.Button_1C00030D_0BA4_AD4B_419B_B0E75748BBF0",
  "this.Container_1C00330D_0BA4_AD4B_41A2_50A8810EE83F",
  "this.Button_1C00230D_0BA4_AD4B_4131_C072320C7FCE",
  "this.Container_1C00C30D_0BA4_AD4B_418B_BBA04F1DDC27",
  "this.Button_1C00930D_0BA4_AD4B_4174_CEDAA6E98DBA",
  "this.Container_1C00830D_0BA4_AD4B_41A4_123034D1D037"
 ],
 "id": "Container_1C01930A_0BA4_AD4E_417E_417095D79B45",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "top": "17.5%",
 "bottom": "49.48%",
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "class": "Container",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-Container buttons"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "children": [
  "this.HTMLText_1C03530D_0BA4_AD4B_4198_FD48CD041814",
  "this.IconButton_1C01D30D_0BA4_AD4B_41A4_78152AE7242C"
 ],
 "id": "Container_1C00B30D_0BA4_AD4B_415C_16F790886E3D",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "bottom",
 "overflow": "scroll",
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "width": "100%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "Container",
 "height": "28.347%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-Container footer"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "maxHeight": 1095,
 "id": "Image_12B92FE7_0B9C_D4C7_4161_80E3BA8A7F16",
 "left": "14.18%",
 "paddingRight": 0,
 "right": "14.16%",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "minHeight": 30,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "url": "skin/Image_12B92FE7_0B9C_D4C7_4161_80E3BA8A7F16.jpg",
 "top": "0.34%",
 "minWidth": 40,
 "borderSize": 0,
 "height": "16.399%",
 "propagateClick": true,
 "class": "Image",
 "horizontalAlign": "left",
 "shadow": false,
 "data": {
  "name": "Image Company"
 },
 "paddingTop": 0,
 "scaleMode": "fill",
 "maxWidth": 1095
},
{
 "maxHeight": 1095,
 "id": "Image_1183A28F_0B9C_AF47_4193_DF871C0A19A5",
 "left": "20.55%",
 "paddingRight": 0,
 "right": "20.14%",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "minHeight": 30,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "url": "skin/Image_1183A28F_0B9C_AF47_4193_DF871C0A19A5.png",
 "propagateClick": true,
 "bottom": "27.38%",
 "minWidth": 40,
 "borderSize": 0,
 "height": "17.846%",
 "class": "Image",
 "horizontalAlign": "left",
 "shadow": false,
 "data": {
  "name": "Image Company"
 },
 "paddingTop": 0,
 "scaleMode": "fill",
 "maxWidth": 1095
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1C01830A_0BA4_AD4E_4194_DDC18EDD761E",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "borderRadius": 0,
 "propagateClick": true,
 "layout": "absolute",
 "height": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "class": "Container",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Tour Info"
 },
 "id": "Button_1C01B30A_0BA4_AD4E_41A0_92738906F44B",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "paddingRight": 0,
 "paddingBottom": 0,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "height": 50,
 "label": "Tour Information",
 "pressedBackgroundOpacity": 1,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "click": "this.showPopupImage(this.ImageResource_B150C476_BE24_5BAB_41DC_810E026F4310, null, '90%', '90%', this.FadeInEffect_B150F476_BE24_5BAB_41DB_C82B93FA23F2, this.FadeOutEffect_B150E476_BE24_5BAB_41DC_C6BF1067EA30, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':10,'rollOverIconWidth':10,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':10,'pressedBorderSize':0,'paddingLeft':5,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':10,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':10,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','iconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':10,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0}, null, null, false)",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "horizontalAlign": "left",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1C01A30A_0BA4_AD4E_41A2_CFB483C48153",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "borderRadius": 0,
 "propagateClick": true,
 "layout": "absolute",
 "height": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "class": "Container",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Guide"
 },
 "id": "Button_1C00530A_0BA4_AD4E_4153_37A12802740C",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "paddingRight": 0,
 "paddingBottom": 0,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "height": 50,
 "label": "Panorama List",
 "pressedBackgroundOpacity": 1,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "horizontalAlign": "left",
 "gap": 23,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1C00430D_0BA4_AD4B_4198_E8E8BFC98F2D",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "borderRadius": 0,
 "propagateClick": true,
 "layout": "absolute",
 "height": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "class": "Container",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Location"
 },
 "id": "Button_1C00730D_0BA4_AD4B_41A2_56ED53675AC4",
 "fontStyle": "italic",
 "width": 220,
 "paddingRight": 0,
 "paddingBottom": 0,
 "iconWidth": 32,
 "paddingLeft": 10,
 "shadowSpread": 1,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "pressedLabel": "Location",
 "rollOverBackgroundOpacity": 0.8,
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "label": "Location",
 "pressedBackgroundOpacity": 1,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "click": "this.openLink('https://rute-laboratorium.vercel.app/', '_blank')",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "horizontalAlign": "left",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1C00630D_0BA4_AD4B_4191_B44241BF4BEF",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "borderRadius": 0,
 "propagateClick": true,
 "layout": "absolute",
 "height": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "class": "Container",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Floorplan"
 },
 "id": "Button_1C00030D_0BA4_AD4B_419B_B0E75748BBF0",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "paddingRight": 0,
 "paddingBottom": 0,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "height": 50,
 "label": "Floorplan",
 "pressedBackgroundOpacity": 1,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "horizontalAlign": "left",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1C00330D_0BA4_AD4B_41A2_50A8810EE83F",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "borderRadius": 0,
 "propagateClick": true,
 "layout": "absolute",
 "height": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "class": "Container",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Photoalbum"
 },
 "id": "Button_1C00230D_0BA4_AD4B_4131_C072320C7FCE",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "paddingRight": 0,
 "paddingBottom": 0,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "height": 50,
 "label": "Photoalbum",
 "pressedBackgroundOpacity": 1,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "horizontalAlign": "left",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1C00C30D_0BA4_AD4B_418B_BBA04F1DDC27",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "borderRadius": 0,
 "propagateClick": true,
 "layout": "absolute",
 "height": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "class": "Container",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Contact"
 },
 "id": "Button_1C00930D_0BA4_AD4B_4174_CEDAA6E98DBA",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "paddingRight": 0,
 "paddingBottom": 0,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "height": 50,
 "label": "Contact Information",
 "pressedBackgroundOpacity": 1,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "click": "this.showWindow(this.window_12809109_0B63_6D4B_4191_D2CCADDD239B, null, false)",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "horizontalAlign": "left",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1C00830D_0BA4_AD4B_41A4_123034D1D037",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "borderRadius": 0,
 "propagateClick": true,
 "layout": "absolute",
 "height": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "class": "Container",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "HTMLText_1C03530D_0BA4_AD4B_4198_FD48CD041814",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "width": "98.636%",
 "height": 85.4,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-family:'Oswald Regular';\"><B>Program Studi Teknik Geomatika</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-family:'Oswald Regular';\"><B>Jurusan Teknik Geologi</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-family:'Oswald Regular';\"><B>Fakultas Teknologi Mineral dan Energi</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-family:'Oswald Regular';\"><B>UPN \"Veteran\" Yogyakarta</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText47602"
 },
 "paddingTop": 0
},
{
 "maxHeight": 80,
 "iconURL": "skin/IconButton_1C01D30D_0BA4_AD4B_41A4_78152AE7242C.png",
 "id": "IconButton_1C01D30D_0BA4_AD4B_41A4_78152AE7242C",
 "width": 42,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_1C01D30D_0BA4_AD4B_41A4_78152AE7242C_rollover.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "height": 42,
 "click": "this.setComponentVisibility(this.Container_1C01C30A_0BA4_AD4E_417F_DAB08244B8B8, false, 0, this.effect_618C5950_7067_14DB_41DB_D2CA7B61EE3C, 'hideEffect', false); this.setComponentVisibility(this.Container_1C01130A_0BA4_AD4E_41A0_E3223D4F092C, true, 0, this.effect_4C974746_571D_6541_41CE_76A308A87323, 'showEffect', false)",
 "class": "IconButton",
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton collapse"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 80
}],
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "vrPolyfillScale": 1,
 "gap": 10,
 "mobileMipmappingEnabled": false,
 "shadow": false,
 "scripts": {
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "existsKey": function(key){  return key in window; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "unregisterKey": function(key){  delete window[key]; }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "mouseWheelEnabled": true,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
