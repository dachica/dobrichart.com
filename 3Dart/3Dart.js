var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        allowTouchMove: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });
        
        
        
        
        // ============================================ canvas =========================
        
        const canvas = document.getElementById("renderCanvas"); // Get the canvas element
        const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

        // Add your code here matching the playground format
        const createScene = function () {
    
            const scene = new BABYLON.Scene(engine);  

            BABYLON.SceneLoader.ImportMeshAsync("", "", "knife1.babylon");

            const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
            camera.attachControl(canvas, true);
            const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
            var light1 = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
            light.intensity = 5;
            light1.intensity = 5;

            
        //     scene.debugLayer.show();

            return scene;
        };

        const scene = createScene(); //Call the createScene function

        // Register a render loop to repeatedly render the scene
        engine.runRenderLoop(function () {
                scene.render();
        });

        // Watch for browser/canvas resize events
        window.addEventListener("resize", function () {
                engine.resize();
        });


        // ============================================ canvas2 =========================


        const canvas2 = document.getElementById("renderCanvas2"); // Get the canvas element
        const engine2 = new BABYLON.Engine(canvas2, true); // Generate the BABYLON 3D engine

        // Add your code here matching the playground format
        const createScene2 = function () {
    
            const scene2 = new BABYLON.Scene(engine2);  

            BABYLON.SceneLoader.ImportMeshAsync("", "", "knife2.babylon");

            const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
            camera.attachControl(canvas2, true);
            const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
            var light1 = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene2);
            light.intensity = 5;
            light1.intensity = 5;

            
        //     scene.debugLayer.show();

            return scene2;
        };

        const scene2 = createScene2(); //Call the createScene function

        // Register a render loop to repeatedly render the scene
        engine2.runRenderLoop(function () {
                scene2.render();
                
        });

        // Watch for browser/canvas resize events
        window.addEventListener("resize", function () {
                engine2.resize();
        });


        // ==============================================canvas3 ====================

        const canvas3 = document.getElementById("renderCanvas3"); // Get the canvas element
        const engine3 = new BABYLON.Engine(canvas3, true); // Generate the BABYLON 3D engine

        // Add your code here matching the playground format
        const createScene3 = function () {
    
            const scene3 = new BABYLON.Scene(engine3);  

            BABYLON.SceneLoader.ImportMeshAsync("", "", "knife3.babylon");

            const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
            camera.attachControl(canvas3, true);
            const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
            var light1 = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene3);
            light.intensity = 5;
            light1.intensity = 5;

            
        //     scene.debugLayer.show();

            return scene3;
        };

        const scene3 = createScene3(); //Call the createScene function

        // Register a render loop to repeatedly render the scene
        engine2.runRenderLoop(function () {
                scene3.render();
                
        });

        // Watch for browser/canvas resize events
        window.addEventListener("resize", function () {
                engine3.resize();
        });

        // ==============================================canvas4 ====================

        const canvas4 = document.getElementById("renderCanvas4"); // Get the canvas element
        const engine4 = new BABYLON.Engine(canvas4, true); // Generate the BABYLON 3D engine

        // Add your code here matching the playground format
        const createScene4 = function () {
    
            const scene4 = new BABYLON.Scene(engine4);  

            BABYLON.SceneLoader.ImportMeshAsync("", "", "ERSATZ FALCHION.babylon");

            const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
            camera.attachControl(canvas3, true);
            const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
            var light1 = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene4);
            light.intensity = 5;
            light1.intensity = 5;

            
        //     scene.debugLayer.show();

            return scene4;
        };

        const scene4 = createScene4(); //Call the createScene function

        // Register a render loop to repeatedly render the scene
        engine2.runRenderLoop(function () {
                scene4.render();
                
        });

        // Watch for browser/canvas resize events
        window.addEventListener("resize", function () {
                engine4.resize();
        });