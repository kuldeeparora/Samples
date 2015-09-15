
<div class="homepage" ng-controller="HomeCtrl">
    aaa

    <script type='text/php'>
        include ('hero_carousel.html.php');
    </script>

    <?php echo $view->render('hero_carousel.html.php') ?>

    <?php echo $view->render('AppPlayerBundle:Index:secondary_carousel.html.php') ?>

</div>
