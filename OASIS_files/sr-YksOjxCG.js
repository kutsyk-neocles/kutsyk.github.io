if (self.CavalryLogger) { CavalryLogger.start_js(["S2gMC"]); }

__d("VideoPlayerLoggerEvent",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={AUTOPLAY_PREFERENCE_CHANGED:"autoplay_preference_changed",END_STALL_TIME:"end_stall_time",AUTOPLAY_PREFERENCE_STATUS:"autoplay_preference_status",ERROR_ALERT_SHOWN:"video_error_alert_shown",NOT_AUTOPLAYING:"not_autoplaying",VIDEO_CHANNEL_NO_RELATED_VIDEO:"video_channel_no_related_video",VIDEO_ORIENTATION_CHANGED:"video_orientation_changed",ASSETS_LOADED:"assets_loaded",BUFFERED:"buffered",CANCELLED_REQUESTED_PLAYING:"cancelled_requested_playing",CAROUSEL_CHANGE:"carousel_change",CHROMECAST_AVAILABILITY_CHECKED:"chromecast_availabilty_checked",CHROMECAST_CAST_CLICKED:"chromecast_button_clicked",CHROMECAST_CAST_CONNECTED:"chromecast_connected",CHROMECAST_CAST_DISABLED:"chromecast_button_disabled",CHROMECAST_CAST_DISCONNECTED:"chromecast_disconnected",CHROMECAST_CAST_RECONNECTED:"chromecast_reconnected",CHROMECAST_CAST_VISIBLE:"chromecast_button_visible",CHROMECAST_NOT_SUPPORTED:"chromecast_not_supported",DISPLAYED:"displayed",ENTERED_HD:"entered_hd",ENTERED_FALLBACK:"entered_fallback",ENTERED_FS:"entered_fs",EXITED_HD:"exited_hd",EXITED_FS:"exited_fs",ERROR:"error",FINISHED_LOADING:"finished_loading",FINISHED_PLAYING:"finished_playing",HTTP_STATUS_UPDATE:"http_status_update",IMPRESSION:"impression",INVALID_URL:"invalid_url",MUTED:"muted",NO_SURFACE_UPDATE:"no_surface_update",PAUSED:"paused",PLAY_REQUESTED:"play_requested",PLAYER_FORMAT_CHANGED:"player_format_changed",PLAYER_LOADED:"player_loaded",PROGRESS:"progress",STREAM_RESET:"stream_reset",POP_FAILOVER:"pop_failover",SURFACE_UPDATED:"surface_updated",TOGGLE_SUBTITLE_OFF:"toggle_subtitle_off",TOGGLE_SUBTITLE_ON:"toggle_subtitle_on",QUALITY_CHANGE:"quality_change",READY_TO_PLAY:"ready_to_play",REPLAYED:"replayed",REPRESENTATION_ENDED:"representation_ended",REQUESTED:"requested",REQUESTED_PLAYING:"requested_playing",SCRUBBED:"scrubbed",STARTED_PLAYING:"started_playing",STARTED_RECEIVING_BYTES:"started_receiving_bytes",STOPPED_PLAYING:"stopped_playing",UNMUTED:"unmuted",UNPAUSED:"unpaused",VOLUME_CHANGED:"volume_changed",VOLUME_DECREASE:"volume_decrease",VOLUME_INCREASE:"volume_increase",VIDEO_PLAYING:"video_playing",VIDEO_SKIP_AD:"video_skip_ad",VIDEO_CHAINING_IMPRESSION:"video_chaining_impression",VIDEO_CHAINING_TAP:"video_chaining_tap",PLAYING_LIVE_STARTED:"playing_live_started",PLAYING_LIVE_STOPPED:"playing_live_stopped",SWITCHED_IMPLEMENTATION:"switched_implementation",INLINE_CLICK_TO_PLAY:"inline_click_to_play",VIDEO_PLAYER_SERVICE_DISCONNECTED:"video_player_service_disconnected",VIDEO_PLAYER_SERVICE_RECONNECTED:"video_player_service_reconnected",VIDEO_PLAYER_SERVICE_UNAVAILABLE:"video_player_service_unavailable",LIVE_SEGMENT_LOAD_ERROR:"live_segment_load_error",MANIFEST_LOAD_ERROR:"manifest_load_error",MANIFEST_DATA_TYPE_ERROR:"manifest_data_type_error",STREAM_SEGMENT_LOAD_ERROR:"stream_segment_load_error",PLAYHEAD_FELL_BEHIND_ERROR:"playhead_fell_behind_error",UNEXPECTED_SEGMENT_ERROR:"unexpected_segment_error",NETWORK_TIMEOUT:"network_timeout",COMPLETION:"completion",VIEW:"view",PLAYED_FOR_THREE_SECONDS:"played_for_three_seconds",VIEWPORT_ROTATED:"viewport_rotated",VIEWPORT_ZOOMED:"viewport_zoomed",HEADING_RESET:"heading_reset",GUIDE_ENTERED:"guide_entered",GUIDE_EXITED:"guide_exited"};},null);
__d("VideoPlayerVersions",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={HTML5:"html5",SILVERCITY:"silvercity",PLEASANTVILLE:"pleasantville",OLD_API_PSR:"old_api_psr",OLD_API_EXO:"old_api_exo",OLD_API_EXO_NEW_LIB:"old_api_exo_new_lib",OLD_API_EXO_DEPRECATED:"old_api_exo_deprecated",LEGACY:"legacy",REFACTORED:"refactored",FNF:"fnf",MBASIC:"mbasic",CHROMECAST:"chromecast",CASTING_DEBUG:"casting_debug",UNKNOWN:"unknown"};},null);
__d('VideoWithClickPlayPause',['VideoPlayerReason','logVideosClickTracking'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this.$VideoWithClickPlayPause1=i;this.$VideoWithClickPlayPause2=this.$VideoWithClickPlayPause1.getVideoNode();this.$VideoWithClickPlayPause1.addListener('clickVideo',this.$VideoWithClickPlayPause3.bind(this));if(this.$VideoWithClickPlayPause1.hasSeenClick())this.$VideoWithClickPlayPause3();}h.prototype.$VideoWithClickPlayPause3=function(){'use strict';if(this.$VideoWithClickPlayPause1.isState('playing')){if(this.$VideoWithClickPlayPause1.getOption('VideoWithLiveBroadcast','isLive'))return;this.$VideoWithClickPlayPause1.pause(c('VideoPlayerReason').USER);}else{c('logVideosClickTracking')(this.$VideoWithClickPlayPause2);this.$VideoWithClickPlayPause1.play(c('VideoPlayerReason').USER);}};f.exports=h;},null);
__d("VideoConfig",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){Object.assign(this,i);}f.exports=h;},null);
__d("VideoData",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){"use strict";this.$VideoData1=i;}h.prototype.hasHD=function(){"use strict";return !!this.$VideoData1.hd_src;};h.prototype.getEncodingTag=function(){"use strict";return this.$VideoData1.encoding_tag;};h.prototype.getVideoID=function(){"use strict";return this.$VideoData1.video_id;};h.prototype.getRotation=function(){"use strict";return this.$VideoData1.rotation;};h.prototype.hasSubtitles=function(){"use strict";return !!this.$VideoData1.subtitles_src;};h.prototype.hasDashManifest=function(){"use strict";return !!this.$VideoData1.dash_manifest;};h.prototype.getDashManifest=function(){"use strict";return this.$VideoData1.dash_manifest;};h.prototype.getDashPrefetchedRepresentationIDs=function(){"use strict";return this.$VideoData1.dash_prefetched_representation_ids;};h.prototype.getSubtitlesSrc=function(){"use strict";return this.$VideoData1.subtitles_src;};h.prototype.getPlayableSrcSD=function(){"use strict";if(this.$VideoData1.sd_src_no_ratelimit)return this.$VideoData1.sd_src_no_ratelimit;return this.$VideoData1.sd_src;};h.prototype.getPlayableSrcHD=function(){"use strict";if(this.$VideoData1.hd_src_no_ratelimit)return this.$VideoData1.hd_src_no_ratelimit;return this.$VideoData1.hd_src;};h.prototype.getPlayableSrcRateLimitedSD=function(){"use strict";return this.$VideoData1.sd_src;};h.prototype.getPlayableSrcRateLimitedHD=function(){"use strict";return this.$VideoData1.hd_src;};h.prototype.getLiveManifestUrl=function(){"use strict";return this.isLiveStream()&&this.$VideoData1.sd_src;};h.prototype.hasRateLimit=function(){"use strict";return !!this.$VideoData1.sd_src_no_ratelimit;};h.prototype.getStreamType=function(){"use strict";return this.$VideoData1.stream_type;};h.prototype.isLiveStream=function(){"use strict";return this.$VideoData1.is_live_stream;};h.prototype.liveRoutingToken=function(){"use strict";return this.$VideoData1.live_routing_token;};h.prototype.getHDTag=function(){"use strict";return this.$VideoData1.hd_tag;};h.prototype.getSDTag=function(){"use strict";return this.$VideoData1.sd_tag;};h.prototype.getProjection=function(){"use strict";return this.$VideoData1.projection;};f.exports=h;},null);
__d('VideoPlayerApiEvents',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=['buffered','buffering','beginPlayback','updateStatus','logEvent','pausePlayback','clickVideo','clickForTracking','finishPlayback','unmuteVideo','muteVideo','changeVolume','turnOffAutoplay','updateBuffer','updateMetadata','qualityChange','updateViewportBegin','updateViewportMove','updateViewportEnd','dimensionsChange','viewportChange','error','loadedSubtitles','toggleSubtitles','toggleFullscreen','seekEnd','streamInterrupted','streamResumed'];f.exports=h;},null);
__d('VideoAutoplayControllerBase',['Arbiter','DesktopHscrollUnitEventConstants','Event','VideoPlayerAbortLoadingExperiment','VideoPlayerReason','Visibility','destroyOnUnload','SubscriptionsHandler','throttle'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this.$VideoAutoplayControllerBase3=null;this.$VideoAutoplayControllerBase2=null;this.$VideoAutoplayControllerBase6=[];this.$VideoAutoplayControllerBase1=i;this.$VideoAutoplayControllerBase4=null;this.$VideoAutoplayControllerBase5=new (c('SubscriptionsHandler'))();c('destroyOnUnload')(function(){this.$VideoAutoplayControllerBase6=[];this.$VideoAutoplayControllerBase3=null;if(this.$VideoAutoplayControllerBase4){this.$VideoAutoplayControllerBase4.remove();this.$VideoAutoplayControllerBase4=null;}this.$VideoAutoplayControllerBase5.release();}.bind(this));}h.prototype.getVideoUnits=function(){'use strict';return this.$VideoAutoplayControllerBase6;};h.prototype.setVideoUnits=function(i){'use strict';this.$VideoAutoplayControllerBase6=i;};h.prototype.addVideoUnit=function(i){'use strict';this.$VideoAutoplayControllerBase6.push(i);};h.prototype.getPlayingVideoUnit=function(){'use strict';return this.$VideoAutoplayControllerBase3;};h.prototype.setPlayingVideoUnit=function(i){'use strict';this.$VideoAutoplayControllerBase3=i;if(this.$VideoAutoplayControllerBase3)this.setupPlayingVideoUnitSubscriptions();};h.prototype.playVideo=function(i,j){'use strict';this.setPlayingVideoUnit(i);if(this.$VideoAutoplayControllerBase3)this.$VideoAutoplayControllerBase3.playWithoutUnmute(j);};h.prototype.setupPlayingVideoUnitSubscriptions=function(){'use strict';throw new Error('Should be overridden');};h.prototype.addSubscriberVideoUnit=function(){'use strict';if(!this.getVideoUnits().length){this.$VideoAutoplayControllerBase5.addSubscriptions(c('Event').listen(window,'resize',this.updateAutoplay.bind(this)),c('Event').listen(window,'blur',this.$VideoAutoplayControllerBase7.bind(this)),c('Event').listen(window,'focus',this.$VideoAutoplayControllerBase8.bind(this)),c('Visibility').addListener(c('Visibility').HIDDEN,this.$VideoAutoplayControllerBase7.bind(this)),c('Visibility').addListener(c('Visibility').VISIBLE,this.$VideoAutoplayControllerBase8.bind(this)),c('Arbiter').subscribe(c('DesktopHscrollUnitEventConstants').HSCROLL_ITEM_SHOWN_EVENT,this.updateAutoplay.bind(this)));if(!this.$VideoAutoplayControllerBase9())this.$VideoAutoplayControllerBase10();}};h.prototype.$VideoAutoplayControllerBase7=function(){'use strict';if(!this.$VideoAutoplayControllerBase2){this.$VideoAutoplayControllerBase2=this.getPlayingVideoUnit();this.pausePlayingVideo(c('VideoPlayerReason').PAGE_VISIBILITY);}};h.prototype.$VideoAutoplayControllerBase8=function(){'use strict';if(this.$VideoAutoplayControllerBase2){this.playVideo(this.$VideoAutoplayControllerBase2,c('VideoPlayerReason').PAGE_VISIBILITY);this.$VideoAutoplayControllerBase2=null;}};h.prototype.$VideoAutoplayControllerBase10=function(){'use strict';if(this.$VideoAutoplayControllerBase4)this.$VideoAutoplayControllerBase4.remove();this.$VideoAutoplayControllerBase4=c('Event').listen(window,'scroll',c('throttle')(this.updateAutoplay.bind(this),this.$VideoAutoplayControllerBase1));};h.prototype.$VideoAutoplayControllerBase9=function(){'use strict';return !!this.$VideoAutoplayControllerBase4;};h.prototype.getClosestVideoUnits=function(i){'use strict';return this.$VideoAutoplayControllerBase6.filter(function(j){return j.getDistanceToViewport()>=0;}).sort(function(j,k){return (j.getDistanceToViewport()-k.getDistanceToViewport());}).slice(0,i);};h.prototype.getVisibleUnits=function(){'use strict';var i=[];this.$VideoAutoplayControllerBase6.forEach(function(j){if(j.isVisible()){i.push(j);if(!j.wasVisible){j.wasVisible=true;j.logDisplayed();}}else j.wasVisible=false;});return i;};h.prototype.pausePlayingVideo=function(i){'use strict';var j=this.$VideoAutoplayControllerBase3;if(j){j.pause(i);if(c('VideoPlayerAbortLoadingExperiment').canAbort&&!j.getIsInChannel())j.abortLoading();this.$VideoAutoplayControllerBase3=null;}};h.prototype.updateAutoplay=function(){'use strict';throw new Error('Should be overridden');};f.exports=h;},null);
__d("XVideoAutoplayNuxAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/video\/autoplay\/nux\/",{});},null);
__d("XVideoAutoplayNuxDismissAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/video\/autoplay\/nux\/dismiss\/",{});},null);
__d("XVideoAutoplayNuxLogViewAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/video\/autoplay\/nux\/log\/view\/",{});},null);
__d('VideoAutoplayControllerX',['csx','AsyncRequest','DOM','Event','SubscriptionsHandler','VideoAutoplayControllerBase','VideoPlayerExperiments','VideoPlayerPreloadExperiment','VideoPlayerReason','XVideoAutoplayNuxAsyncController','XVideoAutoplayNuxDismissAsyncController','XVideoAutoplayNuxLogViewAsyncController','destroyOnUnload','getViewportDimensions'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=null,l=500;i=babelHelpers.inherits(m,c('VideoAutoplayControllerBase'));j=i&&i.prototype;function m(){'use strict';j.constructor.call(this,l);this.$VideoAutoplayControllerX1=new (c('SubscriptionsHandler'))();this.$VideoAutoplayControllerX2=new (c('SubscriptionsHandler'))();this.$VideoAutoplayControllerX3=true;this.$VideoAutoplayControllerX4=null;this.$VideoAutoplayControllerX5=null;this.$VideoAutoplayControllerX6=false;this.$VideoAutoplayControllerX7=null;var n=c('XVideoAutoplayNuxAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))(n).send();c('destroyOnUnload')(function(){this.$VideoAutoplayControllerX8();if(this===k)k=null;}.bind(this));}m.registerVideoUnit=function(n){'use strict';if(k==null)k=new m();k.addSubscriberVideoUnit();k.addVideoUnit(n);if(c('VideoPlayerExperiments').enforceOnlyOneVideoPlayingWithAudio)k.$VideoAutoplayControllerX9(n);if(n.isVisible())k.updateAutoplay();};m.setShouldAutoplay=function(n){'use strict';if(k==null)k=new m();k.$VideoAutoplayControllerX3=n;k.updateAutoplay();};m.prototype.$VideoAutoplayControllerX8=function(){'use strict';this.$VideoAutoplayControllerX1.release();this.$VideoAutoplayControllerX2.release();};m.setAutoplayNux=function(n,o){'use strict';if(k==null)return;k.$VideoAutoplayControllerX4=n;k.$VideoAutoplayControllerX5=o;k.$VideoAutoplayControllerX6=true;var p=c('DOM').find(o.getContentRoot(),"._5cqr");c('Event').listen(p,'click',function(){k.$VideoAutoplayControllerX10();});var q=c('DOM').scry(o.getContentRoot(),"._36gl")[0];if(q)c('Event').listen(q,'click',function(){k.$VideoAutoplayControllerX10();});};m.prototype.$VideoAutoplayControllerX10=function(){'use strict';this.$VideoAutoplayControllerX5.hide();this.$VideoAutoplayControllerX6=false;var n=c('XVideoAutoplayNuxDismissAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))(n).send();};m.prototype.setupPlayingVideoUnitSubscriptions=function(){'use strict';if(this.getPlayingVideoUnit().addListener){this.$VideoAutoplayControllerX1.release();this.$VideoAutoplayControllerX1.engage();if(!this.getPlayingVideoUnit().isLooping())this.$VideoAutoplayControllerX1.addSubscriptions(this.getPlayingVideoUnit().addListener('finishPlayback',function(){this.setPlayingVideoUnit(null);}.bind(this)));this.$VideoAutoplayControllerX1.addSubscriptions(this.getPlayingVideoUnit().addListener('turnOffAutoplay',function(){this.setPlayingVideoUnit(null);}.bind(this)));}};m.prototype.$VideoAutoplayControllerX9=function(n){'use strict';if(!n.addListener)return;var o=function(){var p=n.getVideoPlayerController();if(!p.isMuted()&&p.isState('playing')){if(this.$VideoAutoplayControllerX7&&this.$VideoAutoplayControllerX7!==n){var q=this.$VideoAutoplayControllerX7.getVideoPlayerController(),r=q.getOption('VideoWithLiveBroadcast','isLive');if(r){q.mute();}else q.pause(c('VideoPlayerReason').USER);}this.$VideoAutoplayControllerX7=n;}}.bind(this);this.$VideoAutoplayControllerX2.addSubscriptions(n.addListener('beginPlayback',o),n.addListener('changeVolume',o),n.addListener('unmuteVideo',o));};m.prototype.showAutoplayNUX=function(n){'use strict';if(this.$VideoAutoplayControllerX5&&!this.$VideoAutoplayControllerX5.isShown()){var o=n.getVideoPlayerController().getRootNode();c('DOM').prependContent(o,this.$VideoAutoplayControllerX4);this.$VideoAutoplayControllerX5.show();var p=c('XVideoAutoplayNuxLogViewAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))(p).send();}this.$VideoAutoplayControllerX6=false;};m.getChannelVideos=function(){'use strict';if(k)return k.getVideoUnits().filter(function(n){return n.getIsInChannel();});return null;};m.prototype.updateAutoplay=function(){'use strict';if(!this.$VideoAutoplayControllerX3){this.pausePlayingVideo(c('VideoPlayerReason').AUTOPLAY);return;}var n=this.getVisibleUnits();this.getClosestVideoUnits(c('VideoPlayerPreloadExperiment').preloadVideosCount).forEach(function(r){return r.preload();});var o=n.length,p=null;if(o==1){p=n[0];p=p.isAutoplayable()?p:null;}else if(o>1){var q=c('getViewportDimensions')().height/2;n.forEach(function(r){if(!r.isAutoplayable())return;var s=r.getDOMPosition(),t=s.y+s.height/2,u=Math.abs(t-q);r.playPriority=u;if(!p||r.playPriority<p.playPriority)p=r;});}if(this.getPlayingVideoUnit()){if(p!=this.getPlayingVideoUnit()){this.pausePlayingVideo(c('VideoPlayerReason').AUTOPLAY);this.playVideo(p,c('VideoPlayerReason').AUTOPLAY);if(this.$VideoAutoplayControllerX6)this.showAutoplayNUX(p);}}else if(p){this.playVideo(p,c('VideoPlayerReason').AUTOPLAY);if(this.$VideoAutoplayControllerX6)this.showAutoplayNUX(p);}};f.exports=m;},null);
__d('VideoAutoplayPlayerBase',['EventEmitter'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('EventEmitter'));i=h&&h.prototype;function j(){'use strict';i.constructor.call(this);}j.prototype.isVisible=function(){'use strict';throw new Error('Should be overridden');};j.prototype.getDistanceToViewport=function(){'use strict';throw new Error('Should be overridden');};j.prototype.logDisplayed=function(){'use strict';throw new Error('Should be overridden');};j.prototype.playWithoutUnmute=function(k){'use strict';throw new Error('Should be overridden');};j.prototype.pause=function(k){'use strict';throw new Error('Should be overridden');};j.prototype.isAutoplayable=function(){'use strict';throw new Error('Should be overridden');};j.prototype.getDOMPosition=function(){'use strict';throw new Error('Should be overridden');};j.prototype.isLooping=function(){'use strict';throw new Error('Should be overridden');};f.exports=j;},null);
__d('VideoPlayerUIComponentDrawer',['EventEmitter'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('EventEmitter'));i=h&&h.prototype;function j(k,l){i.constructor.call(this);this.$VideoPlayerUIComponentDrawer1=k;this.$VideoPlayerUIComponentDrawer2=l;this.$VideoPlayerUIComponentDrawer3=false;}j.prototype.reserve=function(){this.$VideoPlayerUIComponentDrawer3=true;this.emit('reserve');};j.prototype.release=function(){this.$VideoPlayerUIComponentDrawer3=false;this.emit('release');};j.prototype.getPriority=function(){return this.$VideoPlayerUIComponentDrawer1;};j.prototype.getHeight=function(){return this.$VideoPlayerUIComponentDrawer2;};j.prototype.isReserved=function(){return this.$VideoPlayerUIComponentDrawer3;};j.priorities={EmbeddedControls:0,ClickForMore:1,Subtitles:2,SphericalMouseAnimation:3};f.exports=j;},null);
__d('VideoPlayerVolumeSettings',['WebStorage'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){'use strict';this.$VideoPlayerVolumeSettings1=1;this.$VideoPlayerVolumeSettings2=1;}h.prototype.getVolume=function(){'use strict';var j=c('WebStorage').getLocalStorage();if(j){var k=j.getItem('videoPlayerControllerVolume');if(k===null||isNaN(+k))return 1;return +k;}return this.$VideoPlayerVolumeSettings1;};h.prototype.saveVolume=function(j){'use strict';var k=c('WebStorage').getLocalStorage();if(k)return k.setItem('videoPlayerControllerVolume',j);this.$VideoPlayerVolumeSettings1=j;};h.prototype.getLastVolumeBeforeMute=function(){'use strict';var j=c('WebStorage').getLocalStorage();if(j){var k=j.getItem('videoPlayerControllerLastVolumeBeforeMute');if(k===null||isNaN(+k))return 1;return +k;}return this.$VideoPlayerVolumeSettings2;};h.prototype.saveLastVolumeBeforeMute=function(j){'use strict';var k=c('WebStorage').getLocalStorage();if(k)return k.setItem('videoPlayerControllerLastVolumeBeforeMute',j);this.$VideoPlayerVolumeSettings2=j;};var i=new h();f.exports=i;},null);
__d('VideoWithLoopingPlayback',['VideoPlayerReason','setImmediate'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){'use strict';this.$VideoWithLoopingPlayback3=i;this.$VideoWithLoopingPlayback1=true;this.$VideoWithLoopingPlayback2=1;this.$VideoWithLoopingPlayback3.addListener('finishPlayback',function(){return this.$VideoWithLoopingPlayback4(j);}.bind(this));this.$VideoWithLoopingPlayback3.registerOption('Looping','isLooping',function(){return this.$VideoWithLoopingPlayback1;}.bind(this),function(k){return this.$VideoWithLoopingPlayback5(k);}.bind(this));}h.prototype.$VideoWithLoopingPlayback5=function(i){'use strict';this.$VideoWithLoopingPlayback1=i;};h.prototype.$VideoWithLoopingPlayback4=function(i){'use strict';var j=this.$VideoWithLoopingPlayback3.getOption('FeedAutoplay','isVisibleForAutoplay'),k=this.$VideoWithLoopingPlayback3.getOption('WatchAndScroll','isActive');if((j||j===undefined)&&!k&&(this.$VideoWithLoopingPlayback2<i||i==-1)){c('setImmediate')(function(){return this.$VideoWithLoopingPlayback3.play(c('VideoPlayerReason').LOOP);}.bind(this));this.$VideoWithLoopingPlayback2++;}else this.$VideoWithLoopingPlayback3.setOption('Looping','isLooping',false);};f.exports=h;},null);
__d('VideoPlayerLoggerErrorStates',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={PLAYBACK_FAILURE:'playback_failure',PLAYER_FAILURE:'player_failure'};},null);
__d('VideoPlayerLoggerErrors',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={ENTERED_FALLBACK:'entered_fallback',ERROR_CALLING_FLASH:'error_calling_flash'};},null);
__d('VideoPlayerLoggerFallbackReasons',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={TIMEOUT:'timeout',FLASH_ERROR:'flash_error',FLASH_UNAVAILABLE:'flash_unavailable'};},null);