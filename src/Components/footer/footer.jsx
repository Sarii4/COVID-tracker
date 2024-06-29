import { FooterWraper, Container ,Row} from "./footer.styles"




function Footer() {
    return (
        <>
            <FooterWraper>
                <Container>
                    <Row>
                        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-8">
                            <div class="bottom-logo">
                                <img class="pb-3" src="images/logo-white.png" alt="" />
                                <p class="parrafo_footer">These droplets can land on objects and surfaces around the person such as tables, doorknobs and handrails.</p>
                                <ul class="social-share list-inline mb-4">
                                    <li class="list-inline-item"><a href="#"><i class="bi bi-facebook"></i></a></li>
                                    <li class="list-inline-item"><a href="#"><i class="bi bi-twitter"></i></a></li>
                                    <li class="list-inline-item"><a href="#"><i class="bi bi-linkedin"></i></a></li>
                                    <li class="list-inline-item"><a href="#"><i class="bi bi-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="bottom-widget">
                                <div class="d-flex flex-column align-items-start">
                                    <h4 class="widget-title">Quick Links</h4>
                                </div>
                                <div class="d-flex flex-column align-items-start">
                                    <a href="#">Prevention</a>
                                    <a href="#">Qurantine</a>
                                    <a href="#">About</a>
                                    <a href="#">Help</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="bottom-widget">
                                <h4 class="widget-title">About</h4>
                                <div class="d-flex flex-column align-items-start">
                                    <a href="#">Hand Wash</a>
                                    <a href="#">Social</a>
                                    <a href="#">Isolate</a>
                                    <a href="#">Difference</a>
                                </div>
                            </div>
                        </div>


                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="bottom-widget">
                                <h4 class="widget-title">About</h4>
                                <div class="d-flex flex-column align-items-start">
                                    <a href="#">Hand Wash</a>
                                    <a href="#">Social</a>
                                    <a href="#">Isolate</a>
                                    <a href="#">Difference</a>
                                </div>
                            </div>
                        </div>


                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="bottom-widget">
                                <h4 class="widget-title">Help</h4>
                                <div class="d-flex flex-column align-items-start">
                                    <a href="#">Hand Wash</a>
                                    <a href="#">Social </a>
                                    <a href="#">Isolate</a>
                                    <a href="#">Difference</a>
                                </div>
                            </div>
                        </div>
                    </Row>

                </Container>


                <div class="lower-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="copyright">
                                    <p>© Copyright 2020. All Rights Reserved</p>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div class="copyright float-right">
                                    <p>Reply by <span>Daniela-Christian-Miguel</span></p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>    
            </FooterWraper>
        </>


    )
}

export default Footer
