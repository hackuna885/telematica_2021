app.component('inicio-listas', {
  template: /*html*/ `
  <div class="row justify-content-center align-items-center vh-100 animate__animated animate__fadeIn">
    <div class="col-md-5 text-center mx-auto">
      <div class="mx-auto centrado cuandroUno animate__animated animate__pulse animate__delay-3s">
        <img src="img/Logo_UTFV.png" alt="Logo UTFV" class="img-fluid">
      </div>
      <div class="mb-5" style="background-color: rgba(35, 21, 60, .7); border: solid 2px #7DCB32; border-radius: 10px; padding: 20px;">

        <h1>Div. Académica Telemática</h1>
        <h3 class="text-white">Listas de Asistencia Provisionales 2021-3</h3>

        <div class="row" style="font-size: .8em;">
          <div class="col-md-6">
              <h5 class="text-white">IRD</h5>
              <ul class="listaArchivos">
                  <li><a href="https://drive.google.com/file/d/1-6fI_xaf7MhheVy_4WEbJUtWbyqL8pB5/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> IRD 101-2021-3</a></li>
                  <li><a href="https://drive.google.com/file/d/1Us59mi5HlOu0sozjpFSlaAcGNacWkbv5/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> IRD 102-2021-3</a></li>
                  <li><a href="https://drive.google.com/file/d/1c9DKyEO9WDsL33WV0PXzFqeQehJcAbJG/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> IRD 103-2021-3</a></li>
                  <li><a href="https://drive.google.com/file/d/1GlN9ZXeIV05Xmrxl-4Hk4gyVPzBZKXLK/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> IRD 201-2021-3</a></li>
                  <li><a href="https://drive.google.com/file/d/1a2cI4_6-CGn_GMB7NTkjr74nNN3w-mJq/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> IRD 301-2021-3</a></li>
                  <li><a href="https://drive.google.com/file/d/1o8O4P7cWuGSFXpVYGRHiVlHu34_tBcEI/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> IRD 401-2021-3</a></li>
                  <li><a href="https://drive.google.com/file/d/1-UwouylSP_RVpd1iI5wTvFZjE4pkSKXC/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> IRD 403-2021-3</a></li>
              </ul>
          </div>
          <div class="col-md-6">
              <h5 class="text-white text-center">IRIC</h5>
              <ul class="listaArchivos">
                  <li><a href="https://drive.google.com/file/d/1MGohrR2vLiuovPiWe_ktFdDkWxjHmSyd/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> IRIC 701-2021-3</li>
                  <li><a href="https://drive.google.com/file/d/1x3H6WpGp9MQKAgaBUBH8HMIbeSGE-FWJ/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> IRIC 702-2021-3</li>
                  <li><a href="https://drive.google.com/file/d/1o14Py0rmE3qJIiMmlDJOi6-g2QdIFmUo/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> IRIC 901-2021-3</li>
                  <li><a href="https://drive.google.com/file/d/1ZeHPXfI50loTYf5RKpo1hthX5LEu6AU7/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> IRIC 903-2021-3</li>
              </ul>
          </div>
        </div>

        <p>Ultima actualización: 07/09/2021 9:37 am</p>
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
app.component('inicio-classroom', {
  template: /*html*/ `
  <div class="row justify-content-center align-items-center vh-100 animate__animated animate__fadeIn">
    <div class="col-md-8 text-center mx-auto">
      <div class="mx-auto centrado cuandroUno animate__animated animate__pulse animate__delay-3s">
        <img src="img/Logo_UTFV.png" alt="Logo UTFV" class="img-fluid">
      </div>
      <div class="mb-5" style="background-color: rgba(35, 21, 60, .7); border: solid 2px #7DCB32; border-radius: 10px; padding: 20px;">

        <h1>Div. Académica Telemática</h1>
        <h1>Classroom</h1>
        <h5 class="text-white">TSU. En Tecnologías de la Información Área Infraestructura de Redes Digitales
          <br>
          e
          <br>
          Ingeniería en Redes Inteligentes y Ciberseguridad</h5>

        <div class="row" style="font-size: .8em;">
          <div class="col-md-10 mx-auto" style="overflow-x: auto">
              <h5 class="text-white">IRD</h5>
              <ul class="listaArchivos">
                <li><a href="https://drive.google.com/file/d/14IE5hze1_XNKz73JWtVnfyPuCuVfxLnQ/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> Códigos de Classroom</a></li>
              </ul>
          </div>
        </div>

        <p>Ultima actualización: 01/09/2021</p>
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

app.component('web-inicio', {
    template: /*html*/ `
    <div class="row justify-content-center align-items-center vh-100 animate__animated animate__fadeIn">
      <div class="col-md-5 mx-auto">
        <h1 class="text-center">Div. Académica Telemática</h1>
        
        <img src="img/vacuna.jpg" alt="Banner" class="img-fluid my-3">
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
                <li><a href="https://drive.google.com/file/d/1vACzT5bJ0U__kE6yrX2e78vJ4sjv-2I6/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class='fontGrande bx bxs-file-pdf'></i> IRD 103</a>
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
      <div class="col-md-10 text-center mx-auto">
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

  app.component('inicio-aulas', {
    template: /*html*/ `
    <div class="row justify-content-center align-items-center vh-100 animate__animated animate__fadeIn">
      <div class="col-md-6 text-center mx-auto">
        <div class="mx-auto centrado cuandroUno animate__animated animate__pulse animate__delay-3s">
          <img src="img/Logo_UTFV.png" alt="Logo UTFV" class="img-fluid">
        </div>
        <div class="mb-5" style="background-color: rgba(35, 21, 60, .7); border: solid 2px #7DCB32; border-radius: 10px; padding: 20px;">

          <h1>Div. Académica Telemática</h1>
          <h3 class="text-white">Horario de Aulas y Laboratorios</h3>

          <div class="row" style="font-size: .8em;">
            <div class="col-md-6 mx-auto">
                <ul class="listaArchivos">
                    
                    <li>
                      <a href="https://drive.google.com/file/d/1LvrpgIfI0SYHFsGhmt9bfPODNAnkDGLB/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> D100</a>
                    </li>
                    <li>
                      <a href="https://drive.google.com/file/d/1yE5s-VU3FwQYA1U6VJY9hgVfaXNkchfu/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> D201 matutino</a>
                    </li>
                    <li>
                      <a href="https://drive.google.com/file/d/13N7D-zMtwXtZxRJsk90NGz7c9fqMqZAf/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> D201 vespertino</a>
                    </li>
                    <li>
                      <a href="https://drive.google.com/file/d/1pnh0Xy7gw2Gx-DTW5IHjtiS-rFjTY1iQ/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> D202 matutino</a>
                    </li>
                    <li>
                      <a href="https://drive.google.com/file/d/1JmW2l8sPJuzQUZ9ep8-NKDpc1_cTqp3L/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> D202 vespertino</a>
                    </li>
                    <li>
                      <a href="https://drive.google.com/file/d/1Pps5Pp5VjOEgMMtzxD_OyCcMFSRok1X2/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> D206 matutino </a>
                    </li>
                    <li>
                      <a href="https://drive.google.com/file/d/1RNKGilrPOOp56RIuGSWgDYytqHi-oNkD/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> D206 vespertino</a>
                    </li>
                    <li>
                      <a href="https://drive.google.com/file/d/1qIfFziVK5X3cyFJmE9-awGF4ipxspLX4/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> D207 matutino</a>
                    </li>
                    <li>
                      <a href="https://drive.google.com/file/d/1a41-A6C5ZrKH_3Ye_rmC5XXIiqsuPrKc/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> D207 vespertino</a>
                    </li>
                    <li>
                      <a href="https://drive.google.com/file/d/1FfphSfhyiyGn5Dp3a9hF_TyCQ5Uj8uHz/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> K Aditorio</a>
                    </li>
                    <li>
                      <a href="https://drive.google.com/file/d/1X28Rgkbu0Wgav9Xut-FgWvVqwOu6DfXP/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> K105</a>
                    </li>
                    <li>
                      <a href="https://drive.google.com/file/d/1-sWfE6uoa-4-driCUjqPBTLC9yQUGVql/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> K109</a>
                    </li>
                    <li>
                      <a href="https://drive.google.com/file/d/1WqvBCswXG_q5a24H4xxtmM5L8O39G3Gm/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> G102</a>
                    </li>
                    <li>
                      <a href="https://drive.google.com/file/d/1YjPke6e8dQVGV35AFyrBxmeEeSXrqMHj/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> Kdirección matutino</a>
                    </li>
                    <li>
                      <a href="https://drive.google.com/file/d/1FS6luJxWln2oK-S6RkHSuWXfmvOT6-B0/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fontGrande bx bxs-file-pdf"></i> Kdirección vespertino</a>
                    </li>
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