<template>
    <section class="contact__area4 section-pt-120 bg-img-cover">
        <div class="container">
            <div class="row gy-5">
                <div class="col-lg-5">
                    <div class="section__title mb-50 title-shape-none">
                        <h6 class="sub-title2">Professional Esports Team</h6>
                        <h3 class="title2">Contact Us & Meet Our Team !</h3>
                    </div>
                    <div class="contact-list-wrap">
                        <div class="footer-contact-link">
                            <div class="icon">
                                <svg-location />
                            </div>
                            <div>
                                <h4 class="title">Office Location:</h4>
                                <p>Marks Dan Street 15UIK, Berlin <br class="d-lg-block d-none">
                                    FP 256 Germany.</p>
                            </div>
                        </div>
                        <div class="footer-contact-link">
                            <div class="icon">
                                <svg-contact-info />
                            </div>
                            <div>
                                <h4 class="title">Contact:</h4>
                                <a class="link" href="tel:163254736587">(+163)-2547-36587</a>
                                <a class="link" href="mailto:infohelp@example.com">infohelp@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="contact__form-wrap4">
                        <form id="contact-form">
                            <div class="row">
                                <div class="col-12">
                                    <div class="input-grp">
                                        <input name="name" type="text" placeholder="Your Name *" required>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="input-grp">
                                        <input name="email" type="email" placeholder="Your Email *" required>
                                    </div>
                                </div>
                            </div>
                            <div class="input-grp message-grp">
                                <textarea name="message" cols="30" rows="10"
                                    placeholder="Enter your message"></textarea>
                            </div>
                            <button class="submit-btn tg-btn-5">
                                <span>Submit Now</span>
                            </button>
                        </form>
                        <p class="ajax-response"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>