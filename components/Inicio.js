app.component('web-inicio', {
    template: /*html*/ `
    <div class="row justify-content-center align-items-center vh-100 animate__animated animate__fadeIn">
      <div class="col-md-5 mx-auto">
        <h1 class="text-center">Inicio</h1>
      </div>
    </div>
    `,
    data () {
        return {
            datos: '',
        }
    },
    computed: { 

    },
    methods: {
        
    },
    created () {
        
    },
    mounted() {
        
    },
  })

app.component('inicio-horarios', {
    template: /*html*/ `
    <div class="row justify-content-center align-items-center vh-100 animate__animated animate__fadeIn">
      <div class="col-md-5 text-center mx-auto">
        <div class="mx-auto centrado cuandroUno animate__animated animate__pulse animate__delay-3s">
          <img src="img/Logo_UTFV.png" alt="Logo UTFV" class="img-fluid">
        </div>
        <div class="mb-5" style="background-color: rgba(35, 21, 60, .7); border: solid 2px #7DCB32; border-radius: 10px; padding: 20px;">

          <h1>Div. Académica Telemática</h1>
          <h3 class="text-white">Horarios de Grupo 2021-3</h3>

          <div class="row" style="font-size: .8em;">
            <div class="col-sm-6 mx-auto">
              <h5 class="text-white text-center">IRD</h5>
              <ul class="listaArchivos">
                <li><a href="https://drive.google.com/file/d/1iIVGRvAINlIcl6XqVdhY1Jed2fiFgp2x/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class='fontGrande bx bxs-file-pdf'></i> IRD 101</a>
                </li>
                <li><a href="https://drive.google.com/file/d/1SMhjYlKCKbL2KSCYOjj5WUPJ6if-RFxh/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class='fontGrande bx bxs-file-pdf'></i> IRD 102</a>
                </li>
                <li><a href="https://drive.google.com/file/d/1xdw-sjc0zdt5P-G449UUtvdVy2vZb1mc/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class='fontGrande bx bxs-file-pdf'></i> IRD 201</a>
                </li>
                <li><a href="https://drive.google.com/file/d/1PKW5wzwFjvTNqmnmfDUE_YWR4AryQGoE/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class='fontGrande bx bxs-file-pdf'></i> IRD 301</a>
                </li>
                <li><a href="https://drive.google.com/file/d/1UO5j22Qux-3rxv7PWtq0cEAa1idtsQ2S/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class='fontGrande bx bxs-file-pdf'></i> IRD 401</a>
                </li>
                <li><a href="https://drive.google.com/file/d/1LOf-3r8666xe17xBHTfMbMNfBX5f7CXl/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class='fontGrande bx bxs-file-pdf'></i> IRD 403</a>
                </li>

              </ul>
            </div>
            <div class="col-sm-6 mx-auto">
              <h5 class="text-white text-center">IRIC</h5>
              <ul class="listaArchivos">
                <li>
                  <a href="https://drive.google.com/file/d/1MV7R1CrkALd6gkG-QpiyabLBMlh4l6xa/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class='fontGrande bx bxs-file-pdf'></i> IRIC 701</li>
                <li>
                  <a href="https://drive.google.com/file/d/1LZYtUTzJfI4tgFI9XBPG0uQbvQVJ9ZrI/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class='fontGrande bx bxs-file-pdf'></i> IRIC 702</li>
                <li>
                  <a href="https://drive.google.com/file/d/1zCVjSfv_ZyYpVVPyoYnuA_Opf7f2gYDV/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class='fontGrande bx bxs-file-pdf'></i> IRIC 901</li>
                <li>
                  <a href="https://drive.google.com/file/d/1HpON1Uv1beHVZemZXlMIlwv3tq37JD3w/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class='fontGrande bx bxs-file-pdf'></i> IRIC 903</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    `,
    data () {
        return {
            datos: '',
        }
    },
    computed: { 

    },
    methods: {
        
    },
    created () {
        
    },
    mounted() {
        
    },
  })

  app.component('inicio-calificaciones', {
    template: /*html*/ `
    <div class="row justify-content-center align-items-center vh-100 animate__animated animate__fadeIn">
      <div class="col-md-8 text-center mx-auto">
        <div class="mx-auto centrado cuandroUno animate__animated animate__pulse animate__delay-3s">
          <img src="img/Logo_UTFV.png" alt="Logo UTFV" class="img-fluid">
        </div>
        <div class="mb-5" style="background-color: rgba(35, 21, 60, .7); border: solid 2px #7DCB32; border-radius: 10px; padding: 20px;">

          <h1>Div. Académica Telemática</h1>
          <h3 class="text-white">Concentrado de calificaciones 2021-2</h3>

          <div class="row" style="font-size: .8em;">
            <div class="col-md-6">
                <h5 class="text-white">IRD</h5>
                <ul class="listaArchivos">
                    <li><a href="https://drive.google.com/file/d/1p-PyKOOi8LXzCPRU9SPcHK70341_6oik/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> Concentrado de Calif Redes 2021-2 IRD 101</a></li>
                    <li><a href="https://drive.google.com/file/d/1DN8UNwdIlcx99tzlBgv8V12C3GhfqW_L/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> Concentrado de Calif Redes 2021-2 IRD 201</a></li>
                    <li><a href="https://drive.google.com/file/d/15kh88UnIgOFeHiKAfjuYHGh3RL3-vGUs/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> Concentrado de Calif Redes 2021-2 IRD 301</a></li>
                    <li><a href="https://drive.google.com/file/d/1NvMApEfDwHwJmUQ3tLu4RJohsHgM7k1D/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> Concentrado de Calif Redes 2021-2 IRD 303</a></li>
                    <li><a href="https://drive.google.com/file/d/1BvTbWKxjWXrm-pYTGfElHDWr6LfyXGeg/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> Concentrado de Calif Redes 2021-2 IRD 501</a></li>
                </ul>
            </div>
            <div class="col-md-6">
                <h5 class="text-white text-center">IRIC</h5>
                <ul class="listaArchivos">
                    <li><a href="https://drive.google.com/file/d/12QUANkJVTarN-oGZ3RlHbBFBKBO0LiWi/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> Concentrado de Calif Redes 2021-2 IRIC 801</li>
                    <li><a href="https://drive.google.com/file/d/1qsu17XtrRtQf7ZOBRopA8XKNf6nz_DRZ/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> Concentrado de Calif Redes 2021-2 IRIC 803</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    `,
    data () {
        return {
            datos: '',
        }
    },
    computed: { 

    },
    methods: {
        
    },
    created () {
        
    },
    mounted() {
        
    },
  })