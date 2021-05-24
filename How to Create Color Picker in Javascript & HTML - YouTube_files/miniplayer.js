(function(g){var window=this;'use strict';var z4=function(a){g.V.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.Rf=!1;this.player=a;this.N(a,"minimized",this.Xf);this.N(a,"onStateChange",this.mC)},A4=function(a){g.dM.call(this,a);
this.i=new z4(this.player);this.i.hide();g.RL(this.player,this.i.element,4);a.Ce()&&(this.load(),g.L(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(z4,g.V);g.k=z4.prototype;
g.k.IA=function(){this.tooltip=new g.CP(this.player,this);g.G(this,this.tooltip);g.RL(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.kc=new g.ZM(this.player);g.G(this,this.kc);this.eg=new g.V({D:"div",K:"ytp-miniplayer-scrim"});g.G(this,this.eg);this.eg.ya(this.element);this.N(this.eg.element,"click",this.Hw);var a=new g.V({D:"button",Ca:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.fK()]});g.G(this,a);a.ya(this.eg.element);this.N(a.element,"click",this.Hh);
a=new g.e0(this.player,this);g.G(this,a);a.ya(this.eg.element);this.Dn=new g.V({D:"div",K:"ytp-miniplayer-controls"});g.G(this,this.Dn);this.Dn.ya(this.eg.element);this.N(this.Dn.element,"click",this.Hw);var b=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.G(this,b);b.ya(this.Dn.element);a=new g.V({D:"div",K:"ytp-miniplayer-play-button-container"});g.G(this,a);a.ya(this.Dn.element);var c=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.G(this,c);c.ya(this.Dn.element);this.rI=new g.zO(this.player,
this,!1);g.G(this,this.rI);this.rI.ya(b.element);b=new g.wO(this.player,this);g.G(this,b);b.ya(a.element);this.nextButton=new g.zO(this.player,this,!0);g.G(this,this.nextButton);this.nextButton.ya(c.element);this.gg=new g.pP(this.player,this);g.G(this,this.gg);this.gg.ya(this.eg.element);this.Dc=new g.EO(this.player,this);g.G(this,this.Dc);g.RL(this.player,this.Dc.element,4);this.qw=new g.V({D:"div",K:"ytp-miniplayer-buttons"});g.G(this,this.qw);g.RL(this.player,this.qw.element,4);a=new g.V({D:"button",
Ca:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.fK()]});g.G(this,a);a.ya(this.qw.element);this.N(a.element,"click",this.Hh);a=new g.V({D:"button",Ca:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Close"},S:[g.kK()]});g.G(this,a);a.ya(this.qw.element);this.N(a.element,"click",this.RQ);this.N(this.player,"presentingplayerstatechange",this.Cc);this.N(this.player,"appresize",this.qb);this.N(this.player,"fullscreentoggled",this.qb);this.qb()};
g.k.show=function(){this.pd=new g.cn(this.xo,null,this);this.pd.start();this.Rf||(this.IA(),this.Rf=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Dc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.pd&&(this.pd.dispose(),this.pd=void 0);g.V.prototype.hide.call(this);this.player.Ce()||(this.Rf&&this.Dc.hide(),this.player.loadModule("annotations_module"))};
g.k.va=function(){this.pd&&(this.pd.dispose(),this.pd=void 0);g.V.prototype.va.call(this)};
g.k.Hh=function(){this.player.stopVideo();this.player.Ma("onCloseMiniplayer")};
g.k.RQ=function(){this.player.playVideo()};
g.k.Hw=function(a){if(a.target===this.eg.element||a.target===this.Dn.element)g.R(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.iJ(this.player.rb())?this.player.pauseVideo():this.player.playVideo():this.player.Ma("onExpandMiniplayer")};
g.k.Xf=function(){g.L(this.player.getRootNode(),"ytp-player-minimized",this.player.Ce())};
g.k.Tc=function(){this.Dc.Tb();this.gg.Tb()};
g.k.xo=function(){this.Tc();this.pd&&this.pd.start()};
g.k.Cc=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.qb=function(){g.PO(this.Dc,0,this.player.Xa().getPlayerSize().width,!1);g.GO(this.Dc)};
g.k.mC=function(a){this.player.Ce()&&(0===a?this.hide():this.show())};
g.k.ac=function(){return this.tooltip};
g.k.oe=function(){return!1};
g.k.Ee=function(){return!1};
g.k.Ch=function(){return!1};
g.k.gx=function(){};
g.k.Il=function(){};
g.k.Np=function(){};
g.k.Ul=function(){return null};
g.k.gi=function(){return new g.ag(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Ho=function(a,b,c,d,e){var f=0,h=d=0,l=g.yg(a);if(b){c=g.pn(b,"ytp-prev-button")||g.pn(b,"ytp-next-button");var m=g.pn(b,"ytp-play-button"),n=g.pn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.wg(b,this.element),h=b.x,f=b.y-12):n&&(h=g.pn(b,"ytp-miniplayer-button-top-left"),f=g.wg(b,this.element),b=g.yg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Xa().getPlayerSize().width;e=f+(e||0);l=g.ce(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Xj=function(){};
g.k.zj=function(){return!1};g.v(A4,g.dM);A4.prototype.create=function(){};
A4.prototype.Qh=function(){return!1};
A4.prototype.load=function(){this.player.hideControls();this.i.show()};
A4.prototype.unload=function(){this.player.showControls();this.i.hide()};g.oM.miniplayer=A4;})(_yt_player);
