<? include "./include/header.php"; ?>

        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <script type="text/javascript">
            google.charts.load('current', {
                packages: ['corechart']
            });
        </script>

		<!-- One -->
            <section id="one" class="wrapper" style="padding:1em;">
                <div class="inner">
                    <h2>2019 Readership Survey Results</h2>
                    <div id="piechart1"></div><hr>
					<div id="piechart2"></div><hr>
					<div id="piechart3"></div><hr>
					<div id="piechart4"></div><hr>
					<div id="piechart5"></div><hr>
					<div id="piechart6"></div><hr>
					<div id="piechart7"></div><hr>
					<div id="piechart8"></div><hr>
					<div id="piechart9"></div><hr>
					<div id="piechart10"></div><hr>
					<div id="piechart11"></div>


					<!-- Q1 -->
					<script type="text/javascript">
					// Load google charts
					google.charts.load('current', {'packages':['corechart']});
					google.charts.setOnLoadCallback(drawChart);

					// Draw the chart and set the chart values
					function drawChart() {
					  var data = google.visualization.arrayToDataTable([
					  ['Group', 'Count'],
					  ['Under 18',     0],
					  ['18-25',        6],
					  ['26-35',        20],
					  ['36-45',        20],
					  ['46-55',        31],
					  ['56-65',        58],
					  ['Over 66',      165]
					]);

					  // Optional; add a title and set the width and height of the chart
					  var options = {'title':'1. To what age group do you belong?', 'height':400, 'width':'90%'};

					  // Display the chart inside the <div> element with id="piechart"
					  var chart = new google.visualization.PieChart(document.getElementById('piechart1'));
					  chart.draw(data, options);
					}
					</script>

					<!-- Q2 -->
					<script type="text/javascript">
					// Load google charts
					google.charts.load('current', {'packages':['corechart']});
					google.charts.setOnLoadCallback(drawChart);

					// Draw the chart and set the chart values
					function drawChart() {
					  var data = google.visualization.arrayToDataTable([
					  ['Group', 'Count'],
					  ['Never',                            33],
					  ['Two or three times per week',      16],
					  ['Every day',                        33],
					  ['Weekly',                           13],
					  ['I am a Brandon Sun subscriber',    240]
					]);

					  // Optional; add a title and set the width and height of the chart
					  var options = {'title':'2. How often do you buy a newspaper?', 'height':400};

					  // Display the chart inside the <div> element with id="piechart"
					  var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
					  chart.draw(data, options);
					}
					</script>

					<!-- Q3 -->
					<script type="text/javascript">
					// Load google charts
					google.charts.load('current', {'packages':['corechart']});
					google.charts.setOnLoadCallback(drawChart);

					// Draw the chart and set the chart values
					function drawChart() {
					  var data = google.visualization.arrayToDataTable([
					  ['Group', 'Count'],
					  ['Print',            225],
					  ['Desktop',          20],
					  ['Mobile device',    29],
					  ['E-edition',        25]
					]);

					  // Optional; add a title and set the width and height of the chart
					  var options = {'title':'3. Through which one of the following do you prefer to read your news? ', 'height':400};

					  // Display the chart inside the <div> element with id="piechart"
					  var chart = new google.visualization.PieChart(document.getElementById('piechart3'));
					  chart.draw(data, options);
					}
					</script>

					<!-- Q4 -->
					<script type="text/javascript">
					// Load google charts
					google.charts.load('current', {'packages':['corechart']});
					google.charts.setOnLoadCallback(drawChart);

					// Draw the chart and set the chart values
					function drawChart() {
					  var data = google.visualization.arrayToDataTable([
					  ['Group', 'Count'],
					  ['Printed newspapers',       255],
					  ['News websites',            104],
					  ['Social media',             92],
					  ['iPhone/Android Apps',      43],
					  ['Radio',                    167],
					  ['TV News',                  152]
					]);

					  // Optional; add a title and set the width and height of the chart
					  var options = {'title':'4. How do you access information about your community?', 'height':400};

					  // Display the chart inside the <div> element with id="piechart"
					  var chart = new google.visualization.PieChart(document.getElementById('piechart4'));
					  chart.draw(data, options);
					}
					</script>

					<!-- Q5 -->
					<script type="text/javascript">
					// Load google charts
					google.charts.load('current', {'packages':['corechart']});
					google.charts.setOnLoadCallback(drawChart);

					// Draw the chart and set the chart values
					function drawChart() {
					  var data = google.visualization.arrayToDataTable([
					  ['Group', 'Count'],
					  ['Content',          222],
					  ['Price',            63],
					  ['Format',           66],
					  ['Availability',     169]
					]);

					  // Optional; add a title and set the width and height of the chart
					  var options = {'title':'5. In regard to your above answer, what factors do you look for in deciding to opt for that particular news source? ', 'height':400};

					  // Display the chart inside the <div> element with id="piechart"
					  var chart = new google.visualization.PieChart(document.getElementById('piechart5'));
					  chart.draw(data, options);
					}
					</script>

					<!-- Q6 -->
					<script type="text/javascript">
					// Load google charts
					google.charts.load('current', {'packages':['corechart']});
					google.charts.setOnLoadCallback(drawChart);

					// Draw the chart and set the chart values
					function drawChart() {
					  var data = google.visualization.arrayToDataTable([
					  ['Group', 'Count'],
					  ['CKLQ/STAR FM',                     179],
					  ['CBC Radio/TV',                     163],
					  ['The Brandon Sun (any format)',     287],
					  ['CTV News',                         212],
					  ['EBrandon',                         46],
					  ['The Westman Journal',              76],
					  ['Westman This Week',                115]
					]);

					  // Optional; add a title and set the width and height of the chart
					  var options = {'title':'6. Which news organizations do you trust to give you accurate information?', 'height':400};

					  // Display the chart inside the <div> element with id="piechart"
					  var chart = new google.visualization.PieChart(document.getElementById('piechart6'));
					  chart.draw(data, options);
					}
					</script>

					<!-- Q7 -->
					<script type="text/javascript">
					// Load google charts
					google.charts.load('current', {'packages':['corechart']});
					google.charts.setOnLoadCallback(drawChart);

					// Draw the chart and set the chart values
					function drawChart() {
					  var data = google.visualization.arrayToDataTable([
					  ['Group', 'Count'],
					  ['Less than 20 minutes',         37],
					  ['About 30 minutes to an hour',  193],
					  ['One to two hours',             61],
					  ['More than two hours',          9]
					]);

					  // Optional; add a title and set the width and height of the chart
					  var options = {'title':'7. How much time do you spend reading the news in any given day?', 'height':400};

					  // Display the chart inside the <div> element with id="piechart"
					  var chart = new google.visualization.PieChart(document.getElementById('piechart7'));
					  chart.draw(data, options);
					}
					</script>

					<!-- Q8 -->
					<script type="text/javascript">
					// Load google charts
					google.charts.load('current', {'packages':['corechart']});
					google.charts.setOnLoadCallback(drawChart);

					// Draw the chart and set the chart values
					function drawChart() {
					  var data = google.visualization.arrayToDataTable([
					  ['Group', 'Count'],
					  ['Local News',           248],
					  ['Sports',               11],
					  ['Sound Off',            24],
					  ['Political columns',    6],
					  ['Editorial page',       7],
					  ['Entertainment',        1],
					  ['Comics pages',         3]
					]);

					  // Optional; add a title and set the width and height of the chart
					  var options = {'title':'8. When you read The Brandon Sun, which of the following do you go to first?', 'height':400};

					  // Display the chart inside the <div> element with id="piechart"
					  var chart = new google.visualization.PieChart(document.getElementById('piechart8'));
					  chart.draw(data, options);
					}
					</script>

					<!-- Q9 -->
					<script type="text/javascript">
					// Load google charts
					google.charts.load('current', {'packages':['corechart']});
					google.charts.setOnLoadCallback(drawChart);

					// Draw the chart and set the chart values
					function drawChart() {
					  var data = google.visualization.arrayToDataTable([
					  ['Group', 'Count'],
					  ['Arts/Entertainment',           1186],
					  ['Federal/Provincial politics',  1456],
					  ['Municipal Government',         1522],
					  ['Sports',                       1230],
					  ['Education',                    1271],
					  ['Court/Crime',                  1401],
					  ['Opinion/Editorial',            1537],
					  ['Local news features',          2178],
					  ['Business',                     1196]
					]);

					  // Optional; add a title and set the width and height of the chart
					  var options = {'title':'9. Which topics generally interest you?', 'height':400};

					  // Display the chart inside the <div> element with id="piechart"
					  var chart = new google.visualization.ColumnChart(document.getElementById('piechart9'));
					  chart.draw(data, options);
					}
					</script>

					<!-- Q10 -->
					<script type="text/javascript">
					// Load google charts
					google.charts.load('current', {'packages':['corechart']});
					google.charts.setOnLoadCallback(drawChart);

					// Draw the chart and set the chart values
					function drawChart() {
					  var data = google.visualization.arrayToDataTable([
					  ['Group', 'Count'],
					  ['Diane Nelson (Vine Lines)',        1322],
					  ['Cody Lobreau (First Draught)',     1220],
					  ['Tyler Glen (Morning Mess)',        2132],
					  ['Kerry Auriat (Kerry Nation)',      1906],
					  ['Mark Frison (Mark my words)',      1615],
					  ['Zack Gross (Small World)',         1573],
					  ['Mariah Phillips (All Dressed Up)', 1544],
					  ['David McConkey (Citizen Active)',  1651]
					]);

					  // Optional; add a title and set the width and height of the chart
					  var options = {'title':'10. Which are your favourite columnists?', 'height':400};

					  // Display the chart inside the <div> element with id="piechart"
					  var chart = new google.visualization.ColumnChart(document.getElementById('piechart10'));
					  chart.draw(data, options);
					}
					</script>
                    
					<!-- Q11 -->
					<script type="text/javascript">
					// Load google charts
					google.charts.load('current', {'packages':['corechart']});
					google.charts.setOnLoadCallback(drawChart);

					// Draw the chart and set the chart values
					function drawChart() {
					  var data = google.visualization.arrayToDataTable([
					  ['Group', 'Count'],
					  ['Sound Off',                    681],
					  ['Daily editorials',             665],
					  ['Letters to the editor',        636],
					  ['RIDES Section',                374],
					  ['Saturday Business Section',    493],
					  ['Sports: statistics page',      480],
					  ['Saturday/Daily Comics',        414],
					  ['Crossword Puzzle',             484],
					  ['Horoscopes',                   459],
					  ['Rural Round-up',               613],
					  ['Looking Back',                 564],
					  ['Lets Do Something',            571],
					  ['Saturday travel page',         491],
					  ['Whizword',                     440]
					]);

					  // Optional; add a title and set the width and height of the chart
					  var options = {'title':'11. Which are your favourite Sun features?', 'height':400};

					  // Display the chart inside the <div> element with id="piechart"
					  var chart = new google.visualization.ColumnChart(document.getElementById('piechart11'));
					  chart.draw(data, options);
					}
					</script>
                </div>
        

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.dropotron.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/jquery.selectorr.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/util.js"></script>
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
			<script src="assets/js/main.js"></script>
            <script src="assets/js/totop.js"></script>
            <script src="assets/js/modalclose.js"></script>
</section>
