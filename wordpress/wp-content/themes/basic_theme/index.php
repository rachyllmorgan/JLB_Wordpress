<!DOCTYPE html>
<html ng-app="app">
<head>
	<title>JLB WordPress AngularJS Demo</title>
	<?php wp_head(); ?>
</head>
<body>

	<header>
		<h1>
			<a href="<?php echo site_url(); ?>">JLB WordPress AngularJS Demo</a>
		</h1>
	</header>

	<div>
		<input type="text" ng-model="name" placeholder="Your Name Here">

		<p>Hello, {{name}}</p>
	</div>

	<div ng-view></div>

	<footer>
		&copy; <?php echo date( 'Y' ); ?>
	</footer>

</body>
</html>