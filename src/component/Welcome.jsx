
import { Link } from 'react-router-dom'

const Home = () => {
  

  return (
    <>
      <div>
      <main class="main" id="top">
      
      <section class="py-0" id="header">
        <div class="bg-holder d-none d-md-block"
style={{ backgroundImage: "url(assets/img/illustrations/hero-header.png),url(assets/img/illustrations/bg.png) ", backgroundPosition: 'right top, top left',backgroundSize: 'contain'}}></div>
        
        <div class="bg-holder d-md-none" style={{ backgroundImage: "url(assets/img/illustrations/hero-bg.png)" }} >
        </div>                            
        
        <div class="container">
          <div class="row align-items-center min-vh-75 min-vh-lg-100">
            <div class="col-md-7 col-lg-6 col-xxl-5 py-6 text-sm-start text-center">
              <h1 class="mt-6 mb-sm-4 fw-semi-bold lh-sm fs-4 fs-lg-5 fs-xl-6">Tarıma Yatırım Yapmanın Yeni Bir Yolu </h1>
              <p class="mb-4 fs-1">Toprak Rehberi, çiftçilere, çiftlik sahiplerine, özel ormancılara ve tarım üreticilerine çevrimiçi self servis uygulamaları ve eğitim materyalleri sağlıyor.
              
</p>
<Link to={'Signin'} className="btn btn-lg btn-success">Bize Katıl </Link>
              

            </div>
          </div>
        </div>
      </section>

      <section class="py-0" id="nasılCalisir">
        <div class="bg-holder" style={{backgroundImage:"url(assets/img/illustrations/how-it-works.png)", backgroundPosition:'center bottom', backgroundsize:'cover'}}></div>
       
        <div class="container-lg">
          <div class="row justify-content-center">
            <div class="col-sm-8 col-md-9 col-xl-5 text-center pt-8">
              <h5 class="fw-bold fs-3 fs-xxl-5 lh-sm mb-3 text-white">Nasıl Çalışır ?</h5>
              <p class="mb-5 text-white">Tedarik zincirinden dilediğinizi seçin ve yalnızca Zou tarafından değil, aynı zamanda en iyi arazi, aile mirası, yenilikçilik ve genel olarak üstün uzmanlık tarafından desteklenen tarımsal işletme projelerine katılın.</p>
            </div>
            <div class="col-sm-9 col-md-12 col-xxl-9">
              <div class="theme-tab">
                <ul class="nav justify-content-between">
                  <li class="nav-item" role="presentation"><a class="nav-link active fw-semi-bold" href="#bootstrap-tab1" data-bs-toggle="tab" data-bs-target="#tab1" id="tab-1"><span class="nav-item-circle-parent"><span class="nav-item-circle">01</span></span></a></li>
                  <li class="nav-item" role="presentation"><a class="nav-link fw-semi-bold" href="#bootstrap-tab2" data-bs-toggle="tab" data-bs-target="#tab2" id="tab-2"><span class="nav-item-circle-parent"><span class="nav-item-circle">02</span></span></a></li>
                  <li class="nav-item" role="presentation"><a class="nav-link fw-semi-bold" href="#bootstrap-tab3" data-bs-toggle="tab" data-bs-target="#tab3" id="tab-3"><span class="nav-item-circle-parent"><span class="nav-item-circle">03</span></span></a></li>
                  <li class="nav-item" role="presentation"><a class="nav-link fw-semi-bold" href="#bootstrap-tab4" data-bs-toggle="tab" data-bs-target="#tab4" id="tab-4"><span class="nav-item-circle-parent"><span class="nav-item-circle">04</span></span></a></li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab-1">
                    <div class="row align-items-center my-6 mx-auto">
                      <div class="col-md-6 col-lg-5 offset-md-1">
                        <h3 class="fw-bold lh-base text-white">Select your farmshare and complete reservation form here.</h3>
                      </div>
                      <div class="col-md-5 text-white offset-lg-1">
                        <p class="mb-0">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere</p>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab-2">
                    <div class="row align-items-center my-6 mx-auto">
                      <div class="col-md-6 col-lg-5 offset-md-1">
                        <h3 class="fw-bold lh-base text-white">The Farm Share has been one of the best new additions to our life</h3>
                      </div>
                      <div class="col-md-5 text-white offset-lg-1">
                        <p class="mb-0">We the farmers choose the vegetables in your share each week. A Farm Share is perfect for those who love the weekly surprise, and who look forward to cooking with inspiration from the seasons.</p>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab-3">
                    <div class="row align-items-center my-6 mx-auto">
                      <div class="col-md-6 col-lg-5 offset-md-1">
                        <h3 class="fw-bold lh-base text-white">There is so much love and thought put into this CSA. You can feel that.</h3>
                      </div>
                      <div class="col-md-5 text-white offset-lg-1">
                        <p class="mb-0">We the farmers choose the vegetables in your share each week. A Farm Share is perfect for those who love the weekly surprise, and who look forward to cooking with inspiration from the seasons.</p>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab-4">
                    <div class="row align-items-center my-6 mx-auto">
                      <div class="col-md-6 col-lg-5 offset-md-1">
                        <h3 class="fw-bold lh-base text-white">The Farm Share has been one of the best new additions to our life</h3>
                      </div>
                      <div class="col-md-5 text-white offset-lg-1">
                        <p class="mb-0">We the farmers choose the vegetables in your share each week. A Farm Share is perfect for those who love the weekly surprise, and who look forward to cooking with inspiration from the seasons.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section class="py-0" id="contact">
      <div className="bg-holder" style={{ backgroundImage: "url(assets/img/illustrations/footer-bg.png)", backgroundPosition: 'center', backgroundSize: 'cover' }}></div>        
        <div class="container">
          <div class="row justify-content-lg-between min-vh-75" style= {{paddingTop: '21rem' }}>
          <div class="col-6 col-sm-4 col-lg-auto mb-3">
              <h6 class="mb-3 text-1000 fw-semi-bold">COMPANY </h6>
              <ul class="list-unstyled mb-md-4 mb-lg-0">
                <li class="mb-3"><a class="text-700 text-decoration-none" href="#!">About Us</a></li>
                <li class="mb-3"><a class="text-700 text-decoration-none" href="#!">Team</a></li>
                <li class="mb-3"><a class="text-700 text-decoration-none" href="#!">Careers</a></li>
                <li class="mb-3"><a class="text-700 text-decoration-none" href="#!">Contact</a></li>
              </ul>
            </div>
            <div class="col-6 col-sm-4 col-lg-auto mb-3">
              <h6 class="mb-3 text-1000 fw-semi-bold">INVEST </h6>
              <ul class="list-unstyled mb-md-4 mb-lg-0">
                <li class="mb-3"><a class="text-700 text-decoration-none" href="#!">Features</a></li>
                <li class="mb-3"><a class="text-700 text-decoration-none" href="#!">How it works</a></li>
                <li class="mb-3"><a class="text-700 text-decoration-none" href="#!">Pricing</a></li>
                <li class="mb-3"><a class="text-700 text-decoration-none" href="#!">Login</a></li>
              </ul>
            </div>
            <div class="col-6 col-sm-4 col-lg-auto mb-3">
              <h6 class="mb-3 text-1000 fw-semi-bold">LEGAL </h6>
              <ul class="list-unstyled mb-md-4 mb-lg-0">
                <li class="mb-3"><a class="text-700 text-decoration-none" href="#!">Privacy</a></li>
                <li class="mb-3"><a class="text-700 text-decoration-none" href="#!">Terms</a></li>
                <li class="mb-3"><a class="text-700 text-decoration-none" href="#!">Security</a></li>
              </ul>
            </div>
            <div class="col-12 col-lg-auto mb-3">
              <div class="card bg-success">
                <div class="card-body p-sm-4">
                  <h5 class="text-white">Blog Zou</h5>
                  <p class="mb-0 text-white">Bize Mail Atın  <span class="text-white fs--1 fs-sm-1">info@zoufarm.com</span></p><button class="btn btn-light text-success" type="button"> <svg class="bi bi-person me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#76C279" viewBox="0 0 16 16">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                    </svg>Sing In</button>
                </div>
              </div>
            </div>
          </div>
          <hr class="text-300 mb-0" />
          
        </div>
      </section>

     

     
    </main>
      </div>
    </>
  );
};

export default Home;