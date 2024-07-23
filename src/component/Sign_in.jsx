import React from 'react'
import { Link } from 'react-router-dom'

const Sign_in = () => {
  return (
    <>
    <body style={{margin: 0, overflow: 'hidden'}}>
    <section class="vh-100 bg-image"
  >
            <div class="bg-holder" style={{backgroundImage:"url(assets/img/illustrations/how-it-works.png)", backgroundPosition:'center bottom', backgroundsize:'cover'}}></div>

  <div class=" h-100 ">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
        <div class="card" style={{borderradius: "15px",maxHeight:"570px"}}>
        <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-2">Kayıt Ol</h2>

              <form style={{margin:" 0 auto",maxHeight: "auto"}} >

                <div data-mdb-input-init class="form-outline mb-2">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example1cg">Your Name</label>
                </div>

                <div data-mdb-input-init class="form-outline mb-2">
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                </div>

                <div data-mdb-input-init class="form-outline mb-2">
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cg">Password</label>
                </div>

                <div data-mdb-input-init class="form-outline mb-2">
                  <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                </div>

                <div class="form-check d-flex justify-content-center mb-2">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button  type="button" data-mdb-button-init
                    data-mdb-ripple-init class="btn btn-success btn-block btn-lg gradient-custom-4 ">Kayıt Ol</button>

<div class="text-center text-muted" id="gSignInWrapper">
                        <span class="label">Google ile Kayıt: </span>
                             <div id="customBtn" class="customGPlusSignIn">
                        <span class="icon"></span>
                        <span class="buttonText">Google</span>
                         </div>
                     </div>
                    <div id="name"></div>
                </div>

                <p class="text-center text-muted mt-2 mb-0">Zaten Hesabın Var Mı ? <a href="#!"
                    class="fw-bold text-body"><u><Link to={'/SignUp'} className="fw-bold text-body">
                    Giriş Yap 
                                </Link></u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </body>
    </>
  )
}

export default Sign_in