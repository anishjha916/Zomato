<template>
     <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel2" aria-hidden="true" ref="myModalRef2">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel2">
            Login
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="login">
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
              <input type="text" class="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default">
            </div>
            <button type="button" class="btn btn-danger w-100 mt-4 btn-lg">Set One Time Password</button>
            <p class="mt-2 d-flex justify-content-center fs-5">or</p>
            <button type="button" class="btn btn-outline-secondary w-100 d-flex justify-content-center">
            <img style="width: 20px; height: 20px" class="mt-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAllBMVEX////x9ff4RDfc5ur4PjD+4N35XVL1+Prx///Z8fb0dnH2enPx+Pr4QTP4Oyzx+/3+6uj6bmX4NSX4MiDy7e7y4uPb6/Dn7vH0v734Lhvzzs70sa/1oJ33TUH5KBH3Z173VErz1tb2g33e3+L/+Pj8rqr6kIv6dW75Yln4IAD9yMb1lpLuwcDiztDnuLn8vbrso6Di19kE1rKrAAAIC0lEQVR4nO2deX+iPBDHS0x9bCVJBenWE6UKtNrqvv839yTYQyHAcIf95Pf3ss3XOTKZ4bi709LS0tLS0tLS0tLS0tLS0tLS0gJq9/R0L/TU9UJu9bWopx38kvneHweTSMGLaf6niEzz5XtVY38/h5DsFuMNoj9aLQ1mKCFmLFe/60KbYJFrn/eQYEzQjwj2HCVo2NS7XRcm4Xu2WXzr+opIVrhVgIZtQyu2MIItP8M49+4aJWVZPHC6ReHhYlHJ0tbufSpLaEsuQAivl9NOjcOmyzWWLs0OU2ie3Jn0Aq43HjjdGYc53lvaymaufPfwZD72c828K1czjXn6r8w9zZOxvKfSC9HNohtXY9PFRhYuv14jyWm7jdwrv4XRoYsczZwDylnYJpnS9vHMFxfB4/ZzNNuOcTYLz7b7BEyYdw2nGc5bpmHzYWLfS5omjLPMUe5F/DJrMWoxDZijhZX7E/MfGcXrtCWAhWs9bi+pmWZWfr2mWcZgxpkZ41ezYVtpgDlDGAui4xiMC4RBFM2NFozDdxcEXpJ7y/KUH//fwvjc/I7DpufcLPa7ovC2Crgfgi/lWc13GrYNc/z8LPYLM7wvDYMIDZotbsz5I4WzVIPhXjpcNEdjmqdhEZaqMDw2D02lAdPkx+NCi6kKwwNnYoyaYBkZATz0a4LhxiFOA+XAyCHFzFIPDMJ27YFjspNdYiE1wCBiHaa10pjTg1Uk8uuEQcT2nPqMY5qOV4alJhiEbPdYV1YzzaMrb6i0BYOszb6eliczFpu882HTMDyp+XWUamzqgwvL5mB4GphsK+84o21QKlyKwUD+Ah0eK9KMjkOIi6UsBgqzQpA/gtGeVXA1NtrndGAusvhyKsBgb5rSsr0VsbzygcOmsIxsh69j+SqBMOPR1AdVsDN3W7KBy7ZZDcsfEeq/PjxWhGHGPqc9eJG1eSmz45jGCygj49V58FwZhtdLRxdiHEr3xV2NTfcUkJEJdT+fnwfVYUTeBLkamRUesvHj8QzyP1Pv42EwqAUG+vshezIvlKNH8wASLpSeX58HdcGIydUGktWsIsdp01yAdhd7+DmIWGqCiTrYEIfACDxkY9MlZHch9uPHBaU+GHHWmEH+NnQ6zRwP0k3C9uH1m6U+GOEVkBMtoSGkVBttQ0gUUrx4/mGpEUYswIVs1TT/OM1/GOn0OCaekaMs1gRMdGMBxNXWh+zAYdPDGuJixPt1sdphDMb2oJ7WOsiYTpvMCSD9fbo6P9+w1AwjivUQ4mr2JrWBa5rzISDNEyv8fBgMGoXhgeNRgKtRlDKdZtMF5EiJsfcRZ6kfhufU5Qqw12EinU7nT48jUbS8DZeGYEShm7gpRyKCg3k8cEwxPQZ4qfWz6TcNw71++wgIHEKHsTuIeFUUAliIFXwkSRqCiXopNqy4uaYxGeh4TGxf4mLNwYipNqi4scfmT+Aw0wOVd7NzIvKbhRHt+g3kkDMj32mAOQRQ7xO6SmaxxmGMkZF/JwgXvdx6ZxpHSGWHSfCaytIgDA/nM6QcwOI4LY53EHJ+0s9QgzCi1T0BuBqhvuNADt7RSb8rGHFkgxxKCA0CCAvf9DNZGoYxTGcJCQVIB4ES2abfJowI7LKTiFtZG+mm3yqMKOgnwBt2srSe5LhYKzDCOP5b6XHEReTNyyVpB4aXA6dZ2UFRJH7QTt9cWoaJugOFbhC5ES9I0zf9DmBE44iUnL3xk/7f/HBpE0a09Are8fL9J1a5Gbl1mGjyXSJHW25+Rm4fJioHICX+tcgsb9PvCkYMC1IepkgRXp/BLtY2jHA10ED3SxY6wl2sdRjRHZhAJi6RZm4RF2sfJuoOQDqvooebdtJXB4bXagtI1wKjxXNRlvZhxHDPzTvkEOweYZt+1zDGyMkZFmAM3vQ7h7k8H5rOQtGyWBbrFIbX0S/pt6nY4edDKZaOYKKBrrznSexx0YzcOUxadwDTQ6lw6RZGfleMOOmXV3cwohyI19FW4U1fFZjEnWQ8XApv+urA8Kx2NcTA6Fwyi6kBI8qBr8dHCN2U2fSVguHlQDQswHj8typL9zCiHNhQujqU2/QVgxE52nWrZGSVYESOlg9c+wgjcP78OzBcddAoA1MHjTowhvFPwVQ2jlIwVWnUgqlIoxhMNRzlYKrQqAdTgUZBmPI4SsKUpVETpiSNojDlygFlYcoYR12YEjQKwxSnURmmMI3SMEXTgOIwxYyjOkwhGuVhitCoD1MApw8wYJpewEBp+gFj/AHh9AQGZpzewEBo+gMDoOkRTH5x0yuYPOP0CyaHpmcw2TR9g8kMnP7BZND0ECbd1foIk0rTS5g0V+spjNw4QJiUtwJ3ByOlSYOJvRU45X3NHcLIaFJg4u9rTnmTdpcwksBJg4m/SVv+jvNuYRLGSYFJvONc/vb5jmHiNHKY5Nvn71zZv+saJuZqchgcD5m7u5PswZfuYW6MI4exTgmYnWynUQDmmkYKg4eSzwPNJV85UQHmikYK8yb9rpaffERZCZhfHBnM+iBjudsl32mnCMw3jQRmFqR8gyr5nSNVYL5okjBpXzkSNI+xBy2Vgbnk6DgMmT1mfO9vd0A3T1gpBCOMcwtDMDpkf4TuPVjR3wfIVYLhNFcwhNJVkP0FOmGck++uqHXRLFAIxvjzENhfC6Mr1z+Bvt24PS19bxzpMOr6W43XYofLqjx/edpCSL7ss3u6CH5JG/pa1K7A9zS1tLS0tLS0tLS0tLS0tLS0tLRK6H8/jzkxv/mM+QAAAABJRU5ErkJggg==" />
            <span class="ms-2">continue with email</span>
          </button>
          <button type="button" class="mt-4 btn btn-outline-secondary w-100 d-flex justify-content-center">
            <img style="width: 20px; height: 20px" class="mt-1" src="../assets/google.png" />
            <span class="ms-2">Sign In with Google</span>
          </button>
          <hr class="mt-5">
          <p class="">New To Zomato ? <span class="text-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Create Account</span></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>