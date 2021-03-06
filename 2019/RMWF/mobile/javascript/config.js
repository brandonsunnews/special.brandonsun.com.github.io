﻿	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaption="Loading";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#E8E8E8";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#444444";bookConfig.iconColor="#CCCCCC";bookConfig.pageNumColor="#333333";bookConfig.iconFontColor="#FFFFFF";bookConfig.toolbarAlwaysShow="No";bookConfig.InstructionsButtonVisible="Show";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.enablePageBack="Hide";bookConfig.ShareButtonVisible="Hide";bookConfig.EmailButtonVisible="Hide";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#FFFFFF";bookConfig.searchHightlightColor="#FDC606";bookConfig.SelectTextButtonVisible="Hide";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Hide";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Hide";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="3";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.minZoomWidth="403";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.bgBeginColor="#FFFFFF";bookConfig.bgEndColor="#FFFFFF";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.LeftShadowWidth="100";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="40";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#FFFFFF";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.3";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.thicknessWidthType="thick";bookConfig.thicknessColor="#FFFFFF";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="350";bookConfig.LinkDownColor="#0000FF";bookConfig.LinkAlpha="0.4";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#153422";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=64;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2382;;bookConfig.securityType="1";bookConfig.bookTitle="Brandon Sun - Royal manitoba Winter Fair 2019";bookConfig.bookmarkCR="f4faa8857375f81979ac1f3bdabadac9b6452991";bookConfig.productName="Flip PDF";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "English",btnFirstPage:"First",btnNextPage:"Next Page",btnLastPage:"Last",btnPrePage:"Previous Page",btnDownload:"Download",btnPrint:"Print",btnSearch:"Search",btnClearSearch:"Clear",frmSearchPrompt:"Clear",btnBookMark:"Table of content",btnHelp:"Help",btnHome:"Home",btnFullScreen:"Enable FullScreen",btnDisableFullScreen:"Disable FullScreen",btnSoundOn:"Sound On",btnSoundOff:"Sound Off",btnShareEmail:"Share",btnSocialShare:"Social Share",btnZoomIn:"Zoom In",btnZoomOut:"Zoom Out",btnDragToMove:"Move by mouse drag",btnAutoFlip:"Auto Flip",btnStopAutoFlip:"Stop Auto Flip",btnGoToHome:"Return Home",frmHelpCaption:"Help",frmHelpTip1:"Double click to zoom in or out",frmHelpTip2:"Drag the page corner to view",frmPrintCaption:"Print",frmPrintBtnCaption:"Print",frmPrintPrintAll:"Print All Pages",frmPrintPrintCurrentPage:"Print Current Page",frmPrintPrintRange:"Print Range",frmPrintExampleCaption:"Example: 2,5,8-26",frmPrintPreparePage:"Preparing Page:",frmPrintPrintFailed:"Print Failed:",pnlSearchInputInvalid:"(Minimal request length is 3 symbols)",loginCaption:"Login",loginInvalidPassword:"Not a valid password!",loginPasswordLabel:"Password:",loginBtnLogin:"Login",loginBtnCancel:"Cancel",btnThumb:"Thumbnails",lblPages:"Pages:",lblPagesFound:"Pages:",lblPageIndex:"Page",btnAbout:"About",frnAboutCaption:"About & Contact",btnSinglePage:"Single Page",btnDoublePage:"Double Page",btnSwicthLanguage:"Switch Language",tipChangeLanguage:"Please select a language below...",btnMoreOptionsLeft:"More Options",btnMoreOptionsRight:"More Options",btnFit:"Fit Window",smallModeCaption:"Click to view in fullscreen",btnAddAnnotation:"Add Annotations",btnAnnotation:"Annotations",FlipPageEditor_SaveAndExit:"Save and Exit",FlipPageEditor_Exit:"Exit",DrawToolWindow_Redo:"Redo",DrawToolWindow_Undo:"Undo",DrawToolWindow_Clear:"Clear",DrawToolWindow_Brush:"Brush",DrawToolWindow_Width:"Width",DrawToolWindow_Alpha:"Alpha",DrawToolWindow_Color:"Color",DrawToolWindow_Eraser:"Eraser",DrawToolWindow_Rectangular:"Rectangular",DrawToolWindow_Ellipse:"Ellipse",TStuff_BorderWidth:"Border Width",TStuff_BorderAlph:"Border Alpha",TStuff_BorderColor:"Border Color",DrawToolWindow_TextNote:"Text Note",AnnotMark:"Book Mark",lastpagebtnHelp:"Last page",firstpagebtnHelp:"First page",homebtnHelp:"Return to home page",aboubtnHelp:"About",screenbtnHelp:"Open this application in full-screen mode",helpbtnHelp:"Show help",searchbtnHelp:"Search from pages",pagesbtnHelp:"Take a look at the thumbnail of this brochure",bookmarkbtnHelp:"Open Bookmark",AnnotmarkbtnHelp:"Open Table of content",printbtnHelp:"Print the brochure",soundbtnHelp:"Turn on or off the sound",sharebtnHelp:"Send Email to",socialSharebtnHelp:"Social Share",zoominbtnHelp:"Zoom in",downloadbtnHelp:"Downdlaod this brochure",pagemodlebtnHelp:"Switch Single and double page mode",languagebtnHelp:"Switch Lauguage",annotationbtnHelp:"Add Annotation",addbookmarkbtnHelp:"Add Bookmark",removebookmarkbtnHelp:"Remove BookMark",updatebookmarkbtnHelp:"Update Bookmark",btnShoppingCart:"Shopping Cart",Help_ShoppingCartbtn:"Shopping Cart",Help_btnNextPage:"Next page",Help_btnPrePage:"Previous page",Help_btnAutoFlip:"Auto filp",Help_StopAutoFlip:"Stop atuo filp",btnaddbookmark:"Add",btndeletebookmark:"Delete",btnupdatebookmark:"Update",frmyourbookmarks:"Your bookmarks",frmitems:"items",DownloadFullPublication:"Full Publication",DownloadCurrentPage:"Current Page",DownloadAttachedFiles:"Attached Files",lblLink:"Link",btnCopy:"Copy Button",infCopyToClipboard:"Your browser does not support clipboard. ",restorePage:"Would you like to restore previous session",tmpl_Backgoundsoundon:"Background Sound On",tmpl_Backgoundsoundoff:"Background Sound Off",tmpl_Flipsoundon:"Flip Sound On",tmpl_Flipsoundoff:"Flip Sound Off",Help_PageIndex:"The current page number",tmpl_PrintPageRanges:"PAGE RANGES",tmpl_PrintPreview:"PREVIEW",btnSelection:"Select Text",loginNameLabel:"Name:",btnGotoPage:"Go",btnSettings:"Setting",soundSettingTitle:"Sound Setting",closeFlipSound:"Close Flip Sound",closeBackgroundSound:"Close Backgorund Sound",frmShareCaption:"Share",frmShareLinkLabel:"Link:",frmShareBtnCopy:"Copy",frmShareItemsGroupCaption:"Social Share",TAnnoActionPropertyStuff_GotoPage:"Go to page",btnPageBack:"Backward",btnPageForward:"Forward",SelectTextCopy:"Copy Selected Text",selectCopyButton:"Copy",TStuffCart_TypeCart:"Shopping Cart",TStuffCart_DetailedQuantity:"Quantity",TStuffCart_DetailedPrice:"Price",ShappingCart_Close:"Close",ShappingCart_CheckOut:"Checkout",ShappingCart_Item:"Item",ShappingCart_Total:"Total",ShappingCart_AddCart:"Add to cart",ShappingCart_InStock:"In Stock",TStuffCart_DetailedCost:"Shipping cost",TStuffCart_DetailedTime:"Delivery time",TStuffCart_DetailedDay:"day(s)",ShappingCart_NotStock:"Not enough in stock",btnCrop:"Crop",btnDragButton:"Drag",btnFlipBook:"Flip Book",btnSlideMode:"Slide Mode",btnSinglePageMode:"Single Page Mode",btnVertical:"Vertical Mode",btnHotizontal:"Horizontal Mode",btnClose:"Close",btnDoublePage:"Double Page",btnBookStatus:"Book View",checkBoxInsert:"Insert Current Page",lblLast:"This is the last page.",lblFirst:"This is the first page.",lblFullscreen:"Click to view in fullscreen",lblName:"Name",lblPassword:"Password",lblLogin:"Login",lblCancel:"Cancel",lblNoName:"User name can not be empty.",lblNoPassword:"Password can not be empty.",lblNoCorrectLogin:"Please enter the correct user name and password.",btnVideo:"Video Gallery",btnSlideShow:"Slide Show",pnlSearchInputInvalid:"(Minimal request length is 3 symbols)",btnDragToMove:"Move by mouse drag",btnPositionToMove:"Move by mouse position",lblHelp1:"Drag the page corner to view",lblHelp2:"Double click to zoom in, out",lblCopy:"Copy",lblAddToPage:"add to page",lblPage:"Page",lblTitle:"Title",lblEdit:"Edit",lblDelete:"Delete",lblRemoveAll:"Remove All",tltCursor:"cursor",tltAddHighlight:"add highlight",tltAddTexts:"add texts",tltAddShapes:"add shapes",tltAddNotes:"add notes",tltAddImageFile:"add image file",tltAddSignature:"add signature",tltAddLine:"add line",tltAddArrow:"add arrow",tltAddRect:"add rect",tltAddEllipse:"add ellipse",lblDoubleClickToZoomIn:"Double click to zoom in.",frmShareCaption:"Share",frmShareLabel:"Share",frmShareInfo:"You can easily share this publication to social networks.Just cilck the appropriate button below.",frminsertLabel:"Insert to Site",frminsertInfo:"Use the code below to embed this publication to your website.",btnQRCode:"Click to scan QR code",btnRotateLeft:"Rotate Left",btnRotateRight:"Rotate Right",lblSelectMode:"Select view mode please.",frmDownloadPreview:"Preview",frmHowToUse:"How To Use",lblHelpPage1:"Move your finger to flip the book page.",lblHelpPage2:"Zoom in by using gesture or double click on the page.",lblHelpPage3:"Click on the logo to reach the official website of the company.",lblHelpPage4:"Add bookmarks, use search function and auto flip the book.",lblHelpPage5:"Switch horizontal and vertical view on mobile devices.",TTActionQuiz_PlayAgain:"Do you wanna play it again",TTActionQuiz_Ration:"Your ratio is",frmTelephone:"Telephone list",btnDialing:"Dialing",lblSelectMessage:"Please copy the the text content in the text box",btnSelectText:"Select Text",btnNote:"Annotation",btnPhoneNumber:"Telephone",frmBookMark:"Bookmark",btnFullscreen:"Fullscreen",btnExitFullscreen:"Exit Fullscreen",btnMore:"More",frmPrintall:"Print All Pages",frmPrintcurrent:"Print Current Page",frmPrintRange:"Print Range",frmPrintexample:"Example: 2,3,5-10",frmPrintbtn:"Print",frmaboutcaption:"Contact",frmaboutcontactinformation:"Contact Information",frmaboutADDRESS:"Address",frmaboutEMAIL:"Email",frmaboutWEBSITE:"Website",frmaboutMOBILE:"Mobile",frmaboutAUTHOR:"Author",frmaboutDESCRIPTION:"Description",frmSearch:"Search",frmToc:"Table Of Contents",btnTableOfContent:"Table Of Contents",lblDescription:"Title",frmLinkLabel:"Link",infNotSupportHtml5:"Your browser does not support HTML5.",frmQrcodeCaption:"Scan the bottom two-dimensional code to view with mobile phone."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.517810","y":"0.942480","width":"0.337717","height":"-0.023074"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.thedockonprincess.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.620668","y":"0.771059","width":"0.189117","height":"-0.012921"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.thedockonprincess.com"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.170620","y":"0.610120","width":"0.313442","height":"-0.021416"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.thedockonprincess.com"}}],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.344462","y":"0.478705","width":"0.240017","height":"-0.015517"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.royalmanitobawinterfair.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.344462","y":"0.463201","width":"0.156434","height":"-0.015517"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:info@provincialex.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.479520","y":"0.921807","width":"0.403352","height":"-0.027507"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.winnipeggoldbuyer.com"}}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.661205","y":"0.943699","width":"0.184772","height":"-0.016898"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.millcosteelltd.ca"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.661205","y":"0.925607","width":"0.276242","height":"-0.016897"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:millco@mts.net"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.038462","y":"0.949562","width":"0.150895","height":"-0.014827"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:ckemp@brandonsun.com"}}],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.518966","y":"0.880608","width":"0.431268","height":"-0.017514"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://windsorplywood.com"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.078721","y":"0.896503","width":"0.260882","height":"-0.016444"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.kickinaxethrowing.com"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.531322","y":"0.886557","width":"0.400969","height":"-0.007997"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://michelin.ca"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.533026","y":"0.878177","width":"0.065068","height":"-0.011196"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://michelin.ca"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.273077","y":"0.843779","width":"0.157716","height":"-0.014826"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:ckemp@brandonsun.com"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.792420","y":"0.927304","width":"0.133525","height":"-0.015869"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.thebrick.com"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.676885","y":"0.958174","width":"0.276653","height":"-0.025439"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.twofarmkids.com"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.526367","y":"0.956794","width":"0.416381","height":"-0.014754"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:cjacobson@hotmail.ca"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.273077","y":"0.952946","width":"0.145293","height":"-0.014827"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:dmay@brandonsun.com"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.623958","y":"0.958241","width":"0.192429","height":"-0.015819"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:sales@elitesunrooms.ca"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.623957","y":"0.914330","width":"0.318623","height":"-0.021671"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.sunspacesunrooms.com"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.650512","y":"0.940919","width":"0.168219","height":"-0.016977"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.rotaryvillas.ca"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.562735","y":"0.925415","width":"0.348878","height":"-0.016976"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:info@rotaryvillas.ca"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.642393","y":"0.960255","width":"0.184438","height":"-0.014937"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.caamanitoba.com"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.572889","y":"0.960885","width":"0.327816","height":"-0.014773"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.thunderbirdbowl.ca"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.575123","y":"0.952053","width":"0.309131","height":"-0.024907"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.wheatcityretreat.com"}}],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.054735","y":"0.624571","width":"0.058113","height":"-0.012270"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://BNDMB.ca"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.615963","y":"0.904186","width":"0.317607","height":"-0.020482"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.greatcanadianoilchange.com"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.758312","y":"0.946829","width":"0.179591","height":"-0.012994"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:info.brandon@mb.sja.ca"}}],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.038462","y":"0.468915","width":"0.160233","height":"-0.014827"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:mverge@brandonsun.com"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.575583","y":"0.957861","width":"0.290599","height":"-0.025350"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.kelleherford.com"}}]]}; bookConfig.isFlipPdf=false;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}