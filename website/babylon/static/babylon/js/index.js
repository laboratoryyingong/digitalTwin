(function () {

    var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
    var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });

    var scene = new BABYLON.Scene(engine);



    BABYLON.SceneLoader.ImportMesh("", "../static/babylon/3d/", "model.babylon", scene, function (meshes, particle, skeletons) {



        var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 100, 100), scene);
        var camera = new BABYLON.ArcRotateCamera("Camera", 10, 10, -10, new BABYLON.Vector3.Zero(), scene);
        camera.attachControl(canvas, true);

        var dude = meshes[0];

        dude.rotation.y = Math.PI;
        dude.position = new BABYLON.Vector3(0, 0, -80);

        // scene.beginAnimation(skeletons[0], 0, 60, true, 2.0); 

        console.log(meshes)
        console.log(particle)
        console.log(skeletons)

        scene.render();

    });



    // Resize
    window.addEventListener("resize", function () {
        engine.resize();
    });



})();
