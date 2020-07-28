<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "DTD/xhtml1-transitional.dtd">
<html>
<head>

<?
    // Search - Strip Special Characters | BEGIN
    
    // Search - Strip Special Characters | END
    
if (!$title)
	echo "<title>Brandon Sun - 2019 Readership Survey Results</title>";
else
	echo "<title>$title</title>";
    echo "<meta property=\"og:title\" content=\"$Page\" />";
?>
	
	<!--Puts favicon.ico in firefox next to address bar, and the bookmark icon -->
	<link rel="shortcut icon" href="//media.brandonsun.com/designimages/favicon2.ico" type="image/x-icon" />
	<!--End of favicon code -->
    <script src="https://use.fontawesome.com/0c21a0b8c1.js"></script>
    <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Head Data from Core Site | START-->
        <link rel="stylesheet" type="text/css" href="./include/css/brandonsun.css">
        <link type="text/css" rel="stylesheet" href="//www.brandonsun.com/includes/v5_base.css"/>					
        <link type="text/css" rel="stylesheet" href="//www.brandonsun.com/includes/BS_theme.css"/>
        <script src="https://fpnewsplatform.brandonsun.com/assets/common/js/jquery.min.js"></script>
        <script src="./include/js/modernizr3.3.1.js"></script>
        <script src="./include/js/nav.js"></script>
        <!-- code to be place in the head tag -->
        <script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'></script>
        <script>
          var googletag = googletag || {};
          googletag.cmd = googletag.cmd || [];
        </script>
        <script>
        var viewportWidth = document.documentElement.clientWidth;
          googletag.cmd.push(function() {
            if(viewportWidth > 799){
                if(viewportWidth > 995){
                        googletag.defineSlot('/3823844/brandonsun.com', [[970,90],[970,250]], 'leaderboard').setTargeting('loc', ['top']).addService(googletag.pubads());
                    }else{
                        googletag.defineSlot('/3823844/brandonsun.com', [728,90], 'leaderboard').setTargeting('loc', ['top']).addService(googletag.pubads());

                    }
            } else {
                googletag.defineSlot('/3823844/brandonsun.com', [320,50], 'mobile_banner').setTargeting('loc', ['top']).addService(googletag.pubads());
            }
            googletag.pubads().enableSingleRequest();
            googletag.pubads().collapseEmptyDivs();
            googletag.pubads().setTargeting('pr', ['obits']).setTargeting('ck', ['obits']);
            googletag.enableServices();
          });
        </script>
    <!-- Head Data From Core Site | STOP -->
</head>
<body class="beta" style="position: relative; min-height: 100%; top: 0px;">
<?php include './include/php/nav.php'; ?>
    
    <div id="class_main">
        <div id="middle_column">