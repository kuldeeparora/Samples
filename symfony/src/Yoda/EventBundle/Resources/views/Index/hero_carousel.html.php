<!-- Hero Carousel Starts -->
<div id="heroCarousel" class="carousel slide" data-ride="carousel">
    <!-- Wrapper for slides -->
    <div class="carousel-inner">
        <?php for ($i = 0; $i < count($heroItems); ++$i): ?>
            <?php $item = $heroItems[$i]; ?>
            <div class="item<?php if ($i === 0): ?> active<?php endif; ?>">
                <a href="<?php echo $item->getLink(); ?>">
                    <div class="overlay">
                        <p class="channel-logo-medium channel-logo-medium-<?php echo $item->getLogoSlug(); ?>"></p>
                    </div>
                    <img src="<?php echo $item->getImageLg(); ?>"
                         alt="<?php echo $item->getTitle(); ?>">
                </a>
            </div>
        <?php endfor; ?>
    </div>
    <!-- End Carousel Inner -->

    <ul class="hero-carousel-nav nav nav-pills nav-justified">
        <?php for ($i = 0; $i < count($heroItems); ++$i): ?>
            <?php $item = $heroItems[$i]; ?>
            <li data-target="#heroCarousel" data-slide-to="<?php echo $i; ?>"
                <?php if ($i === 0): ?>class="active"<?php endif; ?>>
                <a href="#">
                    <img src="<?php echo $item->getImageSm(); ?>"
                         class="hero-carousel-nav-img">
                    <span><?php echo $item->getTitle(); ?></span>
                </a>
            </li>
        <?php endfor; ?>
    </ul>
</div>
<!-- Hero Carousel End -->
