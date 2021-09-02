<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0"/>
    <title>Div. Académica Telemática UTFV</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/animate.min.css">
    <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css">
    <link rel="stylesheet" href="css/OverlayScrollbars.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/vue.js"></script>
    <script src="js/vue-router.js"></script>
    <script src="js/vuex.js"></script>
</head>
<body onload="window.parent.caches.delete('call')">
    <div class="container-fluid animate__animated animate__fadeIn" id="app" oncontextmenu='return false'>
        <div class="row">
            <div class="col-12 mx-auto">

                <!-- MENÚ -->
                <div class="sidebar">
                    <div class="logo_content">
                        <div class="logo">
                            <!-- <i class='bx bxl-ok-ru'></i> -->
                            <img src="img/logoUTFV.svg" class="img-fluid" alt="logo">
                            <div class="logo_name">TELEMÁTICA</div>
                        </div>
                        <i class="bx bx-menu" id="btn"></i>
                    </div>
            
                    <ul class="nav_list">
                        <li>                            
                            <router-link class="a" to="/">
                                <a href="#">
                                    <i class='bx bxs-home'></i>
                                    <span class="links_name">Inicio</span>
                                </a>
                            </router-link>
                            <span class="tooltip">Inicio</span>
                        </li>
                        <li>                            
                            <router-link class="a" to="/inicio-classroom">
                                <a href="#">
                                    <i class='bx bxs-detail'></i>
                                    <span class="links_name">Classroom</span>
                                </a>
                            </router-link>
                            <span class="tooltip">Classroom</span>
                        </li>
                        <li>
                            <router-link class="a" to="/inicio-listas">
                                <a href="#">
                                    <i class='bx bx-list-check'></i>
                                    <span class="links_name">Listas</span>
                                </a>
                            </router-link>
                            <span class="tooltip">Listas</span>
                        </li>
                        <li>
                            <router-link class="a" to="/inicio-horarios">
                                <a href="#">
                                    <i class='bx bx-calendar'></i>
                                    <span class="links_name">Horarios</span>
                                </a>
                            </router-link>
                            <span class="tooltip">Horarios</span>
                        </li>
                        <li>
                            <router-link class="a" to="/inicio-calificaciones">
                                <a href="#">
                                    <i class='bx bx-book-bookmark'></i>
                                    <span class="links_name">Calificaciones</span>
                                </a>
                                <span class="tooltip">Calificaciones</span>
                            </router-link>
                        </li>
                    </ul>
            
            
                    <div class="profile_content">
                        <div class="profile">
                            <div class="profile_details">
                                <img src="img/imgDirector.jpg" alt="Dir. Acad Telématica">
                                <div class="name_job">
                                    <div class="name">Mtro. Oliver Raúl Velázquez Torres</div>
                                    <div class="job">Dir. Telemática</div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                </div>
        
                <div  id="vanta-canvas" class="home_content animate__animated animate__fadeIn">
                    <div class="text">
                        <router-view></router-view>
                    </div>
                </div>
                <!-- MENÚ -->

            </div>
        </div>
        
        
        



    </div>
    
    <script src="js/jquery.min.js"></script>
    <script src="js/axios.min.js"></script>
    <script src="js/sweetalert2.js"></script>
    <script src="js/OverlayScrollbars.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/three.min.js"></script>
    <script src="js/vanta.net.min.js"></script>
    <script src="components/Inicio.js"></script>
    <script>
        app.use(store);
        app.use(router)
        app.mount("#app")
    </script>
    <script>
        let btn = document.querySelector("#btn")
        let sidebar = document.querySelector(".sidebar")

        btn.onclick = function() {
            sidebar.classList.toggle("active")
        }

        document.addEventListener("DOMContentLoaded", function() {
            OverlayScrollbars(document.querySelectorAll("body"), { });
        });

        VANTA.NET({
          el: "#vanta-canvas",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x9dff3f
        })
    </script>
</body>
</html>